import { CodeXml, Mail } from 'lucide-react'
import { emailLink, navigation, personalInfo } from '../data/portfolioData'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="rodape">
      <div className="wrap">
        <div className="rodape-linha">
          <a href="#inicio" className="marca">
            <CodeXml size={24} strokeWidth={2.4} aria-hidden="true" />
            {personalInfo.name}
          </a>

          <nav aria-label="Navegação do rodapé">
            <ul className="rodape-links">
              {navigation.filter(i => i.href !== '#inicio').map(item => (
                <li key={item.href}><a href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </nav>

          <div className="rodape-sociais">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon size={18} /></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon size={18} /></a>
            <a href={emailLink} target="_blank" rel="noreferrer" aria-label="E-mail"><Mail size={18} /></a>
          </div>
        </div>

        <p className="rodape-base">© {new Date().getFullYear()} {personalInfo.name}. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
