import Link from "next/link";
import { travelPackages } from "@/data/packages";

export function PackagesSection() {
  return (
    <section id="packages" className="bg-[#f7f0e5] py-24 text-[#111d18] md:py-32">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="mb-10 grid gap-6 md:mb-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#a8782d] md:mb-5 md:text-[12px]">
              Pre-Designed Journeys
            </p>
            <h2 className="font-display text-[42px] leading-[0.95] tracking-[-0.045em] md:text-[76px]">
              Packages crafted for private travel.
            </h2>
          </div>

          <p className="max-w-2xl text-[15px] leading-8 text-[#111d18]/65 md:text-[17px] md:leading-9 lg:justify-self-end">
            Start from one of our curated Indonesia journeys, then adjust the
            route, comfort level, duration, and pacing based on your group.
          </p>
        </div>

        <div className="mobile-scroll md:grid md:grid-cols-2 md:gap-6">
          {travelPackages.map((item) => (
            <article
              key={item.slug}
              className="mobile-snap-card group overflow-hidden border border-black/10 bg-white shadow-[0_24px_80px_rgba(0,0,0,.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_34px_100px_rgba(0,0,0,.14)]"
            >
              <div className="relative h-[250px] overflow-hidden md:h-[320px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/12 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 md:bottom-6 md:left-6 md:right-6">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f5dc92] md:text-[11px]">
                    {item.duration}
                  </p>
                  <h3 className="font-display text-[34px] leading-[0.92] tracking-[-0.04em] text-white md:text-[42px]">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 md:p-8">
                <div className="mb-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-black/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#111d18]/62 md:px-4 md:text-[11px]">
                    {item.region}
                  </span>
                  <span className="rounded-full border border-black/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#111d18]/62 md:px-4 md:text-[11px]">
                    {item.idealFor}
                  </span>
                </div>

                <p className="text-[14px] leading-7 text-[#111d18]/68 md:text-[16px] md:leading-8">
                  {item.shortDescription}
                </p>

                <div className="mt-6 hidden gap-3 md:grid">
                  {item.highlights.slice(0, 3).map((highlight) => (
                    <div
                      key={highlight}
                      className="flex gap-3 text-[14px] leading-7 text-[#111d18]/65"
                    >
                      <span className="mt-1 text-[#a8782d]">✦</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3 md:mt-8">
                  <Link
                    href={`/journeys/${item.slug}`}
                    className="inline-flex rounded-full bg-[#07110e] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#a8782d] md:px-6 md:text-[11px]"
                  >
                    View Package
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex rounded-full border border-black/15 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#07110e] transition hover:border-[#07110e] hover:bg-[#07110e] hover:text-white md:px-6 md:text-[11px]"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-4 text-center text-[11px] uppercase tracking-[0.2em] text-[#111d18]/42 md:hidden">
          Swipe to explore packages
        </p>
      </div>
    </section>
  );
}
