import { useEffect } from 'react'
import { skillCategories } from '../data/portfolioData'

// All skills flattened into categories for a flowing cloud/list
const allSkills = [
  // Frontend
  'React 19', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Vite', 'Layout responsivo',
  // Backend
  'Python', 'FastAPI', 'Uvicorn', 'Node.js', 'Express', 'APIs REST', 'SQLAlchemy', 'SSE',
  // Data & Cloud
  'PostgreSQL', 'AWS', 'Railway', 'IndexedDB', 'Docker', 'Git & GitHub', 'JWT', 'OAuth 2.0',
  // AI
  'Groq API', 'Llama SDK', 'Claude Code', 'Google Gemini', 'n8n', 'OCR', 'Visão Multimodal', 'RAG',
]

export default function Skills() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="habilidades" className="relative scroll-mt-24 py-24 lg:py-32" style={{ background: 'var(--bg-warm)' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* — Centered header + big italic quote */}
        <div className="reveal text-center max-w-3xl mx-auto mb-16">
          <p
            className="mb-4 text-xs font-semibold tracking-widest uppercase"
            style={{ color: 'var(--accent)', fontFamily: 'Space Grotesk' }}
          >
            Habilidades & Stack
          </p>
          <h2
            className="leading-tight"
            style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 700,
              color: 'var(--ink)',
              letterSpacing: '-0.02em',
            }}
          >
            Do front-end ao deploy, com IA no meio do caminho.
          </h2>
        </div>

        {/* — Two-column: categories left, tag cloud right */}
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] items-start">

          {/* Left: 4 rows with category + skill list */}
          <div className="reveal space-y-8" style={{ animationDelay: '100ms' }}>
            {skillCategories.map((cat, idx) => (
              <div key={cat.title}>
                <div className="flex items-baseline gap-4 mb-3">
                  <h3
                    className="text-base font-bold"
                    style={{ fontFamily: 'Fraunces', color: 'var(--ink)', fontWeight: 700 }}
                  >
                    {cat.title}
                  </h3>
                  <div className="flex-1" style={{ borderBottom: '1px solid #d9d3cb' }} />
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map(item => (
                    <span
                      key={item.name}
                      className="skill-tag"
                      style={{
                        fontSize: '12px',
                        // highlight "Avançado" items slightly
                        borderColor: item.level === 'Avançado' ? 'var(--ink-faint)' : '#e8e2da',
                        fontWeight: item.level === 'Avançado' ? '600' : '500',
                        color: item.level === 'Avançado' ? 'var(--ink)' : 'var(--ink-muted)',
                      }}
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right: big typographic layout */}
          <div className="reveal" style={{ animationDelay: '200ms' }}>
            <div
              className="rounded-3xl p-8 lg:p-10"
              style={{ background: 'var(--ink)', color: '#f5f2ee' }}
            >
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-6"
                style={{ color: 'rgba(245,242,238,0.45)', fontFamily: 'Space Grotesk' }}
              >
                Stack atual
              </p>

              {/* Feature tech items */}
              {[
                { name: 'React 19 + Vite', note: 'Front-end' },
                { name: 'Python + FastAPI', note: 'Back-end' },
                { name: 'PostgreSQL + AWS', note: 'Dados & Nuvem' },
                { name: 'Groq / Llama SDK', note: 'IA' },
              ].map((item, i) => (
                <div
                  key={item.name}
                  className="flex items-baseline justify-between py-4"
                  style={{ borderBottom: '1px solid rgba(245,242,238,0.1)' }}
                >
                  <span
                    style={{
                      fontFamily: 'Fraunces',
                      fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                      fontWeight: 700,
                      color: '#f5f2ee',
                    }}
                  >
                    {item.name}
                  </span>
                  <span
                    className="text-xs font-medium ml-4"
                    style={{ color: 'rgba(245,242,238,0.4)', fontFamily: 'Space Grotesk', whiteSpace: 'nowrap' }}
                  >
                    {item.note}
                  </span>
                </div>
              ))}

              {/* Bottom note in code style */}
              <p
                className="mt-8 text-xs leading-relaxed"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  color: 'rgba(245,242,238,0.35)',
                  fontSize: '11px',
                }}
              >
                {`// também: Claude Code, Gemini, n8n, Docker, Railway`}
              </p>
            </div>

            {/* Small availability note */}
            <div
              className="mt-6 rounded-2xl px-6 py-4"
              style={{ background: 'var(--gold-light)', border: '1px solid rgba(184,135,58,0.2)' }}
            >
              <p className="text-sm font-semibold" style={{ color: 'var(--gold)', fontFamily: 'Space Grotesk' }}>
                ✦ Disponível para projetos e oportunidades
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--ink-muted)', fontFamily: 'Space Grotesk' }}>
                Estágio, vagas júnior e freelance em full stack + IA.
              </p>
            </div>
          </div>
        </div>

      </div>
      <div className="mt-24 section-rule" />
    </section>
  )
}
