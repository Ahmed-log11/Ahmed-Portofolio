export default function AwardCard({ award }) {
  return (
    <article
      className={`flex min-h-[220px] flex-col gap-5 border border-line bg-[#0D0D0D] p-7 ${award.wide ? 'md:col-span-2' : ''}`}
    >
      <div className="flex items-start justify-between font-mono text-[11px] text-muted">
        <span className="uppercase tracking-[0.1em]">{award.type}</span>
        <span>{award.year}</span>
      </div>
      <div className="text-[40px] font-semibold leading-none tracking-[-0.03em]">{award.big}</div>
      <div className="mt-auto">
        <h3 className="text-[17px] font-medium leading-snug">{award.title}</h3>
        <p className="mt-1.5 text-sm text-muted">{award.by}</p>
      </div>
    </article>
  )
}
