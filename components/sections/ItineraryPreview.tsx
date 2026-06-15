import Link from "next/link";
import { featuredItinerary } from "@/data/packages";

export function ItineraryPreview() {
  return (
    <section className="relative overflow-hidden bg-[#07110e] py-20 text-white md:py-28">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.14]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542897644-e04428948020?auto=format&fit=crop&w=2400&q=85')",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,14,.98),rgba(7,17,14,.92),rgba(7,17,14,.98))]" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d7aa51]/10 blur-3xl" />
      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="relative w-full px-6 md:px-10 lg:px-14 xl:px-20">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.32em] text-[#d7aa51]">
              Sample Itinerary
            </p>
            <h2 className="font-display max-w-4xl text-[48px] leading-[0.92] tracking-[-0.055em] text-[#fff7e8] md:text-[76px]">
              A seven-day glimpse of how your journey can unfold.
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-3xl text-[16px] leading-8 text-[#d8d1c3] md:text-[18px] md:leading-9">
              Every itinerary can be adjusted based on your arrival point,
              preferred comfort level, pace, and travel style.
            </p>

            <div className="mt-7">
              <Link
                href={`/journeys/${featuredItinerary.slug}`}
                className="inline-flex rounded-full border border-[#fff7e8] bg-[#fff7e8] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.18em] !text-[#07110e] shadow-[0_18px_45px_rgba(255,247,232,.14)] transition hover:border-[#d7aa51] hover:bg-[#d7aa51] hover:!text-[#07110e]"
              >
                Explore Full Journey
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="relative hidden min-h-[620px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-[0_28px_90px_rgba(0,0,0,.22)] backdrop-blur-md lg:block">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80"
              style={{ backgroundImage: `url('${featuredItinerary.image}')` }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,17,14,.2),rgba(7,17,14,.42),rgba(7,17,14,.92))]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,14,.68),rgba(7,17,14,.18))]" />

            <div className="relative z-10 flex min-h-[620px] flex-col justify-end p-8 xl:p-10">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#d7aa51]">
                Featured Route
              </p>
              <h3 className="font-display text-[46px] leading-[0.92] tracking-[-0.045em] text-[#fff7e8] xl:text-[58px]">
                {featuredItinerary.title}
              </h3>
              <p className="mt-5 max-w-md text-[15px] leading-8 text-[#d8d1c3]">
                A flexible route preview designed as a starting point for a
                more personal Indonesia journey.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {featuredItinerary.itineraryPreview.map((item, index) => (
              <article
                key={item.day}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.065] p-6 shadow-[0_22px_70px_rgba(0,0,0,.16)] backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-[#d7aa51]/45 hover:bg-white/[0.09] hover:shadow-[0_32px_100px_rgba(0,0,0,.26)] md:p-7"
              >
                <div className="absolute -right-4 -top-7 font-display text-[96px] leading-none text-white/[0.035] transition group-hover:text-[#d7aa51]/10">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative z-10">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d7aa51]/35 bg-[#d7aa51]/10 text-[18px] text-[#d7aa51] transition group-hover:border-[#d7aa51] group-hover:bg-[#d7aa51] group-hover:text-[#07110e]">
                      ✦
                    </div>

                    <p className="font-display text-[34px] leading-none text-[#d7aa51]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>

                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.26em] text-[#d7aa51]">
                    {item.day}
                  </p>

                  <h3 className="font-display text-[30px] leading-[0.95] tracking-[-0.035em] text-[#fff7e8] md:text-[36px]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[14px] leading-7 text-[#d8d1c3] md:text-[15px] md:leading-8">
                    {item.description}
                  </p>

                  <div className="mt-7 h-px w-full bg-white/10">
                    <div className="h-px w-10 bg-[#d7aa51] transition-all duration-500 group-hover:w-24" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-5 text-center text-[11px] uppercase tracking-[0.2em] text-white/38 md:hidden">
          Swipe itinerary
        </p>
      </div>
    </section>
  );
}
