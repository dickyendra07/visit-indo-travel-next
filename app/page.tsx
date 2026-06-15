import Link from"next/link";
import { Footer } from"@/components/layout/Footer";
import { Navbar } from"@/components/layout/Navbar";
import { HeroCleanSlider } from"@/components/sections/HeroCleanSlider";
import { TripSearchBar } from"@/components/sections/TripSearchBar";
import { EnquiryForm } from"@/components/sections/EnquiryForm";
import { DestinationExplorer } from"@/components/sections/DestinationExplorer";
import { PackagesSection } from"@/components/sections/PackagesSection";
import { ItineraryPreview } from"@/components/sections/ItineraryPreview"; const focusItems = [ { title:"Luxury Stays", text:"Selected villas, boutique hotels, and refined accommodation recommendations for private travelers.", }, { title:"Private Transfers", text:"Airport pickup, personal drivers, intercity transfers, and comfortable ground arrangements.", }, { title:"Curated Experiences", text:"Cultural routes, scenic landscapes, local dining, nature escapes, and special-access moments.", },
]; const journeys = [ { title:"Java Discovery Journey", duration:"7 Days 6 Nights", image:"https://images.unsplash.com/photo-1596402184320-417e7178b2cd?auto=format&fit=crop&w=1400&q=85", }, { title:"Romantic Indonesia Honeymoon", duration:"6 Days 5 Nights", image:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=85", }, { title:"Bali and Eastern Islands", duration:"Custom Journey", image:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=85", },
]; const regions = ["Bali & Eastern Islands","Java","Sumatra","Kalimantan","Sulawesi","Maluku","Papua",
]; export default function Home() { return ( <> <Navbar /> <main className="bg-[#07110e] text-white"> <HeroCleanSlider /> <TripSearchBar /> <section id="story" className="relative overflow-hidden bg-[#f7f0e5] text-[#111d18]">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[420px] overflow-hidden bg-[#07110e] lg:min-h-[560px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1800&q=90')",
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,14,.88),rgba(7,17,14,.48),rgba(7,17,14,.08))]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,17,14,.35),rgba(7,17,14,.12),rgba(7,17,14,.78))]" />

            <div className="relative z-10 flex min-h-[420px] flex-col justify-end px-6 pb-10 pt-20 md:px-10 lg:min-h-[560px] lg:px-16 lg:pb-14 xl:px-20">
              <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.32em] text-[#d7aa51]">
                Discover The Story
              </p>
              <h2 className="font-display max-w-2xl text-[44px] leading-[0.92] tracking-[-0.055em] text-[#fff7e8] drop-shadow-[0_8px_30px_rgba(0,0,0,.45)] md:text-[64px] xl:text-[72px]">
                A personal way to discover Indonesia.
              </h2>
            </div>
          </div>

          <div className="relative flex items-center bg-[#f7f0e5] px-6 py-12 md:px-10 md:py-16 lg:px-14 lg:py-14 xl:px-20">
            <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#d7aa51]/10 blur-3xl" />
            <div className="relative w-full max-w-[760px]">
              <p className="text-[22px] leading-10 text-[#28352e]/82 md:text-[27px] md:leading-[1.5]">
                Visit Indo Travel designs private journeys into and within Indonesia for travelers who value comfort, privacy, timing, and meaningful local insight.
              </p>

              <p className="mt-7 text-[16px] leading-8 text-[#28352e]/68 md:text-[18px] md:leading-9">
                From arrival to departure, every route can be shaped around your group, pace, preferred stays, and travel style.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["✦", "Private Routes", "Designed around your group."],
                  ["⌁", "Local Care", "Practical support in Indonesia."],
                  ["◌", "Flexible Pace", "Adjusted to your travel style."],
                ].map(([icon, title, text]) => (
                  <div
                    key={title}
                    className="group rounded-[1.35rem] border border-black/10 bg-white/80 p-5 shadow-[0_18px_50px_rgba(7,17,14,.07)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#d7aa51]/45 hover:bg-white hover:shadow-[0_24px_70px_rgba(7,17,14,.11)]"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#d7aa51]/35 bg-[#f7f0e5] text-[18px] text-[#a8782d] shadow-[0_10px_30px_rgba(168,120,45,.12)] transition group-hover:border-[#a8782d] group-hover:bg-[#07110e] group-hover:text-[#d7aa51]">
                      {icon}
                    </div>

                    <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#a8782d]">
                      {title}
                    </p>
                    <p className="text-[14px] leading-7 text-[#28352e]/72">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="#contact"
                  className="inline-flex rounded-full border border-[#07110e] bg-[#07110e] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.18em] !text-[#fff7e8] shadow-[0_18px_45px_rgba(7,17,14,.16)] transition hover:border-[#a8782d] hover:bg-[#a8782d] hover:!text-[#fff7e8]"
                >
                  Book An Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="focus" className="relative overflow-hidden bg-[#07110e] py-20 text-white md:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.16]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=2200&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,14,.98),rgba(7,17,14,.9),rgba(7,17,14,.98))]" />
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d7aa51]/10 blur-3xl" />
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto w-full px-6 md:px-10 lg:px-14 xl:px-20">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.32em] text-[#d7aa51]">
                Our Focus
              </p>
              <h2 className="font-display max-w-3xl text-[48px] leading-[0.92] tracking-[-0.055em] text-[#fff7e8] md:text-[76px]">
                Elegant travel planning, arranged with local care.
              </h2>
            </div>

            <p className="max-w-2xl text-[16px] leading-8 text-[#d8d1c3] md:text-[18px] md:leading-9 lg:justify-self-end">
              We combine curated stays, private transfers, and meaningful destination experiences into a smoother Indonesia journey for private travelers.
            </p>
          </div>

          <div className="grid w-full gap-4 lg:grid-cols-3 xl:gap-5">
            {focusItems.map((item, index) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-[0_24px_80px_rgba(0,0,0,.18)] backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-[#d7aa51]/45 hover:bg-white/[0.085] hover:shadow-[0_34px_110px_rgba(0,0,0,.3)] md:p-8"
              >
                <div className="absolute right-6 top-6 font-display text-[76px] leading-none text-white/[0.035] transition group-hover:text-[#d7aa51]/10">
                  0{index + 1}
                </div>

                <div className="relative z-10">
                  <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#d7aa51]/35 bg-[#d7aa51]/10 text-[22px] text-[#d7aa51] shadow-[0_18px_45px_rgba(215,170,81,.08)] transition group-hover:border-[#d7aa51] group-hover:bg-[#d7aa51] group-hover:text-[#07110e]">
                    ✦
                  </div>

                  <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-[#d7aa51]">
                    Focus 0{index + 1}
                  </p>

                  <h3 className="font-display text-[34px] leading-[0.95] tracking-[-0.035em] text-[#fff7e8] md:text-[40px]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[15px] leading-8 text-[#d8d1c3]">
                    {item.text}
                  </p>

                  <div className="mt-8 h-px w-full bg-white/10">
                    <div className="h-px w-12 bg-[#d7aa51] transition-all duration-500 group-hover:w-28" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-[14px] leading-7 text-[#d8d1c3]/80">
              Every recommendation is arranged to match your route, comfort level, timing, and preferred travel pace.
            </p>

            <Link
              href="#journeys"
              className="inline-flex w-fit rounded-full border border-white/25 bg-white/[0.055] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] !text-[#fff7e8] transition hover:border-[#d7aa51] hover:bg-[#d7aa51] hover:!text-[#07110e]"
            >
              Explore Journeys
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7f0e5] py-20 text-[#111d18] md:py-28">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d7aa51]/12 blur-3xl" />
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#07110e]/5 blur-3xl" />

        <div className="relative w-full px-6 md:px-10 lg:px-14 xl:px-20">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.32em] text-[#a8782d]">
                Why Travel With Us
              </p>
              <h2 className="font-display max-w-3xl text-[48px] leading-[0.92] tracking-[-0.055em] text-[#07110e] md:text-[76px]">
                Quiet luxury, thoughtful planning.
              </h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_220px] lg:items-end">
              <p className="max-w-3xl text-[17px] leading-9 text-[#28352e]/72 md:text-[19px] md:leading-10">
                We focus on the details that make travel feel effortless: timing, routing, privacy, comfort, and direct communication before and during your journey.
              </p>

              <div className="hidden overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-[0_24px_70px_rgba(7,17,14,.08)] lg:block">
                <div
                  className="h-[180px] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=900&q=85')",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["01", "✦", "Private By Design", "Your journey is arranged for your group, not a shared schedule."],
              ["02", "⌁", "Local Expertise", "Routes are shaped with practical destination knowledge and local support."],
              ["03", "→", "Seamless Transfers", "Private cars, airport pickup, and intercity transfers can be arranged."],
              ["04", "◌", "Family-Friendly", "Travel pacing, halal-friendly needs, and comfort requests can be considered."],
            ].map(([number, icon, title, text]) => (
              <article
                key={title}
                className="group relative min-h-[320px] overflow-hidden rounded-[2rem] border border-black/10 bg-white/72 p-7 shadow-[0_24px_80px_rgba(7,17,14,.07)] backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-[#d7aa51]/45 hover:bg-white hover:shadow-[0_34px_110px_rgba(7,17,14,.12)] md:p-8"
              >
                <div className="absolute -right-6 -top-6 font-display text-[120px] leading-none text-[#07110e]/[0.035] transition group-hover:text-[#d7aa51]/15">
                  {number}
                </div>

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-10 flex items-center justify-between">
                    <div className="flex h-13 w-13 items-center justify-center rounded-full border border-[#d7aa51]/35 bg-[#f7f0e5] text-[19px] text-[#a8782d] shadow-[0_14px_34px_rgba(168,120,45,.12)] transition group-hover:border-[#07110e] group-hover:bg-[#07110e] group-hover:text-[#d7aa51]">
                      {icon}
                    </div>

                    <p className="font-display text-[42px] leading-none text-[#d7aa51]/65">
                      {number}
                    </p>
                  </div>

                  <h3 className="font-display text-[34px] leading-[0.95] tracking-[-0.035em] text-[#07110e] md:text-[38px]">
                    {title}
                  </h3>

                  <p className="mt-5 text-[15px] leading-8 text-[#28352e]/68">
                    {text}
                  </p>

                  <div className="mt-auto pt-8">
                    <div className="h-px w-full bg-black/10">
                      <div className="h-px w-12 bg-[#a8782d] transition-all duration-500 group-hover:w-28" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07110e] py-20 text-white md:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.13]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=2400&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,14,.98),rgba(7,17,14,.92),rgba(7,17,14,.98))]" />
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d7aa51]/10 blur-3xl" />
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

        <div className="relative w-full px-6 md:px-10 lg:px-14 xl:px-20">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.32em] text-[#d7aa51]">
                How It Works
              </p>

              <h2 className="font-display max-w-3xl text-[48px] leading-[0.92] tracking-[-0.055em] text-[#fff7e8] md:text-[76px]">
                From first enquiry to private arrival.
              </h2>

              <p className="mt-7 max-w-xl text-[16px] leading-8 text-[#d8d1c3] md:text-[18px] md:leading-9">
                A clear planning flow designed to make your Indonesia journey feel effortless before you even arrive.
              </p>

              <div className="mt-9">
                <Link
                  href="#contact"
                  className="inline-flex rounded-full border border-white/25 bg-white/[0.055] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] !text-[#fff7e8] transition hover:border-[#d7aa51] hover:bg-[#d7aa51] hover:!text-[#07110e]"
                >
                  Start Planning
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                ["01", "✦", "Tell Us Your Travel Style", "Share your dates, group size, preferred destinations, comfort level, and special requests."],
                ["02", "⌁", "We Design Your Route", "Our team prepares a private itinerary direction with suitable pacing, stays, and transfers."],
                ["03", "→", "Confirm Your Journey", "Once the route is aligned, we finalize the travel details and booking direction."],
                ["04", "◌", "Travel With Local Support", "Enjoy Indonesia with private assistance and direct communication during your journey."],
              ].map(([number, icon, title, text]) => (
                <article
                  key={title}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-[0_24px_80px_rgba(0,0,0,.18)] backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-[#d7aa51]/45 hover:bg-white/[0.085] hover:shadow-[0_34px_110px_rgba(0,0,0,.3)] md:p-8"
                >
                  <div className="absolute -right-5 -top-8 font-display text-[120px] leading-none text-white/[0.035] transition group-hover:text-[#d7aa51]/10">
                    {number}
                  </div>

                  <div className="relative z-10 grid gap-6 md:grid-cols-[90px_1fr] md:items-start">
                    <div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d7aa51]/35 bg-[#d7aa51]/10 text-[20px] text-[#d7aa51] shadow-[0_18px_45px_rgba(215,170,81,.08)] transition group-hover:border-[#d7aa51] group-hover:bg-[#d7aa51] group-hover:text-[#07110e]">
                        {icon}
                      </div>
                      <p className="mt-5 font-display text-[38px] leading-none text-[#d7aa51]">
                        {number}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-display text-[32px] leading-[0.95] tracking-[-0.035em] text-[#fff7e8] md:text-[42px]">
                        {title}
                      </h3>
                      <p className="mt-5 max-w-3xl text-[15px] leading-8 text-[#d8d1c3] md:text-[16px]">
                        {text}
                      </p>

                      <div className="mt-8 h-px w-full bg-white/10">
                        <div className="h-px w-12 bg-[#d7aa51] transition-all duration-500 group-hover:w-28" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="journeys" className="relative overflow-hidden bg-[#f7f0e5] py-20 text-[#111d18] md:py-28">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d7aa51]/12 blur-3xl" />
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#07110e]/5 blur-3xl" />

        <div className="relative w-full px-6 md:px-10 lg:px-14 xl:px-20">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.32em] text-[#a8782d]">
                Featured Journeys
              </p>
              <h2 className="font-display max-w-4xl text-[48px] leading-[0.92] tracking-[-0.055em] text-[#07110e] md:text-[76px]">
                Pre-designed journeys.
              </h2>
            </div>

            <div className="flex flex-col gap-6 lg:items-end">
              <p className="max-w-2xl text-[17px] leading-9 text-[#28352e]/72 md:text-[19px] md:leading-10">
                Start with a curated Indonesia route, then personalize the pace, hotel style, transport flow, and experiences around your group.
              </p>

              <Link
                href="#contact"
                className="inline-flex w-fit rounded-full border border-[#07110e]/20 bg-white px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] !text-[#07110e] shadow-[0_18px_45px_rgba(7,17,14,.08)] transition hover:border-[#07110e] hover:bg-[#07110e] hover:!text-[#fff7e8]"
              >
                Explore More
              </Link>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {journeys.map((item, index) => (
              <article
                key={item.title}
                className="group relative min-h-[560px] overflow-hidden rounded-[2rem] bg-[#07110e] shadow-[0_28px_90px_rgba(7,17,14,.16)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_38px_120px_rgba(7,17,14,.24)]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,17,14,.12),rgba(7,17,14,.24),rgba(7,17,14,.92))]" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,14,.62),rgba(7,17,14,.12))]" />

                <div className="relative z-10 flex min-h-[560px] flex-col justify-between p-7 md:p-8">
                  <div className="flex items-start justify-between">
                    <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#fff7e8] backdrop-blur-md">
                      {item.duration}
                    </div>

                    <p className="font-display text-[54px] leading-none text-white/22">
                      0{index + 1}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display max-w-md text-[42px] leading-[0.92] tracking-[-0.045em] text-[#fff7e8] drop-shadow-[0_8px_30px_rgba(0,0,0,.45)] md:text-[54px]">
                      {item.title}
                    </h3>

                    <Link
                      href="#contact"
                      className="mt-8 inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.2em] !text-[#fff7e8] transition hover:!text-[#d7aa51]"
                    >
                      Learn More
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition group-hover:border-[#d7aa51]">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PackagesSection /> <ItineraryPreview />
 <section id="contact" className="bg-[#f7f0e5] py-24 text-[#111d18] md:py-32"> <div className="mx-auto grid max-w-[1240px] gap-12 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"> <div> <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#a8782d]"> Enquire Now </p> <h2 className="font-display text-[46px] leading-[0.95] tracking-[-0.045em] md:text-[72px]"> Begin with a private consultation. </h2> <p className="mt-7 max-w-xl text-[17px] leading-9 text-[#111d18]/65"> Tell us your dates, group size, preferred destinations, and travel style. Our team will help prepare the right direction for your Indonesia journey. </p> <div className="mt-9 space-y-3 text-[15px] text-[#111d18]/70"> <p>Phone: +62 813-3729-536</p> <p>WhatsApp: +62 812-2045-5846</p> <p>Email: info@visitindotravel.com</p> </div> </div> <EnquiryForm /> </div> </section> </main> <Footer /> <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3"> <a href="tel:+628133729536" className="flex h-13 w-13 items-center justify-center rounded-full bg-white text-[#07110e] shadow-2xl" aria-label="Call Visit Indo Travel" > ☎ </a> <a href="https://wa.me/6281220455846" className="flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl" aria-label="WhatsApp Visit Indo Travel" > ✆ </a> </div> </> );
}
