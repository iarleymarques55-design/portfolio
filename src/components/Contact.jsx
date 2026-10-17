import { Mail, MessageCircle } from 'lucide-react'
import { emailLink, personalInfo } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon } from './Icons'

const semProtocolo = url => url.replace(/^https?:\/\//, '')

export default function Contact() {
  const canais = [
    { rotulo: 'Email', valor: personalInfo.email, href: emailLink, icone: <Mail size={18} /> },
    personalInfo.whatsapp && {
      rotulo: 'WhatsApp',
      valor: personalInfo.whatsapp,
      href: `https://wa.me/55${personalInfo.whatsapp.replace(/\D/g, '')}`,
      icone: <MessageCircle size={18} />,
    },
    { rotulo: 'GitHub', valor: semProtocolo(personalInfo.github), href: personalInfo.github, icone: <GithubIcon size={18} /> },
    { rotulo: 'LinkedIn', valor: semProtocolo(personalInfo.linkedin), href: personalInfo.linkedin, icone: <LinkedinIcon size={18} /> },
  ].filter(Boolean)

  return (
    <section id="contato" className="wrap scroll-mt-24">
      <div className="painel contato">
        <div className="contato-texto">
          <h2>Vamos conversar?</h2>
          <p className="contato-intro">Estou sempre aberto a novas oportunidades, projetos e parcerias.</p>
        </div>
        <ul className="canais" style={{ '--canais': canais.length }}>
          {canais.map(c => (
            <li key={c.rotulo}>
              <a className="canal" href={c.href} target="_blank" rel="noreferrer">
                <span className="canal-icone" aria-hidden="true">{c.icone}</span>
                <span>
                  <span className="canal-rotulo">{c.rotulo}</span>
                  <span className="canal-valor">{c.valor}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
