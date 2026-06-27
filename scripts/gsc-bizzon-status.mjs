#!/usr/bin/env node
import { createPrivateKey, createSign } from 'node:crypto';
import { readFile } from 'node:fs/promises';

const DEFAULT_KEY_FILE = '/home/hermes/.hermes/secrets/bizzon-gsc-service-account.json';
const DEFAULT_PROPERTY = 'sc-domain:bizzon.app';
const DEFAULT_SITEMAP = 'https://bizzon.app/sitemap-index.xml';
const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const WEBMASTERS_API = 'https://www.googleapis.com/webmasters/v3';
const INSPECTION_API = 'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect';
const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly';

const args = parseArgs(process.argv.slice(2));
const keyFile = args.keyFile ?? process.env.BIZZON_GSC_SERVICE_ACCOUNT ?? DEFAULT_KEY_FILE;
const siteUrl = args.property ?? process.env.BIZZON_GSC_PROPERTY ?? DEFAULT_PROPERTY;
const sitemapUrl = args.sitemap ?? process.env.BIZZON_SITEMAP_URL ?? DEFAULT_SITEMAP;
const inspectLimit = Number.parseInt(args.limit ?? process.env.BIZZON_GSC_INSPECT_LIMIT ?? '0', 10);
const skipInspection = Boolean(args.skipInspection);

function parseArgs(argv) {
  const parsed = {};
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--skip-inspection') {
      parsed.skipInspection = true;
    } else if (arg.startsWith('--')) {
      const key = arg.slice(2).replace(/-([a-z])/g, (_, char) => char.toUpperCase());
      const next = argv[i + 1];
      if (!next || next.startsWith('--')) {
        parsed[key] = 'true';
      } else {
        parsed[key] = next;
        i += 1;
      }
    }
  }
  return parsed;
}

function base64url(input) {
  return Buffer.from(input)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

async function getAccessToken() {
  const credentials = JSON.parse(await readFile(keyFile, 'utf8'));
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const claim = {
    iss: credentials.client_email,
    scope: SCOPE,
    aud: TOKEN_URL,
    exp: now + 3600,
    iat: now,
  };
  const signingInput = `${base64url(JSON.stringify(header))}.${base64url(JSON.stringify(claim))}`;
  const signer = createSign('RSA-SHA256');
  signer.update(signingInput);
  signer.end();
  const signature = signer.sign(createPrivateKey(credentials.private_key));
  const assertion = `${signingInput}.${base64url(signature)}`;

  const response = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
  });

  if (!response.ok) {
    throw new Error(`Token request failed: ${response.status} ${await response.text()}`);
  }

  const data = await response.json();
  return data.access_token;
}

async function gscGet(accessToken, path) {
  const response = await fetch(`${WEBMASTERS_API}${path}`, {
    headers: { authorization: `Bearer ${accessToken}` },
  });
  const text = await response.text();
  if (!response.ok) {
    throw new Error(`GSC GET ${path} failed: ${response.status} ${text}`);
  }
  return text ? JSON.parse(text) : {};
}

async function inspectUrl(accessToken, inspectionUrl) {
  const response = await fetch(INSPECTION_API, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${accessToken}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({ inspectionUrl, siteUrl }),
  });
  const text = await response.text();
  if (!response.ok) {
    return { inspectionUrl, error: `${response.status} ${text}` };
  }
  return { inspectionUrl, data: JSON.parse(text) };
}

async function fetchXml(url) {
  const response = await fetch(url, { headers: { 'user-agent': 'BizzonGscStatus/1.0' } });
  if (!response.ok) {
    throw new Error(`Fetch ${url} failed: ${response.status} ${await response.text()}`);
  }
  return response.text();
}

function locsFromXml(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => decodeXml(match[1].trim()));
}

function decodeXml(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

async function sitemapUrls(rootSitemapUrl) {
  const rootXml = await fetchXml(rootSitemapUrl);
  const locs = locsFromXml(rootXml);
  const sitemapLocs = locs.filter((loc) => /sitemap[^/]*\.xml(?:$|[?#])/i.test(new URL(loc).pathname));

  if (sitemapLocs.length === 0) {
    return locs.filter((loc) => loc.startsWith('https://bizzon.app/'));
  }

  const nestedUrlLists = await Promise.all(
    sitemapLocs.map(async (loc) => locsFromXml(await fetchXml(loc))),
  );
  return [...new Set(nestedUrlLists.flat().filter((loc) => loc.startsWith('https://bizzon.app/')))];
}

function summarizeInspection(result) {
  if (result.error) {
    return {
      url: result.inspectionUrl,
      verdict: 'ERROR',
      coverage: result.error.replace(/\s+/g, ' ').slice(0, 120),
      robots: '',
      sitemap: '',
    };
  }

  const indexStatus = result.data.inspectionResult?.indexStatusResult ?? {};
  return {
    url: result.inspectionUrl,
    verdict: indexStatus.verdict ?? 'UNKNOWN',
    coverage: indexStatus.coverageState ?? 'UNKNOWN',
    robots: indexStatus.robotsTxtState ?? 'UNKNOWN',
    sitemap: (indexStatus.sitemap ?? []).join(', ') || 'not reported',
  };
}

function countBy(rows, key) {
  return rows.reduce((acc, row) => {
    const value = row[key] || 'UNKNOWN';
    acc[value] = (acc[value] ?? 0) + 1;
    return acc;
  }, {});
}

function printObjectCounts(title, counts) {
  console.log(`\n${title}`);
  for (const [key, value] of Object.entries(counts).sort()) {
    console.log(`- ${key}: ${value}`);
  }
}

async function main() {
  console.log('Bizzon GSC/site status');
  console.log(`Property: ${siteUrl}`);
  console.log(`Sitemap: ${sitemapUrl}`);

  const [accessToken, urls] = await Promise.all([getAccessToken(), sitemapUrls(sitemapUrl)]);
  console.log(`Sitemap URL count: ${urls.length}`);

  const sites = await gscGet(accessToken, '/sites');
  console.log('\nVisible GSC properties:');
  for (const entry of sites.siteEntry ?? []) {
    console.log(`- ${entry.siteUrl} (${entry.permissionLevel})`);
  }

  console.log('\nGSC sitemap status:');
  try {
    const sitemapStatus = await gscGet(
      accessToken,
      `/sites/${encodeURIComponent(siteUrl)}/sitemaps/${encodeURIComponent(sitemapUrl)}`,
    );
    console.log(JSON.stringify({
      path: sitemapStatus.path,
      lastSubmitted: sitemapStatus.lastSubmitted,
      lastDownloaded: sitemapStatus.lastDownloaded,
      isPending: sitemapStatus.isPending,
      isSitemapsIndex: sitemapStatus.isSitemapsIndex,
      contents: sitemapStatus.contents,
      errors: sitemapStatus.errors,
      warnings: sitemapStatus.warnings,
    }, null, 2));
  } catch (error) {
    console.log(`Sitemap status unavailable: ${error.message}`);
  }

  if (skipInspection) {
    console.log('\nURL inspection skipped by --skip-inspection.');
    return;
  }

  const urlsToInspect = inspectLimit > 0 ? urls.slice(0, inspectLimit) : urls;
  console.log(`\nInspecting URLs: ${urlsToInspect.length}${inspectLimit > 0 ? ` (limit ${inspectLimit})` : ''}`);

  const inspected = [];
  for (const url of urlsToInspect) {
    inspected.push(summarizeInspection(await inspectUrl(accessToken, url)));
  }

  printObjectCounts('Inspection verdict counts:', countBy(inspected, 'verdict'));
  printObjectCounts('Coverage state counts:', countBy(inspected, 'coverage'));

  console.log('\nURL inspection table:');
  console.log(['Verdict', 'Coverage', 'Robots', 'URL'].join('\t'));
  for (const row of inspected) {
    console.log([row.verdict, row.coverage, row.robots, row.url].join('\t'));
  }
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
