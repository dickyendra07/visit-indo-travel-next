import Link from "next/link";
import { travelPackages } from "@/data/packages";

export function PackagesSection() {
  return (
    <section id="packages" className="relative overflow-hidden bg-[#f7f0e5] py-20 text-[#111d18] md:py-28">
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d7aa51]/12 blur-3xl" />
      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#07110e]/5 blur-3xl" />

      <div className="relative w-full px-6 md:px-10 lg:px-14 xl:px-20">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.32em] text-[#a8782d]">
              Pre-Designed Journeys
            </p>
            <h2 className="font-display max-w-3xl text-[48px] leading-[0.92] tracking-[-0.055em] text-[#07110e] md:text-[76px]">
              Packages crafted for private travel.
            </h2>
          </div>

          <p className="max-w-3xl text-[17px] leading-9 text-[#28352e]/72 md:text-[19px] md:leading-10 lg:justify-self-end">
            Start from one of our curated Indonesia journeys, then adjust the route, comfort level, duration, and pacing based on your group.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {travelPackages.map((item) => (
            <article
              key={item.slug}
              className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_24px_80px_rgba(7,17,14,.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_34px_110px_rgba(7,17,14,.14)]"
            >
              <div className="relative h-[260px] overflow-hidden xl:h-[300px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/36 to-black/5" />

                <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#fff7e8] backdrop-blur-md">
                    {item.duration}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[13px] text-[#d7aa51] backdrop-blur-md">
                    ✦
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-display text-[34px] leading-[0.92] tracking-[-0.045em] text-[#fff7e8] drop-shadow-[0_4px_18px_rgba(0,0,0,.65)] xl:text-[38px]">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 xl:p-6">
                <div className="mb-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-black/10 bg-[#f7f0e5] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[#28352e]/68">
                    {item.region}
                  </span>
                  <span className="rounded-full border border-black/10 bg-[#f7f0e5] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[#28352e]/68">
                    Private Trip
                  </span>
                </div>

                <p className="line-clamp-3 text-[14px] leading-7 text-[#28352e]/70">
                  {item.shortDescription}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/journeys/${item.slug}`}
                    className="inline-flex rounded-full bg-[#07110e] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] !text-[#fff7e8] shadow-[0_14px_32px_rgba(7,17,14,.18)] transition hover:bg-[#a8782d] hover:!text-[#fff7e8]"
                  >
                    View Package
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex rounded-full border border-black/15 bg-white px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] !text-[#07110e] transition hover:border-[#07110e] hover:bg-[#07110e] hover:!text-[#fff7e8]"
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
