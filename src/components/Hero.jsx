import { profile } from '../data/content'

const fade =
  'radial-gradient(ellipse 60% 55% at 60% 48%, rgba(0,0,0,.95) 0%, rgba(0,0,0,.55) 40%, rgba(0,0,0,.15) 65%, transparent 80%)'

export default function Hero() {
  return (
    <section id="hero" className="pb-24 pt-10 md:pt-12">
      <div className="wrap">
        <div className="grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-6">
          <div className="relative z-10 flex flex-col gap-7">
            <div className="flex items-center gap-2.5 font-mono text-[13px] tracking-[0.12em] text-muted">
              <span className="h-2 w-2 animate-blink rounded-full bg-ink" />
              {profile.title}
            </div>

            <h1 className="text-[64px] font-semibold leading-[0.95] tracking-[-0.045em] md:text-[112px]">
              This is
              <br />
              {profile.name}.
            </h1>

            <p className="max-w-[520px] text-[26px] leading-tight tracking-[-0.01em] text-muted md:text-3xl">
              He builds AI — and <span className="text-ink">bridges it to business</span>.
            </p>

            <div className="mt-2 flex flex-wrap gap-3">
              <a href="#projects" className="btn-solid focus-ring">
                See my work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </a>
              <a href={profile.cv} download className="btn-ghost focus-ring">
                Download CV
              </a>
            </div>

            <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-5 border-t border-[#1E1E1E] pt-7">
              {profile.stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-[28px] font-semibold">
                    {s.value}
                    {s.suffix && <span className="text-lg text-muted">{s.suffix}</span>}
                  </dd>
                  <dd className="mt-1 font-mono text-xs text-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Photo sits in the background: faded at the edges, grayscale, half opacity */}
          <div className="relative -mx-5 h-[360px] md:-mr-16 md:ml-0 md:h-[440px]">
            <img
              src={profile.heroImage}
              alt="Ahmed speaking on stage with a microphone"
              className="absolute inset-0 h-full w-full object-cover opacity-45 brightness-[.8] contrast-[1.05] grayscale"
              style={{ objectPosition: '58% 38%', WebkitMaskImage: fade, maskImage: fade }}
            />
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3 font-mono text-xs tracking-[0.12em] text-muted">
          <span className="h-px w-10 bg-muted" /> SCROLL — THE STORY STARTS HERE
        </div>
      </div>
    </section>
  )
}
