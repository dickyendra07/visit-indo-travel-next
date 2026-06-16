import Link from "next/link";

const hotelOptions = [
  {
    name: "مجموعة المنتجعات الفاخرة",
    location: "بالي",
    image:
      "https://images.unsplash.com/photo-1570213489059-0aac6626cade?auto=format&fit=crop&w=1600&q=90",
    description:
      "منتجعات شاطئية وإقامات راقية مناسبة للأزواج، العائلات، ورحلات الاستجمام الخاصة.",
  },
  {
    name: "إقامة في فيلا خاصة",
    location: "بالي ولومبوك",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=90",
    description:
      "فلل مختارة مع مسبح خاص، أجواء هادئة، وترتيبات مرنة للمجموعات والعائلات.",
  },
  {
    name: "فندق بوتيك تراثي",
    location: "جاوة",
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=90",
    description:
      "إقامات بوتيك ذات طابع خاص بالقرب من المسارات الثقافية والمناطق التراثية في جاوة.",
  },
  {
    name: "منتجع جزر هادئ",
    location: "كومودو والجزر الشرقية",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=90",
    description:
      "خيارات إقامة مناسبة لرحلات الجزر، القوارب الخاصة، والاستكشاف الساحلي في شرق إندونيسيا.",
  },
];

export function HotelOptionsSectionArabic() {
  return (
    <section dir="rtl" className="relative overflow-hidden bg-[#f7f0e5] py-20 text-[#111d18] md:py-28">
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d7aa51]/12 blur-3xl" />
      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#07110e]/5 blur-3xl" />

      <div className="relative w-full px-6 text-right md:px-10 lg:px-14 xl:px-20">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.32em] text-[#a8782d]">
              خيارات الإقامة
            </p>
            <h2 className="font-display max-w-4xl text-[48px] leading-[1.05] tracking-[-0.04em] text-[#07110e] md:text-[76px]">
              خيارات فنادق تناسب رحلتك الخاصة.
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-3xl text-[17px] leading-9 text-[#28352e]/72 md:text-[19px] md:leading-10">
              يمكن اختيار الإقامة بين منتجعات راقية، فلل خاصة، فنادق بوتيك، أو منتجعات جزرية. يتم تأكيد الخيارات النهائية حسب الميزانية، التوفر، وأسلوب الرحلة.
            </p>

            <div className="mt-7">
              <Link
                href="#contact"
                className="inline-flex w-fit rounded-full border border-[#07110e]/20 bg-white px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] !text-[#07110e] shadow-[0_18px_45px_rgba(7,17,14,.08)] transition hover:border-[#07110e] hover:bg-[#07110e] hover:!text-[#fff7e8]"
              >
                اطلب خيارات الفنادق
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {hotelOptions.map((hotel, index) => (
            <article
              key={hotel.name}
              className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_24px_80px_rgba(7,17,14,.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_34px_110px_rgba(7,17,14,.14)]"
            >
              <div className="relative h-[320px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${hotel.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/38 to-black/5" />

                <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#fff7e8] backdrop-blur-md">
                    {hotel.location}
                  </span>
                  <span className="font-display text-[46px] leading-none text-white/28">
                    0{index + 1}
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-display text-[34px] leading-[1.05] tracking-[-0.035em] text-[#fff7e8] drop-shadow-[0_8px_30px_rgba(0,0,0,.45)]">
                    {hotel.name}
                  </h3>
                </div>
              </div>

              <div className="p-5 xl:p-6">
                <p className="text-[14px] leading-7 text-[#28352e]/72">
                  {hotel.description}
                </p>

                <div className="mt-6 h-px w-full bg-black/10">
                  <div className="h-px w-12 bg-[#a8782d] transition-all duration-500 group-hover:w-28" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-7 text-center text-[13px] leading-7 text-[#28352e]/60">
          يتم تأكيد أسماء الفنادق والتوفر النهائي أثناء تجهيز عرض السعر. الصور تستخدم كمرجع بصري لفئة الإقامة.
        </p>
      </div>
    </section>
  );
}
