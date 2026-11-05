"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Years of Service" },
  { value: 3, suffix: "", label: "Offices Nationwide" },
  { value: 50, suffix: "+", label: "Professional Staff" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const steps = 50;
          const inc = value / steps;
          let cur = 0;
          const timer = setInterval(() => {
            cur = Math.min(cur + inc, value);
            setCount(Math.floor(cur));
            if (cur >= value) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-[family-name:var(--font-barlow)] font-bold text-5xl md:text-6xl block leading-none mb-2">
      {count}{suffix}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section
      className="text-white py-10 md:py-14"
      style={{ background: "linear-gradient(to right, #1565C0, #15B09A)" }}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <Counter value={s.value} suffix={s.suffix} />
              <span className="text-sm font-medium opacity-85 tracking-wide">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
