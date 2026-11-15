import africaDots from "@/lib/geo/africa-dots.json";
import { cn } from "@/lib/utils";

// Equirectangular projection of the Africa grid into a 700×760 viewBox.
const BOUNDS = { lonMin: -18, lonMax: 52, latMin: -36, latMax: 38 };
const W = 700;
const H = 760;
const px = (lon: number) => ((lon - BOUNDS.lonMin) / (BOUNDS.lonMax - BOUNDS.lonMin)) * W;
const py = (lat: number) => ((BOUNDS.latMax - lat) / (BOUNDS.latMax - BOUNDS.latMin)) * H;

const DOUALA = { lon: 9.7043, lat: 4.0511 };
/** World cities shown as off-map destinations (direction only), plus African hubs on the map. */
const LINKS = [
  { name: "Toronto · New York", x: -60, y: -40 },
  { name: "Paris · London", x: 160, y: -60 },
  { name: "Dubai", x: W + 40, y: 120 },
  { name: "Lagos", lon: 3.38, lat: 6.52 },
  { name: "Nairobi", lon: 36.82, lat: -1.29 },
  { name: "Kigali", lon: 30.06, lat: -1.94 },
  { name: "Johannesburg", lon: 28.05, lat: -26.2 },
];

/**
 * Dotted map of Africa with a glowing node on Cameroon, connected to
 * African hubs and to the rest of the world. Pure SVG + CSS animation.
 */
export function AfricaMap({ className }: { className?: string }) {
  const ox = px(DOUALA.lon);
  const oy = py(DOUALA.lat);

  return (
    <svg
      viewBox={`-80 -80 ${W + 160} ${H + 120}`}
      role="img"
      aria-label="Map of Africa. Cameroon glows and is connected to Lagos, Nairobi, Kigali, Johannesburg and cities in North America, Europe and the Middle East."
      className={cn("h-auto w-full overflow-visible", className)}
    >
      <g className="fill-fg">
        {(africaDots as [number, number, number][]).map(([lon, lat, cmr], i) => (
          <circle key={i} cx={px(lon)} cy={py(lat)} r={cmr ? 4.2 : 3.2} className={cmr ? "fill-accent" : undefined} opacity={cmr ? 1 : 0.22} />
        ))}
      </g>
      <g fill="none" strokeLinecap="round" className="stroke-accent">
        {LINKS.map((l, i) => {
          const tx = "lon" in l ? px(l.lon!) : l.x;
          const ty = "lat" in l ? py(l.lat!) : l.y;
          const mx = (ox + tx) / 2;
          const my = Math.min(oy, ty) - Math.hypot(tx - ox, ty - oy) * 0.3;
          return (
            <g key={l.name}>
              <path d={`M${ox},${oy} Q${mx},${my} ${tx},${ty}`} strokeWidth={2.5} pathLength={1} className="map-arc" style={{ animationDelay: `${i * 0.4}s` }} />
              <circle cx={tx} cy={ty} r={7} className="fill-accent stroke-none" />
              <text x={tx + 12} y={ty + 5} className="fill-fg stroke-none text-[20px] font-semibold">
                {l.name}
              </text>
            </g>
          );
        })}
      </g>
      <circle cx={ox} cy={oy} r={30} className="map-pulse fill-accent stroke-none" />
      <circle cx={ox} cy={oy} r={11} className="fill-accent stroke-[#0a0a0a] stroke-[3]" />
      <text x={ox - 14} y={oy + 42} textAnchor="end" className="fill-fg text-[22px] font-bold">
        Douala
      </text>
    </svg>
  );
}
