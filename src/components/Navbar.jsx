import { useEffect, useState } from 'react'
import { profile, sections } from '../data/content'

const links = sections.filter((s) => s.id !== 'hero')

// Thin bar under the navbar that fills as you scroll the page
function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
  return progress
}

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false)
  const progress = useScrollProgress()
  const index = sections.findIndex((s) => s.id === active)
  const current = sections[index]

  return (
    <header className="sticky top-0 z-40 border-b border-[#1A1A1A] bg-bg/85 backdrop-blur-md">
      <div className="wrap flex h-[72px] items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#hero" className="focus-ring text-xl font-bold tracking-tight" onClick={() => setOpen(false)}>
            {profile.name}
            <span className="text-muted">.</span>
          </a>
          {/* Phone only: which section you're in */}
          {index > 0 && (
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted md:hidden">
              {String(index).padStart(2, '0')} — {current.label}
            </span>
          )}
        </div>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`focus-ring text-[15px] transition-colors hover:text-ink ${active === l.id ? 'text-ink' : 'text-soft'}`}
            >
              {l.label}
            </a>
          ))}
          <a href={profile.cv} download className="btn-ghost focus-ring h-10 px-5 text-sm">
            Download CV
          </a>
        </nav>

        <button
          type="button"
          className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-edge md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      {/* Phone menu */}
      {open && (
        <nav aria-label="Mobile" className="border-t border-[#1A1A1A] bg-bg md:hidden">
          <div className="wrap flex flex-col py-2">
            {links.map((l, i) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="focus-ring flex items-center justify-between border-b border-[#1A1A1A] py-4 text-lg"
              >
                <span className={active === l.id ? 'text-ink' : 'text-soft'}>{l.label}</span>
                <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, '0')}</span>
              </a>
            ))}
            <a href={profile.cv} download className="btn-solid focus-ring my-4 justify-center">
              Download CV
            </a>
          </div>
        </nav>
      )}

      <div className="absolute bottom-[-1px] left-0 h-px bg-ink/70" style={{ width: `${progress * 100}%` }} />
    </header>
  )
}
