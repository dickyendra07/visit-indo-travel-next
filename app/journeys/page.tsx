import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { travelPackages } from "@/data/packages";

export default function JourneysPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#07110e] text-white">
        <section className="relative min-h-[680px] overflow-hidden pt-32">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=2400&q=90')",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.78),rgba(0,0,0,.46),rgba(0,0,0,.18))]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,17,14,.16),rgba(7,17,14,.92))]" />

          <div className="relative z-10 mx-auto flex min-h-[680px] max-w-[1240px] items-center px-6 md:px-10">
            <div className="max-w-4xl">
              <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.34em] text-[#d7aa51]">
                Private Indonesia Journeys
              </p>
              <h1 className="font-display text-[58px] leading-[0.9] tracking-[-0.055em] md:text-[94px]">
                Curated packages, refined around you.
              </h1>
              <p className="mt-8 max-w-2xl text-[18px] leading-9 text-white/72">
                Start with one of our pre-designed journeys, then adjust the
                route, duration, comfort level, and pacing based on your group.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f0e5] py-24 text-[#111d18] md:py-32">
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <div className="mb-14 max-w-3xl">
              <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#a8782d]">
                Explore Packages
              </p>
              <h2 className="font-display text-[46px] leading-[0.95] tracking-[-0.045em] md:text-[76px]">
                Choose a journey direction.
              </h2>
              <p className="mt-7 text-[17px] leading-9 text-[#111d18]/65">
                Each package below is a starting point. We can personalize the
                route, hotels, experiences, transport, and daily pace after your
                enquiry.
              </p>
            </div>

            <div className="grid gap-7 md:grid-cols-2">
              {travelPackages.map((item) => (
                <article
                  key={item.slug}
                  className="group overflow-hidden border border-black/10 bg-white shadow-[0_24px_80px_rgba(0,0,0,.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_34px_100px_rgba(0,0,0,.14)]"
                >
                  <div className="relative h-[340px] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/18 to-transparent" />
                    <div className="absolute bottom-7 left-7 right-7">
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
                      {item.highlights.map((highlight) => (
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
                        View Details
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

        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-[980px] px-6 text-center md:px-10">
            <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#d7aa51]">
              Custom Private Trip
            </p>
            <h2 className="font-display text-[48px] leading-[0.92] tracking-[-0.05em] md:text-[78px]">
              Need a journey made from scratch?
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-[17px] leading-9 text-white/62">
              Tell us your preferred destinations, travel dates, group size,
              hotel style, and budget direction. We will help create a private
              route around your needs.
            </p>
            <div className="mt-9">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-white px-8 py-4 text-[12px] font-bold uppercase tracking-[0.18em] !text-[#07110e] transition hover:bg-[#f7f0e5]"
              >
                Request Custom Journey
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
