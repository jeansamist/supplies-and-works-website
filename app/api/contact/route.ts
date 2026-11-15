import { clean, deliver, isEmail } from "@/lib/forms";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || !isEmail(body.email)) return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  const required = ["name", "company", "country", "timeline", "message"];
  if (required.some((k) => !clean(body[k]))) return Response.json({ ok: false, error: "missing" }, { status: 400 });
  // Honeypot / basic spam guard could go here.
  const payload = {
    name: clean(body.name, 200),
    email: clean(body.email, 320),
    company: clean(body.company, 200),
    country: clean(body.country, 120),
    phone: clean(body.phone, 60),
    budget: clean(body.budget, 120),
    timeline: clean(body.timeline, 120),
    message: clean(body.message),
    needs: Array.isArray(body.needs) ? body.needs.map((n: unknown) => clean(n, 80)).slice(0, 12) : [],
  };
  try {
    await deliver("contact", payload);
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 502 });
  }
}
