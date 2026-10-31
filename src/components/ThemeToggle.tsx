"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
    const currentTheme =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light";
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // storage unavailable
    }
  };

  if (!mounted) {
    return (
      <div
        className="w-9 h-9 sm:w-10 sm:h-10 rounded-[4px] border border-[var(--border-default)] flex items-center justify-center opacity-50"
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark and light mode"
      className="w-9 h-9 sm:w-10 sm:h-10 rounded-[4px] border border-[var(--border-default)] bg-[var(--surface-base)] hover:bg-[var(--surface-raised)] text-[var(--text-primary)] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
    >
      {theme === "dark" ? (
        <span
          className="w-4 h-4 sm:w-5 sm:h-5 bg-current"
          style={{
            maskImage: "url('/assets/icons/sun.svg')",
            WebkitMaskImage: "url('/assets/icons/sun.svg')",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
          }}
          aria-hidden="true"
        />
      ) : (
        <span
          className="w-4 h-4 sm:w-5 sm:h-5 bg-current"
          style={{
            maskImage: "url('/assets/icons/moon.svg')",
            WebkitMaskImage: "url('/assets/icons/moon.svg')",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
          }}
          aria-hidden="true"
        />
      )}
    </button>
  );
}
