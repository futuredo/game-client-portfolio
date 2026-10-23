import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { evidenceUrl, navItems } from '../data/content'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('labs')

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[]
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0.05, 0.25, 0.5] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="返回顶部">
        <strong>FUTUREDO</strong><span>/</span><small>GAME CLIENT</small>
      </a>
      <button className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="切换导航">
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav className={open ? 'site-nav is-open' : 'site-nav'} aria-label="主要导航">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={active === item.href.slice(1) ? 'is-active' : ''}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a className="resume-link" href={evidenceUrl} target="_blank" rel="noreferrer">
          版本依据<ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </nav>
    </header>
  )
}
