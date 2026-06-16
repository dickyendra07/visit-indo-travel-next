import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { HeroCleanSliderArabic } from "@/components/sections/HeroCleanSliderArabic";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { InclusionsSectionArabic } from "@/components/sections/InclusionsSectionArabic";
import { HotelOptionsSectionArabic } from "@/components/sections/HotelOptionsSectionArabic";
import { travelPackages } from "@/data/packages";
import { destinations } from "@/data/destinations";

const packageArabicTitles: Record<string, string> = {
  "java-discovery-journey": "رحلة اكتشاف جاوة",
  "bali-luxury-escape": "رحلة فاخرة في بالي",
  "komodo-eastern-islands": "كومودو والجزر الشرقية",
  "romantic-indonesia-honeymoon": "رحلة شهر عسل في إندونيسيا",
};

const destinationArabicTitles: Record<string, string> = {
  "bali-eastern-islands": "بالي والجزر الشرقية",
  java: "جاوة",
  sumatra: "سومطرة",
  kalimantan: "كاليمانتان",
  sulawesi: "سولاويسي",
  maluku: "مالوكو",
  papua: "بابوا",
};

const focusItems = [
  {
    title: "إقامات فاخرة مختارة",
    text: "نساعدك في اختيار الفنادق، المنتجعات، أو الفلل المناسبة حسب أسلوب الرحلة والميزانية.",
  },
  {
    title: "سائق خاص وتنقل مريح",
    text: "تنقلات خاصة من المطار وبين المدن مع ترتيب مناسب لوقت الرحلة.",
  },
  {
    title: "تجارب محلية وثقافية",
    text: "برامج تجمع بين الطبيعة، الثقافة، الجزر، والمواقع المميزة في إندونيسيا.",
  },
];

const whyItems = [
  ["01", "✦", "رحلة خاصة حسب احتياجك", "يتم ترتيب البرنامج للمجموعة الخاصة بك، وليس ضمن جدول جماعي مشترك."],
  ["02", "⌁", "خبرة محلية", "نساعدك في اختيار الوجهات والمسارات المناسبة بناءً على معرفة عملية داخل إندونيسيا."],
  ["03", "→", "تنقلات مريحة", "يمكن ترتيب سيارة خاصة، استقبال من المطار، وتنقلات بين المدن أو الجزر."],
  ["04", "◌", "مناسب للعائلات", "نراعي سرعة الرحلة، الراحة، الاحتياجات العائلية، والطلبات الخاصة قدر الإمكان."],
];

const processItems = [
  ["01", "✦", "أخبرنا بأسلوب رحلتك", "شاركنا تاريخ السفر، عدد المسافرين، الوجهات المفضلة، مستوى الراحة، والطلبات الخاصة."],
  ["02", "⌁", "نقوم بتصميم المسار", "نجهز تصوراً مناسباً للبرنامج يشمل الإقامة، التنقلات، والأنشطة حسب احتياجك."],
  ["03", "→", "تأكيد تفاصيل الرحلة", "بعد توافق المسار، نقوم بتجهيز تفاصيل الحجز والخطوات التالية."],
  ["04", "◌", "رحلة بدعم محلي", "استمتع بإندونيسيا مع تنسيق خاص وتواصل مباشر أثناء الرحلة."],
];

const storyCards = [
  ["✦", "مسارات خاصة", "تصمم حول مجموعتك واحتياجك."],
  ["⌁", "دعم محلي", "تنظيم عملي داخل إندونيسيا."],
  ["◌", "مرونة في الوقت", "تعديل سرعة الرحلة حسب رغبتك."],
];

const arabicItinerary = [
  ["اليوم 01", "الوصول إلى يوجياكارتا", "استقبال خاص من المطار، تسجيل الدخول في الفندق، وبداية هادئة للتعرف على قلب جاوة الثقافي."],
  ["اليوم 02", "بوروبودور والمسار التراثي", "زيارة بوروبودور، مناطق التراث الملكي، القرى المحلية، ومحطات ثقافية مختارة في جاوة الوسطى."],
  ["اليوم 03", "يوم ثقافي في يوجياكارتا", "استكشاف القصر، مناطق الحرف المحلية، تجربة طعام تقليدية، ومساء مرن حسب رغبتك."],
  ["اليوم 04", "الانتقال إلى شرق جاوة", "رحلة مريحة بسيارة خاصة أو قطار باتجاه المناظر البركانية في شرق جاوة."],
  ["اليوم 05", "شروق جبل برومو", "تجربة جيب خاصة في الصباح الباكر لمشاهدة شروق برومو مع جدول مريح بعد الجولة."],
  ["اليوم 06", "إيجين أو امتداد طبيعي", "الاستمرار نحو إيجين، المناطق الساحلية، أو مسار طبيعي أكثر هدوءاً حسب سرعة الرحلة المطلوبة."],
  ["اليوم 07", "المغادرة أو الاتصال ببالي", "ترتيب الانتقال النهائي إلى المطار أو متابعة الرحلة باتجاه بالي بترتيب خاص."],
];

export default function ArabicHomePage() {
  const featuredItinerary = travelPackages[0];

  return (
    <>
      <Navbar />

      <main dir="rtl" className="bg-[#07110e] text-white antialiased">
        <HeroCleanSliderArabic />

        <section className="relative z-30 -mt-12 bg-[#f7f0e5] px-6 pb-12 pt-8 md:px-10 md:pb-16 md:pt-10">
          <div className="w-full">
            <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_28px_80px_rgba(7,17,14,.10)]">
              <div className="grid lg:grid-cols-[repeat(4,1fr)_190px]">
                {[
                  ["الوجهة", "بالي، جاوة، كومودو"],
                  ["نوع الرحلة", "عائلة، زوجين، خاصة"],
                  ["مستوى الراحة", "مريح، فاخر"],
                  ["عدد المسافرين", "صغير، متوسط، كبير"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="border-b border-black/10 px-6 py-7 last:border-b-0 md:px-8 md:py-8 lg:border-b-0 lg:border-l"
                  >
                    <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.26em] text-[#a8782d]">
                      {label}
                    </p>
                    <p className="text-[18px] font-semibold leading-7 text-[#07110e] md:text-[20px]">
                      {value}
                    </p>
                  </div>
                ))}

                <Link
                  href="#contact"
                  className="group flex items-center justify-between bg-[#07110e] px-6 py-6 text-[#fff7e8] transition duration-500 ease-out hover:bg-[#a8782d] md:px-8 lg:flex-col lg:items-start lg:justify-center"
                >
                  <span className="text-[12px] font-bold uppercase tracking-[0.28em]">
                    استفسر
                  </span>
                  <span className="mt-0 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-lg transition group-hover:border-white/55 lg:mt-5">
                    ←
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="relative overflow-hidden bg-[#f7f0e5] text-[#111d18]">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[420px] overflow-hidden bg-[#07110e] lg:min-h-[560px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1800&q=90')",
                }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(270deg,rgba(7,17,14,.88),rgba(7,17,14,.48),rgba(7,17,14,.08))]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,17,14,.35),rgba(7,17,14,.12),rgba(7,17,14,.78))]" />

              <div className="relative z-10 flex min-h-[420px] flex-col justify-end px-6 pb-10 pt-20 text-right md:px-10 lg:min-h-[560px] lg:px-16 lg:pb-14 xl:px-20">
                <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.32em] text-[#d7aa51]">
                  Discover The Story
                </p>
                <h2 className="font-display max-w-2xl text-[44px] leading-[1.05] tracking-[-0.04em] text-[#fff7e8] drop-shadow-[0_8px_30px_rgba(0,0,0,.45)] md:text-[64px] xl:text-[72px]">
                  طريقة أكثر راحة لاكتشاف إندونيسيا.
                </h2>
              </div>
            </div>

            <div className="relative flex items-center bg-[#f7f0e5] px-6 py-12 text-right md:px-10 md:py-16 lg:px-14 lg:py-14 xl:px-20">
              <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#d7aa51]/10 blur-3xl" />
              <div className="relative w-full max-w-[760px]">
                <p className="text-[22px] leading-10 text-[#28352e]/82 md:text-[27px] md:leading-[1.65]">
                  نصمم رحلات خاصة داخل إندونيسيا للمسافرين الذين يبحثون عن الراحة، الخصوصية، التنظيم السلس، والتجربة المحلية الهادفة.
                </p>

                <p className="mt-7 text-[16px] leading-8 text-[#28352e]/72 md:text-[18px] md:leading-9">
                  من لحظة الوصول حتى المغادرة، يمكن تشكيل كل مسار حسب مجموعتك، سرعة الرحلة، مستوى الإقامة، وأسلوب السفر المناسب لك.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {storyCards.map(([icon, title, text]) => (
                    <div
                      key={title}
                      className="group rounded-[1.35rem] border border-black/10 bg-white/80 p-5 shadow-[0_18px_50px_rgba(7,17,14,.07)] backdrop-blur transition duration-500 ease-out hover:-translate-y-1 hover:border-[#d7aa51]/45 hover:bg-white hover:shadow-[0_24px_70px_rgba(7,17,14,.11)]"
                    >
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#d7aa51]/35 bg-[#f7f0e5] text-[18px] text-[#a8782d] shadow-[0_10px_30px_rgba(168,120,45,.12)] transition group-hover:border-[#a8782d] group-hover:bg-[#07110e] group-hover:text-[#d7aa51]">
                        {icon}
                      </div>
                      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#a8782d]">
                        {title}
                      </p>
                      <p className="text-[14px] leading-7 text-[#28352e]/72">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href="#contact"
                    className="inline-flex rounded-full border border-[#07110e] bg-[#07110e] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.18em] !text-[#fff7e8] shadow-[0_18px_45px_rgba(7,17,14,.16)] transition hover:border-[#a8782d] hover:bg-[#a8782d] hover:!text-[#fff7e8]"
                  >
                    احجز استشارة
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="focus" className="relative overflow-hidden bg-[#07110e] py-20 text-white md:py-28">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.16]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=2200&q=85')",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,14,.98),rgba(7,17,14,.9),rgba(7,17,14,.98))]" />
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d7aa51]/10 blur-3xl" />
          <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

          <div className="relative w-full px-4 text-right md:px-6 lg:px-8 xl:px-10 2xl:px-12">
            <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.32em] text-[#d7aa51]">
                  Our Focus
                </p>
                <h2 className="font-display max-w-3xl text-[48px] leading-[1.05] tracking-[-0.04em] text-[#fff7e8] md:text-[76px]">
                  كل تفاصيل الرحلة يتم ترتيبها بعناية.
                </h2>
              </div>

              <p className="max-w-2xl text-[16px] leading-8 text-[#d8d1c3] md:text-[18px] md:leading-9 lg:justify-self-end">
                نجمع بين الإقامات المختارة، التنقلات الخاصة، والتجارب المحلية الهادفة لتقديم رحلة إندونيسية أكثر سلاسة.
              </p>
            </div>

            <div className="grid w-full gap-4 lg:grid-cols-3 xl:gap-5">
              {focusItems.map((item, index) => (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-[0_24px_80px_rgba(0,0,0,.18)] backdrop-blur-md transition duration-500 ease-out hover:-translate-y-2 hover:border-[#d7aa51]/45 hover:bg-white/[0.085] hover:shadow-[0_34px_110px_rgba(0,0,0,.3)] md:p-8"
                >
                  <div className="absolute left-6 top-6 font-display text-[76px] leading-none text-white/[0.035] transition group-hover:text-[#d7aa51]/10">
                    0{index + 1}
                  </div>

                  <div className="relative z-10">
                    <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#d7aa51]/35 bg-[#d7aa51]/10 text-[22px] text-[#d7aa51] shadow-[0_18px_45px_rgba(215,170,81,.08)] transition group-hover:border-[#d7aa51] group-hover:bg-[#d7aa51] group-hover:text-[#07110e]">
                      ✦
                    </div>

                    <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-[#d7aa51]">
                      Focus 0{index + 1}
                    </p>

                    <h3 className="font-display text-[34px] leading-[1.05] tracking-[-0.035em] text-[#fff7e8] md:text-[40px]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-[15px] leading-8 text-[#d8d1c3] md:text-[16px]">
                      {item.text}
                    </p>

                    <div className="mt-8 h-px w-full bg-white/10">
                      <div className="h-px w-12 bg-[#d7aa51] transition-all duration-500 group-hover:w-28" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#f7f0e5] py-20 text-[#111d18] md:py-28">
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d7aa51]/12 blur-3xl" />
          <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#07110e]/5 blur-3xl" />

          <div className="relative w-full px-6 text-right md:px-10 lg:px-14 xl:px-20">
            <div className="mb-12 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
              <div>
                <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.32em] text-[#a8782d]">
                  Why Travel With Us
                </p>
                <h2 className="font-display max-w-3xl text-[48px] leading-[1.05] tracking-[-0.04em] text-[#07110e] md:text-[76px]">
                  رحلات خاصة مصممة لتكون مريحة وواضحة.
                </h2>
              </div>

              <p className="max-w-3xl text-[17px] leading-9 text-[#28352e]/72 md:text-[19px] md:leading-10">
                نركز على التفاصيل التي تجعل الرحلة أسهل: التوقيت، المسار، الخصوصية، الراحة، والتواصل المباشر قبل وأثناء الرحلة.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {whyItems.map(([number, icon, title, text]) => (
                <article
                  key={title}
                  className="group relative min-h-[320px] overflow-hidden rounded-[2rem] border border-black/10 bg-white/72 p-7 shadow-[0_24px_80px_rgba(7,17,14,.07)] backdrop-blur transition duration-500 ease-out hover:-translate-y-2 hover:border-[#d7aa51]/45 hover:bg-white hover:shadow-[0_34px_110px_rgba(7,17,14,.12)] md:p-8"
                >
                  <div className="absolute -left-6 -top-6 font-display text-[120px] leading-none text-[#07110e]/[0.035] transition group-hover:text-[#d7aa51]/15">
                    {number}
                  </div>

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-10 flex items-center justify-between">
                      <div className="flex h-13 w-13 items-center justify-center rounded-full border border-[#d7aa51]/35 bg-[#f7f0e5] text-[19px] text-[#a8782d] shadow-[0_14px_34px_rgba(168,120,45,.12)] transition group-hover:border-[#07110e] group-hover:bg-[#07110e] group-hover:text-[#d7aa51]">
                        {icon}
                      </div>
                      <p className="font-display text-[42px] leading-none text-[#d7aa51]/65">
                        {number}
                      </p>
                    </div>

                    <h3 className="font-display text-[34px] leading-[1.05] tracking-[-0.035em] text-[#07110e] md:text-[38px]">
                      {title}
                    </h3>

                    <p className="mt-5 text-[15px] leading-8 text-[#28352e]/72">
                      {text}
                    </p>

                    <div className="mt-auto pt-8">
                      <div className="h-px w-full bg-black/10">
                        <div className="h-px w-12 bg-[#a8782d] transition-all duration-500 group-hover:w-28" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#07110e] py-20 text-white md:py-28">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.13]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=2400&q=85')",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,14,.98),rgba(7,17,14,.92),rgba(7,17,14,.98))]" />
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d7aa51]/10 blur-3xl" />
          <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

          <div className="relative w-full px-6 text-right md:px-10 lg:px-14 xl:px-20">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div className="lg:sticky lg:top-32">
                <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.32em] text-[#d7aa51]">
                  How It Works
                </p>

                <h2 className="font-display max-w-3xl text-[48px] leading-[1.05] tracking-[-0.04em] text-[#fff7e8] md:text-[76px]">
                  من أول استفسار حتى الوصول الخاص.
                </h2>

                <p className="mt-7 max-w-xl text-[16px] leading-8 text-[#d8d1c3] md:text-[18px] md:leading-9">
                  خطوات واضحة مصممة لتجعل رحلتك إلى إندونيسيا أكثر سهولة قبل الوصول.
                </p>

                <div className="mt-9">
                  <Link
                    href="#contact"
                    className="inline-flex rounded-full border border-white/25 bg-white/[0.055] px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] !text-[#fff7e8] transition duration-500 ease-out hover:border-[#d7aa51] hover:bg-[#d7aa51] hover:!text-[#07110e]"
                  >
                    ابدأ التخطيط
                  </Link>
                </div>
              </div>

              <div className="grid gap-4">
                {processItems.map(([number, icon, title, text]) => (
                  <article
                    key={title}
                    className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-[0_24px_80px_rgba(0,0,0,.18)] backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-[#d7aa51]/45 hover:bg-white/[0.085] hover:shadow-[0_34px_110px_rgba(0,0,0,.3)] md:p-8"
                  >
                    <div className="absolute -left-5 -top-8 font-display text-[120px] leading-none text-white/[0.035] transition group-hover:text-[#d7aa51]/10">
                      {number}
                    </div>

                    <div className="relative z-10 grid gap-6 md:grid-cols-[90px_1fr] md:items-start">
                      <div>
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d7aa51]/35 bg-[#d7aa51]/10 text-[20px] text-[#d7aa51] shadow-[0_18px_45px_rgba(215,170,81,.08)] transition group-hover:border-[#d7aa51] group-hover:bg-[#d7aa51] group-hover:text-[#07110e]">
                          {icon}
                        </div>
                        <p className="mt-5 font-display text-[38px] leading-none text-[#d7aa51]">
                          {number}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-display text-[32px] leading-[1.05] tracking-[-0.035em] text-[#fff7e8] md:text-[42px]">
                          {title}
                        </h3>
                        <p className="mt-5 max-w-3xl text-[15px] leading-8 text-[#d8d1c3] md:text-[16px]">
                          {text}
                        </p>

                        <div className="mt-8 h-px w-full bg-white/10">
                          <div className="h-px w-12 bg-[#d7aa51] transition-all duration-500 group-hover:w-28" />
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="journeys" className="relative overflow-hidden bg-[#f7f0e5] py-20 text-[#111d18] md:py-28">
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d7aa51]/12 blur-3xl" />
          <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#07110e]/5 blur-3xl" />

          <div className="relative w-full px-6 text-right md:px-10 lg:px-14 xl:px-20">
            <div className="mb-12 grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
              <div>
                <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.32em] text-[#a8782d]">
                  Featured Journeys
                </p>
                <h2 className="font-display max-w-4xl text-[48px] leading-[1.05] tracking-[-0.04em] text-[#07110e] md:text-[76px]">
                  رحلات مختارة مسبقاً.
                </h2>
              </div>

              <div className="flex flex-col gap-6 lg:items-end">
                <p className="max-w-2xl text-[17px] leading-9 text-[#28352e]/72 md:text-[19px] md:leading-10">
                  ابدأ من مسار إندونيسي مختار، ثم قم بتخصيص الإقامة، التنقلات، المدة، والأنشطة حسب مجموعتك.
                </p>

                <Link
                  href="#contact"
                  className="inline-flex w-fit rounded-full border border-[#07110e]/20 bg-white px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] !text-[#07110e] shadow-[0_18px_45px_rgba(7,17,14,.08)] transition duration-500 ease-out hover:border-[#07110e] hover:bg-[#07110e] hover:!text-[#fff7e8]"
                >
                  المزيد من الرحلات
                </Link>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {travelPackages.slice(0, 3).map((item, index) => (
                <article
                  key={item.slug}
                  className="group relative min-h-[560px] overflow-hidden rounded-[2rem] bg-[#07110e] shadow-[0_28px_90px_rgba(7,17,14,.16)] transition duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_38px_120px_rgba(7,17,14,.24)]"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,17,14,.12),rgba(7,17,14,.24),rgba(7,17,14,.92))]" />
                  <div className="absolute inset-0 bg-[linear-gradient(270deg,rgba(7,17,14,.62),rgba(7,17,14,.12))]" />

                  <div className="relative z-10 flex min-h-[560px] flex-col justify-between p-7 md:p-8">
                    <div className="flex items-start justify-between">
                      <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#fff7e8] backdrop-blur-md">
                        {item.duration}
                      </div>

                      <p className="font-display text-[54px] leading-none text-white/22">
                        0{index + 1}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-display max-w-md text-[42px] leading-[1.05] tracking-[-0.035em] text-[#fff7e8] drop-shadow-[0_8px_30px_rgba(0,0,0,.45)] md:text-[54px]">
                        {packageArabicTitles[item.slug] || item.title}
                      </h3>

                      <Link
                        href="/ar/contact"
                        className="mt-8 inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.2em] !text-[#fff7e8] transition hover:!text-[#d7aa51]"
                      >
                        اعرف المزيد
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition group-hover:border-[#d7aa51]">
                          ←
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="relative overflow-hidden bg-[#f7f0e5] py-20 text-[#111d18] md:py-28">
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d7aa51]/12 blur-3xl" />
          <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#07110e]/5 blur-3xl" />

          <div className="relative w-full px-6 text-right md:px-10 lg:px-14 xl:px-20">
            <div className="mb-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.32em] text-[#a8782d]">
                  Pre-Designed Journeys
                </p>
                <h2 className="font-display max-w-3xl text-[48px] leading-[1.05] tracking-[-0.04em] text-[#07110e] md:text-[76px]">
                  باقات سفر خاصة قابلة للتخصيص.
                </h2>
              </div>

              <p className="max-w-3xl text-[17px] leading-9 text-[#28352e]/72 md:text-[19px] md:leading-10 lg:justify-self-end">
                اختر إحدى رحلاتنا المختارة كنقطة بداية، ثم قم بتعديل المسار، مستوى الراحة، المدة، وسرعة الرحلة حسب مجموعتك.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {travelPackages.map((item) => (
                <article
                  key={item.slug}
                  className="group overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_24px_80px_rgba(7,17,14,.08)] transition duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_34px_110px_rgba(7,17,14,.14)]"
                >
                  <div className="relative h-[260px] overflow-hidden xl:h-[300px]">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/36 to-black/5" />

                    <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                      <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#fff7e8] backdrop-blur-md">
                        {item.duration}
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[13px] text-[#d7aa51] backdrop-blur-md">
                        ✦
                      </span>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5">
                      <h3 className="font-display text-[34px] leading-[1.05] tracking-[-0.035em] text-[#fff7e8] drop-shadow-[0_4px_18px_rgba(0,0,0,.65)] xl:text-[38px]">
                        {packageArabicTitles[item.slug] || item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5 xl:p-6">
                    <div className="mb-5 flex flex-wrap gap-2">
                      <span className="rounded-full border border-black/10 bg-[#f7f0e5] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[#28352e]/72">
                        {item.region}
                      </span>
                      <span className="rounded-full border border-black/10 bg-[#f7f0e5] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[#28352e]/72">
                        رحلة خاصة
                      </span>
                    </div>

                    <p className="line-clamp-3 text-[14px] leading-7 text-[#28352e]/74">
                      برنامج خاص قابل للتعديل حسب عدد المسافرين، مدة الرحلة، مستوى الإقامة، والوجهات المطلوبة.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        href="/ar/contact"
                        className="inline-flex rounded-full bg-[#07110e] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] !text-[#fff7e8] shadow-[0_14px_32px_rgba(7,17,14,.18)] transition duration-500 ease-out hover:bg-[#a8782d] hover:!text-[#fff7e8]"
                      >
                        عرض الباقة
                      </Link>

                      <Link
                        href="/ar/contact"
                        className="inline-flex rounded-full border border-black/15 bg-white px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] !text-[#07110e] transition duration-500 ease-out hover:border-[#07110e] hover:bg-[#07110e] hover:!text-[#fff7e8]"
                      >
                        استفسر
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <InclusionsSectionArabic />

        <HotelOptionsSectionArabic />

        <section className="relative overflow-hidden bg-[#07110e] py-20 text-white md:py-28">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-[0.14]"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1542897644-e04428948020?auto=format&fit=crop&w=2400&q=85')",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,14,.98),rgba(7,17,14,.92),rgba(7,17,14,.98))]" />
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d7aa51]/10 blur-3xl" />
          <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

          <div className="relative w-full px-6 text-right md:px-10 lg:px-14 xl:px-20">
            <div className="mb-12 grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
              <div>
                <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.32em] text-[#d7aa51]">
                  Sample Itinerary
                </p>
                <h2 className="font-display max-w-4xl text-[48px] leading-[1.05] tracking-[-0.04em] text-[#fff7e8] md:text-[76px]">
                  لمحة عن رحلة سبعة أيام في إندونيسيا.
                </h2>
              </div>

              <div className="lg:justify-self-end">
                <p className="max-w-3xl text-[16px] leading-8 text-[#d8d1c3] md:text-[18px] md:leading-9">
                  يمكن تعديل كل برنامج حسب نقطة الوصول، مستوى الراحة، سرعة الرحلة، وأسلوب السفر المطلوب.
                </p>

                <div className="mt-7">
                  <Link
                    href="/ar/contact"
                    className="inline-flex rounded-full border border-[#fff7e8] bg-[#fff7e8] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.18em] !text-[#07110e] shadow-[0_18px_45px_rgba(255,247,232,.14)] transition duration-500 ease-out hover:border-[#d7aa51] hover:bg-[#d7aa51] hover:!text-[#07110e]"
                  >
                    استكشف الرحلة كاملة
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <div className="relative hidden min-h-[620px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-[0_28px_90px_rgba(0,0,0,.22)] backdrop-blur-md lg:block">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-80"
                  style={{ backgroundImage: `url('${featuredItinerary.image}')` }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,17,14,.2),rgba(7,17,14,.42),rgba(7,17,14,.92))]" />
                <div className="absolute inset-0 bg-[linear-gradient(270deg,rgba(7,17,14,.68),rgba(7,17,14,.18))]" />

                <div className="relative z-10 flex min-h-[620px] flex-col justify-end p-8 xl:p-10">
                  <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#d7aa51]">
                    Featured Route
                  </p>
                  <h3 className="font-display text-[46px] leading-[1.05] tracking-[-0.035em] text-[#fff7e8] drop-shadow-[0_8px_30px_rgba(0,0,0,.45)] xl:text-[58px]">
                    {packageArabicTitles[featuredItinerary.slug] || featuredItinerary.title}
                  </h3>
                  <p className="mt-5 max-w-md text-[15px] leading-8 text-[#d8d1c3]">
                    نموذج مرن لمسار الرحلة يمكن استخدامه كنقطة بداية لبرنامج خاص يناسبك.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {arabicItinerary.map(([day, title, description], index) => (
                  <article
                    key={day}
                    className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.065] p-6 shadow-[0_22px_70px_rgba(0,0,0,.16)] backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-[#d7aa51]/45 hover:bg-white/[0.09] hover:shadow-[0_32px_100px_rgba(0,0,0,.26)] md:p-7"
                  >
                    <div className="absolute -left-4 -top-7 font-display text-[96px] leading-none text-white/[0.035] transition group-hover:text-[#d7aa51]/10">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="relative z-10">
                      <div className="mb-8 flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d7aa51]/35 bg-[#d7aa51]/10 text-[18px] text-[#d7aa51] transition group-hover:border-[#d7aa51] group-hover:bg-[#d7aa51] group-hover:text-[#07110e]">
                          ✦
                        </div>

                        <p className="font-display text-[34px] leading-none text-[#d7aa51]">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                      </div>

                      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.26em] text-[#d7aa51]">
                        {day}
                      </p>

                      <h3 className="font-display text-[30px] leading-[1.05] tracking-[-0.035em] text-[#fff7e8] md:text-[36px]">
                        {title}
                      </h3>

                      <p className="mt-5 text-[14px] leading-7 text-[#d8d1c3] md:text-[15px] md:leading-8">
                        {description}
                      </p>

                      <div className="mt-7 h-px w-full bg-white/10">
                        <div className="h-px w-10 bg-[#d7aa51] transition-all duration-500 group-hover:w-24" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="destinations" className="relative overflow-hidden bg-[#07110e] py-20 text-white md:py-28">
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

          <div className="relative w-full px-6 text-right md:px-10 lg:px-14 xl:px-20">
            <div className="mb-12 grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
              <div>
                <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.32em] text-[#d7aa51]">
                  Explore Indonesia
                </p>
                <h2 className="font-display max-w-4xl text-[48px] leading-[1.05] tracking-[-0.04em] text-[#fff7e8] md:text-[76px]">
                  وجهات مصممة حسب أسلوب رحلتك.
                </h2>
              </div>

              <p className="max-w-3xl text-[16px] leading-8 text-[#d8d1c3] md:text-[18px] md:leading-9 lg:justify-self-end">
                من المسارات الثقافية إلى الجزر الهادئة، يمكن ترتيب كل وجهة مع تنقلات خاصة، إقامات مختارة، ودعم محلي.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {destinations.slice(0, 3).map((item, index) => (
                <Link
                  key={item.slug}
                  href="/ar/destinations"
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-[0_24px_80px_rgba(0,0,0,.18)] backdrop-blur-md transition duration-500 ease-out hover:-translate-y-2 hover:border-[#d7aa51]/45 hover:bg-white/[0.085] hover:shadow-[0_34px_110px_rgba(0,0,0,.3)] md:p-8"
                >
                  <div className="absolute -left-5 -top-7 font-display text-[100px] leading-none text-white/[0.035] transition group-hover:text-[#d7aa51]/10">
                    0{index + 1}
                  </div>

                  <div className="relative z-10">
                    <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#d7aa51]/35 bg-[#d7aa51]/10 text-[22px] text-[#d7aa51] transition group-hover:border-[#d7aa51] group-hover:bg-[#d7aa51] group-hover:text-[#07110e]">
                      ✦
                    </div>

                    <h3 className="font-display text-[38px] leading-[1.05] tracking-[-0.035em] text-[#fff7e8] md:text-[46px]">
                      {destinationArabicTitles[item.slug] || item.title}
                    </h3>

                    <p className="mt-5 text-[15px] leading-8 text-[#d8d1c3] md:text-[16px]">
                      رحلات خاصة، إقامات مختارة، وتجارب محلية يمكن ترتيبها حسب أسلوب سفرك.
                    </p>

                    <div className="mt-8 flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.2em] text-[#d7aa51]">
                      استكشف الوجهة
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-[#fff7e8] transition group-hover:border-[#d7aa51] group-hover:text-[#d7aa51]">
                        ←
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden bg-[#f7f0e5] py-20 text-[#111d18] md:py-28">
          <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d7aa51]/12 blur-3xl" />
          <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#07110e]/5 blur-3xl" />

          <div className="relative z-10 w-full px-6 text-right md:px-10 lg:px-14 xl:px-20">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div className="lg:sticky lg:top-32">
                <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.32em] text-[#a8782d]">
                  Enquire Now
                </p>

                <h2 className="font-display max-w-3xl text-[48px] leading-[1.05] tracking-[-0.04em] text-[#07110e] md:text-[76px]">
                  ابدأ باستشارة خاصة.
                </h2>

                <p className="mt-7 max-w-2xl text-[17px] leading-9 text-[#28352e]/72 md:text-[19px] md:leading-10">
                  أخبرنا بتاريخ السفر، عدد المسافرين، الوجهات المطلوبة، وأسلوب الرحلة. سنساعدك في تجهيز اتجاه مناسب لرحلتك في إندونيسيا.
                </p>

                <div className="mt-9 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {[
                    ["Phone", "+62 813-3729-536"],
                    ["WhatsApp", "+62 812-2045-5846"],
                    ["Email", "info@visitindotravel.com"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-[1.5rem] border border-black/10 bg-white/70 p-5 shadow-[0_18px_50px_rgba(7,17,14,.06)]"
                    >
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#a8782d]">
                        {label}
                      </p>
                      <p className="text-[14px] leading-7 text-[#28352e]/72">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pointer-events-auto relative z-30">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
