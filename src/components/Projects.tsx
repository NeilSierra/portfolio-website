import { portfolioData } from "@/data/portfolio";
import { AppIcon } from "./AppIcon";
import { TechIcon } from "./TechIcons";
import { GithubIcon } from "./SocialIcons";

export default function Projects() {
  const { projects } = portfolioData;
  const flagship = projects[0];

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-[var(--border-default)]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 scroll-fade flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 font-plex-mono text-[12px] uppercase tracking-[0.1em] text-[var(--accent)] font-semibold">
              <span>PROJECTS</span>
              <span className="text-[var(--text-tertiary)]">{"//"}</span>
              <span className="text-[var(--text-tertiary)]">SPECIMEN ARCHIVE</span>
            </div>
            <h2 className="font-serif-display text-[32px] sm:text-[40px] font-bold text-[var(--text-primary)] tracking-[-0.03em] leading-tight">
              Featured Work
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[var(--text-secondary)] mt-2 max-w-2xl">
              A curated showcase of full stack web applications, digital banking redesigns, and technical case studies.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[var(--text-tertiary)] font-plex-mono text-[12px] pb-1">
            <AppIcon name="layers" className="w-4 h-4 text-[var(--accent)]" />
            <span>{projects.length} PRODUCTION SPECIMEN LOADED</span>
          </div>
        </div>

        {/* Flagship Case Study */}
        {flagship && (
          <div className="card-ring border border-[var(--border-default)] hover:border-[var(--border-strong)] transition-all bg-[var(--surface-base)] overflow-hidden scroll-scale shadow-sm">
            {/* Project Header Bar */}
            <div className="p-5 sm:p-7 md:p-8 border-b border-[var(--border-default)] flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                  <span className="font-plex-mono text-[10px] font-semibold uppercase px-2.5 py-0.5 rounded-[3px] bg-[var(--accent)] text-white tracking-wider">
                    FLAGSHIP CASE STUDY
                  </span>
                  {flagship.category && (
                    <span className="font-plex-mono text-[11px] uppercase tracking-wider text-[var(--text-tertiary)]">
                      {flagship.category}
                    </span>
                  )}
                </div>

                <h3 className="font-serif-display text-[26px] sm:text-[34px] md:text-[38px] font-bold text-[var(--text-primary)] tracking-tight leading-snug">
                  {flagship.title}
                </h3>

                <p className="text-[14px] sm:text-[16px] text-[var(--text-secondary)] leading-relaxed mt-2.5">
                  {flagship.summary}
                </p>
              </div>

              {flagship.role && (
                <div className="p-3 sm:p-4 rounded-[4px] bg-[var(--fill-subtle)] border border-[var(--border-default)] text-left shrink-0 max-w-sm">
                  <span className="font-plex-mono text-[10px] text-[var(--text-tertiary)] uppercase tracking-wider block">
                    PROJECT ROLE &amp; SCOPE
                  </span>
                  <span className="text-[12px] sm:text-[13px] font-medium text-[var(--text-primary)] block mt-1 leading-snug">
                    {flagship.role}
                  </span>
                </div>
              )}
            </div>

            {/* Browser Window Video Walkthrough Showcase */}
            <div className="p-3 sm:p-6 md:p-8 bg-[var(--surface-default)]/30 border-b border-[var(--border-default)]">
              <div className="rounded-[6px] border border-[var(--border-default)] bg-[var(--surface-base)] overflow-hidden shadow-md">
                {/* Browser Studio Top Bar */}
                <div className="px-4 py-2.5 bg-[var(--surface-default)] border-b border-[var(--border-default)] flex items-center justify-between gap-3 font-plex-mono text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    <div className="hidden sm:flex items-center gap-1.5 ml-3 px-3 py-0.5 rounded-[4px] bg-[var(--surface-base)] border border-[var(--border-default)] text-[var(--text-secondary)] text-[11px]">
                      <span className="text-[var(--accent)] font-semibold">https://</span>
                      <span>iaccess.landbank.redesign.local</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-[var(--accent)] font-semibold text-[10px] uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live Walkthrough Preview</span>
                  </div>
                </div>

                {/* Video Player (Main: MP4, Backup: WebM) */}
                <div className="relative w-full aspect-video bg-black overflow-hidden flex items-center justify-center">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-contain"
                  >
                    <source src={flagship.videoMp4} type="video/mp4" />
                    <source src={flagship.videoWebm} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>

            {/* Specifications & Tech Stack Grid with Icons */}
            {flagship.specifications && flagship.specifications.length > 0 && (
              <div className="p-5 sm:p-7 md:p-8 bg-[var(--surface-base)] border-b border-[var(--border-default)]">
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-[var(--border-default)]">
                  <div className="flex items-center gap-2 font-plex-mono text-[12px] uppercase tracking-wider text-[var(--text-primary)] font-semibold">
                    <AppIcon name="layers" className="w-4 h-4 text-[var(--accent)]" />
                    <span>ENGINEERING SPECIFICATIONS // TECH STACK MATRIX</span>
                  </div>
                  <span className="font-plex-mono text-[11px] text-[var(--text-tertiary)] uppercase tracking-wider hidden sm:inline">
                    {flagship.specifications.length} Architectural Specifications
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4">
                  {flagship.specifications.map((spec) => (
                    <div
                      key={spec.label}
                      className="p-3.5 sm:p-4 rounded-[4px] bg-[var(--surface-default)]/40 border border-[var(--border-default)] hover:border-[var(--accent)] transition-all flex items-start gap-3.5 group shadow-xs hover:shadow-sm"
                    >
                      <div className="w-10 h-10 rounded-[4px] bg-[var(--surface-base)] border border-[var(--border-default)] flex items-center justify-center shrink-0 p-1.5 transition-transform group-hover:scale-105 shadow-xs">
                        <TechIcon name={spec.iconName} className="w-6 h-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="font-plex-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[var(--text-tertiary)] block truncate">
                          {spec.label}
                        </span>
                        <span className="text-[13px] sm:text-[14px] font-bold text-[var(--text-primary)] leading-snug block mt-0.5">
                          {spec.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Project Footer Actions */}
            <div className="p-4 sm:p-6 bg-[var(--surface-default)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-[var(--text-secondary)] font-plex-mono text-[12px]">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Modern Banking Architecture Specimen</span>
              </div>

              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <a
                  href="https://github.com/NeilSierra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto h-10 px-5 rounded-[4px] bg-[var(--text-primary)] text-[var(--surface-base)] font-medium text-[13px] sm:text-[14px] flex items-center justify-center gap-2.5 hover:bg-[var(--text-secondary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 shadow-sm"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Explore Source Repositories</span>
                  <AppIcon name="external-link" className="w-3.5 h-3.5 opacity-70" />
                </a>

                <a
                  href="#contact"
                  className="w-full sm:w-auto h-10 px-5 rounded-[4px] bg-[var(--surface-base)] border border-[var(--border-default)] hover:border-[var(--border-strong)] text-[var(--text-primary)] font-medium text-[13px] sm:text-[14px] flex items-center justify-center gap-2 hover:bg-[var(--surface-raised)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 shadow-sm"
                >
                  <AppIcon name="mail" className="w-4 h-4" />
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
