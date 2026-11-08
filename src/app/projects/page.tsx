import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

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

const projects = [
  {
    img: "/images/project-survey.jpg",
    title: "Palapye Mine Survey",
    category: "Mining Survey",
    year: "2024",
    desc: "3D stockpile volume calculations and surface mine plans using drone photogrammetry and GPS control for a large open-cast operation near Palapye.",
  },
  {
    img: "/images/project-foundation.jpg",
    title: "Gaborone Industrial Estate — Foundation Survey",
    category: "Geo-technical",
    year: "2024",
    desc: "Foundation layout and inspection for a multi-unit industrial development. Included setting-out, soil classification, and as-built documentation.",
  },
  {
    img: "/images/project-concrete.jpg",
    title: "Commercial Building Setting-Out",
    category: "Engineering Survey",
    year: "2024",
    desc: "Precision setting-out for a large reinforced concrete structure. Coordinated with the contractor's concrete pump schedule across multiple pours.",
  },
  {
    img: "/images/project-rebar.jpg",
    title: "Foundation Rebar Inspection",
    category: "Geo-technical",
    year: "2023",
    desc: "Pre-pour foundation inspection confirming rebar layout, cover, and depth against structural drawings before concrete placement.",
  },
  {
    img: "/images/team-equipment.jpg",
    title: "Mining Site Survey — Sowa",
    category: "Mining Survey",
    year: "2023",
    desc: "Control traverses, pick-up surveys, and 3D modelling for infrastructure planning at an active mineral extraction site.",
  },
  {
    img: "/images/land surveying.jpeg",
    title: "Land Subdivision — Phakalane",
    category: "Land Surveying",
    year: "2023",
    desc: "Cadastral survey and subdivision of a 45-hectare parcel into 200+ residential plots. Included beacon placement and title deed documentation.",
  },
];

const categories = ["All", "Land Surveying", "Mining Survey", "Geo-technical", "Engineering Survey", "GIS"];

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
              { num: "5", label: "Service Disciplines" },
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

      {/* Filter tabs — static labels, visual only on this static page */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((c, i) => (
              <span
                key={c}
                className={`px-5 py-2 text-sm font-medium rounded-full border transition-colors cursor-default ${
                  i === 0
                    ? "bg-[#071E38] border-[#071E38] text-white"
                    : "border-[#DCE8F2] text-[#3D5A73] hover:border-[#071E38] hover:text-[#071E38]"
                }`}
              >
                {c}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((p) => (
              <div
                key={p.title}
                className="border border-[#DCE8F2] rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all group bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F4F7FC]">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[0.7rem] font-semibold tracking-wider uppercase text-[#15B09A]">
                      {p.category}
                    </span>
                    <span className="text-xs text-[#7A9AB0]">{p.year}</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-barlow)] font-semibold text-lg text-[#071E38] mb-2 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#3D5A73] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
