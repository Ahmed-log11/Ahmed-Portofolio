import SectionHeader from './SectionHeader'
import AwardCard from './AwardCard'
import { awards } from '../data/content'

export default function Awards() {
  return (
    <section id="awards" className="border-t border-[#1A1A1A] py-[120px]">
      <div className="wrap">
        <SectionHeader index="03" label="Certificates & Awards" title="Proof, on paper." className="mb-16" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {awards.map((a) => (
            <AwardCard key={a.title} award={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
