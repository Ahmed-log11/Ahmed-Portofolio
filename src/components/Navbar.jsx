import { profile } from '../data/content'

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#awards', label: 'Awards' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#1A1A1A] bg-bg/80 backdrop-blur-md">
      <div className="wrap flex h-[72px] items-center justify-between">
        <a href="#hero" className="focus-ring text-xl font-bold tracking-tight">
          {profile.name}
          <span className="text-muted">.</span>
        </a>
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="focus-ring text-[15px] text-soft transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
          <a href={profile.cv} download className="btn-ghost focus-ring h-10 px-5 text-sm">
            Download CV
          </a>
        </nav>
        <a href={profile.cv} download className="btn-ghost focus-ring h-10 px-4 text-sm md:hidden">
          CV
        </a>
      </div>
    </header>
  )
}
