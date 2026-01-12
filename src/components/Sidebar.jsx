import { useEffect, useState } from 'react'

export default function Sidebar() {
  const [active, setActive] = useState('about')

  useEffect(() => {
    const sections = document.querySelectorAll('section')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach((sec) => observer.observe(sec))
    return () => observer.disconnect()
  }, [])

  return (
    <aside className="sidebar">
      <h1>Dito Faizal</h1>
      <h2>Junior Frontend Developer</h2>

      <nav>
        {['about', 'projects', 'experience', 'contact'].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? 'active' : ''}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </nav>
    </aside>
  )
}
