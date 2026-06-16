const includedItems = [
  "Private airport pickup and drop-off arrangement",
  "Private car and driver during the journey",
  "Curated itinerary planning based on your travel style",
  "Hotel or villa recommendation assistance",
  "Selected destination and activity arrangement",
  "WhatsApp support before and during the trip",
  "Flexible route adjustment based on arrival and departure time",
  "Local travel coordination in Indonesia",
];

const excludedItems = [
  "International and domestic flight tickets",
  "Hotel room payment unless included in a confirmed package",
  "Personal expenses, shopping, laundry, and minibar",
  "Meals outside the agreed itinerary",
  "Entrance tickets not mentioned in the final quotation",
  "Travel insurance and personal medical expenses",
  "Tips for driver, guide, hotel staff, or porters",
  "Additional activities requested outside the agreed program",
];

export function InclusionsSection() {
  return (
    <section className="relative overflow-hidden bg-[#07110e] py-20 text-white md:py-28">
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d7aa51]/10 blur-3xl" />
      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="relative w-full px-6 md:px-10 lg:px-14 xl:px-20">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.32em] text-[#d7aa51]">
              What You Get
            </p>
            <h2 className="font-display max-w-4xl text-[48px] leading-[0.95] tracking-[-0.055em] text-[#fff7e8] md:text-[76px]">
              Clear inclusions before your journey begins.
            </h2>
          </div>

          <p className="max-w-3xl text-[16px] leading-8 text-[#d8d1c3] md:text-[18px] md:leading-9 lg:justify-self-end">
            Every private journey is arranged with transparent details, so you know exactly what is included, what is excluded, and what can be customized before confirmation.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <article className="overflow-hidden rounded-[2rem] border border-[#d7aa51]/30 bg-white/[0.065] shadow-[0_28px_90px_rgba(0,0,0,.22)] backdrop-blur-md">
            <div className="border-b border-white/10 bg-[#d7aa51]/10 px-7 py-7 md:px-8">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#d7aa51]">
                Included
              </p>
              <h3 className="font-display text-[38px] leading-[1] tracking-[-0.035em] text-[#fff7e8] md:text-[48px]">
                Included in your trip
              </h3>
            </div>

            <div className="grid gap-3 p-5 md:p-7">
              {includedItems.map((item) => (
                <div
                  key={item}
                  className="group flex gap-4 rounded-[1.35rem] border border-white/10 bg-white/[0.045] p-4 transition duration-500 hover:-translate-y-1 hover:border-[#d7aa51]/45 hover:bg-white/[0.08]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d7aa51]/40 bg-[#d7aa51]/10 text-[15px] font-bold text-[#d7aa51] transition group-hover:bg-[#d7aa51] group-hover:text-[#07110e]">
                    ✓
                  </span>
                  <p className="text-[15px] leading-7 text-[#d8d1c3]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] shadow-[0_28px_90px_rgba(0,0,0,.18)] backdrop-blur-md">
            <div className="border-b border-white/10 bg-white/[0.04] px-7 py-7 md:px-8">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#d7aa51]">
                Excluded
              </p>
              <h3 className="font-display text-[38px] leading-[1] tracking-[-0.035em] text-[#fff7e8] md:text-[48px]">
                Not included unless stated
              </h3>
            </div>

            <div className="grid gap-3 p-5 md:p-7">
              {excludedItems.map((item) => (
                <div
                  key={item}
                  className="group flex gap-4 rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-4 transition duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.055] text-[15px] font-bold text-[#fff7e8] transition group-hover:border-[#d7aa51]/50 group-hover:text-[#d7aa51]">
                    —
                  </span>
                  <p className="text-[15px] leading-7 text-[#d8d1c3]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
