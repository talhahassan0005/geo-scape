"use client";
import { useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");

    const data = new FormData(e.currentTarget);
    try {
      // Replace YOUR_FORM_ID with your Formspree form ID: https://formspree.io
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setState("success");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ background: "linear-gradient(135deg, #1565C0, #15B09A)" }}>
          <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#0B1B2E] mb-2">Message Sent!</h3>
        <p className="text-[#6B7280] max-w-sm">
          Thank you for reaching out. We&apos;ll reply to your message within 24 hours on business days.
        </p>
        <button
          onClick={() => setState("idle")}
          className="mt-6 text-sm text-[#15B09A] font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  if (state === "error") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#DC2626" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </div>
        <h3 className="font-bold text-[#0B1B2E] mb-1">Something went wrong</h3>
        <p className="text-sm text-[#6B7280] mb-4">Please call us directly at +267 396 0069</p>
        <button onClick={() => setState("idle")} className="text-sm text-[#15B09A] font-semibold hover:underline">Try again</button>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 border border-gray-200 rounded-xl text-[#0B1B2E] text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#15B09A] focus:ring-2 focus:ring-[#15B09A]/15 transition bg-gray-50 focus:bg-white";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#0B1B2E] mb-1.5">
            Full Name <span className="text-[#15B09A]">*</span>
          </label>
          <input id="name" name="name" type="text" required placeholder="John Moremi" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#0B1B2E] mb-1.5">
            Email Address <span className="text-[#15B09A]">*</span>
          </label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-[#0B1B2E] mb-1.5">Phone Number</label>
          <input id="phone" name="phone" type="tel" placeholder="+267 7X XXX XXX" className={inputClass} />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-[#0B1B2E] mb-1.5">
            Subject <span className="text-[#15B09A]">*</span>
          </label>
          <select id="subject" name="subject" required className={inputClass}>
            <option value="">Select a subject</option>
            <option>General Inquiry</option>
            <option>Land Surveying</option>
            <option>GIS & Remote Sensing</option>
            <option>Geo-technical Investigation</option>
            <option>Physical Planning</option>
            <option>Mining Survey</option>
            <option>Quote Request</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[#0B1B2E] mb-1.5">
          Message <span className="text-[#15B09A]">*</span>
        </label>
        <textarea
          id="message" name="message" required rows={5} minLength={10}
          placeholder="Describe your project or question…"
          className={`${inputClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={state === "sending"}
        className="w-full font-bold py-3.5 rounded-xl text-white transition-all disabled:opacity-70 flex items-center justify-center gap-2"
        style={{ background: "linear-gradient(to right, #1565C0, #15B09A)" }}
      >
        {state === "sending" ? (
          <>
            <svg className="animate-spin" width="18" height="18" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending…
          </>
        ) : (
          <>
            Send Message
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </>
        )}
      </button>
      <p className="text-xs text-gray-400 text-center">
        🔒 Your details are kept confidential. We reply within 24 hours on business days.
      </p>
    </form>
  );
}
