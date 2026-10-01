import { MapPin, ArrowUp } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      className="relative py-12"
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid #e0d8ce',
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-10">
        
        {/* Left: Brand Wordmark + Location */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <a
            href="#inicio"
            aria-label="Voltar ao início"
            className="transition-opacity hover:opacity-80"
          >
            <span
              style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontSize: '1.4rem',
                fontWeight: 700,
                color: 'var(--ink)',
                letterSpacing: '-0.02em',
              }}
            >
              Iarley<span style={{ color: 'var(--accent)' }}>.</span>
            </span>
          </a>

          {/* Divider on desktop */}
          <div className="hidden sm:block h-4 w-px" style={{ background: '#d4cbbe' }} />

          <div className="flex items-center gap-1.5 text-xs" style={{ fontFamily: 'Space Grotesk', color: 'var(--ink-muted)' }}>
            <MapPin size={13} style={{ color: 'var(--accent)' }} className="shrink-0" />
            <span>{personalInfo.location} · {personalInfo.role}</span>
          </div>
        </div>

        {/* Center/Right: Copyright + Back to Top */}
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <p
            className="text-xs"
            style={{ fontFamily: 'Space Grotesk', color: 'var(--ink-faint)' }}
          >
            © {new Date().getFullYear()} Iarley Marques. Feito com rigor editorial.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer"
            style={{
              fontFamily: 'Space Grotesk',
              border: '1px solid #dcd4c8',
              background: '#ffffff',
              color: 'var(--ink)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--ink)'
              e.currentTarget.style.color = '#ffffff'
              e.currentTarget.style.borderColor = 'var(--ink)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ffffff'
              e.currentTarget.style.color = 'var(--ink)'
              e.currentTarget.style.borderColor = '#dcd4c8'
            }}
          >
            <span>Topo</span>
            <ArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  )
}
