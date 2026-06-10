import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { destinations } from "@/data/destinations";
import { travelPackages } from "@/data/packages";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return destinations.map((item) => ({
    slug: item.slug,
  }));
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = destinations.find((destination) => destination.slug === slug);

  if (!item) {
    notFound();
  }

  const relatedPackages = travelPackages.filter((pkg) =>
    pkg.region.toLowerCase().includes(item.title.toLowerCase().split(" ")[0])
  );

  const packagesToShow = relatedPackages.length > 0 ? relatedPackages : travelPackages.slice(0, 2);

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
                {item.regionLabel}
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
                  Plan This Destination
                </Link>
                <Link
                  href="/destinations"
                  className="inline-flex rounded-full border border-white/35 bg-black/10 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md transition hover:bg-white hover:!text-[#07110e]"
                >
                  View All Destinations
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f0e5] py-24 text-[#111d18] md:py-32">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-6 md:px-10 lg:grid-cols-[0.88fr_1.12fr]">
            <div>
              <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#a8782d]">
                Destination Character
              </p>
              <h2 className="font-display text-[46px] leading-[0.95] tracking-[-0.045em] md:text-[72px]">
                Best for selected travel styles.
              </h2>
            </div>

            <div className="detail-compact-grid overflow-hidden border border-black/10 bg-black/10 md:grid md:grid-cols-2 md:gap-px">
              {item.bestFor.map((best) => (
                <div key={best} className="bg-white p-8">
                  <p className="mb-10 text-2xl text-[#a8782d]">✦</p>
                  <p className="font-display text-[30px] leading-none">
                    {best}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-6 md:px-10 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="lg:sticky lg:top-32">
              <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#d7aa51]">
                Experiences
              </p>
              <h2 className="font-display text-[46px] leading-[0.95] tracking-[-0.045em] md:text-[72px]">
                What to experience here.
              </h2>
            </div>

            <div className="detail-mobile-scroll md:grid md:gap-5">
              {item.experiences.map((experience, index) => (
                <article key={experience} className="detail-mobile-card border border-white/10 bg-white/[0.055] p-5 md:p-7">
                  <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.26em] text-[#d7aa51]">
                    Experience {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-[38px] leading-none">
                    {experience}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f0e5] py-24 text-[#111d18] md:py-32">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-6 md:px-10 lg:grid-cols-[0.88fr_1.12fr]">
            <div>
              <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#a8782d]">
                Sample Routes
              </p>
              <h2 className="font-display text-[46px] leading-[0.95] tracking-[-0.045em] md:text-[72px]">
                Possible route directions.
              </h2>
            </div>

            <div className="detail-mobile-scroll md:grid md:gap-4">
              {item.sampleRoutes.map((route) => (
                <div key={route} className="detail-mobile-card border border-black/10 bg-white p-5 md:p-7">
                  <p className="font-display text-[34px] leading-none">
                    {route}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <div className="mb-12 max-w-3xl">
              <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#d7aa51]">
                Related Journeys
              </p>
              <h2 className="font-display text-[46px] leading-[0.95] tracking-[-0.045em] md:text-[72px]">
                Start from a curated package.
              </h2>
            </div>

            <div className="detail-mobile-scroll md:grid md:grid-cols-2 md:gap-6">
              {packagesToShow.map((pkg) => (
                <Link
                  key={pkg.slug}
                  href={`/journeys/${pkg.slug}`}
                  className="detail-mobile-card group overflow-hidden border border-white/10 bg-white/[0.055] transition hover:-translate-y-2 hover:border-[#d7aa51]/45"
                >
                  <div className="relative h-[300px] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${pkg.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/14 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f5dc92]">
                        {pkg.duration}
                      </p>
                      <h3 className="font-display text-[38px] leading-[0.92] tracking-[-0.04em] text-white">
                        {pkg.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[15px] leading-8 text-white/62">
                      {pkg.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
