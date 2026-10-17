import { ArrowRight, Globe } from 'lucide-react'
import { personalInfo, projects } from '../data/portfolioData'
import { GithubIcon } from './Icons'

// Telas reais de cada sistema; posicao escolhe a parte da captura que aparece no card
const imagens = {
  correnem: { src: '/correnem-tela.png', posicao: 'left top' },
  agrobot: { src: '/agrobot-tela.png', posicao: 'left top' },
  bemcicatri: { src: '/bemcicatri-tela.png', posicao: 'left center' },
  album: { src: '/album-tela.png', posicao: 'center' },
}

export default function Projects() {
  return (
    <section id="projetos" className="secao scroll-mt-20">
      <div className="wrap">
        <div className="secao-cabeca">
          <div>
            <h2>Projetos</h2>
            <p>Soluções reais, com tecnologia de ponta.</p>
          </div>
          <a className="link-azul" href={personalInfo.github} target="_blank" rel="noreferrer">
            Ver todos os projetos <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="projetos">
          {projects.map(p => (
            <article className="painel projeto" key={p.id}>
              <a className="projeto-imagem" href={p.deploy ?? p.github} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true">
                {imagens[p.id] && (
                  <img src={imagens[p.id].src} alt={`Tela do ${p.title}`} loading="lazy"
                       style={{ objectPosition: imagens[p.id].posicao }} />
                )}
              </a>
              <div className="projeto-corpo">
                <h3>{p.title}</h3>
                <p className="projeto-sub">{p.subtitle}</p>
                <div className="selos">
                  <span className="selo">{p.category}</span>
                  <span className={`selo ${p.deploy ? 'ok' : 'roxo'}`}>{p.status}</span>
                </div>
                <p className="projeto-periodo">{p.period}</p>
                <div className="projeto-links">
                  {p.deploy && (
                    <a className="ver" href={p.deploy} target="_blank" rel="noreferrer">
                      <Globe size={16} aria-hidden="true" /> Ver online
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noreferrer">
                    <GithubIcon size={16} /> GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
