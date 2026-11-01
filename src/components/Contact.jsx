import { profile } from '../data/content'

const links = [
  { label: profile.email, href: `mailto:${profile.email}`, icon: '↗' },
  { label: 'LinkedIn', href: profile.linkedin, icon: '↗', external: true },
  { label: 'GitHub', href: profile.github, icon: '↗', external: true },
  { label: 'Download CV', href: profile.cv, icon: '↓', download: true },
]

export default function Contact() {
  return (
    <section id="contact" className="border-t border-[#1A1A1A] pb-12 pt-16 md:pb-16 md:pt-[140px]">
      <div className="wrap">
        <div className="font-mono text-[13px] tracking-[0.12em] text-muted">04 — CONTACT</div>
        <h2 className="mb-10 mt-4 md:mb-[72px] text-[56px] font-semibold leading-[0.95] tracking-[-0.045em] md:text-[104px]">
          Now you know {profile.name}.
          <br />
          <span className="text-muted">Let's talk.</span>
        </h2>

        <div className="border-b border-line">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              download={l.download || undefined}
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noreferrer' : undefined}
              className="focus-ring group flex items-center justify-between gap-4 border-t border-line py-7 text-xl font-medium md:text-[28px]"
            >
              <span className="break-all">{l.label}</span>
              <span className="font-mono text-[22px] transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1">
                {l.icon}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-3 font-mono text-xs text-muted">
          <span>© 2026 {profile.fullName}</span>
          <span>Makkah → Jeddah → Riyadh</span>
        </div>
      </div>
    </section>
  )
}
