import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience, { Education } from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <div className="wrap tres">
          <Experience />
          <Education />
          <Certifications />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
