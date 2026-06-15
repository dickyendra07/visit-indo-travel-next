import Link from"next/link"; type ButtonProps = { href: string; children: React.ReactNode; variant?:"primary" |"secondary" |"dark"; className?: string;
}; export function Button({ href, children, variant ="primary", className ="",
}: ButtonProps) { const base ="inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-black transition duration-300 hover:-translate-y-1"; const variants = { primary:"gold-gradient text-[#07110e] shadow-[0_18px_45px_rgba(215,170,81,0.22)]", secondary:"border border-white/20 bg-white/10 text-white backdrop-blur-xl hover:bg-white/15", dark:"bg-[#081812] text-white hover:bg-[#10251c]", }; return ( <Link href={href} className={`${base} ${variants[variant]} ${className}`}> {children} </Link> );
}
