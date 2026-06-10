"use client";

const filters = [
  {
    label: "Location",
    value: "Bali, Java, Komodo",
  },
  {
    label: "Travel Style",
    value: "Family, Couple, Private",
  },
  {
    label: "Comfort",
    value: "Comfortable, Luxury",
  },
  {
    label: "Group Size",
    value: "Small, Medium, Large",
  },
];

export function TripSearchBar() {
  return (
    <section className="relative z-30 bg-[#f7f0e5] px-6 md:px-10">
      <div className="mx-auto max-w-[1180px] -translate-y-1/2 bg-white text-[#111d18] shadow-[0_26px_80px_rgba(0,0,0,.14)]">
        <div className="grid border border-black/10 lg:grid-cols-[1fr_1fr_1fr_1fr_160px]">
          {filters.map((item) => (
            <button
              key={item.label}
              className="group border-b border-black/10 px-6 py-5 text-left transition hover:bg-[#f7f0e5] lg:border-b-0 lg:border-r"
            >
              <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-[#111d18]/36">
                {item.label}
              </span>
              <span className="mt-2 block text-[14px] font-medium text-[#111d18]">
                {item.value}
              </span>
            </button>
          ))}

          <a
            href="#contact"
            className="flex items-center justify-center bg-[#07110e] px-6 py-5 text-[12px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#14241c]"
          >
            Enquire
          </a>
        </div>
      </div>
    </section>
  );
}
