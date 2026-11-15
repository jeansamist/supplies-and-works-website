import { deliver, isEmail } from "@/lib/forms";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || !isEmail(body.email)) return Response.json({ ok: false }, { status: 400 });
  try {
    // Plug a mailing-list provider (Mailchimp, Brevo, Buttondown…) into lib/forms.ts.
    await deliver("newsletter", { email: String(body.email).trim() });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 502 });
  }
}
