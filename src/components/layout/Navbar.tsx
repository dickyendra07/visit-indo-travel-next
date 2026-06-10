import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experiences", href: "#experiences" },
  { label: "Journeys", href: "#journeys" },
  { label: "Destinations", href: "#destinations" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <div className="container-page flex items-center justify-between rounded-full border border-white/15 bg-[#06110d]/70 px-4 py-3 backdrop-blur-2xl md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-36 overflow-hidden md:h-12 md:w-44">
            <Image
              src="/images/visit-indo-travel-header-logo.png"
              alt="Visit Indo Travel"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-white/72 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#contact">Plan a Journey</Button>
        </div>

        <Link
          href="#contact"
          className="rounded-full border border-white/15 px-4 py-3 text-xs font-black text-white md:hidden"
        >
          Inquiry
        </Link>
      </div>
    </header>
  );
}
