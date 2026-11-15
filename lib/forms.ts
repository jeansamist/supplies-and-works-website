// Where form submissions go. Every API route calls `deliver()`.
//
// PLUG IN EMAIL OR A CRM HERE. Options:
//  • Email: Resend (`npm i resend`), set RESEND_API_KEY and FORMS_TO_EMAIL,
//    then replace the body of deliver() with resend.emails.send({...}).
//  • CRM: POST the payload to HubSpot / Pipedrive / Airtable using their API.
//  • Webhook: set FORMS_WEBHOOK_URL (Zapier, Make, n8n, Slack…) — already wired below.
//
// Until one is configured, submissions are only logged on the server.

export type FormKind = "contact" | "newsletter" | "apply";

export async function deliver(kind: FormKind, payload: Record<string, unknown>) {
  const url = process.env.FORMS_WEBHOOK_URL;
  if (url) {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ kind, payload, receivedAt: new Date().toISOString() }),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return;
  }
  console.info(`[forms] ${kind} submission (no FORMS_WEBHOOK_URL set):`, JSON.stringify(payload).slice(0, 2000));
}

export const isEmail = (v: unknown) => typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && v.length < 320;
export const clean = (v: unknown, max = 5000) => (typeof v === "string" ? v.trim().slice(0, max) : "");
