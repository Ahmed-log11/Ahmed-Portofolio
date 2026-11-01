// One card in the leaning carousel. offset: 0 = front, -1/1 = leaning sides, other = hidden.
const positions = {
  0: 'translateX(-50%) rotate(0deg) scale(1)',
  '-1': 'translateX(-110%) rotate(-6deg) scale(.8)',
  1: 'translateX(10%) rotate(6deg) scale(.8)',
}

function Media({ media, title, playing }) {
  const fill = 'absolute inset-0 h-full w-full object-cover'

  if (media.type === 'video') {
    // The video only mounts while its card is in front and the section is in view,
    // so it starts from the beginning each time you arrive on it.
    return playing ? (
      <video src={media.src} poster={media.poster} className={fill} autoPlay muted loop playsInline aria-hidden="true" />
    ) : (
      <img src={media.poster} alt="" aria-hidden="true" className={fill} />
    )
  }
  return <img src={media.src} alt={media.alt || title} className={`${fill} object-top`} loading="lazy" />
}

export default function ProjectCard({ project, offset, playing, onSelect }) {
  const isFront = offset === 0
  const isSide = Math.abs(offset) === 1
  const visible = isFront || isSide

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={`Show ${project.title}`}
      tabIndex={visible ? 0 : -1}
      className={`focus-ring absolute left-1/2 top-0 block h-full w-[88%] max-w-[560px] text-left transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(.2,.7,.2,1)] md:w-[76%] ${
        isSide ? 'max-md:pointer-events-none max-md:!opacity-0' : ''
      }`}
      style={{
        transform: positions[offset] ?? 'translateX(-50%) scale(.6)',
        opacity: isFront ? 1 : isSide ? 0.45 : 0,
        filter: isFront ? 'none' : 'brightness(.7)',
        zIndex: isFront ? 3 : isSide ? 2 : 1,
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div className="flex h-full flex-col border border-[#2A2A2A] bg-surface p-2.5">
        <div className="relative flex-1 overflow-hidden bg-frame">
          <Media media={project.media} title={project.title} playing={playing} />
          <span className="absolute left-3 top-3 z-10 border border-[#3A3A3A] bg-bg px-2 py-1 font-mono text-[11px] tracking-[0.1em] text-[#D0D0D0]">
            {project.media.type === 'video' ? 'VIDEO' : 'IMAGE'}
          </span>
        </div>
        <div className="flex items-baseline justify-between gap-4 px-2 pb-2 pt-[18px]">
          <div className="text-xl font-semibold tracking-[-0.02em] md:text-[26px]">{project.title}</div>
          <div className="whitespace-nowrap font-mono text-xs text-muted">{project.meta}</div>
        </div>
      </div>
    </button>
  )
}
