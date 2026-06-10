"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const destinations = [
  "Bali & Eastern Islands",
  "Java",
  "Sumatra",
  "Kalimantan",
  "Sulawesi",
  "Maluku",
  "Papua",
];

const experiences = [
  "Luxury Stays",
  "Private Transfers",
  "Cultural Heritage",
  "Volcano Sunrise",
  "Island Escapes",
  "Family & Halal-Friendly Travel",
];

const journeys = [
  "Java Discovery Journey",
  "Romantic Indonesia Honeymoon",
  "Bali and Eastern Islands",
  "Custom Private Journey",
];

export function Navbar() {
  const [megaOpen, setMegaOpen] = useState(false);

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50"
      onMouseLeave={() => setMegaOpen(false)}
    >
      <div className="mx-auto flex h-[96px] w-full max-w-[1440px] items-center justify-between px-6 md:px-10">
        <Link href="/" className="relative h-16 w-[260px] md:h-20 md:w-[330px]">
          <Image
            src="/images/visit-indo-travel-logo-transparent.png"
            alt="Visit Indo Travel"
            fill
            priority
            className="object-contain object-left drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
          />
        </Link>

        <nav className="hidden items-center gap-8 rounded-full border border-white/15 bg-black/10 px-7 py-4 backdrop-blur-md lg:flex">
          <Link
            href="/"
            className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/78 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/about-us"
            className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/78 transition hover:text-white"
          >
            About Us
          </Link>

          <button
            onMouseEnter={() => setMegaOpen(true)}
            onClick={() => setMegaOpen((value) => !value)}
            className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/78 transition hover:text-white"
          >
            Explore
          </button>

          <Link
            href="/journeys"
            className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/78 transition hover:text-white"
          >
            Journeys
          </Link>

          <Link
            href="/contact"
            className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/78 transition hover:text-white"
          >
            Contact
          </Link>
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full border border-white/35 bg-black/10 px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md transition hover:bg-white hover:text-[#07110e] md:inline-flex"
        >
          Enquire Now
        </Link>

        <Link
          href="/contact"
          className="rounded-full border border-white/35 bg-black/10 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md md:hidden"
        >
          Enquire
        </Link>
      </div>

      <div
        className={`mx-auto hidden max-w-[1180px] px-6 transition-all duration-300 lg:block ${
          megaOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="grid overflow-hidden rounded-[2rem] border border-white/12 bg-[#050b09]/92 text-white shadow-[0_28px_90px_rgba(0,0,0,.38)] backdrop-blur-2xl lg:grid-cols-[1.1fr_1fr_1fr]">
          <div className="relative min-h-[320px] overflow-hidden p-8">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-45"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1200&q=85')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050b09] via-[#050b09]/75 to-[#050b09]/20" />
            <div className="relative z-10">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d7aa51]">
                Visit Indo Travel
              </p>
              <h3 className="font-display text-[46px] leading-[0.9] tracking-[-0.045em]">
                Explore Indonesia privately.
              </h3>
              <p className="mt-6 max-w-sm text-sm leading-7 text-white/62">
                Discover curated destinations, private journeys, luxury stays,
                transfers, and cultural experiences arranged with local care.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex rounded-full border border-white/35 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] transition hover:bg-white hover:text-[#07110e]"
              >
                Start Planning
              </Link>
            </div>
          </div>

          <div className="border-l border-white/10 p-8">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d7aa51]">
              Destinations
            </p>
            <div className="grid gap-3">
              {destinations.map((item) => (
                <Link
                  key={item}
                  href="/destinations"
                  className="group flex items-center justify-between border-b border-white/8 pb-3 text-sm uppercase tracking-[0.16em] text-white/62 transition hover:text-white"
                >
                  {item}
                  <span className="text-[#d7aa51] opacity-0 transition group-hover:opacity-100">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="border-l border-white/10 p-8">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d7aa51]">
              Experiences
            </p>
            <div className="grid gap-3">
              {experiences.map((item) => (
                <Link
                  key={item}
                  href="/#focus"
                  className="group flex items-center justify-between border-b border-white/8 pb-3 text-sm uppercase tracking-[0.16em] text-white/62 transition hover:text-white"
                >
                  {item}
                  <span className="text-[#d7aa51] opacity-0 transition group-hover:opacity-100">
                    →
                  </span>
                </Link>
              ))}
            </div>

            <p className="mb-4 mt-8 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d7aa51]">
              Journeys
            </p>
            <div className="grid gap-2">
              {journeys.map((item) => (
                <Link
                  key={item}
                  href="/journeys"
                  className="text-sm text-white/55 transition hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
