import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { destinations } from "@/data/destinations";

const arabicDestinationTitles: Record<string, string> = {
  "bali-eastern-islands": "بالي والجزر الشرقية",
  java: "جاوة",
  sumatra: "سومطرة",
  kalimantan: "كاليمانتان",
  sulawesi: "سولاويسي",
  maluku: "مالوكو",
  papua: "بابوا",
};

export default function ArabicDestinationsPage() {
  return (
    <>
      <Navbar />

      <main dir="rtl" className="bg-[#07110e] text-white">
        <section className="relative min-h-[680px] overflow-hidden pt-32">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=2400&q=90')",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.18),rgba(0,0,0,.52),rgba(0,0,0,.84))]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,17,14,.12),rgba(7,17,14,.92))]" />

          <div className="relative z-10 mx-auto flex min-h-[680px] max-w-[1240px] items-center px-6 text-right md:px-10">
            <div className="mr-auto max-w-4xl">
              <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.34em] text-[#d7aa51]">
                Destinations
              </p>
              <h1 className="mobile-hero-title font-display text-[58px] leading-[1.05] tracking-[-0.045em] md:text-[92px]">
                اكتشف وجهات إندونيسيا.
              </h1>
              <p className="mt-8 max-w-2xl text-[18px] leading-9 text-white/72">
                من بالي وجاوة إلى بابوا والجزر الشرقية، كل منطقة في إندونيسيا
                تقدم تجربة مختلفة.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f0e5] py-24 text-[#111d18] md:py-32">
          <div className="mx-auto max-w-[1240px] px-6 text-right md:px-10">
            <div className="mb-12">
              <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#a8782d]">
                Indonesia Regions
              </p>
              <h2 className="mobile-section-title font-display text-[46px] leading-[1.05] tracking-[-0.04em] md:text-[72px]">
                اختر وجهتك.
              </h2>
            </div>

            <div className="mobile-scroll md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {destinations.map((item) => (
                <article
                  key={item.slug}
                  className="mobile-snap-card overflow-hidden border border-black/10 bg-white shadow-[0_24px_80px_rgba(0,0,0,.08)]"
                >
                  <div className="relative h-[250px] overflow-hidden md:h-[300px]">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/18 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-right">
                      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f5dc92]">
                        {item.regionLabel}
                      </p>
                      <h3 className="font-display text-[38px] leading-[1.05] text-white">
                        {arabicDestinationTitles[item.slug] || item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5 md:p-6">
                    <p className="text-[15px] leading-8 text-[#111d18]/66">
                      وجهة مناسبة للرحلات الخاصة، التجارب المختارة، والتنقل
                      المريح داخل إندونيسيا.
                    </p>
                    <Link
                      href="/ar/contact"
                      className="mt-6 inline-flex rounded-full bg-[#07110e] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white"
                    >
                      استفسر عن الوجهة
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
