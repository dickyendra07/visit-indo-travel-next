import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { HeroCleanSlider } from "@/components/sections/HeroCleanSlider";
import { TripSearchBar } from "@/components/sections/TripSearchBar";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { DestinationExplorer } from "@/components/sections/DestinationExplorer";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { ItineraryPreview } from "@/components/sections/ItineraryPreview";

const focusItems = [
  {
    title: "Luxury Stays",
    text: "Selected villas, boutique hotels, and refined accommodation recommendations for private travelers.",
  },
  {
    title: "Private Transfers",
    text: "Airport pickup, personal drivers, intercity transfers, and comfortable ground arrangements.",
  },
  {
    title: "Curated Experiences",
    text: "Cultural routes, scenic landscapes, local dining, nature escapes, and special-access moments.",
  },
];

const journeys = [
  {
    title: "Java Discovery Journey",
    duration: "7 Days 6 Nights",
    image:
      "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Romantic Indonesia Honeymoon",
    duration: "6 Days 5 Nights",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Bali and Eastern Islands",
    duration: "Custom Journey",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=85",
  },
];

const regions = [
  "Bali & Eastern Islands",
  "Java",
  "Sumatra",
  "Kalimantan",
  "Sulawesi",
  "Maluku",
  "Papua",
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#07110e] text-white">
        <HeroCleanSlider />
        <TripSearchBar />

        <section id="story" className="-mt-10 bg-[#f7f0e5] pb-24 pt-10 text-[#111d18] md:pb-32 md:pt-16">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-6 md:px-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#a8782d]">
                Discover The Story
              </p>
              <h2 className="font-display text-[46px] leading-[0.95] tracking-[-0.045em] md:text-[72px]">
                A personal way to discover Indonesia.
              </h2>
            </div>

            <div>
              <p className="text-[19px] leading-9 text-[#111d18]/68">
                Visit Indo Travel designs private journeys into and within
                Indonesia for travelers who value comfort, privacy, timing, and
                meaningful local insight. From arrival to departure, every route
                can be shaped around your group, pace, preferred stays, and
                travel style.
              </p>

              <div className="mt-9">
                <Link
                  href="#contact"
                  className="inline-flex rounded-full border border-[#111d18]/25 px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] transition hover:bg-[#111d18] hover:text-white"
                >
                  Book An Appointment
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="focus" className="bg-[#07110e] py-24 md:py-32">
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <div className="mb-14 max-w-3xl">
              <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#d7aa51]">
                Our Focus
              </p>
              <h2 className="font-display text-[46px] leading-[0.95] tracking-[-0.045em] md:text-[72px]">
                Elegant travel planning, arranged with local care.
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-3">
              {focusItems.map((item) => (
                <article key={item.title} className="bg-[#07110e] p-8 md:p-10">
                  <p className="mb-12 text-2xl text-[#d7aa51]">✦</p>
                  <h3 className="font-display text-[34px] leading-none">
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
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <div className="mb-14 grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
              <div>
                <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#a8782d]">
                  Why Travel With Us
                </p>
                <h2 className="font-display text-[46px] leading-[0.95] tracking-[-0.045em] md:text-[72px]">
                  Quiet luxury, thoughtful planning.
                </h2>
              </div>
              <p className="max-w-2xl text-[17px] leading-9 text-[#111d18]/65">
                We focus on the details that make travel feel effortless:
                timing, routing, privacy, comfort, and direct communication
                before and during your journey.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-4">
              {[
                ["01", "Private By Design", "Your journey is arranged for your group, not a shared schedule."],
                ["02", "Local Expertise", "Routes are shaped with practical destination knowledge and local support."],
                ["03", "Seamless Transfers", "Private cars, airport pickup, and intercity transfers can be arranged."],
                ["04", "Family-Friendly", "Travel pacing, halal-friendly needs, and comfort requests can be considered."],
              ].map(([number, title, text]) => (
                <article key={title} className="bg-[#f7f0e5] p-7 md:p-9">
                  <p className="font-display text-[52px] leading-none text-[#a8782d]/45">
                    {number}
                  </p>
                  <h3 className="mt-8 font-display text-[30px] leading-none">
                    {title}
                  </h3>
                  <p className="mt-5 text-[15px] leading-8 text-[#111d18]/62">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#07110e] py-24 md:py-32">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-6 md:px-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#d7aa51]">
                How It Works
              </p>
              <h2 className="font-display text-[46px] leading-[0.95] tracking-[-0.045em] md:text-[72px]">
                From first enquiry to private arrival.
              </h2>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {[
                ["Tell Us Your Travel Style", "Share your dates, group size, preferred destinations, comfort level, and special requests."],
                ["We Design Your Route", "Our team prepares a private itinerary direction with suitable pacing, stays, and transfers."],
                ["Confirm Your Journey", "Once the route is aligned, we finalize the travel details and booking direction."],
                ["Travel With Local Support", "Enjoy Indonesia with private assistance and direct communication during your journey."],
              ].map(([title, text], index) => (
                <div key={title} className="grid gap-6 py-7 md:grid-cols-[80px_1fr]">
                  <p className="font-display text-[42px] leading-none text-[#d7aa51]">
                    0{index + 1}
                  </p>
                  <div>
                    <h3 className="font-display text-[30px] leading-none text-white">
                      {title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-8 text-white/58">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="journeys" className="bg-[#f7f0e5] py-24 text-[#111d18] md:py-32">
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#a8782d]">
                  Featured Journeys
                </p>
                <h2 className="font-display text-[46px] leading-[0.95] tracking-[-0.045em] md:text-[72px]">
                  Pre-designed journeys.
                </h2>
              </div>

              <Link
                href="#contact"
                className="w-fit rounded-full border border-[#111d18]/25 px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] transition hover:bg-[#111d18] hover:text-white"
              >
                Explore More
              </Link>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {journeys.map((item) => (
                <article key={item.title} className="group">
                  <div className="relative h-[440px] overflow-hidden bg-[#07110e]">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                        {item.duration}
                      </p>
                      <h3 className="font-display text-[38px] leading-none">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <Link
                    href="#contact"
                    className="mt-5 inline-flex text-[12px] font-semibold uppercase tracking-[0.2em] text-[#111d18]/70 transition hover:text-[#111d18]"
                  >
                    Learn More →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <PackagesSection />
      <ItineraryPreview />
      <DestinationExplorer />

        <section id="contact" className="bg-[#f7f0e5] py-24 text-[#111d18] md:py-32">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#a8782d]">
                Enquire Now
              </p>
              <h2 className="font-display text-[46px] leading-[0.95] tracking-[-0.045em] md:text-[72px]">
                Begin with a private consultation.
              </h2>
              <p className="mt-7 max-w-xl text-[17px] leading-9 text-[#111d18]/65">
                Tell us your dates, group size, preferred destinations, and
                travel style. Our team will help prepare the right direction for
                your Indonesia journey.
              </p>

              <div className="mt-9 space-y-3 text-[15px] text-[#111d18]/70">
                <p>Phone: +62 813-3729-536</p>
                <p>WhatsApp: +62 812-2045-5846</p>
                <p>Email: info@visitindotravel.com</p>
              </div>
            </div>

            <EnquiryForm />
          </div>
        </section>
      </main>

      <Footer />

      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a
          href="tel:+628133729536"
          className="flex h-13 w-13 items-center justify-center rounded-full bg-white text-[#07110e] shadow-2xl"
          aria-label="Call Visit Indo Travel"
        >
          ☎
        </a>
        <a
          href="https://wa.me/6281220455846"
          className="flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl"
          aria-label="WhatsApp Visit Indo Travel"
        >
          ✆
        </a>
      </div>
    </>
  );
}
