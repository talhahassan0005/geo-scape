import Image from "next/image";
import Link from "next/link";
import StatsStrip from "@/components/StatsStrip";
import AnimateIn from "@/components/AnimateIn";
import HeroSlider from "@/components/HeroSlider";

const services = [
  {
    id: "land-surveying",
    title: "Land Surveying",
    desc: "Cadastral, engineering, and topographic surveys using GPS, total stations, and drone technology.",
    image: "/images/team-site.jpg",
    points: ["Cadastral Surveys", "Topographic Surveys", "Setting-Out", "Subdivision"],
    icon: (
      <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
        <path d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    id: "geo-technical",
    title: "Geo-technical",
    desc: "Soil testing, foundation inspections, and construction monitoring for safe development.",
    image: "/images/project-rebar.jpg",
    points: ["Soil Testing", "Foundation Inspection", "Concrete Testing", "Site Reports"],
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75" />
      </svg>
    ),
  },
  {
    id: "physical-planning",
    title: "Physical Planning",
    desc: "Town planning, zoning studies, and land use management aligned with Botswana regulations.",
    image: "/images/project-foundation.jpg",
    points: ["Town Planning", "Zoning Analysis", "Land Management", "Impact Studies"],
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5" />
      </svg>
    ),
  },
  {
    id: "mining-survey",
    title: "Mining Survey",
    desc: "Volume calculations, 3D mine modelling, and regulatory surveys for mining operations.",
    image: "/images/team-equipment.jpg",
    points: ["Stockpile Volumes", "3D Modelling", "Mine Monitoring", "Regulatory Reports"],
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75" />
      </svg>
    ),
  },
];

const projects = [
  {
    img: "/images/survey-totalstation.jpg",
    title: "Total Station Survey — Mining Site",
    category: "Mining Survey",
    alt: "Leica total station survey at industrial mining facility",
  },
  {
    img: "/images/survey-gnss.jpg",
    title: "GNSS Rover Survey — Palapye",
    category: "Land Surveying",
    alt: "Surveyor with GNSS rover and data collector on site",
  },
  {
    img: "/images/survey-mining.jpg",
    title: "Engineering Survey — Industrial",
    category: "Engineering Survey",
    alt: "Leica total station at large-scale mining operation",
  },
  {
    img: "/images/project-survey.jpg",
    title: "GPS Control Survey",
    category: "GIS & Remote Sensing",
    alt: "GPS tripod setup for control survey",
  },
  {
    img: "/images/project-foundation.jpg",
    title: "Foundation Inspection — Gaborone",
    category: "Geo-technical",
    alt: "Foundation survey and inspection",
  },
  {
    img: "/images/project-concrete.jpg",
    title: "Industrial Development Survey",
    category: "Engineering Survey",
    alt: "Concrete pump at industrial construction site",
  },
];

const staggerDelays = [0, 80, 160, 240, 320, 400];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ marginTop: "-70px" }}>
        {/* Background image slider + overlay + dots */}
        <HeroSlider />

        <div className="relative max-w-7xl mx-auto px-5 py-24 md:py-32" style={{ zIndex: 10 }}>
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 hero-badge float-anim">
            <span className="w-2 h-2 rounded-full bg-[#15B09A]" />
            <span className="text-white text-sm font-medium">Serving Botswana Since 2016</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.05] mb-6 max-w-3xl hero-heading">
            Professional{" "}
            <span className="text-[#2DD4BF]">Land<br />Surveyors</span>
            {" "}in<br />Botswana
          </h1>

          <p className="text-white/80 text-base md:text-lg max-w-lg leading-relaxed mb-10 hero-sub">
            Looking for land surveyors near you in Gaborone? Geo-Scape
            Consultants provides expert cadastral, engineering, mining surveys
            &amp; GIS services across Botswana since 2016.
          </p>

          <div className="flex flex-wrap gap-4 hero-btns">
            <Link
              href="/contact#quote"
              className="btn-gradient flex items-center gap-2 font-bold px-7 py-3.5 rounded-full text-white"
            >
              Request a Quote
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="tel:+26739600069"
              className="flex items-center gap-2.5 bg-white/15 backdrop-blur-sm hover:bg-white/25 border border-white/30 text-white font-bold px-7 py-3.5 rounded-full transition-all hover:scale-105"
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              +267 396 0069
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <StatsStrip />

      {/* ── SERVICES ── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-white via-[#F0F7FF] to-white">
        <div className="max-w-7xl mx-auto px-5">
          <AnimateIn className="text-center mb-14">
            <span className="inline-block bg-[#E8F5F3] text-[#15B09A] text-xs font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1B2E] leading-tight">
              Complete Geomatics<br />
              <span className="text-[#E8A020]">Solutions</span>
            </h2>
            <p className="text-[#6B7280] mt-4 text-base max-w-lg mx-auto">
              From boundary surveys to 3D modeling — precision across Botswana.
            </p>
          </AnimateIn>

          {/* First row — 3 cards, staggered one by one */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.slice(0, 3).map((s, i) => (
              <AnimateIn key={s.id} delay={staggerDelays[i]}>
                <Link href={`/services#${s.id}`} className="card-hover group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 block h-full">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-108 transition-transform duration-500" />
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: "linear-gradient(135deg, #1565C0, #15B09A)" }}>
                      {s.icon}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-[#0B1B2E] mb-2">{s.title}</h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed mb-3">{s.desc}</p>
                    <ul className="space-y-1">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-xs text-[#4B5563]">
                          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#15B09A" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>

          {/* Second row — 2 service cards + view all, staggered */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7">
            {services.slice(3).map((s, i) => (
              <AnimateIn key={s.id} delay={staggerDelays[i]}>
                <Link href={`/services#${s.id}`} className="card-hover group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 block h-full">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-108 transition-transform duration-500" />
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: "linear-gradient(135deg, #1565C0, #15B09A)" }}>
                      {s.icon}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-[#0B1B2E] mb-2">{s.title}</h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed mb-3">{s.desc}</p>
                    <ul className="space-y-1">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-xs text-[#4B5563]">
                          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#15B09A" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </AnimateIn>
            ))}
            <AnimateIn delay={staggerDelays[2]}>
              <Link
                href="/services"
                className="group bg-gradient-to-br from-[#1565C0] to-[#15B09A] rounded-2xl flex flex-col items-center justify-center p-10 text-white hover:opacity-90 transition-all hover:scale-[1.02] block h-full"
              >
                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
                <span className="font-bold text-lg">View All Services</span>
                <span className="text-white/70 text-sm mt-1">4 disciplines</span>
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-20 md:py-28 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-5">
          <AnimateIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <span className="inline-block bg-[#E8F5F3] text-[#15B09A] text-xs font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-4">
                  Our Work
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1B2E]">
                  Recent Projects
                </h2>
              </div>
              <Link
                href="/projects"
                className="shrink-0 flex items-center gap-2 border-2 border-[#1565C0] text-[#1565C0] hover:bg-[#1565C0] hover:text-white font-semibold px-6 py-2.5 rounded-full transition-all hover:scale-105 text-sm"
              >
                View All Projects
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <AnimateIn key={p.title} delay={staggerDelays[i % 6]}>
                <div className="card-hover group relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#0B1B2E]">
                  <Image src={p.img} alt={p.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B2E]/85 via-[#0B1B2E]/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[0.68rem] font-bold tracking-widest uppercase text-[#2DD4BF]">
                      {p.category}
                    </span>
                    <h3 className="text-white font-bold text-base mt-1">{p.title}</h3>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #EBF4FF 0%, #FFFFFF 45%, #E8FAF6 100%)" }} />
        {/* Decorative circle blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #1565C0, transparent)" }} />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #15B09A, transparent)" }} />

        <div className="relative max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* ── Left: stacked phone + floating cards ── */}
            <AnimateIn delay={0} className="flex justify-center lg:justify-end">
              <div className="relative" style={{ width: 300, height: 540 }}>

                {/* Dot grid */}
                <div className="absolute -top-4 -left-8 grid grid-cols-4 gap-3 opacity-25">
                  {[...Array(16)].map((_, i) => (
                    <span key={i} className="w-2 h-2 rounded-full bg-[#1565C0] block" />
                  ))}
                </div>

                {/* Phone frame — ted.jpg */}
                <div
                  className="relative rounded-[2.8rem] overflow-hidden shadow-2xl"
                  style={{ width: 240, height: 420, border: "7px solid white", boxShadow: "0 32px 80px rgba(21,101,192,0.22), 0 0 0 1px rgba(21,101,192,0.08)" }}
                >
                  <Image src="/ted.jpg" alt="Geo-Scape land surveyor in the field" fill className="object-cover object-top" />
                  {/* Gradient bottom overlay */}
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,30,56,0.6) 0%, transparent 55%)" }} />
                  {/* Name tag at bottom of phone */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-sm">Field Survey — Botswana</p>
                    <p className="text-white/60 text-xs">Hi-Target GNSS Receiver</p>
                  </div>
                </div>

                {/* Floating card — top right: total station */}
                <div
                  className="absolute top-10 right-0 rounded-2xl overflow-hidden shadow-xl"
                  style={{ width: 110, height: 80, border: "3px solid white" }}
                >
                  <Image src="/images/survey-totalstation.jpg" alt="Total station survey" fill className="object-cover object-top" />
                  <div className="absolute inset-0 bg-black/15" />
                </div>

                {/* Floating card — mid left: GNSS rover with company vehicle */}
                <div
                  className="absolute left-[-3rem] top-56 rounded-2xl overflow-hidden shadow-xl"
                  style={{ width: 100, height: 72, border: "3px solid white" }}
                >
                  <Image src="/images/survey-gnss.jpg" alt="GNSS rover survey" fill className="object-cover object-top" />
                  <div className="absolute inset-0 bg-black/15" />
                </div>

                {/* Experience badge — bottom right */}
                <div
                  className="absolute bottom-16 right-[-1rem] rounded-2xl px-5 py-4 text-white shadow-2xl"
                  style={{ background: "linear-gradient(135deg, #1565C0 0%, #15B09A 100%)" }}
                >
                  <div className="text-4xl font-extrabold leading-none">9+</div>
                  <div className="text-[0.72rem] font-semibold mt-1 text-white/80 tracking-wide uppercase">Years Experience</div>
                </div>

                {/* Projects done badge — bottom left */}
                <div className="absolute bottom-0 left-[-1rem] bg-white rounded-2xl px-4 py-3 shadow-xl border border-gray-100">
                  <div className="text-2xl font-extrabold text-[#1565C0] leading-none">500+</div>
                  <div className="text-[0.68rem] text-[#6B7280] font-medium mt-0.5">Projects Done</div>
                </div>

              </div>
            </AnimateIn>

            {/* ── Right: text ── */}
            <AnimateIn delay={150}>
              <span className="inline-flex items-center gap-2 bg-[#E8F5F3] text-[#15B09A] text-xs font-bold tracking-[0.14em] uppercase px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#15B09A]" />
                About Us
              </span>

              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1B2E] mb-6 leading-[1.1]">
                Leading{" "}
                <span style={{ background: "linear-gradient(90deg, #1565C0, #15B09A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Land Surveyors
                </span>
                <br />in Botswana
              </h2>

              <p className="text-[#6B7280] leading-relaxed mb-4 text-[0.97rem]">
                Geo-Scape Consultants is one of Botswana&apos;s largest multi-disciplined land surveying firms. As registered professional land surveyors in Gaborone, we serve clients nationwide with offices in Palapye and Ghanzi.
              </p>
              <p className="text-[#6B7280] leading-relaxed mb-8 text-[0.97rem]">
                Searching for &quot;surveyors near me&quot; in Botswana? Our team combines technical expertise with local knowledge. From the savannas of Ghanzi to the mining corridors of Palapye, we are the land surveyors near you, ready to deliver excellence on every project.
              </p>

              {/* Feature badges — 2×2 */}
              <div className="grid grid-cols-2 gap-3 mb-9">
                {[
                  { icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z", label: "ISO Certified", color: "#1565C0" },
                  { icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z", label: "Local Expertise", color: "#15B09A" },
                  { icon: "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5", label: "Modern Tech", color: "#1565C0" },
                  { icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z", label: "24/7 Support", color: "#15B09A" },
                ].map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 shadow-sm border border-gray-100 hover:border-[#15B09A]/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 cursor-default"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${f.color}18` }}
                    >
                      <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke={f.color} strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-[#0B1B2E]">{f.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  href="/about"
                  className="btn-gradient inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-full text-white"
                >
                  Learn About Us
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <a href="tel:+26739600069" className="text-sm font-semibold text-[#1565C0] hover:text-[#15B09A] transition-colors flex items-center gap-1.5">
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call Us Now
                </a>
              </div>
            </AnimateIn>

          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 md:py-28 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-5">
          <AnimateIn className="text-center mb-14">
            <span className="inline-block bg-[#E8F5F3] text-[#15B09A] text-xs font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-4">
              Client Feedback
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1B2E]">
              What Our Clients Say
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote: "Geo-Scape delivered our mine survey on schedule with exceptional accuracy. Their 3D modelling and volume reports have become an essential part of our monthly operations.",
                name: "Operations Manager",
                org: "Debswana Mining",
                initials: "DM",
              },
              {
                quote: "We commissioned Geo-Scape for a large land subdivision project in Gaborone. Their cadastral team was professional, responsive, and the title deed documentation was flawless.",
                name: "Project Director",
                org: "Ministry of Lands",
                initials: "ML",
              },
            ].map((t, i) => (
              <AnimateIn key={t.org} delay={staggerDelays[i]}>
                <div className="card-hover bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden h-full">
                  <div className="absolute top-4 right-6 text-7xl font-bold text-[#E8F5F3] leading-none select-none">"</div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B">
                        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#374151] leading-relaxed mb-6 italic text-base">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0" style={{ background: "linear-gradient(135deg, #1565C0, #15B09A)" }}>
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-[#0B1B2E]">{t.name}</div>
                      <div className="text-xs text-[#6B7280]">{t.org}</div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-5">
          <AnimateIn>
            <p className="text-center text-sm font-semibold tracking-[0.12em] uppercase text-[#9CA3AF] mb-8">
              Serving All Regions of Botswana
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Gaborone", "Palapye", "Ghanzi", "Francistown", "Maun", "Kasane", "Jwaneng", "Lobatse", "Selebi-Phikwe"].map((city, i) => (
                <span
                  key={city}
                  className="px-4 py-2 bg-[#F3F4F6] hover:bg-[#E8F5F3] hover:text-[#15B09A] text-[#374151] text-sm font-medium rounded-full transition-colors duration-200 cursor-default"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {city}
                </span>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="py-20 md:py-28 text-center text-white" style={{ background: "linear-gradient(135deg, #1565C0 0%, #15B09A 100%)" }}>
        <div className="max-w-7xl mx-auto px-5">
          <AnimateIn>
            <span className="inline-block bg-white/15 text-white text-xs font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-5">
              Ready to Start?
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
              Get a Free Quote Today
            </h2>
            <p className="text-white/80 max-w-lg mx-auto mb-10 leading-relaxed">
              Tell us about your project and we&apos;ll respond within 24 hours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <Link
                href="/contact#quote"
                className="bg-white text-[#1565C0] hover:bg-gray-50 font-bold px-8 py-3.5 rounded-full transition-all hover:scale-105 hover:shadow-lg"
              >
                Request a Quote
              </Link>
              <a href="tel:+26739600069" className="flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-7 py-3.5 rounded-full transition-all hover:scale-105">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +267 396 0069
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
