export default function SectionHeader({ index, label, title, className = '' }) {
  return (
    <div className={className}>
      <div className="font-mono text-[13px] tracking-[0.12em] text-muted">
        {index} — {label.toUpperCase()}
      </div>
      <h2 className="mt-4 text-[44px] font-semibold leading-none tracking-[-0.04em] md:text-[72px]">{title}</h2>
    </div>
  )
}
