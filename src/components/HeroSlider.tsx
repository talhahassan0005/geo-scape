"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    src: "/images/herosection slider/1.jpeg",
    alt: "Geo-Scape survey team at mining site with total station",
  },
  {
    src: "/images/herosection slider/2.jpeg",
    alt: "Geo-Scape team with drone for aerial survey in Botswana",
  },
  {
    src: "/images/herosection slider/3.jpeg",
    alt: "Geo-Scape land survey vehicles and equipment in field",
  },
  {
    src: "/images/herosection slider/4.jpeg",
    alt: "Geo-Scape cadastral survey with branded company vehicle",
  },
];

const INTERVAL = 5000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  const goTo = useCallback((idx: number) => {
    setPrev(current);
    setCurrent(idx);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <>
      {/* Slide stack */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 2 : i === prev ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover object-center"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark gradient overlay — always on top of images */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(7,27,55,0.88) 0%, rgba(11,55,80,0.75) 60%, rgba(21,176,154,0.3) 100%)",
          zIndex: 3,
        }}
      />

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5" style={{ zIndex: 10 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === current ? 28 : 10,
              height: 10,
              background: i === current ? "#15B09A" : "rgba(255,255,255,0.45)",
              border: "none",
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10" style={{ zIndex: 10 }}>
        <div
          key={current}
          className="h-full bg-[#15B09A]"
          style={{
            animation: `progress ${INTERVAL}ms linear forwards`,
          }}
        />
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </>
  );
}
