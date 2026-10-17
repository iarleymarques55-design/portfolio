import { BrainCircuit } from 'lucide-react'
import { ClaudeIcon, RailwayIcon } from './Icons'

const devicon = nome => `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${nome}.svg`

const ferramentas = [
  { nome: 'React', icone: devicon('react/react-original') },
  { nome: 'Node.js', icone: devicon('nodejs/nodejs-original') },
  { nome: 'Python', icone: devicon('python/python-original') },
  { nome: 'FastAPI', icone: devicon('fastapi/fastapi-original') },
  { nome: 'PostgreSQL', icone: devicon('postgresql/postgresql-original') },
  { nome: 'AWS', icone: devicon('amazonwebservices/amazonwebservices-plain-wordmark') },
  { nome: 'Railway', Icone: RailwayIcon, cor: 'var(--texto)' },
  { nome: 'Docker', icone: devicon('docker/docker-original') },
  { nome: 'Git', icone: devicon('git/git-original') },
  { nome: 'Linux', icone: devicon('linux/linux-original') },
  { nome: 'Claude Code', Icone: ClaudeIcon },
  { nome: 'IA / LLMs', Icone: BrainCircuit },
]

export default function Skills() {
  return (
    <section id="habilidades" className="secao scroll-mt-20">
      <div className="wrap">
        <div className="secao-cabeca">
          <div>
            <h2>Habilidades</h2>
            <p>Tecnologias e ferramentas que utilizo no dia a dia.</p>
          </div>
        </div>

        <ul className="techs-grade" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {ferramentas.map(({ nome, icone, Icone, cor }) => (
            <li key={nome} className="painel tech" style={cor ? { '--cor-icone': cor } : undefined}>
              {Icone ? <Icone strokeWidth={1.6} aria-hidden="true" /> : <img src={icone} alt="" loading="lazy" />}
              {nome}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
