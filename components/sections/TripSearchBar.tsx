export function TripSearchBar() {
  const items = [
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

  return (
    <section className="relative z-20 bg-[#f7f0e5] px-5 py-12 md:px-8 md:py-16">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="grid overflow-hidden border border-black/10 bg-white shadow-[0_22px_70px_rgba(20,15,8,.08)] md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_170px]">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex min-h-[92px] flex-col justify-center border-b border-black/10 px-6 md:border-r md:px-7 lg:min-h-[104px] lg:border-b-0"
            >
              <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#b9934d]">
                {item.label}
              </span>
              <span className="text-[17px] font-semibold leading-tight tracking-[-0.03em] text-[#07110e] md:text-[19px]">
                {item.value}
              </span>
            </div>
          ))}

          <a
            href="#contact"
            className="flex min-h-[92px] items-center justify-center bg-[#07110e] px-8 text-[11px] font-bold uppercase tracking-[0.32em] text-white transition hover:bg-[#d7aa51] hover:text-[#07110e] lg:min-h-[104px]"
          >
            Enquire
          </a>
        </div>
      </div>
    </section>
  );
}
