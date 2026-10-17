import { Briefcase, GraduationCap, Laptop, School } from 'lucide-react'
import { education, experiences } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experiencia" className="painel coluna scroll-mt-24">
      <div className="coluna-cabeca">
        <Briefcase size={28} aria-hidden="true" />
        <h2>Experiência</h2>
        <p>Vivência que fortalece meu crescimento.</p>
      </div>

      {experiences.map(exp => (
        <div className="item" key={exp.role + exp.company}>
          <span className="item-icone" aria-hidden="true">
            {exp.type === 'Estágio' ? <Briefcase size={18} /> : <Laptop size={18} />}
          </span>
          <div>
            <h3>{exp.type === 'Estágio' ? 'Estágio de Desenvolvimento' : exp.company}</h3>
            <p className="item-sub">{exp.type === 'Estágio' ? exp.company : exp.role}</p>
            <p className="item-periodo">{exp.period.replace('o momento', 'Atual')}</p>
            <ul>
              {exp.description.split('. ').filter(Boolean).map(frase => (
                <li key={frase}>{frase.replace(/\.$/, '')}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  )
}

export function Education() {
  return (
    <section id="formacao" className="painel coluna scroll-mt-24">
      <div className="coluna-cabeca">
        <GraduationCap size={28} aria-hidden="true" />
        <h2>Formação</h2>
        <p>Base sólida para grandes projetos.</p>
      </div>

      <div className="item">
        <span className="item-icone" aria-hidden="true"><School size={18} /></span>
        <div>
          <h3>{education.degree}</h3>
          <p className="item-sub">{education.location}, {education.status.toLowerCase()}</p>
          <p className="item-periodo">{education.period}</p>
          <ul>
            {education.highlights.map(h => <li key={h}>{h}</li>)}
          </ul>
          <p className="item-sub" style={{ marginTop: 12 }}>{education.description}</p>
        </div>
      </div>
    </section>
  )
}
