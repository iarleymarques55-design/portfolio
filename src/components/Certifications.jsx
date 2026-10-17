import { useState } from 'react'
import { ChevronDown, ShieldCheck } from 'lucide-react'
import { certifications } from '../data/portfolioData'

// Logo de cada emissor, salvo em public/logos
const logos = {
  'Anthropic': '/logos/anthropic.png',
  'Amazon Web Services (AWS)': '/logos/aws.png',
  'Google': '/logos/google.png',
  'Alura': '/logos/alura.png',
  'Hashtag Treinamentos': '/logos/hashtag.png',
  'DevClub': '/logos/devclub.png',
  'Bradesco': '/logos/bradesco.png',
  'EF SET': '/logos/efset.png',
}

const sigla = emissor => emissor.split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase()

export default function Certifications() {
  const [todas, setTodas] = useState(false)
  const ordenadas = [...certifications].sort((a, b) => Number(b.highlight) - Number(a.highlight))
  const visiveis = todas ? ordenadas : ordenadas.slice(0, 6)

  return (
    <section id="certificados" className="painel coluna scroll-mt-24">
      <div className="coluna-cabeca">
        <ShieldCheck size={28} aria-hidden="true" />
        <h2>Certificações</h2>
        <p>Conhecimento que gera oportunidades.</p>
      </div>

      <ul className="certs" id="lista-certificados">
        {visiveis.map(c => (
          <li className="cert" key={c.id}>
            <span className="cert-logo" aria-hidden="true">
              {logos[c.issuer] ? <img src={logos[c.issuer]} alt="" loading="lazy" /> : sigla(c.issuer)}
            </span>
            <span>
              <span className="cert-titulo">{c.title}</span>
              <span className="cert-emissor">{c.issuer}</span>
            </span>
            <span className="cert-data">{c.date}</span>
          </li>
        ))}
      </ul>

      {ordenadas.length > 6 && (
        <button type="button" className="mais" aria-expanded={todas} aria-controls="lista-certificados"
                onClick={() => setTodas(v => !v)}>
          {todas ? 'Mostrar menos' : `Ver todas as ${ordenadas.length}`}
          <ChevronDown size={16} aria-hidden="true" style={{ transform: todas ? 'rotate(180deg)' : 'none' }} />
        </button>
      )}
    </section>
  )
}
