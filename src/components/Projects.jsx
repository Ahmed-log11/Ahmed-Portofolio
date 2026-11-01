import { useRef, useState } from 'react'
import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'
import ProjectDetails from './ProjectDetails'
import { projects } from '../data/content'

const n = projects.length

// Position of card i relative to the active one: -1 left, 0 center, 1 right, else hidden
function offsetOf(i, active) {
  let off = (i - active + n) % n
  if (off > n / 2) off -= n
  return off
}

function Arrow({ dir, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === 'prev' ? 'Previous project' : 'Next project'}
      className="focus-ring flex h-12 w-12 items-center justify-center rounded-full border border-edge text-ink transition-colors hover:border-ink"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d={dir === 'prev' ? 'M15 18l-6-6 6-6' : 'M9 6l6 6-6 6'} />
      </svg>
    </button>
  )
}

export default function Projects({ inView }) {
  const [active, setActive] = useState(0)
  const prev = () => setActive((a) => (a - 1 + n) % n)
  const next = () => setActive((a) => (a + 1) % n)

  // Swipe left/right on phones; vertical drags still scroll the page
  const touch = useRef(null)
  const onTouchStart = (e) => {
    const t = e.touches[0]
    touch.current = { x: t.clientX, y: t.clientY }
  }
  const onTouchEnd = (e) => {
    if (!touch.current) return
    const t = e.changedTouches[0]
    const dx = t.clientX - touch.current.x
    const dy = t.clientY - touch.current.y
    touch.current = null
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) (dx < 0 ? next : prev)()
  }

  return (
    <section id="projects" className="border-t border-[#1A1A1A] py-16 md:py-[120px]">
      <div className="wrap flex flex-wrap items-end justify-between gap-6">
        <SectionHeader index="02" label="Projects" title="Things I've built." />
        <div className="flex items-center gap-3">
          <span className="mr-2 font-mono text-[13px] text-muted" aria-live="polite">
            {String(active + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}
          </span>
          <Arrow dir="prev" onClick={prev} />
          <Arrow dir="next" onClick={next} />
        </div>
      </div>

      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        className="relative mx-auto mt-8 h-[300px] md:mt-16 w-full max-w-[1400px] md:h-[clamp(320px,50vh,460px)]">
        {projects.map((p, i) => {
          const off = offsetOf(i, active)
          return (
            <ProjectCard
              key={p.title}
              project={p}
              offset={off}
              playing={off === 0 && inView}
              onSelect={() => setActive(i)}
            />
          )
        })}
      </div>

      <div className="wrap">
        <div className="mt-8 flex justify-center gap-2">
          {projects.map((p, i) => (
            <button
              key={p.title}
              type="button"
              aria-label={`Show ${p.title}`}
              onClick={() => setActive(i)}
              className={`focus-ring h-1.5 rounded-full transition-all duration-300 ${
                i === active ? 'w-7 bg-ink' : 'w-1.5 bg-[#3A3A3A] hover:bg-muted'
              }`}
            />
          ))}
        </div>
        <ProjectDetails project={projects[active]} />
      </div>
    </section>
  )
}
