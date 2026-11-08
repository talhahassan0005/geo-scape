import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Land surveying, geo-technical investigations, physical planning and mining survey services across Botswana. Expert geomatics solutions since 2016.",
  keywords: ["land surveying services", "geo-technical investigation", "mining survey services", "physical planning Botswana", "cadastral survey"],
  alternates: { canonical: "https://geo-scape.co.bw/services" },
  openGraph: {
    title: "Surveying & Geomatics Services | Geo-Scape Consultants",
    description: "Complete geomatics solutions — land surveying, GIS, geo-technical, physical planning & mining surveys across Botswana.",
    url: "https://geo-scape.co.bw/services",
    images: [{ url: "https://geo-scape.co.bw/images/survey-totalstation.jpg", width: 1200, height: 630, alt: "Geo-Scape survey services" }],
  },
};

const services = [
  {
    id: "land-surveying",
    title: "Land Surveying",
    intro:
      "Geo-Scape provides comprehensive land surveying services using the latest GPS, total station, and drone technology. Whether you need a plot boundary confirmed or a large subdivision planned, our licensed surveyors deliver legally compliant, highly accurate results.",
    image: "/images/team-site.jpg",
    imageAlt: "Geo-Scape surveyor with GPS tripod and drone on site",
    subServices: [
      "Cadastral survey for title deed registration",
      "Beacon relocation and boundary verification",
      "Land subdivision and consolidation",
      "Sectional title surveys",
      "Topographic surveys",
      "Underground utility surveys",
      "As-built surveys",
      "Engineering setting-out and 3D modelling",
    ],
  },
  {
    id: "geo-technical",
    title: "Geo-technical Investigation",
    intro:
      "Before any structure is built, the ground beneath it must be understood. Our geo-technical engineers carry out site inspections and laboratory testing to characterise soil and rock conditions, reducing construction risk and ensuring regulatory compliance.",
    image: "/images/digging-note.jpeg",
    imageAlt: "Geo-technical site investigation and soil excavation",
    subServices: [
      "Foundation condition inspection",
      "Floor slab and retaining wall assessment",
      "Soil classification and moisture content testing",
      "Concrete core and strength testing",
      "Bearing capacity and settlement analysis",
      "Geo-technical reporting for local authority submission",
    ],
  },
  {
    id: "physical-planning",
    title: "Physical Planning",
    intro:
      "Sound land use planning underpins sustainable development. Our planners work with government bodies, developers, and communities to prepare development plans, zoning studies, and land management strategies that align with Botswana's planning legislation.",
    image: "/images/project-foundation.jpg",
    imageAlt: "Workers laying out foundations at construction site",
    subServices: [
      "Town and regional development plans",
      "Land use zoning and rezoning applications",
      "Property development planning and feasibility",
      "Land management and administration",
      "Environmental and social impact assessments",
      "Development control and compliance reports",
    ],
  },
  {
    id: "mining-survey",
    title: "Mining Survey",
    intro:
      "Mining operations demand millimetre accuracy and strict regulatory compliance. Geo-Scape's mining survey team has extensive experience across Botswana's mineral extraction sector, delivering the spatial data mine operators need for safe, efficient, and compliant operations.",
    image: "/images/mining survey.jpeg",
    imageAlt: "Geo-Scape mining survey team with equipment",
    subServices: [
      "Surface mine plans and cross-sections",
      "Stockpile volume calculations (drone and traditional)",
      "3D mine model generation",
      "Underground control, pick-up, and as-built surveys",
      "Deformation and subsidence monitoring",
      "Annual regulatory mine survey reports",
      "Setting-out for blast patterns and infrastructure",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #071E38 0%, #0D3B6E 60%, #0E5FA6 100%)" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#0D5FAA]/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 relative">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-5">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#15B09A]">Services</span>
          </div>
          <span className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#15B09A] block mb-3">
            What We Offer
          </span>
          <h1 className="font-[family-name:var(--font-barlow)] font-bold text-5xl md:text-6xl text-white mb-4">
            Our Services
          </h1>
          <p className="text-white/65 text-lg max-w-2xl leading-relaxed">
            Five core disciplines, one team. From plot surveys to mine
            monitoring — all services are delivered by registered professionals
            to Botswana&apos;s highest standards.
          </p>
        </div>
      </section>

      {/* Service Nav */}
      <div className="bg-white border-b border-[#DCE8F2] sticky top-16 md:top-20 z-30">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 px-4 py-2 text-sm font-medium text-[#3D5A73] hover:text-[#071E38] hover:bg-[#F4F7FC] rounded transition-colors whitespace-nowrap"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-5">
        {services.map((s, i) => (
          <section
            key={s.id}
            id={s.id}
            className={`py-16 md:py-24 ${i < services.length - 1 ? "border-b border-[#DCE8F2]" : ""}`}
          >
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative rounded-lg overflow-hidden aspect-[4/3] bg-[#F4F7FC]">
                <Image src={s.image} alt={s.imageAlt} fill className="object-cover" />
              </div>
              <div>
                <span className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#15B09A] block mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-[family-name:var(--font-barlow)] font-bold text-3xl md:text-4xl text-[#071E38] mb-5">
                  {s.title}
                </h2>
                <p className="text-[#3D5A73] leading-relaxed mb-7">{s.intro}</p>
                <ul className="space-y-2.5 mb-8">
                  {s.subServices.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#3D5A73]">
                      <span className="w-2 h-2 rounded-full bg-[#15B09A] shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact#quote"
                  className="inline-flex items-center gap-2 bg-[#15B09A] hover:bg-[#119989] text-white font-semibold px-6 py-3 rounded transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-[#0D5FAA] py-20 text-center">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="font-[family-name:var(--font-barlow)] font-bold text-4xl text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/75 max-w-lg mx-auto mb-8">
            Describe your project and we&apos;ll advise on the right approach.
            Quotes are free and non-binding.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#0D5FAA] hover:bg-[#071E38] hover:text-white font-semibold px-8 py-3.5 rounded transition-colors inline-block"
          >
            Talk to an Expert
          </Link>
        </div>
      </section>
    </>
  );
}
