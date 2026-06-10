import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const values = [
  {
    title: "Private By Design",
    text: "Every journey is arranged for your group only, with no shared schedule and no rushed itinerary.",
  },
  {
    title: "Local Understanding",
    text: "Our routes are shaped by practical destination knowledge, timing, comfort, and real travel flow.",
  },
  {
    title: "Comfort First",
    text: "We focus on private drivers, curated stays, flexible pacing, and details that make travel feel effortless.",
  },
  {
    title: "Meaningful Travel",
    text: "Indonesia is not only a destination. It is culture, landscape, hospitality, and moments that should feel personal.",
  },
];

const process = [
  "Share your travel dates, group size, and preferred style.",
  "We design a private route and itinerary direction.",
  "You review the journey, comfort level, and travel details.",
  "Travel across Indonesia with direct local support.",
];

export default function AboutUsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#07110e] text-white">
        <section className="relative min-h-[720px] overflow-hidden pt-32">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=2400&q=90')",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.76),rgba(0,0,0,.42),rgba(0,0,0,.18))]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,17,14,.12),rgba(7,17,14,.88))]" />

          <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1240px] items-center px-6 md:px-10">
            <div className="max-w-4xl">
              <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.34em] text-[#d7aa51]">
                About Visit Indo Travel
              </p>
              <h1 className="mobile-hero-title font-display text-[58px] leading-[0.9] tracking-[-0.055em] md:text-[94px]">
                A refined way to experience Indonesia.
              </h1>
              <p className="mt-8 max-w-2xl text-[18px] leading-9 text-white/72">
                We design private journeys across Indonesia for travelers who
                value comfort, privacy, local insight, and meaningful travel
                moments arranged with care.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f0e5] py-24 text-[#111d18] md:py-32">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-6 md:px-10 lg:grid-cols-[.86fr_1.14fr] lg:items-start">
            <div>
              <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#a8782d]">
                Our Story
              </p>
              <h2 className="mobile-section-title font-display text-[46px] leading-[0.95] tracking-[-0.045em] md:text-[74px]">
                Indonesia, arranged personally.
              </h2>
            </div>

            <div className="space-y-5 text-[18px] leading-9 text-[#111d18]/68">
              <p>
                Visit Indo Travel was created to help international travelers
                explore Indonesia in a more private, comfortable, and considered
                way. Instead of offering generic tours, we design journeys
                around each group’s travel style, timing, pace, and comfort
                preference.
              </p>
              <p>
                Our work combines destination knowledge, private transport,
                curated stays, cultural routes, island escapes, family-friendly
                planning, and direct communication. The result is a journey that
                feels personal from the first enquiry to the final transfer.
              </p>
              <p>
                Whether the journey begins in Bali, Java, Komodo, Yogyakarta,
                Bromo, or beyond, our goal is simple: to make Indonesia feel
                effortless, beautiful, and meaningful.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <div className="mb-14 max-w-3xl">
              <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#d7aa51]">
                What We Believe
              </p>
              <h2 className="mobile-section-title font-display text-[46px] leading-[0.95] tracking-[-0.045em] md:text-[72px]">
                Luxury is not noise. It is comfort, timing, and care.
              </h2>
            </div>

            <div className="mobile-two-grid overflow-hidden border border-white/10 bg-white/10 md:grid md:grid-cols-4 md:gap-px">
              {values.map((item) => (
                <article key={item.title} className="bg-[#07110e] p-8 md:p-9">
                  <p className="mb-12 text-2xl text-[#d7aa51]">✦</p>
                  <h3 className="font-display text-[32px] leading-none">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-[15px] leading-8 text-white/58">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f0e5] py-24 text-[#111d18] md:py-32">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-6 md:px-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#a8782d]">
                How We Work
              </p>
              <h2 className="mobile-section-title font-display text-[46px] leading-[0.95] tracking-[-0.045em] md:text-[72px]">
                From first idea to private arrival.
              </h2>
            </div>

            <div className="mobile-page-scroll divide-y divide-black/10 border-y border-black/10 md:block">
              {process.map((item, index) => (
                <div key={item} className="mobile-page-card grid gap-4 border border-black/10 bg-white p-5 md:border-0 md:bg-transparent md:p-0 md:py-7 md:grid-cols-[80px_1fr]">
                  <p className="font-display text-[42px] leading-none text-[#a8782d]">
                    0{index + 1}
                  </p>
                  <p className="text-[18px] leading-8 text-[#111d18]/70">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-[980px] px-6 text-center md:px-10">
            <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#d7aa51]">
              Begin Your Journey
            </p>
            <h2 className="font-display text-[48px] leading-[0.92] tracking-[-0.05em] md:text-[78px]">
              Tell us how you want Indonesia to feel.
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-[17px] leading-9 text-white/62">
              Share your travel dates, destination ideas, group size, and style.
              Our team will help shape the right private journey.
            </p>
            <div className="mt-9">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-white px-8 py-4 text-[12px] font-bold uppercase tracking-[0.18em] !text-[#07110e] transition hover:bg-[#f7f0e5]"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
