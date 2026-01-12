import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <ul>
        {["home", "about", "projects", "contact"].map((id) => (
          <li key={id} className={active === id ? "active" : ""}>
            <a href={`#${id}`}>{id.toUpperCase()}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
