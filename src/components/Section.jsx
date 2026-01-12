import { useEffect, useRef, useState } from 'react'

export default function Section({ id, title, children }) {
  const ref = useRef()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true)
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      className={show ? 'reveal show' : 'reveal'}
    >
      <h3>{title}</h3>
      {children}
    </section>
  )
}
