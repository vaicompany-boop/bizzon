import { put } from '@vercel/blob';

const MAX_FIELD_LENGTH = 300;
const ALLOWED_METHODS = 'POST, OPTIONS';

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader('content-type', 'application/json; charset=utf-8');
  res.setHeader('cache-control', 'no-store');
  res.end(JSON.stringify(body));
}

function cleanString(value, fallback = '') {
  if (typeof value !== 'string') return fallback;
  return value.trim().slice(0, MAX_FIELD_LENGTH);
}

function normalizePath(value) {
  const path = cleanString(value, '/');
  if (!path.startsWith('/')) return '/';
  return path.split('#')[0].slice(0, 200) || '/';
}

function classifyDevice(userAgent) {
  const ua = userAgent.toLowerCase();
  if (/bot|crawler|spider|preview|facebookexternalhit|slurp/.test(ua)) return 'bot';
  if (/mobile|android|iphone|ipod/.test(ua)) return 'mobile';
  if (/ipad|tablet/.test(ua)) return 'tablet';
  return 'desktop';
}

function classifyBrowser(userAgent) {
  if (/Edg\//.test(userAgent)) return 'Edge';
  if (/OPR\//.test(userAgent)) return 'Opera';
  if (/Chrome\//.test(userAgent) && !/Chromium/.test(userAgent)) return 'Chrome';
  if (/Safari\//.test(userAgent) && !/Chrome\//.test(userAgent)) return 'Safari';
  if (/Firefox\//.test(userAgent)) return 'Firefox';
  return 'Other';
}

function getBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
      if (raw.length > 4096) {
        reject(new Error('Body too large'));
        req.destroy();
      }
    });
    req.on('end', () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch {
        reject(new Error('Invalid JSON'));
      }
    });
    req.on('error', reject);
  });
}

export default async function handler(req, res) {
  res.setHeader('access-control-allow-origin', 'https://bizzon.app');
  res.setHeader('access-control-allow-methods', ALLOWED_METHODS);
  res.setHeader('access-control-allow-headers', 'content-type');

  if (req.method === 'OPTIONS') return send(res, 204, { ok: true });
  if (req.method !== 'POST') return send(res, 405, { ok: false, error: 'method_not_allowed' });

  try {
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      return send(res, 500, { ok: false, error: 'storage_not_configured' });
    }

    const body = await getBody(req);
    const ua = cleanString(req.headers['user-agent'] || '', 'unknown');
    const now = new Date();
    const day = now.toISOString().slice(0, 10);
    const random = Math.random().toString(36).slice(2, 10);
    const pathname = `events/${day}/${now.toISOString().replace(/[:.]/g, '-')}-${random}.json`;

    const event = {
      ts: now.toISOString(),
      path: normalizePath(body.path),
      title: cleanString(body.title),
      referrer: cleanString(body.referrer),
      lang: cleanString(body.lang),
      tz: cleanString(body.tz),
      device: classifyDevice(ua),
      browser: classifyBrowser(ua),
    };

    // Privacy note: intentionally do not store IP address, full user-agent, cookies,
    // email, or persistent visitor IDs. This is page-view analytics, not user tracking.
    await put(pathname, JSON.stringify(event), {
      access: 'private',
      contentType: 'application/json',
      addRandomSuffix: false,
    });

    return send(res, 200, { ok: true });
  } catch (error) {
    return send(res, 400, { ok: false, error: 'bad_request' });
  }
}
