import Link from "next/link";
import { travelPackages } from "@/data/packages";

export function PackagesSection() {
  return (
    <section id="packages" className="bg-[#f7f0e5] py-24 text-[#111d18] md:py-32">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#a8782d]">
              Pre-Designed Journeys
            </p>
            <h2 className="font-display text-[46px] leading-[0.95] tracking-[-0.045em] md:text-[76px]">
              Packages crafted for private travel.
            </h2>
          </div>

          <p className="max-w-2xl text-[17px] leading-9 text-[#111d18]/65 lg:justify-self-end">
            Start from one of our curated Indonesia journeys, then adjust the
            route, comfort level, duration, and pacing based on your group.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {travelPackages.map((item) => (
            <article
              key={item.slug}
              className="group overflow-hidden border border-black/10 bg-white shadow-[0_24px_80px_rgba(0,0,0,.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_34px_100px_rgba(0,0,0,.14)]"
            >
              <div className="relative h-[320px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/12 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f5dc92]">
                    {item.duration}
                  </p>
                  <h3 className="font-display text-[42px] leading-[0.92] tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-7 md:p-8">
                <div className="mb-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-black/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#111d18]/62">
                    {item.region}
                  </span>
                  <span className="rounded-full border border-black/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#111d18]/62">
                    {item.idealFor}
                  </span>
                </div>

                <p className="text-[16px] leading-8 text-[#111d18]/68">
                  {item.shortDescription}
                </p>

                <div className="mt-7 grid gap-3">
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

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={`/journeys/${item.slug}`}
                    className="inline-flex rounded-full bg-[#07110e] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#a8782d]"
                  >
                    View Package
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex rounded-full border border-black/15 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#07110e] transition hover:border-[#07110e] hover:bg-[#07110e] hover:text-white"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
