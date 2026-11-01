import SectionHeader from './SectionHeader'
import ExperienceItem from './ExperienceItem'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-[#1A1A1A] py-[120px]">
      <div className="wrap">
        <SectionHeader index="01" label="Experience" title="Where I've been." className="mb-[72px]" />
        <div className="flex flex-col">
          {experience.map((item, i) => (
            <ExperienceItem key={item.org} item={item} number={String(i + 1).padStart(2, '0')} />
          ))}
        </div>
      </div>
    </section>
  )
}
