import { useEffect } from 'react'
import { CreativeCareer } from './components/CreativeCareer'
import { EngineLabs } from './components/EngineLabs'
import { EngineResearch } from './components/EngineResearch'
import { Hero } from './components/Hero'
import { ProjectJinn } from './components/ProjectJinn'
import { SiteHeader } from './components/SiteHeader'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

function App() {

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <div id="top" className="site-shell">
      <SiteHeader />
      <main id="main">
        <Hero asset={asset} />
        <EngineLabs asset={asset} />
        <ProjectJinn />
        <EngineResearch asset={asset} />
        <CreativeCareer asset={asset} />
      </main>
      <footer className="site-footer">
        <span>FUTUREDO · GAME CLIENT / GAMEPLAY · 2027 CAMPUS</span>
        <a href="#top" aria-label="返回顶部">↑</a>
      </footer>
    </div>
  )
}

export default App
