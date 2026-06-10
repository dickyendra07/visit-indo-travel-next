import Link from "next/link";

const quickLinks = [
  { label: "About Us", href: "#story" },
  { label: "Experiences", href: "#focus" },
  { label: "Journeys", href: "#journeys" },
  { label: "Destinations", href: "#destinations" },
  { label: "Enquire Now", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050b09] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d7aa51]/50 to-transparent" />
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#d7aa51]/10 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.32em] text-[#d7aa51]">
              Visit Indo Travel
            </p>
            <h2 className="font-display max-w-4xl text-[48px] leading-[0.92] tracking-[-0.05em] text-white md:text-[76px] lg:text-[92px]">
              Private journeys across Indonesia, arranged with care.
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-[17px] leading-9 text-white/62">
              From curated stays and personal drivers to cultural routes and
              island escapes, our team helps shape Indonesia into a private,
              comfortable, and meaningful travel experience.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex justify-center rounded-full border border-white bg-white px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] !text-[#07110e] shadow-[0_18px_45px_rgba(0,0,0,.22)] transition hover:bg-[#f7f0e5] hover:!text-[#07110e]"
              >
                Enquire Now
              </Link>
              <Link
                href="https://wa.me/6281220455846"
                className="inline-flex justify-center rounded-full border border-white/35 bg-white/5 px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md shadow-[0_18px_45px_rgba(0,0,0,.16)] transition hover:bg-white hover:!text-[#07110e]"
              >
                WhatsApp Us
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 lg:grid-cols-4">
          <div className="bg-[#050b09] p-7 md:p-8">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d7aa51]">
              Company
            </p>
            <p className="font-display text-3xl leading-none text-white">
              CV. Blue Sky
            </p>
            <p className="mt-5 text-sm leading-7 text-white/55">
              Ruko Grand Nirwana Tegalyoso, Jl. Merapi No.desa, Dusun 1, Metuk
              Kidul, Kec. Klaten Sel., Kabupaten Klaten, Jawa Tengah 57411
            </p>
          </div>

          <div className="bg-[#050b09] p-7 md:p-8">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d7aa51]">
              Contact
            </p>
            <div className="space-y-4 text-sm text-white/62">
              <Link
                className="block transition hover:text-white"
                href="tel:+628133729536"
              >
                <span className="block text-[10px] uppercase tracking-[0.22em] text-white/35">
                  Phone
                </span>
                +62 813-3729-536
              </Link>
              <Link
                className="block transition hover:text-white"
                href="https://wa.me/6281220455846"
              >
                <span className="block text-[10px] uppercase tracking-[0.22em] text-white/35">
                  WhatsApp
                </span>
                +62 812-2045-5846
              </Link>
              <Link
                className="block transition hover:text-white"
                href="mailto:info@visitindotravel.com"
              >
                <span className="block text-[10px] uppercase tracking-[0.22em] text-white/35">
                  Email
                </span>
                info@visitindotravel.com
              </Link>
            </div>
          </div>

          <div className="bg-[#050b09] p-7 md:p-8">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d7aa51]">
              Explore
            </p>
            <div className="space-y-3">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm uppercase tracking-[0.18em] text-white/55 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-[#050b09] p-7 md:p-8">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d7aa51]">
              Payment Details
            </p>
            <div className="space-y-4 text-sm text-white/62">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.22em] text-white/35">
                  Account Name
                </span>
                DITA MEIKAWATI
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.22em] text-white/35">
                  Account Number
                </span>
                1950429292
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.22em] text-white/35">
                  SWIFT Code
                </span>
                BNINIDJA
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.22em] text-white/35">
                  Bank
                </span>
                Bank Negara Indonesia (BNI)
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/42 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Visit Indo Travel. Managed by CV. Blue Sky.</p>
          <p className="uppercase tracking-[0.2em]">
            Private Indonesia Journeys
          </p>
        </div>
      </div>
    </footer>
  );
}
