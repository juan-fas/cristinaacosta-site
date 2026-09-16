/* Emails a calculator simulation to the visitor and notifies the chosen associate.
   Requires env vars: RESEND_API_KEY, MAIL_FROM (e.g. "Cristina Acosta Mortgage Team <hello@cristinaacosta.ca>"),
   MAIL_TEAM (shared inbox), and optional MAIL_CRISTINA / MAIL_JUAN / MAIL_SHERYL.
   Without RESEND_API_KEY it returns 503 and the page falls back to a Netlify Forms submission. */
import type { Context } from '@netlify/functions';

type Payload = { name?: string; email?: string; phone?: string; associate?: string; tool?: string; summary?: string; consent?: string; company?: string };

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

export default async (req: Request, _ctx: Context) => {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 });
  const key = Netlify.env.get('RESEND_API_KEY');
  const from = Netlify.env.get('MAIL_FROM') ?? 'Cristina Acosta Mortgage Team <hello@cristinaacosta.ca>';
  const teamInbox = Netlify.env.get('MAIL_TEAM') ?? 'hello@cristinaacosta.ca';
  if (!key) return new Response('Email not configured', { status: 503 });

  let body: Payload;
  try { body = (await req.json()) as Payload; } catch { return new Response('Bad request', { status: 400 }); }
  if (body.company) return new Response('OK', { status: 200 }); // honeypot
  if (!body.email || !body.name || body.consent !== 'yes') return new Response('Missing fields', { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) return new Response('Invalid email', { status: 400 });

  let lines: Record<string, string> = {};
  let tool = body.tool ?? 'calculator';
  try { const s = JSON.parse(body.summary ?? '{}'); lines = s.lines ?? {}; tool = s.tool ?? tool; } catch { /* ignore */ }

  const assocKey = (body.associate ?? 'Anyone').toUpperCase();
  const assocMail = Netlify.env.get(`MAIL_${assocKey}`) ?? teamInbox;
  const rows = Object.entries(lines).map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;color:#5d5852">${esc(k)}</td><td style="padding:6px 0;text-align:right;font-weight:500">${esc(v)}</td></tr>`).join('');
  const table = rows ? `<table style="border-collapse:collapse;width:100%;font-size:15px">${rows}</table>` : '<p>No figures were attached.</p>';
  const site = 'https://cristinaacosta.ca';

  const visitorHtml = `
  <div style="font-family:Roboto,Arial,sans-serif;color:#191714;max-width:560px;margin:0 auto;padding:24px;background:#F4EFE9">
    <p style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#5d5852;margin:0 0 8px">Your ${esc(tool)} simulation</p>
    <h1 style="font-size:24px;margin:0 0 16px;color:#163191">Here are your numbers, ${esc(body.name)}.</h1>
    <div style="background:#FBF9F6;border:1px solid #D6CBBB;padding:16px 20px">${table}</div>
    <p style="font-size:14px;margin:16px 0">These are estimates from cristinaacosta.ca, not an offer of credit. ${body.associate && body.associate !== 'Anyone' ? esc(body.associate) : 'One of us'} can check them against your real file in a short conversation.</p>
    <p><a href="${site}/start" style="display:inline-block;background:#163191;color:#F4EFE9;padding:12px 20px;text-decoration:none;font-weight:500">Book a conversation</a></p>
    <p style="font-size:12px;color:#5d5852;margin-top:24px">Cristina Acosta Mortgage Team · Enrich Mortgage Group, independently owned &amp; operated network member of Mortgage Alliance · 150, 550 71 Avenue SE, Calgary, AB T2H 0S6. You asked for this email on our website; it does not add you to any list.</p>
  </div>`;

  const teamHtml = `
  <div style="font-family:Arial,sans-serif;font-size:15px;color:#191714">
    <p><strong>New simulation lead</strong> from cristinaacosta.ca (${esc(tool)})</p>
    <p>Name: ${esc(body.name)}<br>Email: ${esc(body.email)}<br>Phone: ${esc(body.phone ?? '')}<br>Wants: ${esc(body.associate ?? 'Anyone')}<br>Consent: yes</p>
    ${table}
  </div>`;

  const send = (payload: Record<string, unknown>) => fetch('https://api.resend.com/emails', {
    method: 'POST', headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' }, body: JSON.stringify(payload),
  });
  const [a, b] = await Promise.all([
    send({ from, to: [body.email], reply_to: assocMail, subject: `Your ${tool} numbers from Cristina Acosta Mortgage Team`, html: visitorHtml }),
    send({ from, to: [assocMail, teamInbox].filter((v, i, arr) => arr.indexOf(v) === i), reply_to: body.email, subject: `Simulation lead: ${body.name} (${tool})`, html: teamHtml }),
  ]);
  if (!a.ok) return new Response('Send failed', { status: 502 });
  return new Response(JSON.stringify({ ok: true, notified: b.ok }), { status: 200, headers: { 'Content-Type': 'application/json' } });
};

export const config = { path: '/.netlify/functions/simulation' };
