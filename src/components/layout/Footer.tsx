import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#040807] text-white">
      <div className="container-page grid gap-10 border-t border-white/10 py-14 lg:grid-cols-[1.1fr_1fr_1fr_1fr]">
        <div>
          <div className="relative mb-5 h-14 w-52">
            <Image
              src="/images/visit-indo-travel-header-logo.png"
              alt="Visit Indo Travel"
              fill
              className="object-contain object-left"
            />
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/60">
            Premium private journeys across Indonesia with curated stays,
            personal drivers, cultural experiences, and fast travel support.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#f5dc92]">
            Company
          </h3>
          <p className="mb-3 text-sm font-bold text-white">CV. Blue Sky</p>
          <p className="text-sm leading-7 text-white/60">
            Ruko Grand Nirwana Tegalyoso, Jl. Merapi No.desa, Dusun 1, Metuk
            Kidul, Kec. Klaten Sel., Kabupaten Klaten, Jawa Tengah 57411
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#f5dc92]">
            Contact
          </h3>
          <div className="space-y-3 text-sm text-white/65">
            <Link className="block hover:text-white" href="tel:+628133729536">
              Phone: +62 813-3729-536
            </Link>
            <Link className="block hover:text-white" href="https://wa.me/6281220455846">
              WhatsApp: +62 812-2045-5846
            </Link>
            <Link className="block hover:text-white" href="mailto:info@visitindotravel.com">
              Email: info@visitindotravel.com
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#f5dc92]">
            Payment Details
          </h3>
          <div className="space-y-2 text-sm leading-6 text-white/65">
            <p>Account Name: DITA MEIKAWATI</p>
            <p>Account Number: 1950429292</p>
            <p>SWIFT Code: BNINIDJA</p>
            <p>Bank: Bank Negara Indonesia (BNI)</p>
          </div>
        </div>
      </div>

      <div className="container-page flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Visit Indo Travel. Managed by CV. Blue Sky.</p>
        <p>Private Indonesia Journeys.</p>
      </div>
    </footer>
  );
}
