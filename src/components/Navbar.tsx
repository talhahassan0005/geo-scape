"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  const toggleMenu = () => {
    const next = !open;
    setOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between h-16 md:h-[70px]">
          {/* Logo — clipped to remove whitespace canvas */}
          <Link href="/" className="flex items-center shrink-0">
            <div className="bg-white rounded-2xl px-2 py-1">
              <div style={{ width: 130, height: 62, overflow: 'hidden', position: 'relative' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Logo.png"
                  alt="Geo-Scape Consultants"
                  style={{ position: 'absolute', top: -14, left: -6, width: 480, maxWidth: 'none', height: 'auto' }}
                />
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link-anim text-sm font-medium transition-colors ${
                  pathname === l.href
                    ? "text-[#1565C0]"
                    : "text-[#374151] hover:text-[#1565C0]"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact#quote"
              className="ml-2 bg-[#1565C0] hover:bg-[#1251A3] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:scale-105 hover:shadow-md"
            >
              Get Quote
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span className={`block w-6 h-0.5 bg-[#374151] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#374151] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#374151] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={toggleMenu} />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-white z-50 flex flex-col pt-20 px-6 gap-2 shadow-2xl transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`py-3 text-base font-medium border-b border-gray-100 ${
              pathname === l.href ? "text-[#1565C0]" : "text-[#374151]"
            }`}
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/contact#quote"
          className="mt-4 bg-[#1565C0] hover:bg-[#1251A3] text-white font-semibold px-5 py-3 rounded-full text-center transition-colors"
        >
          Get Quote
        </Link>
      </div>
    </>
  );
}
