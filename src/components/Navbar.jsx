import { useState, useEffect } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { navigation, personalInfo } from '../data/portfolioData'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20)

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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl shadow-xl shadow-black/30'
          : 'border-b border-transparent bg-slate-950/60 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        
        {/* Left: Brand Logo & Title */}
        <a
          href="#inicio"
          className="group flex items-center gap-3.5"
          onClick={() => setMenuOpen(false)}
        >
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-400 font-display text-sm font-black !text-slate-950 shadow-md shadow-amber-400/20 transition-transform group-hover:scale-105">
            <span className="text-slate-950 font-black">IM</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-sm font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
              Iarley Marques
            </span>
            <span className="font-mono text-[11px] text-slate-400">Desenvolvedor Full Stack</span>
          </div>
        </a>

        {/* Center: Organized Glass Capsule Navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-slate-800/90 bg-slate-900/80 p-1.5 backdrop-blur-xl shadow-inner lg:flex">
          {navigation.map(({ label, href }) => {
            const isActive = activeSection === href
            return (
              <a
                key={href}
                href={href}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-slate-800 text-amber-300 shadow-sm'
                    : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
                }`}
              >
                {label}
              </a>
            )
          })}
        </nav>

        {/* Right: Social Actions & Contact CTA */}
        <div className="hidden items-center gap-2.5 sm:flex">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub de Iarley Marques"
            className="grid h-9 w-9 place-items-center rounded-xl border border-slate-800 bg-slate-900/90 text-slate-300 transition hover:border-slate-600 hover:bg-slate-800 hover:text-white"
          >
            <GithubIcon size={16} />
          </a>
          
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn de Iarley Marques"
            className="grid h-9 w-9 place-items-center rounded-xl border border-slate-800 bg-slate-900/90 text-slate-300 transition hover:border-slate-600 hover:bg-slate-800 hover:text-white"
          >
            <LinkedinIcon size={16} />
          </a>

          <a
            href="#contato"
            className="inline-flex items-center gap-1.5 rounded-xl bg-amber-400 px-4 py-2 text-xs font-bold text-slate-950 transition hover:bg-amber-300 shadow-md shadow-amber-400/10 ml-1"
          >
            <span>Contato</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 transition hover:text-white hover:border-slate-700 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <nav className="border-t border-slate-800 bg-slate-950/98 px-6 py-6 backdrop-blur-2xl lg:hidden">
          <div className="flex flex-col space-y-1.5">
            {navigation.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-slate-200 transition hover:bg-slate-900 hover:text-amber-300"
              >
                {label}
              </a>
            ))}
          </div>
          
          <div className="mt-6 flex items-center gap-3 border-t border-slate-800/80 pt-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900 py-2.5 text-xs font-bold text-slate-200"
            >
              <GithubIcon size={15} /> GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900 py-2.5 text-xs font-bold text-slate-200"
            >
              <LinkedinIcon size={15} /> LinkedIn
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
