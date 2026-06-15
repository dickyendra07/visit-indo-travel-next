type SectionHeaderProps = { eyebrow: string; title: string; text?: string; center?: boolean; dark?: boolean;
}; export function SectionHeader({ eyebrow, title, text, center = false, dark = true,
}: SectionHeaderProps) { return ( <div className={`mb-12 max-w-3xl ${center ?"mx-auto text-center" :""}`}> <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-[#d7aa51]"> {eyebrow} </p> <h2 className={`font-display text-balance text-4xl leading-[0.98] tracking-[-0.04em] md:text-6xl ${ dark ?"text-white" :"text-[#111d18]" }`} > {title} </h2> {text ? ( <p className={`mt-5 text-base leading-8 ${ dark ?"text-white/65" :"text-[#17211d]/65" }`} > {text} </p> ) : null} </div> );
}
