import Link from "next/link";
import type { Metadata } from "next";
import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Browse Geo-Scape Consultants' completed projects — land surveying, GIS mapping, geo-technical investigations and mining surveys across Botswana.",
  keywords: ["survey projects Botswana", "mining survey projects", "GIS mapping projects", "cadastral survey projects", "Botswana geomatics"],
  alternates: { canonical: "https://geo-scape.co.bw/projects" },
  openGraph: {
    title: "Completed Survey Projects | Geo-Scape Consultants",
    description: "Explore our portfolio of land surveying, GIS, geo-technical and mining survey projects across Botswana.",
    url: "https://geo-scape.co.bw/projects",
    images: [{ url: "https://geo-scape.co.bw/images/survey-mining.jpg", width: 1200, height: 630, alt: "Geo-Scape survey projects" }],
  },
};

export default function ProjectsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #071E38 0%, #0D3B6E 60%, #0E5FA6 100%)" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#0D5FAA]/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 relative">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-5">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#15B09A]">Projects</span>
          </div>
          <span className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#15B09A] block mb-3">
            Our Portfolio
          </span>
          <h1 className="font-[family-name:var(--font-barlow)] font-bold text-5xl md:text-6xl text-white mb-4">
            Projects
          </h1>
          <p className="text-white/65 text-lg max-w-2xl leading-relaxed">
            500+ projects delivered across Botswana since 2016 — from
            individual plot surveys to large-scale mine monitoring programmes.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#F4F7FC] py-10 border-b border-[#DCE8F2]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "500+", label: "Projects Completed" },
              { num: "10+", label: "Years Experience" },
              { num: "4", label: "Service Disciplines" },
              { num: "3", label: "Regional Offices" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-[family-name:var(--font-barlow)] font-bold text-4xl text-[#071E38] mb-1">
                  {s.num}
                </div>
                <div className="text-sm text-[#3D5A73]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive filter + grid */}
      <ProjectsGrid />

      {/* CTA */}
      <section className="bg-[#071E38] py-20 text-center">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="font-[family-name:var(--font-barlow)] font-bold text-4xl text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-white/70 max-w-lg mx-auto mb-8">
            Tell us about it and we&apos;ll prepare a detailed, no-obligation quote
            within 24 hours.
          </p>
          <Link
            href="/contact#quote"
            className="bg-[#15B09A] hover:bg-[#119989] text-white font-semibold px-8 py-3.5 rounded transition-colors inline-block"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
