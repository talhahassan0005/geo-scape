"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAAFCAAIAAoDASIAAiEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUH/8QAHlAAAgIDAQEBAAAAAAAAAAAAAAECAxESITFBUf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC6tMLJbWfFQ3nkbGVKMqWdxpgHJIOBk4ORkGDsP//Z";

type Project = {
  img: string;
  title: string;
  category: string;
  year: string;
  desc: string;
};

const projects: Project[] = [
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
    img: "/images/digging-note.jpeg",
    title: "Foundation Rebar Inspection",
    category: "Geo-technical",
    year: "2023",
    desc: "Pre-pour foundation inspection confirming rebar layout, cover, and depth against structural drawings before concrete placement.",
  },
  {
    img: "/images/mining survey.jpeg",
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

const categories = ["All", "Land Surveying", "Mining Survey", "Geo-technical", "Engineering Survey"];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(7,30,56,0.75)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl"
        style={{ animation: "modalIn 0.25s ease both" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative aspect-[16/9] bg-[#F4F7FC] skeleton">
          <Image src={project.img} alt={project.title} fill className="object-cover" placeholder="blur" blurDataURL={BLUR} />
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[0.7rem] font-bold tracking-widest uppercase text-[#15B09A] bg-[#E8F5F3] px-3 py-1 rounded-full">
              {project.category}
            </span>
            <span className="text-xs text-[#7A9AB0]">{project.year}</span>
          </div>
          <h2 className="font-[family-name:var(--font-barlow)] font-bold text-2xl md:text-3xl text-[#071E38] mb-4 leading-tight">
            {project.title}
          </h2>
          <p className="text-[#3D5A73] leading-relaxed mb-6">{project.desc}</p>
          <div className="flex gap-3">
            <Link
              href="/contact#quote"
              className="flex-1 text-center bg-[#15B09A] hover:bg-[#119989] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              Request Similar Project
            </Link>
            <button
              onClick={onClose}
              className="px-6 py-3 border border-[#DCE8F2] text-[#3D5A73] hover:border-[#071E38] hover:text-[#071E38] font-semibold rounded-xl transition-colors text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default function ProjectsGrid() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 text-sm font-medium rounded-full border transition-all duration-200 ${
                active === c
                  ? "bg-[#071E38] border-[#071E38] text-white scale-105"
                  : "border-[#DCE8F2] text-[#3D5A73] hover:border-[#071E38] hover:text-[#071E38]"
              }`}
            >
              {c}
              {active === c && c !== "All" && (
                <span className="ml-1.5 text-xs bg-white/20 rounded-full px-1.5 py-0.5">
                  {projects.filter((p) => p.category === c).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((p) => (
            <div
              key={p.title}
              onClick={() => setSelected(p)}
              className="border border-[#DCE8F2] rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all group bg-white cursor-pointer"
              style={{ animation: "fadeInUp 0.35s ease both" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F4F7FC] skeleton">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL={BLUR}
                />
                {/* View detail hint */}
                <div className="absolute inset-0 bg-[#071E38]/0 group-hover:bg-[#071E38]/30 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-[#071E38] font-semibold text-sm px-4 py-2 rounded-full flex items-center gap-2">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    View Details
                  </span>
                </div>
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

        {filtered.length === 0 && (
          <div className="text-center py-20 text-[#9CA3AF]">
            <p className="text-lg font-medium">No projects in this category yet.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
