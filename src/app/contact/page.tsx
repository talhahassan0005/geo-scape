import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Geo-Scape Consultants — land surveyors in Gaborone, Palapye & Ghanzi. Call +267 396 0069, WhatsApp +267 73 241 671, or email info@geoscape.co.bw. Free quote within 24 hours.",
  keywords: ["contact land surveyors Botswana", "surveyor Gaborone contact", "get survey quote Botswana", "Geo-Scape contact", "land survey quote"],
  alternates: { canonical: "https://geo-scape.co.bw/contact" },
  openGraph: {
    title: "Contact Geo-Scape Consultants | Free Survey Quote",
    description: "Get a free quote from Botswana's leading land surveyors. Offices in Gaborone, Palapye & Ghanzi. Reply within 24 hours.",
    url: "https://geo-scape.co.bw/contact",
    images: [{ url: "https://geo-scape.co.bw/images/hero-site.jpg", width: 1200, height: 630, alt: "Geo-Scape Consultants offices" }],
  },
};

const offices = [
  {
    name: "Gaborone (Head Office)",
    address: "Plot 50667, Fairgrounds, Gaborone",
    phone: "+267 396 0069",
    mobile: "+267 73 241 671",
  },
  {
    name: "Palapye Branch",
    address: "Palapye, Central District",
    phone: "Contact via Head Office",
    mobile: "+267 73 241 671",
  },
  {
    name: "Ghanzi Branch",
    address: "Plot 2556, Ghanzi, Western Region",
    phone: "+267 75 739 158",
    mobile: "+267 73 241 671",
  },
];

const hours = [
  { day: "Monday – Friday", time: "08:00 – 17:00" },
  { day: "Saturday", time: "08:00 – 12:00" },
  { day: "Sunday", time: "Closed" },
  { day: "Emergency Line", time: "24/7 · +267 73 241 671" },
];

const faqs = [
  {
    q: "How long does a quote take?",
    a: "We respond to all quote requests within 24 hours on business days. Complex projects may take up to 48 hours for a detailed proposal.",
  },
  {
    q: "Are quotes free?",
    a: "Yes. All quotes are completely free and non-binding. For larger projects we can arrange a preliminary site visit at no cost.",
  },
  {
    q: "Which areas do you cover?",
    a: "We operate nationwide across Botswana from our offices in Gaborone, Palapye, and Ghanzi, serving all regions including Francistown, Maun, Kasane, and Jwaneng.",
  },
  {
    q: "Can I contact you by WhatsApp?",
    a: "Yes — WhatsApp +267 73 241 671 is monitored during business hours and is often the fastest way to share photos or documents for a quick assessment.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #071E38 0%, #0D3B6E 60%, #0E5FA6 100%)" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#0D5FAA]/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 relative">
          <div className="flex items-center gap-2 text-sm text-white/50 mb-5">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#15B09A]">Contact</span>
          </div>
          <span className="text-[0.72rem] font-semibold tracking-[0.14em] uppercase text-[#15B09A] block mb-3">
            Get in Touch
          </span>
          <h1 className="font-[family-name:var(--font-barlow)] font-bold text-5xl md:text-6xl text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/65 text-lg max-w-2xl leading-relaxed">
            Reach us by phone, email, WhatsApp, or use the form below.
            We&apos;ll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Layout */}
      <section id="quote" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-14 items-start">

            {/* Form */}
            <div className="border border-[#DCE8F2] rounded-xl p-7 md:p-10 bg-white shadow-sm">
              <h2 className="font-[family-name:var(--font-barlow)] font-bold text-2xl text-[#071E38] mb-7">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact info */}
              <div>
                <h3 className="font-[family-name:var(--font-barlow)] font-bold text-xl text-[#071E38] mb-5">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: (
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                      ),
                      label: "Office Phone",
                      value: "+267 396 0069",
                    },
                    {
                      icon: (
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18h3" />
                        </svg>
                      ),
                      label: "Mobile / WhatsApp",
                      value: "+267 73 241 671",
                    },
                    {
                      icon: (
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      ),
                      label: "Email",
                      value: "info@geoscape.co.bw",
                    },
                    {
                      icon: (
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      ),
                      label: "Head Office",
                      value: "Plot 50667, Fairgrounds, Gaborone",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3 items-start">
                      <div className="w-10 h-10 rounded-lg bg-[#E8F5F3] flex items-center justify-center text-[#15B09A] shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#7A9AB0] uppercase tracking-wide mb-0.5">{item.label}</div>
                        <div className="text-sm text-[#071E38] font-medium">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/267773241671"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-5 py-3 rounded-lg transition-colors"
                >
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>

              {/* Business Hours */}
              <div className="border border-[#DCE8F2] rounded-xl p-6">
                <h3 className="font-[family-name:var(--font-barlow)] font-bold text-lg text-[#071E38] mb-4">
                  Business Hours
                </h3>
                <table className="w-full text-sm">
                  <tbody>
                    {hours.map((h) => (
                      <tr key={h.day} className="border-b border-[#F4F7FC] last:border-0">
                        <td className="py-2.5 text-[#3D5A73]">{h.day}</td>
                        <td className="py-2.5 text-right font-medium text-[#071E38]">{h.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-16 md:py-20 bg-[#F4F7FC]">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="font-[family-name:var(--font-barlow)] font-bold text-3xl text-[#071E38] mb-10 text-center">
            Our Offices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((o) => (
              <div key={o.name} className="bg-white border border-[#DCE8F2] rounded-xl p-6">
                <h3 className="font-[family-name:var(--font-barlow)] font-bold text-lg text-[#071E38] mb-4">
                  {o.name}
                </h3>
                <div className="space-y-2.5 text-sm text-[#3D5A73]">
                  <p className="flex gap-2 items-start">
                    <svg className="shrink-0 mt-0.5 text-[#15B09A]" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {o.address}
                  </p>
                  <p className="flex gap-2 items-start">
                    <svg className="shrink-0 mt-0.5 text-[#15B09A]" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    {o.phone}
                  </p>
                  <p className="flex gap-2 items-start">
                    <svg className="shrink-0 mt-0.5 text-[#15B09A]" width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp: {o.mobile}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="font-[family-name:var(--font-barlow)] font-bold text-3xl text-[#071E38] mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            {faqs.map((f) => (
              <div key={f.q} className="border border-[#DCE8F2] rounded-xl p-6">
                <h3 className="font-semibold text-[#071E38] mb-2">{f.q}</h3>
                <p className="text-sm text-[#3D5A73] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
