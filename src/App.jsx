import { useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Section from './components/Section'
import Card from './components/Card'

function App() {

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty(
        '--x',
        `${e.clientX}px`
      )
      document.documentElement.style.setProperty(
        '--y',
        `${e.clientY}px`
      )
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="container">
      <div className="spotlight" />
      <Sidebar />

      <main className="content">
        <Section id="about" title="About">
          <p>
            Saya Junior Frontend Developer yang fokus pada UI bersih,
            performa tinggi, dan pengalaman pengguna yang nyaman.
          </p>
        </Section>

        <Section id="projects" title="Projects">
          <Card
            title="Sistem Absensi Face Recognition"
            desc="Aplikasi absensi Android dengan anti-spoofing."
            tech="Flutter • OpenCV • PHP"
          />
          <Card
            title="Portfolio Website"
            desc="Website portfolio minimalis ala Brittany Chiang."
            tech="React • Vite • CSS"
          />
        </Section>

        <Section id="experience" title="Experience">
          <Card
            title="Junior IT Support"
            desc="Maintenance sistem internal & web app."
            tech="2023 – Sekarang"
          />
        </Section>

        <Section id="contact" title="Contact">
          <p>Email: ditofaizal@email.com</p>
        </Section>
      </main>
    </div>
  )
}

export default App
