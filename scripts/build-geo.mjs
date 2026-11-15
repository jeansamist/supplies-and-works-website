// Generates the geographic data used by the hero globe, the Africa map motif
// and the Cameroon service-area map. Run with `pnpm geo` (output is committed,
// so this only needs to run again if you change the grid or the cities).
import { writeFileSync, mkdirSync } from "node:fs";
import { createRequire } from "node:module";
import { geoContains, geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";

const require = createRequire(import.meta.url);
const out = new URL("../lib/geo/", import.meta.url);
mkdirSync(out, { recursive: true });

const land110 = require("world-atlas/land-110m.json");
const countries50 = require("world-atlas/countries-50m.json");
const countries110 = require("world-atlas/countries-110m.json");

const land = feature(land110, land110.objects.land);
const countries = feature(countries110, countries110.objects.countries);

// ISO 3166-1 numeric codes of African countries.
const AFRICA = new Set(
  "012 024 072 108 120 132 140 148 174 178 180 204 226 231 232 262 266 270 288 324 384 404 426 430 434 450 454 466 478 480 504 508 516 562 566 624 646 678 686 694 706 710 716 728 729 732 748 768 788 800 818 834 854 894".split(
    " ",
  ),
);
const africa = {
  type: "FeatureCollection",
  features: countries.features.filter((f) => AFRICA.has(String(f.id).padStart(3, "0"))),
};

const r = (n) => Math.round(n * 100) / 100;

// 1. World land dots for the globe (lon, lat), on a grid that keeps the dot
// density roughly even across latitudes.
const world = [];
const STEP = 2.2;
for (let lat = -58; lat <= 78; lat += STEP) {
  const lonStep = STEP / Math.max(0.35, Math.cos((lat * Math.PI) / 180));
  for (let lon = -180; lon < 180; lon += lonStep) {
    if (geoContains(land, [lon, lat])) world.push([r(lon), r(lat)]);
  }
}

const cmrLow = countries.features.find((f) => String(f.id) === "120");

// 2. Africa dots on a flat grid (lon, lat) for the "Built in Africa" motif.
const africaDots = [];
const A_STEP = 1.15;
for (let lat = -35.5; lat <= 37.5; lat += A_STEP) {
  for (let lon = -18; lon <= 52; lon += A_STEP) {
    if (geoContains(africa, [lon, lat])) africaDots.push([r(lon), r(lat), geoContains(cmrLow, [lon, lat]) ? 1 : 0]);
  }
}

// 3. Cameroon outline as an SVG path, plus projected cities.
const cmr = feature(countries50, countries50.objects.countries).features.find(
  (f) => String(f.id) === "120",
);
const SIZE = 600;
const projection = geoMercator().fitExtent(
  [
    [20, 20],
    [SIZE - 20, SIZE - 20],
  ],
  cmr,
);
const cameroonPath = geoPath(projection)(cmr);
const CITIES = [
  ["yaounde", "Yaoundé", 11.5021, 3.848],
  ["douala", "Douala", 9.7043, 4.0511],
  ["bafoussam", "Bafoussam", 10.4176, 5.4781],
  ["bamenda", "Bamenda", 10.1591, 5.9631],
  ["kribi", "Kribi", 9.9087, 2.9409],
  ["limbe", "Limbe", 9.2149, 4.0186],
  ["ebolowa", "Ebolowa", 11.1508, 2.9],
  ["bertoua", "Bertoua", 13.6846, 4.5774],
  ["ngaoundere", "Ngaoundéré", 13.5847, 7.3167],
  ["garoua", "Garoua", 13.3997, 9.3017],
  ["maroua", "Maroua", 14.3159, 10.591],
].map(([id, name, lon, lat]) => {
  const [x, y] = projection([lon, lat]);
  return { id, name, x: r(x), y: r(y) };
});

writeFileSync(new URL("world-dots.json", out), JSON.stringify(world));
writeFileSync(new URL("africa-dots.json", out), JSON.stringify(africaDots));
writeFileSync(
  new URL("cameroon.json", out),
  JSON.stringify({ size: SIZE, path: cameroonPath, cities: CITIES }),
);
console.log(`world ${world.length} dots · africa ${africaDots.length} dots · cameroon ok`);
