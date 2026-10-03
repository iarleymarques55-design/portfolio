import { useState, useEffect, useRef } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { navigation, personalInfo } from '../data/portfolioData'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40)
      const sections = ['sobre', 'projetos', 'habilidades', 'experiencia', 'certificados', 'contato']
      const current = sections.find((section) => {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          return rect.top <= 120 && rect.bottom >= 120
        }
        return false
      })
      if (current) setActiveSection(`#${current}`)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(245,242,238,0.96)' : 'rgba(245,242,238,0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid #d9d3cb' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 20px rgba(26,23,20,0.06)' : 'none',
      }}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-10" style={{ height: '72px' }}>

        {/* Left: Name as wordmark */}
        <a
          href="#inicio"
          className="group flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <span
            className="font-serif text-xl font-bold tracking-tight transition-colors"
            style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'var(--ink)', letterSpacing: '-0.02em' }}
          >
            Iarley<span style={{ color: 'var(--accent)' }}>.</span>
          </span>
        </a>

        {/* Center: Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map(({ label, href }) => {
            const isActive = activeSection === href
            return (
              <a
                key={href}
                href={href}
                className="text-sm font-medium transition-colors"
                style={{
                  color: isActive ? 'var(--accent)' : 'var(--ink-muted)',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: isActive ? '600' : '500',
                  borderBottom: isActive ? '2px solid var(--accent)' : '2px solid transparent',
                  paddingBottom: '2px',
                }}
              >
                {label}
              </a>
            )
          })}
        </nav>

        {/* Right: Social + CTA */}
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub de Iarley Marques"
            className="flex items-center justify-center w-9 h-9 rounded-full transition-all"
            style={{ border: '1px solid #d9d3cb', color: 'var(--ink-muted)' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.borderColor = 'var(--ink-muted)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-muted)'; e.currentTarget.style.borderColor = '#d9d3cb'; }}
          >
            <GithubIcon size={16} />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn de Iarley Marques"
            className="flex items-center justify-center w-9 h-9 rounded-full transition-all"
            style={{ border: '1px solid #d9d3cb', color: 'var(--ink-muted)' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--navy)'; e.currentTarget.style.borderColor = 'var(--navy)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-muted)'; e.currentTarget.style.borderColor = '#d9d3cb'; }}
          >
            <LinkedinIcon size={16} />
          </a>

          <a
            href="#contato"
            className="inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-semibold transition-all"
            style={{ background: 'var(--ink)', color: '#fff', fontFamily: 'Space Grotesk, sans-serif' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--ink)'; }}
          >
            Contato
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="flex items-center justify-center w-10 h-10 rounded-full lg:hidden"
          style={{ border: '1px solid #d9d3cb', color: 'var(--ink)' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <nav
          className="px-6 pb-8 pt-4 lg:hidden"
          style={{ borderTop: '1px solid #d9d3cb', background: 'rgba(245,242,238,0.98)' }}
        >
          <div className="flex flex-col gap-1">
            {navigation.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium transition-colors"
                style={{ color: 'var(--ink)', fontFamily: 'Space Grotesk, sans-serif' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--ink)'}
              >
                {label}
              </a>
            ))}
          </div>
          <div className="mt-6 flex gap-3 pt-5" style={{ borderTop: '1px solid #d9d3cb' }}>
            <a
              href={personalInfo.github}
              target="_blank" rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold"
              style={{ border: '1px solid #d9d3cb', color: 'var(--ink)' }}
            >
              <GithubIcon size={15} /> GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank" rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold"
              style={{ border: '1px solid #d9d3cb', color: 'var(--ink)' }}
            >
              <LinkedinIcon size={15} /> LinkedIn
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
