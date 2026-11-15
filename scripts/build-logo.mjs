// Builds the web logo files from the logo you provided (brand/logo-source.png):
//   public/logo.png       transparent background, for light theme
//   public/logo-dark.png  same, with the small "AND" in white, for dark theme
//   app/icon.png, app/apple-icon.png   square favicon (logo on white)
// Run `pnpm logo` after replacing brand/logo-source.png.
import { readFileSync, writeFileSync } from "node:fs";
import { decode, encode } from "./png.mjs";

const src = decode(readFileSync(new URL("../brand/logo-source.png", import.meta.url)));
const { width: W, height: H, data } = src;
const px = (x, y) => data.subarray((y * W + x) * 4, (y * W + x) * 4 + 4);
const isWhite = ([r, g, b, a]) => a < 10 || (r > 235 && g > 235 && b > 235);

// 1. Bounding box of the non-white content.
let x0 = W, y0 = H, x1 = 0, y1 = 0;
for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (!isWhite(px(x, y))) {
  x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y);
}

// 2. Left edge of the black "WORKS" block (to tell the "AND" text apart).
const midBlockY = Math.round(y0 + (y1 - y0) * 0.75);
let blockLeft = x1;
for (let x = x1; x >= x0; x--) { const [r, g, b] = px(x, midBlockY); if (r < 60 && g < 60 && b < 60) blockLeft = x; else if (blockLeft !== x1 && !(r > 200 && g > 200)) break; }
// walk left through the block (black or yellow letters) until we hit white
for (let x = blockLeft; x >= x0; x--) { if (isWhite(px(x, midBlockY))) { blockLeft = x + 1; break; } }

// Bottom of the yellow "SUPPLIES" band (the "AND" sits below it).
let bandBottom = y0;
for (let y = y0; y <= y1; y++) { const [r, g, b] = px(x0 + 1, y); if (r > 200 && g > 200 && b < 120) bandBottom = y; }

const PAD = 2;
const w = x1 - x0 + 1 + PAD * 2, h = y1 - y0 + 1 + PAD * 2;
const YELLOW = [0xfc, 0xee, 0x21];

function build(andColor) {
  const out = Buffer.alloc(w * h * 4);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const sx = x + x0 - PAD, sy = y + y0 - PAD;
    const o = (y * w + x) * 4;
    if (sx < 0 || sy < 0 || sx >= W || sy >= H) continue;
    const [r, g, b, a0] = px(sx, sy);
    if (a0 < 10) continue;
    let rgb = [r, g, b], a = 255;
    if (r > 200 && g > 200) {
      // white ↔ yellow: alpha from the blue channel
      a = Math.round(Math.min(1, Math.max(0, (255 - b) / (255 - YELLOW[2]))) * 255);
      rgb = YELLOW;
    } else if (Math.abs(r - b) < 45 && Math.abs(g - b) < 45) {
      // white ↔ black: alpha from brightness
      a = 255 - Math.round((r + g + b) / 3);
      rgb = [0, 0, 0];
      const inAnd = sx < blockLeft - 1 && sy > bandBottom;
      if (inAnd && andColor) rgb = andColor;
    }
    if (a < 6) continue;
    out.set([...rgb, Math.round((a * a0) / 255)], o);
  }
  return { width: w, height: h, data: out };
}

const pub = (f) => new URL(`../public/${f}`, import.meta.url);
writeFileSync(pub("logo.png"), encode(build(null)));
writeFileSync(pub("logo-dark.png"), encode(build([0xed, 0xed, 0xed])));

// Square favicon: logo centred on white with padding.
function square(size) {
  const logo = build(null);
  const out = Buffer.alloc(size * size * 4, 255);
  const scale = (size * 0.86) / Math.max(logo.width, logo.height);
  const lw = Math.round(logo.width * scale), lh = Math.round(logo.height * scale);
  const ox = Math.round((size - lw) / 2), oy = Math.round((size - lh) / 2);
  for (let y = 0; y < lh; y++) for (let x = 0; x < lw; x++) {
    // box-sample the source
    const sx0 = Math.floor(x / scale), sy0 = Math.floor(y / scale), sx1 = Math.max(sx0 + 1, Math.floor((x + 1) / scale)), sy1 = Math.max(sy0 + 1, Math.floor((y + 1) / scale));
    let r = 0, g = 0, b = 0, n = 0;
    for (let yy = sy0; yy < sy1 && yy < logo.height; yy++) for (let xx = sx0; xx < sx1 && xx < logo.width; xx++) {
      const i = (yy * logo.width + xx) * 4, al = logo.data[i + 3] / 255;
      r += logo.data[i] * al + 255 * (1 - al); g += logo.data[i + 1] * al + 255 * (1 - al); b += logo.data[i + 2] * al + 255 * (1 - al); n++;
    }
    const o = ((oy + y) * size + ox + x) * 4;
    out.set([r / n, g / n, b / n, 255].map(Math.round), o);
  }
  return encode({ width: size, height: size, data: out });
}
writeFileSync(new URL("../app/icon.png", import.meta.url), square(64));
writeFileSync(new URL("../app/apple-icon.png", import.meta.url), square(180));
console.log(`logo ${w}×${h} (AND split at x=${blockLeft - x0 + PAD})`);
