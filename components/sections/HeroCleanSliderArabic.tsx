"use client";

import Link from "next/link";
import { useState } from "react";

const slides = [
  {
    eyebrow: "رحلات خاصة في إندونيسيا",
    title: "رحلات فاخرة عبر إندونيسيا",
    text: "رحلات خاصة، إقامات مختارة، سائقون خاصون، وتجارب مصممة حسب أسلوب سفرك.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=2400&q=90",
    label: "رحلات خاصة في إندونيسيا",
  },
  {
    eyebrow: "ثقافة وتراث",
    title: "اكتشف جاوة برؤية محلية",
    text: "معابد تاريخية، مسارات ثقافية، براكين، وتجارب خاصة بترتيب مريح.",
    image:
      "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=2400&q=90",
    label: "الثقافة والتراث",
  },
  {
    eyebrow: "جزر وشواطئ",
    title: "بالي، كومودو وما بعدها",
    text: "اكتشف الجزر الإندونيسية مع مسارات خاصة، قوارب مختارة، وتجارب ساحلية مميزة.",
    image:
      "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=2400&q=90",
    label: "الجزر والشواطئ",
  },
];

export function HeroCleanSliderArabic() {
  const [active, setActive] = useState(0);

  const slide = slides[active];

  const nextSlide = () => {
    setActive((value) => (value + 1) % slides.length);
  };

  const prevSlide = () => {
    setActive((value) => (value - 1 + slides.length) % slides.length);
  };

  return (
    <section
      dir="rtl"
      className="relative w-full max-w-[100vw] overflow-hidden bg-[#07110e] text-white md:min-h-screen"
    >
      {slides.map((item, index) => (
        <div
          key={item.title}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
            index === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
          }`}
          style={{ backgroundImage: `url('${item.image}')` }}
        />
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.18),rgba(0,0,0,.50),rgba(0,0,0,.88))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,17,14,.12),rgba(7,17,14,.42),rgba(7,17,14,.92))]" />

      <div className="relative z-10 mx-auto flex min-h-[760px] w-full max-w-[1240px] items-center px-6 text-right md:px-10">
        <div className="mr-auto max-w-4xl pt-24">
          <p className="mb-6 text-[12px] font-bold uppercase tracking-[0.34em] text-[#d7aa51] drop-shadow-[0_4px_18px_rgba(0,0,0,.55)]">
            {slide.eyebrow}
          </p>

          <h1 className="mobile-hero-title font-display text-[58px] leading-[1.05] tracking-[-0.045em] text-[#fff7e8] drop-shadow-[0_10px_42px_rgba(0,0,0,.55)] md:text-[92px]">
            {slide.title}
          </h1>

          <p className="mt-8 max-w-2xl text-[18px] leading-9 !text-[#f3eadb] drop-shadow-[0_6px_24px_rgba(0,0,0,.45)]">
            {slide.text}
          </p>

          <div className="mt-9 flex flex-wrap justify-end gap-4">
            <Link
              href="/ar/journeys"
              className="inline-flex rounded-full border border-[#fff7e8] bg-[#fff7e8] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.18em] !text-[#07110e] shadow-[0_18px_45px_rgba(255,247,232,.20)] transition duration-500 ease-out hover:border-[#d7aa51] hover:bg-[#d7aa51] hover:!text-[#07110e]"
            >
              استكشف الرحلات
            </Link>

            <Link
              href="/ar/contact"
              className="inline-flex rounded-full border border-white/70 bg-[#07110e]/55 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.18em] !text-[#fff7e8] shadow-[0_18px_45px_rgba(0,0,0,.32)] backdrop-blur-md transition duration-500 ease-out hover:border-[#fff7e8] hover:bg-[#fff7e8] hover:!text-[#07110e]"
            >
              اطلب استشارة
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-6 right-6 z-20 mx-auto hidden max-w-[1240px] items-end justify-between gap-8 md:flex">
        <div className="rounded-[1.5rem] border border-white/12 bg-black/24 px-6 py-5 shadow-[0_18px_60px_rgba(0,0,0,.28)] backdrop-blur-md">
          <div className="flex gap-12">
            {slides.map((item, index) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setActive(index)}
                className="group text-right"
              >
                <span
                  className={`mb-4 block h-[3px] rounded-full transition-all duration-500 ${
                    index === active
                      ? "w-32 bg-[#fff7e8]"
                      : "w-20 bg-white/35 group-hover:bg-white/65"
                  }`}
                />

                <span
                  className={`text-[11px] font-bold uppercase tracking-[0.2em] transition duration-500 ${
                    index === active
                      ? "!text-[#fff7e8]"
                      : "!text-white/72 group-hover:!text-white"
                  }`}
                >
                  0{index + 1} / {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={prevSlide}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/55 bg-black/35 text-[22px] !text-white shadow-[0_16px_40px_rgba(0,0,0,.25)] backdrop-blur-md transition duration-500 hover:border-[#fff7e8] hover:bg-[#fff7e8] hover:!text-[#07110e]"
            aria-label="Previous slide"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/55 bg-black/35 text-[22px] !text-white shadow-[0_16px_40px_rgba(0,0,0,.25)] backdrop-blur-md transition duration-500 hover:border-[#fff7e8] hover:bg-[#fff7e8] hover:!text-[#07110e]"
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
