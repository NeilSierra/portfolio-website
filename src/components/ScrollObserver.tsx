"use client";

import { useEffect } from "react";

export function ScrollObserver() {
  useEffect(() => {
    const handleElement = (el: HTMLElement) => {
      if (el.classList.contains("is-visible")) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 80) {
        el.classList.add("is-visible");
      } else {
        observer.observe(el);
      }
    };

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

    const elements = document.querySelectorAll<HTMLElement>(".scroll-fade, .scroll-scale");
    elements.forEach(handleElement);

    // Dynamic observer for components that mount or unmount conditionally
    const mutationObserver = new MutationObserver(() => {
      const dynamicElements = document.querySelectorAll<HTMLElement>(
        ".scroll-fade:not(.is-visible), .scroll-scale:not(.is-visible)"
      );
      dynamicElements.forEach(handleElement);
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
