import { useEffect } from "react";
import { gsap } from "gsap";

export default function Hero() {
  useEffect(() => {
    gsap.from(".hero > *", {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <header className="hero">
      <img src="/Foto.jpg" alt="Foto Profil" className="profile" />
      <h1>Dito Faizal Afif</h1>
      <p className="subtitle">Web Developer • React • JavaScript • PHP</p>

      <div className="cta">
        <a href="#contact" className="btn primary">
          Contact Me
        </a>
        <a href="/CV, Ijazah, Transkrip, Sertifikat.pdf" className="btn outline">
          Download CV
        </a>
      </div>
    </header>
  );
}
