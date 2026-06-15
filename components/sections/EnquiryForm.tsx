"use client";

import { FormEvent, useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  whatsapp: string;
  country: string;
  destination: string;
  travelers: string;
  month: string;
  request: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  whatsapp: "",
  country: "",
  destination: "",
  travelers: "",
  month: "",
  request: "",
};

const whatsappNumber = "6281220455846";
const businessEmail = "info@visitindotravel.com";

const destinations = [
  "Java Discovery Journey",
  "Bali Luxury Escape",
  "Komodo & Eastern Islands",
  "Romantic Indonesia Honeymoon",
  "Custom Indonesia Journey",
];

export function EnquiryForm() {
  const [form, setForm] = useState<FormState>(initialForm);

  function updateField(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  const formattedMessage = useMemo(() => {
    return [
      "Hello Visit Indo Travel Team,",
      "",
      "I would like to request a private Indonesia journey.",
      "",
      "— Travel Request Details —",
      `Name: ${form.name || "-"}`,
      `Email: ${form.email || "-"}`,
      `WhatsApp: ${form.whatsapp || "-"}`,
      `Country: ${form.country || "-"}`,
      `Preferred Destination: ${form.destination || "-"}`,
      `Number of Travelers: ${form.travelers || "-"}`,
      `Travel Month: ${form.month || "-"}`,
      "",
      "Travel Request:",
      form.request || "-",
      "",
      "Please help me prepare a suitable private itinerary direction and quotation.",
      "",
      "Thank you.",
    ].join("\n");
  }, [form]);

  function submitToWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      formattedMessage
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  const emailHref = `mailto:${businessEmail}?subject=${encodeURIComponent(
    "Private Indonesia Journey Request"
  )}&body=${encodeURIComponent(formattedMessage)}`;

  const inputClass =
    "h-14 w-full rounded-2xl border border-black/10 bg-[#f7f0e5] px-4 text-[14px] text-[#07110e] outline-none transition placeholder:text-[#07110e]/38 focus:border-[#a8782d] focus:bg-white focus:shadow-[0_12px_34px_rgba(168,120,45,.1)]";

  const labelClass =
    "mb-2 block text-[10px] font-bold uppercase tracking-[0.26em] text-[#8d6a2e]";

  return (
    <form
      onSubmit={submitToWhatsApp}
      className="relative z-10 overflow-hidden rounded-[2rem] border border-black/10 bg-white p-5 shadow-[0_30px_90px_rgba(7,17,14,.1)] md:p-7 lg:p-8"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#d7aa51]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-28 h-64 w-64 rounded-full bg-[#07110e]/5 blur-3xl" />

      <div className="relative z-10">
        <div className="mb-7 flex flex-col gap-4 border-b border-black/10 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#a8782d]">
              Private Journey Request
            </p>
            <h3 className="font-display text-[36px] leading-[0.95] tracking-[-0.04em] text-[#07110e] md:text-[46px]">
              Tell us your travel plan.
            </h3>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d7aa51]/35 bg-[#f7f0e5] text-[#a8782d]">
            ✦
          </div>
        </div>

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
              required
            >
              <option value="">Select destination</option>
              {destinations.map((destination) => (
                <option key={destination} value={destination}>
                  {destination}
                </option>
              ))}
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
            className="min-h-36 w-full resize-none rounded-2xl border border-black/10 bg-[#f7f0e5] px-4 py-4 text-[14px] leading-7 text-[#07110e] outline-none transition placeholder:text-[#07110e]/38 focus:border-[#a8782d] focus:bg-white focus:shadow-[0_12px_34px_rgba(168,120,45,.1)]"
            name="request"
            value={form.request}
            onChange={updateField}
            placeholder="Tell us your preferred travel style, hotel preference, destinations, halal-friendly needs, family needs, or special request..."
          />
        </div>

        <div className="mt-5 rounded-[1.5rem] border border-[#d7aa51]/25 bg-[#f7f0e5] p-5">
          <p className="text-[13px] leading-7 text-[#28352e]/72">
            Minimum booking: <strong className="text-[#07110e]">4 pax</strong>{" "}
            for custom private journeys. For faster response, send your enquiry
            directly through WhatsApp.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <button
            type="submit"
            className="inline-flex justify-center rounded-full border border-[#07110e] bg-[#07110e] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] !text-[#fff7e8] shadow-[0_18px_45px_rgba(7,17,14,.16)] transition hover:border-[#a8782d] hover:bg-[#a8782d] hover:!text-[#fff7e8]"
          >
            Send to WhatsApp
          </button>

          <a
            href={emailHref}
            className="inline-flex justify-center rounded-full border border-black/15 bg-white px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] !text-[#07110e] transition hover:border-[#07110e] hover:bg-[#07110e] hover:!text-[#fff7e8]"
          >
            Email Us
          </a>
        </div>
      </div>
    </form>
  );
}
