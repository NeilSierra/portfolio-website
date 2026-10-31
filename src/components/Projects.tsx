import { AppIcon } from "./AppIcon";
import { GithubIcon } from "./SocialIcons";

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-[var(--border-default)]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 scroll-fade">
          <div className="flex items-center gap-2 mb-2 font-plex-mono text-[12px] uppercase tracking-[0.1em] text-[var(--accent)] font-semibold">
            <span>PROJECTS</span>
            <span className="text-[var(--text-tertiary)]">{"//"}</span>
            <span className="text-[var(--text-tertiary)]">SPECIMEN ARCHIVE</span>
          </div>
          <h2 className="font-serif-display text-[32px] sm:text-[40px] font-bold text-[var(--text-primary)] tracking-[-0.03em] leading-tight">
            Featured Work
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[var(--text-secondary)] mt-2 max-w-2xl">
            A curated showcase of full stack web applications, mobile platforms, and technical case studies.
          </p>
        </div>

        {/* Work In Progress Container with Corner Crop-Marks and Blueprint Accents */}
        <div className="stat-card p-6 sm:p-10 md:p-14 border border-[var(--border-default)] bg-[var(--surface-base)] scroll-scale relative overflow-hidden">
          {/* Subtle grid background accent */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none grid-canvas" />

          <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[16px] bg-[var(--fill-subtle)] border border-[var(--border-default)] shadow-[var(--shadow-ring-faint)] mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-ping shrink-0" />
              <span className="font-plex-mono text-[11px] uppercase tracking-[0.12em] text-[var(--accent)] font-semibold">
                SYSTEM UPDATE // WORK IN PROGRESS
              </span>
            </div>

            {/* Main Title */}
            <h3 className="font-serif-display text-[26px] sm:text-[34px] md:text-[38px] font-bold text-[var(--text-primary)] tracking-tight leading-snug mb-4">
              Curating Projects &amp; Live Case Studies
            </h3>

            {/* Description */}
            <p className="text-[14px] sm:text-[16px] text-[var(--text-secondary)] leading-relaxed mb-8 max-w-xl">
              I am currently refining and documenting my latest production deployments, live applications, and technical writeups for this section.
            </p>

            {/* Specimen Terminal / Status Log box */}
            <div className="w-full max-w-lg mb-8 rounded-[6px] border border-[var(--code-chrome)] bg-[var(--surface-code)] text-[var(--code-text)] p-4 sm:p-5 text-left font-plex-mono shadow-[var(--shadow-ring)]">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--code-chrome)] text-[11px] text-[var(--code-muted)]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  <span className="ml-2 font-mono text-[10px] text-[var(--code-muted)]">pipeline.config.ts</span>
                </div>
                <span className="text-[10px] uppercase text-[var(--code-muted)]">v2.4.0</span>
              </div>
              <div className="space-y-1.5 text-[11px] sm:text-[12px] leading-relaxed">
                <div className="text-[var(--code-muted)]">
                  <span className="text-[var(--code-class)]">$</span> git status --verbose
                </div>
                <div className="text-[var(--code-string)]">
                  ✔ Compiling interactive project walkthroughs...
                </div>
                <div className="text-[var(--code-string)]">
                  ✔ Staging architecture diagrams &amp; database schemas...
                </div>
                <div className="flex items-center gap-2 text-[var(--accent)] pt-1">
                  <span className="animate-pulse">▶</span>
                  <span className="text-[var(--code-value)]">Deploying live demos soon. Stay tuned!</span>
                </div>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
              <a
                href="https://github.com/NeilSierra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-11 px-6 rounded-[4px] bg-[var(--text-primary)] text-[var(--surface-base)] font-medium text-[14px] flex items-center justify-center gap-2.5 hover:bg-[var(--text-secondary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Explore Source Repositories</span>
                <AppIcon name="external-link" className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto h-11 px-6 rounded-[4px] bg-[var(--surface-base)] border border-[var(--text-primary)] text-[var(--text-primary)] font-medium text-[14px] flex items-center justify-center gap-2 hover:bg-[var(--surface-raised)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 shadow-sm"
              >
                <AppIcon name="mail" className="w-4 h-4" />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
