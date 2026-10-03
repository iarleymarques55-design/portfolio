import { MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  return (
    <footer
      className="relative w-full py-8 sm:py-10"
      style={{
        background: '#110E0C',
        borderTop: '1px solid #231E1A',
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 sm:flex-row lg:px-10">
        
        {/* Left: Brand + Quick Info */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
          <a
            href="#inicio"
            aria-label="Voltar ao início"
            className="transition-opacity hover:opacity-85"
          >
            <span
              style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontSize: '1.35rem',
                fontWeight: 700,
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
              }}
            >
              Iarley Marques<span style={{ color: 'var(--terracota)' }}>.</span>
            </span>
          </a>

          <div className="hidden sm:block h-3.5 w-px" style={{ background: '#2C2520' }} />

          <p
            className="flex items-center gap-1.5 text-xs font-medium"
            style={{ fontFamily: 'Space Grotesk', color: '#9E9386' }}
          >
            <MapPin size={12} style={{ color: 'var(--terracota)' }} className="shrink-0" />
            <span>{personalInfo.location} · Full Stack & IA</span>
          </p>
        </div>

        {/* Center/Right: Social Links */}
        <div className="flex items-center gap-5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-1.5 text-xs font-semibold transition-colors hover:text-white"
            style={{ fontFamily: 'Space Grotesk', color: '#A69B8D' }}
          >
            <GithubIcon size={14} className="text-white" />
            <span>GitHub</span>
          </a>

          <span className="text-[#362E27]">•</span>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-1.5 text-xs font-semibold transition-colors hover:text-white"
            style={{ fontFamily: 'Space Grotesk', color: '#A69B8D' }}
          >
            <LinkedinIcon size={14} className="text-[#B0D8C0]" />
            <span>LinkedIn</span>
          </a>

          <span className="text-[#362E27]">•</span>

          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="E-mail"
            className="text-xs font-semibold transition-colors hover:text-white"
            style={{ fontFamily: 'Space Grotesk', color: '#A69B8D' }}
          >
            E-mail
          </a>
        </div>

        {/* Right: Clean minimal copyright */}
        <p
          className="text-xs text-center sm:text-right"
          style={{ fontFamily: 'Space Grotesk', color: '#6E6459' }}
        >
          © {new Date().getFullYear()} Iarley Marques.
        </p>

      </div>
    </footer>
  )
}
