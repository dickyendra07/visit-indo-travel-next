const regions = [
  "Bali & Eastern Islands",
  "Java",
  "Sumatra",
  "Kalimantan",
  "Sulawesi",
  "Maluku",
  "Papua",
];

export function DestinationExplorer() {
  return (
    <section
      id="destinations"
      className="relative overflow-hidden bg-[#07110e] py-24 text-white md:py-32"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-55"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=2400&q=90')",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,14,.95),rgba(7,17,14,.78),rgba(7,17,14,.36))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,17,14,.76),rgba(7,17,14,.36),rgba(7,17,14,.88))]" />

      <div className="relative z-10 mx-auto grid max-w-[1240px] gap-12 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#d7aa51]">
            Mastering The Destination
          </p>
          <h2 className="font-display text-[46px] leading-[0.95] tracking-[-0.045em] md:text-[72px]">
            Explore Indonesia by region.
          </h2>
          <p className="mt-7 max-w-xl text-[17px] leading-9 text-white/68">
            With thousands of islands and diverse cultures, Indonesia is best
            experienced through carefully designed regions and private routes.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {regions.map((region, index) => (
            <a
              key={region}
              href="/contact"
              className={`group border px-6 py-6 text-[13px] font-semibold uppercase tracking-[0.2em] transition duration-300 hover:-translate-y-1 hover:border-[#d7aa51] hover:bg-white/10 hover:text-white ${
                index === 0
                  ? "border-[#d7aa51] bg-white/5 text-white"
                  : "border-white/14 bg-black/10 text-white/68"
              }`}
            >
              <span>{region}</span>
              <span className="mt-4 block h-[2px] w-8 bg-white/24 transition-all duration-300 group-hover:w-20 group-hover:bg-[#d7aa51]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
