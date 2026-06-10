"use client";

import { FormEvent, useState } from "react";

const whatsappNumber = "6281220455846";
const businessEmail = "info@visitindotravel.com";

export function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    country: "",
    destination: "",
    travelers: "",
    month: "",
    request: "",
  });

  function updateField(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  }

  function submitToWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      "Hello Visit Indo Travel, I would like to request a private Indonesia journey.",
      "",
      `Name: ${form.name || "-"}`,
      `Email: ${form.email || "-"}`,
      `WhatsApp: ${form.whatsapp || "-"}`,
      `Country: ${form.country || "-"}`,
      `Preferred Destination: ${form.destination || "-"}`,
      `Number of Travelers: ${form.travelers || "-"}`,
      `Travel Month: ${form.month || "-"}`,
      `Travel Request: ${form.request || "-"}`,
      "",
      "Please help me prepare a suitable itinerary and quotation. Thank you.",
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  function emailHref() {
    const subject = "Private Indonesia Journey Enquiry";
    const body = [
      "Hello Visit Indo Travel,",
      "",
      "I would like to request a private Indonesia journey.",
      "",
      `Name: ${form.name || "-"}`,
      `Email: ${form.email || "-"}`,
      `WhatsApp: ${form.whatsapp || "-"}`,
      `Country: ${form.country || "-"}`,
      `Preferred Destination: ${form.destination || "-"}`,
      `Number of Travelers: ${form.travelers || "-"}`,
      `Travel Month: ${form.month || "-"}`,
      `Travel Request: ${form.request || "-"}`,
      "",
      "Thank you.",
    ].join("\n");

    return `mailto:${businessEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const inputClass =
    "h-13 w-full border border-black/10 bg-[#f7f0e5] px-4 text-[15px] text-[#111d18] outline-none transition focus:border-[#a8782d]";
  const labelClass =
    "mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#111d18]/45";

  return (
    <form onSubmit={submitToWhatsApp} className="bg-white p-6 shadow-[0_20px_70px_rgba(0,0,0,.08)] md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className={labelClass}>Name</label>
          <input
            className={inputClass}
            name="name"
            value={form.name}
            onChange={updateField}
            placeholder="Your full name"
            required
          />
        </div>

        <div>
          <label className={labelClass}>Email</label>
          <input
            className={inputClass}
            type="email"
            name="email"
            value={form.email}
            onChange={updateField}
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className={labelClass}>WhatsApp</label>
          <input
            className={inputClass}
            name="whatsapp"
            value={form.whatsapp}
            onChange={updateField}
            placeholder="+966 / +1 / +62 ..."
            required
          />
        </div>

        <div>
          <label className={labelClass}>Country</label>
          <input
            className={inputClass}
            name="country"
            value={form.country}
            onChange={updateField}
            placeholder="Saudi Arabia, United States..."
          />
        </div>

        <div>
          <label className={labelClass}>Destination</label>
          <select
            className={inputClass}
            name="destination"
            value={form.destination}
            onChange={updateField}
          >
            <option value="">Select destination</option>
            <option>Bali</option>
            <option>Yogyakarta & Borobudur</option>
            <option>Bromo & Ijen</option>
            <option>Labuan Bajo & Komodo</option>
            <option>Custom Indonesia Journey</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>Travelers</label>
          <input
            className={inputClass}
            name="travelers"
            value={form.travelers}
            onChange={updateField}
            placeholder="Minimum 4 pax"
          />
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Travel Month</label>
          <input
            className={inputClass}
            name="month"
            value={form.month}
            onChange={updateField}
            placeholder="Example: August 2026"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className={labelClass}>Travel Request</label>
        <textarea
          className="min-h-36 w-full border border-black/10 bg-[#f7f0e5] px-4 py-4 text-[15px] leading-7 text-[#111d18] outline-none transition focus:border-[#a8782d]"
          name="request"
          value={form.request}
          onChange={updateField}
          placeholder="Tell us your preferred travel style, hotel preference, destinations, halal-friendly needs, family needs, or special request..."
        />
      </div>

      <p className="mt-5 border border-black/10 bg-[#f7f0e5] p-4 text-sm leading-7 text-[#111d18]/65">
        Minimum booking: 4 pax for custom private journeys. For faster response,
        send your enquiry directly through WhatsApp.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button
          type="submit"
          className="inline-flex justify-center rounded-full bg-[#07110e] px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#14241c]"
        >
          Send to WhatsApp
        </button>

        <a
          href={emailHref()}
          className="inline-flex justify-center rounded-full border border-[#07110e]/25 px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] transition hover:bg-[#07110e] hover:text-white"
        >
          Email Us
        </a>
      </div>
    </form>
  );
}
