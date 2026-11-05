"use client";
import { useEffect, useRef, ReactNode, ElementType } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}

export default function AnimateIn({ children, delay = 0, className = "", as: Tag = "div" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
