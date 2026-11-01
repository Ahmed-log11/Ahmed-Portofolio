// The dot navigation fixed on the left. Hidden below 1100px wide.
export default function ScrollRail({ sections, active }) {
  return (
    <nav
      aria-label="Sections"
      className="fixed left-8 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-5 rail:flex"
    >
      {sections.map((s) => {
        const on = s.id === active
        return (
          <a key={s.id} href={`#${s.id}`} className="focus-ring group flex items-center gap-3" aria-current={on ? 'true' : undefined}>
            <span
              className={`block rounded-full transition-all duration-300 ${
                on ? 'h-2.5 w-2.5 bg-ink' : 'm-0.5 h-1.5 w-1.5 bg-[#4A4A4A] group-hover:bg-soft'
              }`}
            />
            <span
              className={`font-mono text-[11px] uppercase tracking-[0.1em] text-soft transition-opacity duration-300 ${
                on ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}
            >
              {s.label}
            </span>
          </a>
        )
      })}
    </nav>
  )
}
