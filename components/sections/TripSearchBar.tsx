import Link from "next/link";

const searchItems = [
  {
    label: "Destination",
    value: "Bali, Java, Komodo",
  },
  {
    label: "Travel Type",
    value: "Family, Couple, Private",
  },
  {
    label: "Comfort Level",
    value: "Comfortable, Luxury",
  },
  {
    label: "Group Size",
    value: "Small, Medium, Large",
  },
];

export function TripSearchBar() {
  return (
    <section className="relative z-30 -mt-12 bg-[#f7f0e5] px-6 pb-12 pt-8 md:px-10 md:pb-16 md:pt-10">
      <div className="mx-auto max-w-[1240px]">
        <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_28px_80px_rgba(7,17,14,.10)]">
          <div className="grid lg:grid-cols-[repeat(4,1fr)_190px]">
            {searchItems.map((item) => (
              <div
                key={item.label}
                className="border-b border-black/10 px-6 py-7 last:border-b-0 md:px-8 md:py-8 lg:border-b-0 lg:border-r"
              >
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.26em] text-[#a8782d]">
                  {item.label}
                </p>
                <p className="text-[18px] font-semibold leading-7 text-[#07110e] md:text-[20px]">
                  {item.value}
                </p>
              </div>
            ))}

            <Link
              href="#contact"
              className="group flex items-center justify-between bg-[#07110e] px-6 py-6 text-[#fff7e8] transition hover:bg-[#a8782d] md:px-8 lg:flex-col lg:items-start lg:justify-center"
            >
              <span className="text-[12px] font-bold uppercase tracking-[0.28em]">
                Enquire
              </span>
              <span className="mt-0 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-lg transition group-hover:border-white/55 lg:mt-5">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
