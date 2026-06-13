const HONEYPOT_FIELDS = ['website', 'url', 'homepage', 'company_website'];
const DEFAULT_REDIRECT = '/danke/';

function isValidEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v||'').trim()); }
function isValidPhone(v)  { return String(v||'').replace(/\D/g,'').length >= 6; }

function safeRedirect(value, fallback) {
  if (typeof value !== 'string' || !value) return fallback;
  if (!value.startsWith('/') || value.startsWith('//')) return fallback;
  return value;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const body = req.body;
  if (!body || typeof body !== 'object') return res.status(400).json({ error: 'Empty body' });

  const fields = {};
  for (const [k, v] of Object.entries(body)) {
    fields[k.toLowerCase()] = typeof v === 'string' ? v.trim() : String(Array.isArray(v)?v[0]:v ?? '').trim();
  }

  const redirectTarget = safeRedirect(fields.redirect, DEFAULT_REDIRECT);

  // Honeypot: leise redirecten, kein Hinweis an Bots
  for (const f of HONEYPOT_FIELDS) {
    if (fields[f] && String(fields[f]).length > 0) return res.redirect(302, redirectTarget);
  }

  // Validierung: E-Mail ODER Telefon
  if (!isValidEmail(fields.email) && !isValidPhone(fields.phone)) {
    return res.status(400).send('Bitte geben Sie eine gueltige E-Mail-Adresse oder Telefonnummer an.');
  }
  if (!fields.name || fields.name.length < 2) {
    return res.status(400).send('Bitte geben Sie Ihren Namen an.');
  }

  const workerUrl = process.env.CLOUDFLARE_WORKER_URL;
  if (!workerUrl) {
    console.error('[api/lead] CLOUDFLARE_WORKER_URL ist nicht gesetzt');
    return res.status(500).send('Konfigurationsfehler. Bitte spaeter erneut versuchen.');
  }

  const payload = {
    ...fields,
    submittedAt: new Date().toISOString(),
    userAgent: req.headers['user-agent'] || '',
    referer: req.headers['referer'] || '',
  };

  try {
    const upstream = await fetch(workerUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!upstream.ok) {
      console.error('[api/lead] Worker-Fehler', upstream.status, await upstream.text().catch(() => ''));
      return res.status(502).send('Leider konnte Ihre Anfrage nicht zugestellt werden.');
    }
  } catch (err) {
    console.error('[api/lead] Worker nicht erreichbar', err);
    return res.status(502).send('Leider konnte Ihre Anfrage nicht zugestellt werden.');
  }

  return res.redirect(302, redirectTarget);
}
