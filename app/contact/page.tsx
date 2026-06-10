import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { EnquiryForm } from "@/components/sections/EnquiryForm";

const contactItems = [
  {
    label: "Phone",
    value: "+62 813-3729-536",
    href: "tel:+628133729536",
  },
  {
    label: "WhatsApp",
    value: "+62 812-2045-5846",
    href: "https://wa.me/6281220455846",
  },
  {
    label: "Email",
    value: "info@visitindotravel.com",
    href: "mailto:info@visitindotravel.com",
  },
];

export default function ContactPage() {
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
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.78),rgba(0,0,0,.48),rgba(0,0,0,.2))]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,17,14,.1),rgba(7,17,14,.9))]" />

          <div className="relative z-10 mx-auto flex min-h-[680px] items-center max-w-[1240px] px-6 md:px-10">
            <div className="max-w-4xl">
              <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.34em] text-[#d7aa51]">
                Contact Visit Indo Travel
              </p>
              <h1 className="mobile-hero-title font-display text-[58px] leading-[0.9] tracking-[-0.055em] md:text-[94px]">
                Begin with a private consultation.
              </h1>
              <p className="mt-8 max-w-2xl text-[18px] leading-9 text-white/72">
                Tell us your dates, destinations, travel style, and group size.
                We will help prepare a private Indonesia journey direction for
                you.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f0e5] py-24 text-[#111d18] md:py-32">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-6 md:px-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
            <div>
              <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#a8782d]">
                Enquire Now
              </p>
              <h2 className="mobile-section-title font-display text-[46px] leading-[0.95] tracking-[-0.045em] md:text-[72px]">
                Share your travel request.
              </h2>
              <p className="mt-7 max-w-xl text-[17px] leading-9 text-[#111d18]/65">
                Our enquiry form will prepare your request into a clear WhatsApp
                or email message, so our team can respond with a more relevant
                itinerary direction.
              </p>

              <div className="mt-8 mobile-two-grid overflow-hidden border border-black/10 bg-black/10 md:grid md:gap-px">
                {contactItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group bg-[#f7f0e5] p-6 transition hover:bg-white"
                  >
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#a8782d]">
                      {item.label}
                    </span>
                    <span className="mt-3 block text-[18px] text-[#111d18]/70 transition group-hover:text-[#111d18]">
                      {item.value}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <EnquiryForm />
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="mx-auto grid max-w-[1240px] gap-12 px-6 md:px-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#d7aa51]">
                Company Contact
              </p>
              <h2 className="mobile-section-title font-display text-[46px] leading-[0.95] tracking-[-0.045em] md:text-[72px]">
                Managed by CV. Blue Sky.
              </h2>
            </div>

            <div className="grid gap-5 text-white/65 md:gap-8">
              <div className="border border-white/10 p-5 md:p-8">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d7aa51]">
                  Address
                </p>
                <p className="text-[17px] leading-9">
                  Ruko Grand Nirwana Tegalyoso, Jl. Merapi No.desa, Dusun 1,
                  Metuk Kidul, Kec. Klaten Sel., Kabupaten Klaten, Jawa Tengah
                  57411
                </p>
              </div>

              <div className="mobile-two-grid overflow-hidden border border-white/10 bg-white/10 md:grid md:grid-cols-2 md:gap-px">
                <div className="bg-[#07110e] p-7">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d7aa51]">
                    Business Email
                  </p>
                  <p>info@visitindotravel.com</p>
                </div>
                <div className="bg-[#07110e] p-7">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d7aa51]">
                    Direct Phone
                  </p>
                  <p>+62 813-3729-536</p>
                </div>
              </div>
            </div>
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
