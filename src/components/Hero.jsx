import { ArrowRight, BadgeCheck, Briefcase, CodeXml, Download, GraduationCap, MapPin } from 'lucide-react'
import { personalInfo, stats } from '../data/portfolioData'

const techs = ['React', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'IA', 'AWS']
const iconesNumeros = [CodeXml, BadgeCheck, Briefcase, GraduationCap]

export default function Hero() {
  const [primeiro, ...resto] = personalInfo.name.split(' ')

  return (
    <>
      <section id="inicio" className="abertura scroll-mt-20">
        <div className="wrap">
          <div className="abertura-grade">
            <div>
              <p className="ola">Olá, eu sou</p>
              <h1 className="nome">
                {primeiro} <span className="gradiente">{resto.join(' ')}</span>
              </h1>
              <p className="cargo">{personalInfo.role}</p>
              <ul className="techs" aria-label="Principais tecnologias">
                {techs.map(t => <li key={t}>{t}</li>)}
              </ul>
              <p className="bio">{personalInfo.bio}</p>
              <div className="acoes">
                <a href="#projetos" className="botao primario">
                  Ver projetos <ArrowRight size={18} aria-hidden="true" />
                </a>
                {personalInfo.resume ? (
                  <a href={personalInfo.resume} download className="botao secundario">
                    Baixar currículo <Download size={18} aria-hidden="true" />
                  </a>
                ) : (
                  <a href="#contato" className="botao secundario">Falar comigo</a>
                )}
              </div>
            </div>

            <ul className="infos">
              <li className="info">
                <MapPin size={22} aria-hidden="true" />
                <span><span className="info-rotulo">Localização</span><span className="info-valor">{personalInfo.location}</span></span>
              </li>
              <li className="info">
                <Briefcase size={22} aria-hidden="true" />
                <span><span className="info-rotulo">Função</span><span className="info-valor">{personalInfo.role}</span></span>
              </li>
              <li className="info">
                <BadgeCheck size={22} aria-hidden="true" />
                <span><span className="info-rotulo">Especialização</span><span className="info-valor">{personalInfo.specialization}</span></span>
              </li>
              <li className="info">
                <span className="status-ponto" aria-hidden="true" />
                <span><span className="info-rotulo">Status</span><span className="info-valor">{personalInfo.statusText}</span></span>
              </li>
            </ul>

            <div className="foto">
              <div className="foto-moldura">
                <img src="/iarley.jpg" alt={`Foto de ${personalInfo.name}`} />
              </div>
              <p className="foto-frase" aria-hidden="true">
                Código<br />é só o começo.
                <svg width="120" height="12" viewBox="0 0 120 12" fill="none">
                  <path d="M2 9C30 3 70 1 118 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="wrap scroll-mt-24" aria-labelledby="numeros-titulo">
        <div className="painel numeros" style={{ marginTop: 0 }}>
          <div>
            <h2 id="numeros-titulo">Números em destaque</h2>
            <p className="numeros-intro">Resultados que mostram minha trajetória e comprometimento.</p>
          </div>
          {stats.map((s, i) => {
            const Icone = iconesNumeros[i] ?? CodeXml
            return (
              <div className="numero" key={s.label}>
                <Icone size={26} aria-hidden="true" />
                <span className="numero-valor">{s.value}</span>
                <span className="numero-rotulo">{s.label}</span>
                <span className="numero-detalhe">{s.detail}</span>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
