"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const BLUR_PLACEHOLDER = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAAFCAAIAAoDASIAAiEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUH/8QAHhAAAgIDAQEBAAAAAAAAAAAAAAECAxESITFB/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMp2lzLJbWfFQ3nkbGVKMqWdxpgHJIOBk4ORkGDsP//Z";


const slides = [
  { src: "/images/About slider/WhatsApp Image 2026-11-08 at 19.31.26.jpeg", alt: "Geo-Scape team on survey site" },
  { src: "/images/About slider/WhatsApp Image 2026-11-08 at 19.31.27.jpeg", alt: "Geo-Scape survey equipment in field" },
  { src: "/images/About slider/WhatsApp Image 2026-11-08 at 19.31.28.jpeg", alt: "Geo-Scape professional surveyors" },
  { src: "/images/About slider/WhatsApp Image 2026-11-08 at 19.31.30.jpeg", alt: "Geo-Scape field operations Botswana" },
];

const INTERVAL = 5000;

export default function AboutSlider() {
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
            loading={i === 0 ? "eager" : "lazy"}
            sizes="(max-width: 768px) 100vw, 100vw"
            quality={75}
            placeholder="blur"
            blurDataURL={BLUR_PLACEHOLDER}
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(7,30,56,0.82) 0%, rgba(13,59,110,0.75) 60%, rgba(14,95,166,0.70) 100%)",
          zIndex: 3,
        }}
      />

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2" style={{ zIndex: 10 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === current ? 24 : 8,
              height: 8,
              background: i === current ? "#15B09A" : "rgba(255,255,255,0.4)",
              border: "none",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </>
  );
}
