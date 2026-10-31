"use client";

import { useEffect } from "react";

export function ScrollObserver() {
  useEffect(() => {
    // If browser natively supports CSS Scroll-driven Animations, let the compositor handle it
    if (
      typeof CSS !== "undefined" &&
      CSS.supports &&
      CSS.supports("animation-timeline", "view()")
    ) {
      return;
    }

    const elements = document.querySelectorAll(".scroll-fade, .scroll-scale");
    if (!elements.length) return;

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
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}

