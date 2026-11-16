// Social media cover banners (Facebook, X/Twitter, LinkedIn) in the brand
// style of the Open Graph image. Writes brand/banners/<name>.png (+ the HTML
// source next to it). Run: `pnpm banners` (uses your local Google Chrome;
// set CHROME_PATH if it lives elsewhere).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import puppeteer from "puppeteer-core";

const root = new URL("..", import.meta.url);
const out = new URL("brand/banners/", root);
mkdirSync(out, { recursive: true });

const logo = `data:image/png;base64,${readFileSync(new URL("public/logo-dark.png", root)).toString("base64")}`;
const dots = JSON.parse(readFileSync(new URL("lib/geo/africa-dots.json", root), "utf8"));

/* ─── Dotted Africa map (same projection as the website) ─────────────────── */
const B = { lonMin: -18, lonMax: 52, latMin: -36, latMax: 38 };
const W = 700, H = 760;
const px = (lon) => ((lon - B.lonMin) / (B.lonMax - B.lonMin)) * W;
const py = (lat) => ((B.latMax - lat) / (B.latMax - B.latMin)) * H;
const DOUALA = [px(9.7043), py(4.0511)];
const LINKS = [
  { name: "Toronto · New York", x: -70, y: -50 },
  { name: "Paris · London", x: 170, y: -70 },
  { name: "Dubai", x: W + 40, y: 120 },
  { name: "Lagos", lon: 3.38, lat: 6.52 },
  { name: "Nairobi", lon: 36.82, lat: -1.29 },
  { name: "Johannesburg", lon: 28.05, lat: -26.2 },
];

function africaSvg({ labels = true, labelSize = 22 } = {}) {
  const [ox, oy] = DOUALA;
  const dotEls = dots
    .map(([lon, lat, cmr]) => `<circle cx="${px(lon).toFixed(1)}" cy="${py(lat).toFixed(1)}" r="${cmr ? 4.4 : 3.3}" fill="${cmr ? "#FCEE21" : "#EDEDED"}" opacity="${cmr ? 1 : 0.2}"/>`)
    .join("");
  const arcs = LINKS.map((l) => {
    const tx = "lon" in l ? px(l.lon) : l.x;
    const ty = "lat" in l ? py(l.lat) : l.y;
    const mx = (ox + tx) / 2;
    const my = Math.min(oy, ty) - Math.hypot(tx - ox, ty - oy) * 0.3;
    return `<path d="M${ox},${oy} Q${mx},${my} ${tx},${ty}" fill="none" stroke="#FCEE21" stroke-width="2.6" stroke-linecap="round" opacity="0.9"/>
      <circle cx="${tx}" cy="${ty}" r="7" fill="#FCEE21"/>
      ${labels && l.name !== "Lagos" ? `<text x="${tx + 13}" y="${ty + 6}" fill="#EDEDED" font-family="DM Sans" font-weight="600" font-size="${labelSize}">${l.name}</text>` : ""}`;
  }).join("");
  return `<svg viewBox="-110 -110 ${W + 260} ${H + 150}" xmlns="http://www.w3.org/2000/svg">
    ${dotEls}${arcs}
    <circle cx="${ox}" cy="${oy}" r="34" fill="#FCEE21" opacity="0.18"/>
    <circle cx="${ox}" cy="${oy}" r="20" fill="#FCEE21" opacity="0.28"/>
    <circle cx="${ox}" cy="${oy}" r="11" fill="#FCEE21" stroke="#0A0A0A" stroke-width="3"/>
    ${labels ? `<text x="${ox - 18}" y="${oy + 44}" text-anchor="end" fill="#FFFFFF" font-family="DM Sans" font-weight="700" font-size="${labelSize + 2}">Douala</text>` : ""}
  </svg>`;
}

/* ─── Shared page shell ──────────────────────────────────────────────────── */
const shell = (w, h, body, extraCss = "") => `<!doctype html>
<html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Lora:ital,wght@0,400;0,500;1,600&display=block" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:${w}px;height:${h}px;overflow:hidden;background:#0A0A0A;color:#EDEDED;font-family:"DM Sans",Arial,sans-serif;-webkit-font-smoothing:antialiased}
  .stage{position:relative;width:${w}px;height:${h}px;overflow:hidden;background:
    radial-gradient(ellipse at 78% 45%, rgba(252,238,33,.10), transparent 55%),
    radial-gradient(ellipse at 10% 0%, rgba(255,255,255,.05), transparent 50%), #0A0A0A}
  .grain{position:absolute;inset:0;opacity:.07;pointer-events:none;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")}
  .serif{font-family:"Lora",Georgia,serif;font-weight:400;letter-spacing:-.02em;line-height:1.04}
  .em{font-style:italic;font-weight:600;color:#FCEE21}
  .eyebrow{display:flex;align-items:center;gap:12px;text-transform:uppercase;letter-spacing:.06em;font-weight:500;color:rgba(237,237,237,.7)}
  .dot{width:9px;height:9px;border-radius:9px;background:#FCEE21;box-shadow:0 0 0 6px rgba(252,238,33,.18)}
  .pill{display:inline-flex;align-items:center;gap:12px;border-radius:999px;background:#FCEE21;color:#0A0A0A;font-weight:600}
  .chip{display:inline-flex;align-items:center;justify-content:center;border-radius:999px;background:#0A0A0A;color:#FCEE21}
  .muted{color:rgba(237,237,237,.7)}
  .band{position:absolute;left:0;right:0;background:#FCEE21;color:#0A0A0A;display:flex;align-items:center;white-space:nowrap;overflow:hidden;font-family:"Lora",serif;font-style:italic}
  .band span{padding:0 .5em}
  .star{font-style:normal;opacity:.45}
  ${extraCss}
</style></head><body><div class="stage">${body}<div class="grain"></div></div></body></html>`;

const band = (h, size, bottom = 0) => {
  const words = Array.from({ length: 14 }, () => ["Build", "Run", "Protect"]).flat();
  return `<div class="band" style="height:${h}px;bottom:${bottom}px;font-size:${size}px">${words
    .map((w) => `<span>${w}</span><span class="star">✦</span>`)
    .join("")}</div>`;
};

/* ─── Banners ────────────────────────────────────────────────────────────── */
const banners = [
  {
    // Facebook page cover. Upload 1640×624. Mobile crops the sides: all key
    // content stays inside the central ~1200 px.
    name: "facebook-cover",
    w: 1640,
    h: 624,
    scale: 1,
    html: (w, h) =>
      shell(
        w,
        h,
        `<div style="position:absolute;left:230px;top:96px;width:720px;display:flex;flex-direction:column;gap:28px">
           <img src="${logo}" style="width:190px;height:auto">
           <div class="eyebrow" style="font-size:20px"><span class="dot"></span>Technology partner · Douala to the world</div>
           <h1 class="serif" style="font-size:74px">Built in Africa.<br><span class="em">Delivered worldwide.</span></h1>
           <p class="muted" style="font-size:26px">Cloud · Software · AI · Design · Infrastructure</p>
         </div>
         <div style="position:absolute;right:190px;top:20px;width:520px;height:520px">${africaSvg({ labelSize: 24 })}</div>
         ${band(58, 30)}`,
      ),
  },
  {
    // X / Twitter header 1500×500. The profile photo covers the bottom-left
    // (about 400×150 px), and the top/bottom can be cropped slightly.
    name: "x-twitter-header",
    w: 1500,
    h: 500,
    scale: 1,
    html: (w, h) =>
      shell(
        w,
        h,
        `<div style="position:absolute;left:96px;top:70px;width:780px;display:flex;flex-direction:column;gap:22px">
           <div class="eyebrow" style="font-size:18px"><span class="dot"></span>Supplies and Works · Douala, Cameroon</div>
           <h1 class="serif" style="font-size:64px">We build, run and <span class="em">protect</span><br>the technology your<br>business depends on.</h1>
         </div>
         <div style="position:absolute;right:450px;bottom:84px" class="pill"><span style="padding:14px 0 14px 26px;font-size:22px">suppliesandworks.com</span><span class="chip" style="width:46px;height:46px;margin-right:6px;font-size:22px">↗</span></div>
         <div style="position:absolute;right:40px;top:6px;width:430px;height:430px">${africaSvg({ labelSize: 26 })}</div>
         ${band(46, 24)}`,
      ),
  },
  {
    // LinkedIn company page cover 1128×191 (exported at 2× for sharpness).
    // The company logo overlaps the bottom-left, so content sits centre/right.
    name: "linkedin-company-cover",
    w: 1128,
    h: 191,
    scale: 2,
    html: (w, h) =>
      shell(
        w,
        h,
        `<div style="position:absolute;left:300px;top:34px;display:flex;flex-direction:column;gap:10px">
           <div class="eyebrow" style="font-size:11px"><span class="dot" style="width:6px;height:6px;box-shadow:0 0 0 4px rgba(252,238,33,.18)"></span>Cloud · Software · AI · Design · Infrastructure</div>
           <h1 class="serif" style="font-size:38px">Built in Africa. <span class="em">Delivered worldwide.</span></h1>
           <p class="muted" style="font-size:14px">Douala, Cameroon · English &amp; French · suppliesandworks.com</p>
         </div>
         <div style="position:absolute;right:30px;top:10px;width:172px;height:172px">${africaSvg({ labels: false })}</div>
         ${band(22, 12)}`,
      ),
  },
  {
    // LinkedIn personal profile background 1584×396 (for the team's own profiles).
    name: "linkedin-profile-background",
    w: 1584,
    h: 396,
    scale: 1,
    html: (w, h) =>
      shell(
        w,
        h,
        `<div style="position:absolute;left:560px;top:70px;display:flex;flex-direction:column;gap:18px">
           <img src="${logo}" style="width:130px;height:auto">
           <h1 class="serif" style="font-size:44px">Built in Africa. <span class="em">Delivered worldwide.</span></h1>
           <p class="muted" style="font-size:19px">Cloud · Software · AI · Design · Infrastructure — suppliesandworks.com</p>
         </div>
         <div style="position:absolute;right:6px;top:20px;width:300px;height:300px">${africaSvg({ labels: false })}</div>
         ${band(40, 22)}`,
      ),
  },
];

const executablePath = process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const browser = await puppeteer.launch({ executablePath, headless: true });
for (const b of banners) {
  const html = b.html(b.w, b.h);
  const htmlFile = new URL(`${b.name}.html`, out);
  writeFileSync(htmlFile, html);
  const page = await browser.newPage();
  await page.setViewport({ width: b.w, height: b.h, deviceScaleFactor: b.scale });
  await page.goto(htmlFile.href, { waitUntil: "networkidle0" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: new URL(`${b.name}.png`, out).pathname, type: "png" });
  console.log(`brand/banners/${b.name}.png  ${b.w * b.scale}×${b.h * b.scale}`);
  await page.close();
}
await browser.close();
