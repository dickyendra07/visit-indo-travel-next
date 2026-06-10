import Link from "next/link";
import { featuredItinerary } from "@/data/packages";

export function ItineraryPreview() {
  return (
    <section className="bg-[#07110e] py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-6 md:px-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#d7aa51]">
            Sample Itinerary
          </p>
          <h2 className="font-display text-[46px] leading-[0.95] tracking-[-0.045em] md:text-[76px]">
            A glimpse of how your journey can unfold.
          </h2>
          <p className="mt-7 max-w-xl text-[17px] leading-9 text-white/62">
            Every itinerary can be adjusted based on your arrival point,
            preferred comfort level, pace, and travel style. This preview shows
            the travel flow of our Java Discovery Journey.
          </p>

          <div className="mt-9">
            <Link
              href={`/journeys/${featuredItinerary.slug}`}
              className="inline-flex rounded-full bg-white px-8 py-4 text-[12px] font-bold uppercase tracking-[0.18em] !text-[#07110e] transition hover:bg-[#f7f0e5]"
            >
              Explore Full Journey
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-[28px] top-0 hidden h-full w-px bg-white/12 md:block" />

          <div className="grid gap-5">
            {featuredItinerary.itineraryPreview.map((item, index) => (
              <article
                key={item.day}
                className="relative border border-white/10 bg-white/[0.055] p-7 backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-[#d7aa51]/45 hover:bg-white/[0.075] md:ml-16"
              >
                <div className="absolute -left-[68px] top-7 hidden h-14 w-14 items-center justify-center rounded-full border border-white/14 bg-[#07110e] text-[12px] font-bold text-[#d7aa51] md:flex">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#d7aa51]">
                  {item.day}
                </p>
                <h3 className="font-display text-[34px] leading-none">
                  {item.title}
                </h3>
                <p className="mt-5 text-[15px] leading-8 text-white/62">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
