import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { travelPackages } from "@/data/packages";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return travelPackages.map((item) => ({
    slug: item.slug,
  }));
}

export default async function JourneyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = travelPackages.find((pkg) => pkg.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="bg-[#07110e] text-white">
        <section className="relative min-h-[760px] overflow-hidden pt-32">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${item.image}')` }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.82),rgba(0,0,0,.5),rgba(0,0,0,.18))]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,17,14,.12),rgba(7,17,14,.92))]" />

          <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1240px] items-center px-6 md:px-10">
            <div className="max-w-4xl">
              <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.34em] text-[#d7aa51]">
                {item.duration} / {item.region}
              </p>
              <h1 className="font-display text-[58px] leading-[0.9] tracking-[-0.055em] md:text-[96px]">
                {item.title}
              </h1>
              <p className="mt-8 max-w-2xl text-[18px] leading-9 text-white/76">
                {item.shortDescription}
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-white px-8 py-4 text-[12px] font-bold uppercase tracking-[0.18em] !text-[#07110e] transition hover:bg-[#f7f0e5]"
                >
                  Enquire This Journey
                </Link>
                <Link
                  href="/journeys"
                  className="inline-flex rounded-full border border-white/35 bg-black/10 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md transition hover:bg-white hover:!text-[#07110e]"
                >
                  View All Journeys
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f0e5] py-24 text-[#111d18] md:py-32">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#a8782d]">
                Journey Overview
              </p>
              <h2 className="font-display text-[46px] leading-[0.95] tracking-[-0.045em] md:text-[72px]">
                Designed as a private starting point.
              </h2>
              <p className="mt-7 text-[17px] leading-9 text-[#111d18]/66">
                This package is a curated direction. We can adjust the hotel
                style, trip duration, transfer flow, activity intensity, and
                daily rhythm based on your group.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="border border-black/10 bg-white p-7">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#a8782d]">
                  Duration
                </p>
                <p className="font-display text-[36px] leading-none">
                  {item.duration}
                </p>
              </div>

              <div className="border border-black/10 bg-white p-7">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#a8782d]">
                  Region
                </p>
                <p className="font-display text-[36px] leading-none">
                  {item.region}
                </p>
              </div>

              <div className="border border-black/10 bg-white p-7">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#a8782d]">
                  Ideal For
                </p>
                <p className="font-display text-[36px] leading-none">
                  {item.idealFor}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-6 md:px-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#d7aa51]">
                Highlights
              </p>
              <h2 className="font-display text-[46px] leading-[0.95] tracking-[-0.045em] md:text-[72px]">
                What makes this journey special.
              </h2>
            </div>

            <div className="detail-compact-grid overflow-hidden border border-white/10 bg-white/10 md:grid md:grid-cols-2 md:gap-px">
              {item.highlights.map((highlight) => (
                <div key={highlight} className="bg-[#07110e] p-8">
                  <p className="mb-10 text-2xl text-[#d7aa51]">✦</p>
                  <p className="text-[18px] leading-8 text-white/70">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f0e5] py-24 text-[#111d18] md:py-32">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-6 md:px-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#a8782d]">
                Itinerary Preview
              </p>
              <h2 className="font-display text-[46px] leading-[0.95] tracking-[-0.045em] md:text-[72px]">
                A sample travel flow.
              </h2>
              <p className="mt-7 text-[17px] leading-9 text-[#111d18]/66">
                This day-by-day preview is flexible. Final itinerary can be
                adjusted after we understand your arrival time, hotel preference,
                and travel pace.
              </p>
            </div>

            <div className="detail-mobile-scroll md:grid md:gap-5">
              {item.itineraryPreview.map((day, index) => (
                <article
                  key={day.day}
                  className="detail-mobile-card border border-black/10 bg-white p-5 shadow-[0_18px_70px_rgba(0,0,0,.06)] md:p-7"
                >
                  <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.26em] text-[#a8782d]">
                    {day.day}
                  </p>
                  <div className="grid gap-5 md:grid-cols-[80px_1fr]">
                    <p className="font-display text-[48px] leading-none text-[#a8782d]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <div>
                      <h3 className="font-display text-[34px] leading-none">
                        {day.title}
                      </h3>
                      <p className="mt-5 text-[16px] leading-8 text-[#111d18]/66">
                        {day.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-[980px] px-6 text-center md:px-10">
            <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#d7aa51]">
              Plan This Journey
            </p>
            <h2 className="font-display text-[48px] leading-[0.92] tracking-[-0.05em] md:text-[78px]">
              Ready to personalize this route?
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-[17px] leading-9 text-white/62">
              Share your travel dates, destination ideas, hotel preference, and
              group size. We will help turn this package into your private
              Indonesia journey.
            </p>
            <div className="mt-9">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-white px-8 py-4 text-[12px] font-bold uppercase tracking-[0.18em] !text-[#07110e] transition hover:bg-[#f7f0e5]"
              >
                Enquire This Package
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
