"use client";

import { useEffect } from "react";

export function ScrollObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".scroll-fade, .scroll-scale");
    if (!elements.length) return;

    // Positive bottom rootMargin so elements animate in smoothly before reaching the viewport edge
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px 80px 0px",
      }
    );

    elements.forEach((el) => {
      // Reveal items already in or near viewport immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 80) {
        el.classList.add("is-visible");
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
