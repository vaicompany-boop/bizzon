import { list, get } from '@vercel/blob';

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader('content-type', 'application/json; charset=utf-8');
  res.setHeader('cache-control', 'no-store');
  res.end(JSON.stringify(body, null, 2));
}

function parseDays(value) {
  const days = Number.parseInt(value || '7', 10);
  if (!Number.isFinite(days)) return 7;
  return Math.min(Math.max(days, 1), 30);
}

function toDay(date) {
  return date.toISOString().slice(0, 10);
}

function addCount(map, key) {
  const normalized = key || '(none)';
  map.set(normalized, (map.get(normalized) || 0) + 1);
}

function topEntries(map, limit = 10) {
  return Array.from(map.entries())
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([name, count]) => ({ name, count }));
}

function hostnameFromReferrer(referrer) {
  if (!referrer) return '(direct)';
  try {
    const host = new URL(referrer).hostname.replace(/^www\./, '');
    if (!host || host === 'bizzon.app') return '(internal)';
    return host;
  } catch {
    return '(other)';
  }
}

async function readJsonBlob(blob) {
  const response = await get(blob.pathname);
  const text = await response.text();
  return JSON.parse(text);
}

async function listAll(prefix) {
  const blobs = [];
  let cursor;
  do {
    const page = await list({ prefix, cursor, limit: 1000 });
    blobs.push(...page.blobs);
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor && blobs.length < 10000);
  return blobs;
}

export default async function handler(req, res) {
  try {
    const url = new URL(req.url, `https://${req.headers.host || 'bizzon.app'}`);
    const expectedToken = process.env.ANALYTICS_READ_TOKEN;
    const providedToken = url.searchParams.get('token') || req.headers['x-analytics-token'];

    if (!expectedToken || providedToken !== expectedToken) {
      return send(res, 401, { ok: false, error: 'unauthorized' });
    }

    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      return send(res, 500, { ok: false, error: 'storage_not_configured' });
    }

    const days = parseDays(url.searchParams.get('days'));
    const today = new Date();
    const dayKeys = [];
    for (let i = days - 1; i >= 0; i -= 1) {
      const day = new Date(today);
      day.setUTCDate(today.getUTCDate() - i);
      dayKeys.push(toDay(day));
    }

    const byDay = new Map(dayKeys.map((day) => [day, 0]));
    const byPath = new Map();
    const byReferrer = new Map();
    const byDevice = new Map();
    const byBrowser = new Map();
    const events = [];

    for (const day of dayKeys) {
      const blobs = await listAll(`events/${day}/`);
      byDay.set(day, blobs.length);

      for (const blob of blobs) {
        try {
          const event = await readJsonBlob(blob);
          events.push(event);
          addCount(byPath, event.path || '/');
          addCount(byReferrer, hostnameFromReferrer(event.referrer));
          addCount(byDevice, event.device || 'unknown');
          addCount(byBrowser, event.browser || 'Other');
        } catch {
          // Ignore malformed individual events so one bad blob does not break the report.
        }
      }
    }

    events.sort((a, b) => String(b.ts).localeCompare(String(a.ts)));

    return send(res, 200, {
      ok: true,
      site: 'bizzon.app',
      rangeDays: days,
      generatedAt: new Date().toISOString(),
      totalPageViews: events.length,
      pageViewsByDay: Object.fromEntries(byDay.entries()),
      topPages: topEntries(byPath),
      referrers: topEntries(byReferrer),
      devices: topEntries(byDevice),
      browsers: topEntries(byBrowser),
      latest: events.slice(0, 10).map((event) => ({
        ts: event.ts,
        path: event.path,
        referrer: hostnameFromReferrer(event.referrer),
        device: event.device,
        browser: event.browser,
      })),
    });
  } catch (error) {
    return send(res, 500, { ok: false, error: 'stats_failed' });
  }
}
