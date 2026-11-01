import Navbar from './components/Navbar'
import ScrollRail from './components/ScrollRail'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Awards from './components/Awards'
import Contact from './components/Contact'
import useActiveSection from './hooks/useActiveSection'
import { sections } from './data/content'

const sectionIds = sections.map((s) => s.id)

export default function App() {
  const active = useActiveSection(sectionIds)

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <ScrollRail sections={sections} active={active} />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects inView={active === 'projects'} />
        <Awards />
        <Contact />
      </main>
    </div>
  )
}
