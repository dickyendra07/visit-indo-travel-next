const includedItems = [
  "ترتيب الاستقبال والتوصيل من وإلى المطار",
  "سيارة خاصة وسائق خاص أثناء الرحلة",
  "تصميم برنامج الرحلة حسب أسلوب السفر المطلوب",
  "المساعدة في اختيار الفندق أو الفيلا المناسبة",
  "ترتيب الوجهات والأنشطة المختارة",
  "دعم عبر واتساب قبل وأثناء الرحلة",
  "مرونة في تعديل المسار حسب وقت الوصول والمغادرة",
  "تنسيق محلي داخل إندونيسيا",
];

const excludedItems = [
  "تذاكر الطيران الدولية والداخلية",
  "تكلفة الفندق ما لم يتم ذكرها ضمن العرض النهائي",
  "المصاريف الشخصية، التسوق، الغسيل، والميني بار",
  "الوجبات غير المذكورة في البرنامج المتفق عليه",
  "تذاكر الدخول غير المذكورة في عرض السعر النهائي",
  "تأمين السفر والمصاريف الطبية الشخصية",
  "الإكراميات للسائق، المرشد، موظفي الفندق، أو الحمالين",
  "أي أنشطة إضافية خارج البرنامج المتفق عليه",
];

export function InclusionsSectionArabic() {
  return (
    <section dir="rtl" className="relative overflow-hidden bg-[#07110e] py-20 text-white md:py-28">
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d7aa51]/10 blur-3xl" />
      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="relative w-full px-6 text-right md:px-10 lg:px-14 xl:px-20">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.32em] text-[#d7aa51]">
              ما الذي يشمله البرنامج
            </p>
            <h2 className="font-display max-w-4xl text-[48px] leading-[1.05] tracking-[-0.04em] text-[#fff7e8] md:text-[76px]">
              تفاصيل واضحة قبل بداية رحلتك.
            </h2>
          </div>

          <p className="max-w-3xl text-[16px] leading-8 text-[#d8d1c3] md:text-[18px] md:leading-9 lg:justify-self-end">
            نوضح لك ما يشمله البرنامج وما لا يشمله قبل التأكيد، حتى تكون كل تفاصيل الرحلة واضحة وقابلة للتخصيص حسب احتياجك.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <article className="overflow-hidden rounded-[2rem] border border-[#d7aa51]/30 bg-white/[0.065] shadow-[0_28px_90px_rgba(0,0,0,.22)] backdrop-blur-md">
            <div className="border-b border-white/10 bg-[#d7aa51]/10 px-7 py-7 md:px-8">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#d7aa51]">
                Included
              </p>
              <h3 className="font-display text-[38px] leading-[1.05] tracking-[-0.035em] text-[#fff7e8] md:text-[48px]">
                ما يشمله البرنامج
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
              <h3 className="font-display text-[38px] leading-[1.05] tracking-[-0.035em] text-[#fff7e8] md:text-[48px]">
                غير مشمول إلا إذا ذُكر
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
