const opensNewTab = (href) => href.startsWith('http') || /\.(mp4|jpg|png)$/.test(href)

export default function ProjectDetails({ project }) {
  return (
    <div className="mx-auto mt-14 flex max-w-[820px] flex-col items-center gap-[18px] text-center">
      <p className="text-2xl leading-snug tracking-[-0.01em] md:text-[28px]">{project.hook}</p>
      <p className="max-w-[640px] text-[17px] leading-relaxed text-soft">{project.desc}</p>

      <ul className="flex flex-wrap justify-center gap-2">
        {project.tags.map((t) => (
          <li key={t} className="rounded-full border border-[#2A2A2A] px-3 py-1.5 font-mono text-xs text-soft">
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-2 flex flex-wrap justify-center gap-3">
        {project.links.map((l, i) => (
          <a
            key={l.label}
            href={l.href}
            target={opensNewTab(l.href) ? '_blank' : undefined}
            rel="noreferrer"
            className={`${i === 0 ? 'btn-solid' : 'btn-ghost'} focus-ring h-11 text-sm`}
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  )
}
