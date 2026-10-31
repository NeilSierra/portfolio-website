"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { WebsiteLogo } from "./WebsiteLogo";
import { AppIcon } from "./AppIcon";
import { portfolioData } from "@/data/portfolio";

const NAV_LINKS = [
  { name: "Home", href: "#home", index: "01" },
  { name: "About", href: "#about", index: "02" },
  { name: "Skills", href: "#skills", index: "03" },
  { name: "Projects", href: "#projects", index: "04" },
  { name: "Experience", href: "#experience", index: "05" },
  { name: "Education", href: "#education", index: "06" },
  { name: "Contact", href: "#contact", index: "07" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { hero } = portfolioData;

  // Lock body scroll and handle Escape key when sidebar is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full h-16 sm:h-[72px] bg-[var(--surface-default)]/95 backdrop-blur-sm border-b border-[var(--border-strong)] transition-colors">
        <div className="max-w-[1280px] h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          {/* Brand Block */}
          <a
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-[var(--accent)] rounded-[4px] p-0.5 sm:p-1 min-w-0"
          >
            <WebsiteLogo className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--text-primary)] shrink-0 transition-transform group-hover:scale-105" />
            <div className="flex flex-col text-left min-w-0">
              <span className="font-serif-display font-semibold text-[19px] sm:text-[22px] md:text-[24px] leading-none text-[var(--accent)] tracking-tight truncate">
                Neil Sierra
              </span>
              <span className="font-plex-mono text-[9.5px] sm:text-[11px] uppercase tracking-[0.08em] sm:tracking-[0.1em] text-[var(--text-secondary)] mt-0.5 sm:mt-1 truncate">
                IT Student // 3rd Year
              </span>
            </div>
          </a>

          {/* Desktop Nav Links (Visible on lg, xl, 2xl only) */}
          <nav className="hidden lg:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[14px] text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] rounded-[2px]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Utilities */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <ThemeToggle />

            <a
              href="https://github.com/NeilSierra"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-[4px] border border-[var(--border-default)] bg-[var(--surface-base)] hover:bg-[var(--surface-raised)] text-[var(--text-primary)] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            >
              <AppIcon name="github" className="w-4 h-4 sm:w-5 sm:h-5 text-current" />
            </a>

            {/* Menu toggle button (Visible on base, sm, and md; hidden on lg+) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-[4px] border border-[var(--border-default)] bg-[var(--surface-base)] text-[var(--text-primary)] flex items-center justify-center hover:bg-[var(--surface-raised)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <AppIcon name="menu" className="w-4 h-4 sm:w-5 sm:h-5 text-current" />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Sidebar Drawer for Mobile & Tablet (base, sm, md < 1024px) */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-visibility duration-300 ${
          mobileMenuOpen ? "visible" : "invisible delay-300"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Dimmed backdrop */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ease-in-out ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close menu backdrop"
        />

        {/* Sidebar panel sliding in from the right */}
        <aside
          className={`fixed top-0 right-0 h-full w-[290px] sm:w-[320px] max-w-[85vw] bg-[var(--surface-base)] border-l border-[var(--border-strong)] shadow-2xl flex flex-col justify-between p-5 sm:p-6 transition-transform duration-300 ease-out z-50 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Top header inside sidebar */}
          <div>
            <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-[var(--border-default)]">
              <div className="flex items-center gap-2.5">
                <WebsiteLogo className="w-6 h-6 text-[var(--text-primary)] shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="font-serif-display font-semibold text-[17px] text-[var(--accent)] leading-none">
                    Neil Sierra
                  </span>
                  <span className="font-plex-mono text-[9px] uppercase tracking-wider text-[var(--text-secondary)] mt-0.5">
                    Navigation
                  </span>
                </div>
              </div>

              {/* Close button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-[4px] border border-[var(--border-default)] bg-[var(--surface-raised)] text-[var(--text-primary)] flex items-center justify-center hover:bg-[var(--fill-subtle)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                aria-label="Close navigation menu"
              >
                <AppIcon name="close" className="w-4 h-4 text-current" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col gap-1 py-4 sm:py-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-center justify-between py-2.5 px-3 rounded-[4px] text-[15px] font-medium text-[var(--text-primary)] hover:text-[var(--accent)] hover:bg-[var(--surface-raised)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="font-plex-mono text-[11px] text-[var(--text-tertiary)] group-hover:text-[var(--accent)] transition-colors">
                      {link.index}
                    </span>
                    <span>{link.name}</span>
                  </span>
                  <span className="font-plex-mono text-[11px] text-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom footer inside sidebar */}
          <div className="pt-4 border-t border-[var(--border-default)] flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-[16px] bg-[var(--fill-subtle)] border border-[var(--border-default)] shadow-[var(--shadow-ring-faint)]">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
              <span className="font-plex-mono text-[10px] uppercase tracking-[0.1em] text-[var(--text-primary)] font-medium truncate">
                {hero.availability}
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px] text-[var(--text-tertiary)] font-plex-mono">
              <span>{hero.location}</span>
              <a
                href="https://github.com/NeilSierra"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)] transition-colors"
              >
                github.com/NeilSierra
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
