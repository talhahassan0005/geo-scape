import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Geo-Scape Consultants — Botswana's trusted multi-disciplinary surveying and geomatics firm, established 2016 with offices in Gaborone, Palapye and Ghanzi.",
  keywords: ["about Geo-Scape", "land surveying firm Botswana", "registered surveyors Botswana", "geomatics consultants"],
  alternates: { canonical: "https://geo-scape.co.bw/about" },
  openGraph: {
    title: "About Geo-Scape Consultants | Land Surveyors Botswana",
    description: "Botswana's leading multi-disciplinary surveying firm since 2016. Offices in Gaborone, Palapye & Ghanzi.",
    url: "https://geo-scape.co.bw/about",
    images: [{ url: "https://geo-scape.co.bw/images/team-equipment.jpg", width: 1200, height: 630, alt: "Geo-Scape team" }],
  },
};

const values = [
  {
    title: "Quality",
    desc: "Every deliverable meets the highest standards of accuracy and professional practice, backed by modern equipment and rigorous QA processes.",
  },
  {
    title: "Safety",
    desc: "All field operations adhere to strict HSE protocols. Our teams are equipped and trained to work safely in Botswana's diverse environments.",
  },
  {
    title: "Community",
    desc: "We are proudly Botswana-based, investing in local talent and contributing to the communities where we live and work.",
  },
  {
    title: "Innovation",
    desc: "We continually adopt new technologies — drones, 3D modelling, cloud GIS — to deliver faster, more accurate results for our clients.",
  },
];

const offices = [
  {
    name: "Gaborone",
    type: "Head Office",
    address: "Plot 50667, Fairgrounds, Gaborone",
    phone: "+267 396 0069",
    mobile: "+267 73 241 671",
    email: "info@geoscape.co.bw",
  },
  {
    name: "Palapye",
    type: "Branch Office",
    address: "Palapye, Central District",
    phone: "Contact via Head Office",
    mobile: "+267 73 241 671",
    email: "info@geoscape.co.bw",
  },
  {
    name: "Ghanzi",
    type: "Branch Office",
    address: "Plot 2556, Ghanzi, Western Region",
    phone: "+267 75 739 158",
    mobile: "+267 73 241 671",
    email: "info@geoscape.co.bw",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #071E38 0%, #0D3B6E 60%, #0E5FA6 100%)" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#0D5FAA]/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 relative">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-5">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#15B09A]">About</span>
          </div>
          <span className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#15B09A] block mb-3">
            Who We Are
          </span>
          <h1 className="font-[family-name:var(--font-barlow)] font-bold text-5xl md:text-6xl text-white mb-4">
            About Geo-Scape Consultants
          </h1>
          <p className="text-white/65 text-lg max-w-2xl leading-relaxed">
            A multi-disciplinary surveying and geomatics firm built on
            precision, professionalism, and a deep commitment to Botswana&apos;s
            development.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#15B09A] block mb-3">
                Our Story
              </span>
              <h2 className="font-[family-name:var(--font-barlow)] font-bold text-4xl md:text-5xl text-[#071E38] mb-5">
                Built on Precision. Grown on Trust.
              </h2>
              <div className="space-y-4 text-[#3D5A73] leading-relaxed">
                <p>
                  Geo-Scape Consultants was established in 2016 with a clear
                  mission: to deliver world-class geomatics services that meet
                  the evolving needs of Botswana&apos;s infrastructure, mining,
                  and property sectors.
                </p>
                <p>
                  What began as a small cadastral surveying operation in Gaborone
                  has grown into a full-service, multi-disciplinary firm with
                  over 50 professionals and offices in Gaborone, Palapye, and
                  Ghanzi — covering every region of Botswana.
                </p>
                <p>
                  Our team combines registered land surveyors, GIS analysts,
                  geo-technical engineers, and physical planners — bringing
                  all the spatial expertise your project needs under one roof.
                </p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <Image
                src="/images/team-site.jpg"
                alt="Geo-Scape team on site with survey tripod and drone"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-[#F4F7FC]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#071E38] text-white rounded-lg p-10">
              <div className="w-12 h-12 bg-[#15B09A]/20 rounded-md flex items-center justify-center mb-6">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#15B09A" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-barlow)] font-bold text-2xl mb-4 text-white">
                Our Vision
              </h3>
              <p className="text-white/70 leading-relaxed">
                To be the most trusted and innovative geomatics consultancy in
                Botswana, shaping the nation&apos;s spatial landscape through
                cutting-edge technology and uncompromising professional
                standards.
              </p>
            </div>
            <div className="bg-[#0D5FAA] text-white rounded-lg p-10">
              <div className="w-12 h-12 bg-white/15 rounded-md flex items-center justify-center mb-6">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="font-[family-name:var(--font-barlow)] font-bold text-2xl mb-4 text-white">
                Our Mission
              </h3>
              <p className="text-white/80 leading-relaxed">
                To deliver accurate, reliable, and timely geomatics solutions
                that empower clients to make confident decisions — from
                individual plot transfers to large-scale mining and
                infrastructure projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#15B09A] block mb-3">
              What Drives Us
            </span>
            <h2 className="font-[family-name:var(--font-barlow)] font-bold text-4xl md:text-5xl text-[#071E38]">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="border border-[#DCE8F2] rounded-lg p-6 border-t-4 border-t-[#15B09A]"
              >
                <h3 className="font-[family-name:var(--font-barlow)] font-bold text-xl text-[#071E38] mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-[#3D5A73] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 md:py-28 bg-[#071E38]">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#15B09A] block mb-3">
              Nationwide Presence
            </span>
            <h2 className="font-[family-name:var(--font-barlow)] font-bold text-4xl md:text-5xl text-white">
              Our Offices
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((o) => (
              <div key={o.name} className="bg-white/5 border border-white/10 rounded-lg p-7">
                <span className="inline-block text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-[#15B09A] border border-[#15B09A] rounded px-2 py-0.5 mb-4">
                  {o.type}
                </span>
                <h3 className="font-[family-name:var(--font-barlow)] font-bold text-2xl text-white mb-5">
                  {o.name}
                </h3>
                <div className="space-y-3 text-sm text-white/60">
                  <p className="flex gap-2 items-start">
                    <svg className="shrink-0 mt-0.5" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {o.address}
                  </p>
                  <p className="flex gap-2 items-start">
                    <svg className="shrink-0 mt-0.5" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    {o.phone}
                  </p>
                  <p className="flex gap-2 items-start">
                    <svg className="shrink-0 mt-0.5" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    {o.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#15B09A] text-center">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="font-[family-name:var(--font-barlow)] font-bold text-4xl text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Contact us to discuss your project requirements.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#15B09A] hover:bg-[#071E38] hover:text-white font-semibold px-8 py-3.5 rounded transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
