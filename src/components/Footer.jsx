import { MapPin, Sparkles, ArrowUp } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-slate-800/80 bg-[#05070d] py-6 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 sm:flex-row lg:px-10">
        
        {/* Left: Brand Icon + Divider + Two-line Text */}
        <div className="flex items-center gap-4">
          <a
            href="#inicio"
            aria-label="Voltar ao início"
            className="group grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-amber-400 font-display text-xs font-black text-slate-950 shadow-sm shadow-amber-400/20 transition-transform group-hover:scale-105"
          >
            <span className="font-display text-xs font-black text-slate-950">IM</span>
          </a>

          {/* Vertical Divider */}
          <div className="h-8 w-px bg-slate-800/90" />

          {/* Two-line Text */}
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-200">
              <MapPin size={13} className="text-amber-400 shrink-0" />
              <span>Cascavel - CE · Full Stack & IA</span>
            </div>
            <p className="font-mono text-[11px] text-slate-400">
              © {new Date().getFullYear()} Iarley Marques. Todos os direitos reservados.
            </p>
          </div>
        </div>

        {/* Right: Pill Badge "Desenvolvido por Iarley Marques" */}
        <button
          type="button"
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-4 py-2 font-mono text-xs text-slate-300 transition-all hover:border-amber-400/40 hover:bg-slate-800/90 hover:text-white cursor-pointer shadow-sm"
        >
          <Sparkles size={13} className="text-amber-400 transition-transform group-hover:scale-110" />
          <span>
            Desenvolvido por <strong className="font-bold text-white group-hover:text-amber-300 transition-colors">Iarley Marques</strong>
          </span>
          <ArrowUp size={12} className="ml-0.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>

      </div>
    </footer>
  )
}
