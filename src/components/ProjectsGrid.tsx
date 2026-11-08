"use client";
import { useState } from "react";
import Image from "next/image";

const BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAAFCAAIAAoDASIAAiEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUH/8QAHlAAAgIDAQEBAAAAAAAAAAAAAAECAxESITFBUf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC6tMLJbWfFQ3nkbGVKMqWdxpgHJIOBk4ORkGDsP//Z";

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

export default function ProjectsGrid() {
  const [active, setActive] = useState("All");

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
              className="border border-[#DCE8F2] rounded-lg overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all group bg-white"
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

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
