import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => e.isIntersecting && e.target.classList.add("show"));
    });

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
