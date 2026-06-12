import Link from "next/link";

const items = [
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
    <section className="relative z-20 bg-[#f7f0e5] px-5 pb-8 text-[#07110e] md:px-10">
      <div className="mx-auto w-full max-w-[1180px] -translate-y-8 overflow-hidden border border-black/10 bg-white shadow-[0_28px_90px_rgba(0,0,0,.14)] md:-translate-y-1/2">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr_180px]">
          {items.map((item) => (
            <div
              key={item.label}
              className="border-b border-black/10 px-5 py-5 md:border-b-0 md:border-r md:px-7 md:py-7"
            >
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#a8782d]/65">
                {item.label}
              </p>
              <p className="text-[14px] font-semibold leading-6 text-[#07110e]">
                {item.value}
              </p>
            </div>
          ))}

          <Link
            href="/contact"
            className="flex items-center justify-center bg-[#07110e] px-7 py-5 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#a8782d] md:py-0"
          >
            Enquire
          </Link>
        </div>
      </div>
    </section>
  );
}
