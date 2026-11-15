import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Default social card for every page (Open Graph + Twitter), with the real logo.
export const alt = "Supplies and Works — Built in Africa. Delivered worldwide.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo-dark.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0a0a0a", color: "#ededed", padding: 72, fontFamily: "Georgia, serif" }}>
        <img src={src} width={324} height={132} alt="" />
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, maxWidth: 1000 }}>We design, build, run and protect the technology your business depends on.</div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontFamily: "Arial", fontSize: 28, color: "#FCEE21" }}>
            <div style={{ width: 14, height: 14, borderRadius: 14, background: "#FCEE21" }} />
            Built in Africa. Delivered worldwide.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
