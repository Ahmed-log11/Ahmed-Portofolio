function Frame({ image, caption, number }) {
  const isLogo = image.kind === 'logo'
  return (
    <figure className="relative m-0 border border-[#2A2A2A] p-2">
      <span className="absolute -left-px -top-px h-3 w-3 border-l border-t border-ink" />
      <span className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-ink" />
      <div
        className={`flex items-center justify-center overflow-hidden bg-frame ${
          image.tall ? 'h-[380px]' : 'h-[200px]'
        }`}
      >
        {isLogo ? (
          <img src={image.src} alt={caption} className="max-h-[62%] object-contain" style={{ maxWidth: image.width }} />
        ) : (
          <img
            src={image.src}
            alt={caption}
            className="h-full w-full object-cover"
            style={{ objectPosition: image.position || 'center' }}
          />
        )}
      </div>
      <figcaption className="flex justify-between px-0.5 pb-0.5 pt-2.5 font-mono text-[11px] text-muted">
        <span>{caption}</span>
        <span>{number}</span>
      </figcaption>
    </figure>
  )
}

export default function ExperienceItem({ item, number }) {
  return (
    <article className="grid items-start gap-4 border-t border-[#1E1E1E] py-12 md:grid-cols-[140px_minmax(0,1fr)_320px] md:gap-10">
      <div className="pt-2 font-mono text-[13px] text-muted">{item.when}</div>

      <div className="flex flex-col gap-3">
        <div className="font-mono text-xs uppercase tracking-[0.1em] text-muted">{item.org}</div>
        <h3 className="text-[32px] font-semibold leading-tight tracking-[-0.02em]">{item.role}</h3>
        <p className="max-w-[520px] text-[17px] leading-relaxed text-soft">{item.desc}</p>

        {item.roles?.map((r) => (
          <div key={r.role} className="mt-2 flex flex-col gap-1.5 border-l border-edge pl-[18px] pt-4">
            <div className="flex flex-wrap justify-between gap-4">
              <span className="text-[19px] font-semibold">
                {r.role} <span className="font-normal text-muted">· {r.org}</span>
              </span>
              <span className="font-mono text-xs text-muted">{r.when}</span>
            </div>
            <span className="text-[15px] leading-relaxed text-soft">{r.desc}</span>
          </div>
        ))}
      </div>

      <Frame image={item.image} caption={item.caption} number={number} />
    </article>
  )
}
