import { useEffect, useState } from "react";

const N = 160, W = 800, TOP = 20, BOT = 230;
const noise = (i, t) => Math.abs((Math.sin(i * 12.9898 + t * 7.13) * 43758.5453) % 1);

function trace(r, t) {
  const w = 0.012 + r * 0.085, floor = 0.07 + r * 0.16;
  let d = "", peak = 0, px = 0;
  for (let i = 0; i <= N; i++) {
    const x = i / N;
    const v = Math.min(1, floor + noise(i, t) * 0.05 * (1 - r * 0.6)
      + 0.7 * Math.exp(-(((x - 0.44) / w) ** 2)) + 0.595 * Math.exp(-(((x - 0.56) / w) ** 2)));
    if (v > peak) { peak = v; px = x; }
    d += `${i ? "L" : "M"}${(x * W).toFixed(1)} ${(BOT - v * (BOT - TOP)).toFixed(1)}`;
  }
  return { d, mx: px * W, my: BOT - peak * (BOT - TOP) };
}

export default function SpectrumDemo() {
  const [rbw, setRbw] = useState(15);
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setTick((t) => t + 1), 180);
    return () => clearInterval(id);
  }, []);
  const r = rbw / 100, { d, mx, my } = trace(r, tick);
  return (
    <div className="scope" role="group" aria-label="Spectrum analyzer demo">
      <svg viewBox={`0 0 ${W} 260`} role="img" aria-label="Spectrum trace showing two close signals">
        {Array.from({ length: 11 }, (_, i) => <line key={`v${i}`} x1={i * 80} y1={TOP} x2={i * 80} y2={BOT} stroke="var(--line)" />)}
        {Array.from({ length: 5 }, (_, j) => { const y = TOP + j * (BOT - TOP) / 4; return <line key={`h${j}`} x1="0" y1={y} x2={W} y2={y} stroke="var(--line)" />; })}
        <path d={d} fill="none" stroke="var(--trace)" strokeWidth="2.5" strokeLinejoin="round" />
        <path d={`M${mx} ${my - 4}l-7 -12h14z`} fill="var(--mark)" />
      </svg>
      <div className="row">
        <label htmlFor="rbw">Resolution bandwidth</label>
        <input id="rbw" type="range" min="0" max="100" value={rbw} onChange={(e) => setRbw(+e.target.value)} />
      </div>
      <p className="read" aria-live="polite">
        {r > 0.45 ? "Wide bandwidth: the two signals merge into one. Higher noise floor too."
                  : "Narrow bandwidth: both signals are resolved and the noise floor is lower."}
      </p>
      <p className="cap">Two signals sit close together. A narrow resolution bandwidth separates them; a wide one blurs them into one. Illustrative data, not a real measurement.</p>
    </div>
  );
}
