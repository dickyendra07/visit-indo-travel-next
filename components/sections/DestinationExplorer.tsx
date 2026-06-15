import Link from "next/link";

const destinations = [
  {
    title: "Bali",
    description: "Island escapes, curated stays, beaches, temples, and refined leisure routes.",
    href: "/destinations/bali-eastern-islands",
  },
  {
    title: "Java",
    description: "Cultural heritage, Yogyakarta, Borobudur, Bromo, and scenic overland journeys.",
    href: "/destinations/java",
  },
  {
    title: "Komodo",
    description: "Private island-hopping, viewpoints, turquoise waters, and boat experiences.",
    href: "/destinations/bali-eastern-islands",
  },
];

export function DestinationExplorer() {
  return (
    <section
      id="destinations"
      className="relative overflow-hidden bg-[#07110e] py-20 text-white md:py-28"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.18]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=2400&q=90')",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,14,.98),rgba(7,17,14,.88),rgba(7,17,14,.98))]" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d7aa51]/10 blur-3xl" />
      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="relative w-full px-6 md:px-10 lg:px-14 xl:px-20">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.32em] text-[#d7aa51]">
              Explore Indonesia
            </p>
            <h2 className="font-display max-w-4xl text-[48px] leading-[0.92] tracking-[-0.055em] text-[#fff7e8] md:text-[76px]">
              Destinations shaped around your travel style.
            </h2>
          </div>

          <p className="max-w-3xl text-[16px] leading-8 text-[#d8d1c3] md:text-[18px] md:leading-9 lg:justify-self-end">
            From cultural routes to island escapes, every destination can be arranged with private transfers, curated stays, and local support.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {destinations.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-[0_24px_80px_rgba(0,0,0,.18)] backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-[#d7aa51]/45 hover:bg-white/[0.085] hover:shadow-[0_34px_110px_rgba(0,0,0,.3)] md:p-8"
            >
              <div className="absolute -right-5 -top-7 font-display text-[100px] leading-none text-white/[0.035] transition group-hover:text-[#d7aa51]/10">
                0{index + 1}
              </div>

              <div className="relative z-10">
                <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#d7aa51]/35 bg-[#d7aa51]/10 text-[22px] text-[#d7aa51] transition group-hover:border-[#d7aa51] group-hover:bg-[#d7aa51] group-hover:text-[#07110e]">
                  ✦
                </div>

                <h3 className="font-display text-[38px] leading-[0.95] tracking-[-0.035em] text-[#fff7e8] md:text-[46px]">
                  {item.title}
                </h3>

                <p className="mt-5 text-[15px] leading-8 text-[#d8d1c3]">
                  {item.description}
                </p>

                <div className="mt-8 flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.2em] text-[#d7aa51]">
                  Explore Destination
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-[#fff7e8] transition group-hover:border-[#d7aa51] group-hover:text-[#d7aa51]">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
