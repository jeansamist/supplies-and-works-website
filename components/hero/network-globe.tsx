"use client";

import { useEffect, useRef } from "react";
import worldDots from "@/lib/geo/world-dots.json";
import { isLowPower, isTouchDevice, prefersReducedMotion } from "@/lib/motion";

/** Cameroon (Douala) is the origin; every arc starts there. */
const ORIGIN = { name: "Douala", lon: 9.7043, lat: 4.0511 };
const CITIES = [
  { name: "Toronto", lon: -79.38, lat: 43.65 },
  { name: "New York", lon: -74.0, lat: 40.71 },
  { name: "Montréal", lon: -73.57, lat: 45.5 },
  { name: "Paris", lon: 2.35, lat: 48.86 },
  { name: "London", lon: -0.13, lat: 51.51 },
  { name: "Nairobi", lon: 36.82, lat: -1.29 },
  { name: "Lagos", lon: 3.38, lat: 6.52 },
  { name: "Johannesburg", lon: 28.05, lat: -26.2 },
  { name: "Dubai", lon: 55.27, lat: 25.2 },
  { name: "Kigali", lon: 30.06, lat: -1.94 },
];

const RAD = Math.PI / 180;
type Vec = [number, number, number];

function toVec(lon: number, lat: number): Vec {
  const l = lon * RAD;
  const p = lat * RAD;
  return [Math.cos(p) * Math.sin(l), Math.sin(p), Math.cos(p) * Math.cos(l)];
}

/** Spherical interpolation between two unit vectors. */
function slerp(a: Vec, b: Vec, t: number): Vec {
  const dot = Math.min(1, Math.max(-1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]));
  const o = Math.acos(dot);
  if (o < 1e-6) return a;
  const s = Math.sin(o);
  const k1 = Math.sin((1 - t) * o) / s;
  const k2 = Math.sin(t * o) / s;
  return [a[0] * k1 + b[0] * k2, a[1] * k1 + b[1] * k2, a[2] * k1 + b[2] * k2];
}

/**
 * Interactive dot globe drawn on a 2D canvas (no WebGL needed, ~2k points).
 * - Rotates slowly; drag (mouse or touch) to spin it, device tilt nudges it.
 * - Dots near the cursor are pushed away and light up in yellow.
 * - Arcs from Douala to world cities draw on, with a travelling pulse.
 * Pauses when off-screen or the tab is hidden; static frame with reduced motion.
 */
export function NetworkGlobe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = prefersReducedMotion();
    const touch = isTouchDevice();
    const low = isLowPower() || touch;
    // Fewer points on mobile / low-power devices.
    const dots = (worldDots as [number, number][]).filter((_, i) => !low || i % 2 === 0).map(([lon, lat]) => toVec(lon, lat));
    const origin = toVec(ORIGIN.lon, ORIGIN.lat);
    const arcs = CITIES.map((c, i) => {
      const end = toVec(c.lon, c.lat);
      const pts: Vec[] = [];
      const N = 48;
      for (let s = 0; s <= N; s++) {
        const t = s / N;
        const v = slerp(origin, end, t);
        const lift = 1 + Math.sin(Math.PI * t) * 0.18;
        pts.push([v[0] * lift, v[1] * lift, v[2] * lift]);
      }
      return { ...c, end, pts, delay: i * 0.35 };
    });

    let colors = readColors();
    function readColors() {
      const cs = getComputedStyle(document.documentElement);
      return {
        dot: cs.getPropertyValue("--text").trim() || "#000",
        accent: cs.getPropertyValue("--accent").trim() || "#fcee21",
        dark: document.documentElement.dataset.theme === "dark",
      };
    }
    const themeObs = new MutationObserver(() => (colors = readColors()));
    themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    let w = 0;
    let h = 0;
    let dpr = 1;
    function resize() {
      const r = canvas!.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, low ? 1.5 : 2);
      w = r.width;
      h = r.height;
      canvas!.width = Math.round(w * dpr);
      canvas!.height = Math.round(h * dpr);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Rotation state: start with Cameroon slightly right of centre, North America visible.
    let rotLon = -28 * RAD;
    let rotLat = -14 * RAD;
    let velLon = 0;
    let tiltLon = 0;
    let tiltLat = 0;
    let pointer: { x: number; y: number } | null = null;
    let drag: { x: number; y: number; lon: number; lat: number } | null = null;

    const onMove = (e: PointerEvent) => {
      const r = canvas!.getBoundingClientRect();
      pointer = { x: e.clientX - r.left, y: e.clientY - r.top };
      if (drag) {
        const nl = drag.lon + ((e.clientX - drag.x) / w) * Math.PI;
        velLon = nl - rotLon;
        rotLon = nl;
        rotLat = Math.max(-0.6, Math.min(0.6, drag.lat + ((e.clientY - drag.y) / h) * 1.2));
      }
    };
    const onDown = (e: PointerEvent) => {
      drag = { x: e.clientX, y: e.clientY, lon: rotLon, lat: rotLat };
      canvas!.setPointerCapture?.(e.pointerId);
    };
    const onUp = () => (drag = null);
    const onLeave = () => {
      pointer = null;
      drag = null;
    };
    const onTilt = (e: DeviceOrientationEvent) => {
      tiltLon = ((e.gamma ?? 0) / 45) * 0.35;
      tiltLat = (((e.beta ?? 45) - 45) / 45) * 0.2;
    };
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointerleave", onLeave);
    if (touch) window.addEventListener("deviceorientation", onTilt);

    let raf = 0;
    let visible = true;
    let start = performance.now();
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !raf && !reduced) raf = requestAnimationFrame(frame);
    });
    io.observe(canvas);
    const onVis = () => {
      if (!document.hidden && visible && !raf && !reduced) raf = requestAnimationFrame(frame);
    };
    document.addEventListener("visibilitychange", onVis);

    function frame(now: number) {
      raf = 0;
      draw((now - start) / 1000);
      if (!reduced && visible && !document.hidden) raf = requestAnimationFrame(frame);
    }

    function draw(t: number) {
      if (!drag) {
        velLon *= 0.95;
        rotLon += 0.0009 + velLon * 0.1;
        // Ease back to a view where Cameroon stays on the visible side.
        const target = -28 * RAD;
        const wrapped = Math.atan2(Math.sin(rotLon - target), Math.cos(rotLon - target));
        if (Math.abs(wrapped) > 0.9) rotLon -= wrapped * 0.004;
      }
      const lon = rotLon + tiltLon;
      const lat = rotLat + tiltLat;
      const cl = Math.cos(lon), sl = Math.sin(lon), cp = Math.cos(lat), sp = Math.sin(lat);
      const R = Math.min(w, h) * 0.44;
      const cx = w / 2;
      const cy = h / 2;

      const project = (v: Vec): [number, number, number] => {
        // rotate around Y (longitude) then X (latitude)
        const x1 = v[0] * cl + v[2] * sl;
        const z1 = -v[0] * sl + v[2] * cl;
        const y2 = v[1] * cp - z1 * sp;
        const z2 = v[1] * sp + z1 * cp;
        return [cx + x1 * R, cy - y2 * R, z2];
      };

      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.clearRect(0, 0, w, h);

      // Soft halo behind the globe.
      const g = ctx!.createRadialGradient(cx, cy, R * 0.2, cx, cy, R * 1.25);
      g.addColorStop(0, colors.dark ? "rgba(252,238,33,0.07)" : "rgba(252,238,33,0.16)");
      g.addColorStop(1, "rgba(252,238,33,0)");
      ctx!.fillStyle = g;
      ctx!.beginPath();
      ctx!.arc(cx, cy, R * 1.25, 0, Math.PI * 2);
      ctx!.fill();

      // Outline
      ctx!.strokeStyle = colors.dot;
      ctx!.globalAlpha = 0.08;
      ctx!.lineWidth = 1;
      ctx!.beginPath();
      ctx!.arc(cx, cy, R, 0, Math.PI * 2);
      ctx!.stroke();

      // Dots
      const base = Math.max(1, R / 260);
      const hot: [number, number, number][] = [];
      ctx!.fillStyle = colors.dot;
      for (const v of dots) {
        const [x0, y0, z] = project(v);
        if (z < -0.05) continue;
        let x = x0;
        let y = y0;
        let heat = 0;
        if (pointer) {
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const d = Math.hypot(dx, dy);
          if (d < 90) {
            heat = 1 - d / 90;
            const push = heat * 14;
            x += (dx / (d || 1)) * push;
            y += (dy / (d || 1)) * push;
          }
        }
        if (heat > 0.15) {
          hot.push([x, y, heat]);
          continue;
        }
        ctx!.globalAlpha = 0.12 + z * 0.5;
        ctx!.fillRect(x - base / 2, y - base / 2, base * (0.7 + z * 0.6), base * (0.7 + z * 0.6));
      }
      ctx!.fillStyle = colors.accent;
      for (const [x, y, heat] of hot) {
        ctx!.globalAlpha = 0.5 + heat * 0.5;
        ctx!.beginPath();
        ctx!.arc(x, y, base * (1 + heat * 1.6), 0, Math.PI * 2);
        ctx!.fill();
      }

      // Arcs: draw on, hold, fade, repeat (per city, staggered).
      const cycle = 6;
      ctx!.lineCap = "round";
      for (const arc of arcs) {
        const local = reduced ? 1.5 : ((t - arc.delay) % cycle + cycle) % cycle;
        if (!reduced && t < arc.delay) continue;
        const grow = Math.min(1, local / 1.4);
        const fade = local > 4.6 ? Math.max(0, 1 - (local - 4.6) / 1.2) : 1;
        const n = Math.floor(grow * (arc.pts.length - 1));
        const proj = arc.pts.map(project);

        ctx!.strokeStyle = colors.accent;
        ctx!.lineWidth = 1.6;
        for (let i = 1; i <= n; i++) {
          const [x0, y0, z0] = proj[i - 1];
          const [x1, y1, z1] = proj[i];
          if (z0 < -0.1 && z1 < -0.1) continue;
          ctx!.globalAlpha = fade * (z1 < 0 ? 0.15 : colors.dark ? 0.9 : 1);
          ctx!.beginPath();
          ctx!.moveTo(x0, y0);
          ctx!.lineTo(x1, y1);
          ctx!.stroke();
        }
        // Travelling pulse
        if (grow >= 1 && fade > 0 && !reduced) {
          const p = proj[Math.floor(((local - 1.4) / 1.6) % 1 * (proj.length - 1))];
          if (p && p[2] > 0) {
            ctx!.globalAlpha = fade;
            ctx!.fillStyle = colors.dark ? "#ffffff" : "#0a0a0a";
            ctx!.beginPath();
            ctx!.arc(p[0], p[1], 2.2, 0, Math.PI * 2);
            ctx!.fill();
          }
        }
        // City node
        const [ex, ey, ez] = proj[proj.length - 1];
        if (grow >= 1 && ez > 0) {
          ctx!.globalAlpha = fade;
          ctx!.fillStyle = colors.accent;
          ctx!.beginPath();
          ctx!.arc(ex, ey, 3, 0, Math.PI * 2);
          ctx!.fill();
          if (w > 520) {
            ctx!.globalAlpha = fade * 0.75;
            ctx!.fillStyle = colors.dot;
            ctx!.font = "500 11px var(--font-dm-sans), system-ui, sans-serif";
            ctx!.fillText(arc.name, ex + 7, ey + 4);
          }
        }
      }

      // Origin node (Cameroon) with a breathing ring.
      const [ox, oy, oz] = project(origin);
      if (oz > -0.1) {
        const pulse = reduced ? 0.5 : (t % 2) / 2;
        ctx!.globalAlpha = 1 - pulse;
        ctx!.strokeStyle = colors.accent;
        ctx!.lineWidth = 2;
        ctx!.beginPath();
        ctx!.arc(ox, oy, 6 + pulse * 22, 0, Math.PI * 2);
        ctx!.stroke();
        ctx!.globalAlpha = 1;
        ctx!.fillStyle = colors.accent;
        ctx!.beginPath();
        ctx!.arc(ox, oy, 6, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.strokeStyle = colors.dark ? "#0a0a0a" : "#0a0a0a";
        ctx!.lineWidth = 2;
        ctx!.stroke();
        ctx!.fillStyle = colors.dot;
        ctx!.font = "600 12px var(--font-dm-sans), system-ui, sans-serif";
        ctx!.fillText("Douala, Cameroon", ox + 12, oy - 10);
      }
      ctx!.globalAlpha = 1;
    }

    if (reduced) draw(0);
    else raf = requestAnimationFrame(frame);
    start = performance.now();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      themeObs.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("deviceorientation", onTilt);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-cursor="drag"
      role="img"
      aria-label="Interactive globe: Douala, Cameroon, connected to Toronto, New York, Montréal, Paris, London, Lagos, Nairobi, Kigali, Johannesburg and Dubai"
      className={className}
      style={{ touchAction: "pan-y" }}
    />
  );
}
