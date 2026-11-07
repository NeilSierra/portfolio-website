"use client";

import { useEffect } from "react";

export function ScrollObserver() {
  useEffect(() => {
    // Observer 1: Triggers pop-up entrance when elements enter the viewport (both scrolling down and scrolling back up)
    const enterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    // Observer 2: Resets elements when they have scrolled off-screen so they can re-animate when navigated back to
    const exitObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "20px 0px 20px 0px",
      }
    );

    const observeElement = (el: HTMLElement) => {
      enterObserver.observe(el);
      exitObserver.observe(el);
    };

    const elements = document.querySelectorAll<HTMLElement>(
      ".scroll-fade, .scroll-scale, .scroll-pop"
    );
    elements.forEach(observeElement);

    // Dynamic observer for components that mount or unmount conditionally (e.g. tabs, paginated cards)
    const mutationObserver = new MutationObserver(() => {
      const dynamicElements = document.querySelectorAll<HTMLElement>(
        ".scroll-fade, .scroll-scale, .scroll-pop"
      );
      dynamicElements.forEach(observeElement);
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      enterObserver.disconnect();
      exitObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
