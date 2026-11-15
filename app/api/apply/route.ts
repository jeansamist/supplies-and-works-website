import { clean, deliver, isEmail } from "@/lib/forms";

const MAX_CV = 5 * 1024 * 1024;

export async function POST(request: Request) {
  const fd = await request.formData().catch(() => null);
  if (!fd || !isEmail(fd.get("email")) || !clean(fd.get("name"))) return Response.json({ ok: false }, { status: 400 });
  const cv = fd.get("cv");
  const file = cv instanceof File && cv.size > 0 ? cv : null;
  if (file && file.size > MAX_CV) return Response.json({ ok: false, error: "file-too-large" }, { status: 413 });
  try {
    // The CV itself is not stored yet: upload `file` to storage (S3, Vercel Blob…)
    // or attach it to an email in lib/forms.ts.
    await deliver("apply", {
      name: clean(fd.get("name"), 200),
      email: clean(fd.get("email"), 320),
      role: clean(fd.get("role"), 200),
      links: clean(fd.get("links"), 500),
      message: clean(fd.get("message")),
      cv: file ? { name: file.name, size: file.size, type: file.type } : null,
    });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 502 });
  }
}
