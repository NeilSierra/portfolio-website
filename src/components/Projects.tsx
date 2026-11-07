"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { AppIcon } from "./AppIcon";
import { GithubIcon } from "./SocialIcons";

export default function Projects() {
  const { projects } = portfolioData;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollPrev(scrollLeft > 12);
    setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 12);

    // Calculate which card is currently closest to view
    const cards = Array.from(el.children) as HTMLElement[];
    if (cards.length === 0) return;

    let closestIdx = 0;
    let minDiff = Infinity;

    cards.forEach((card, idx) => {
      const cardLeft = card.offsetLeft - el.offsetLeft;
      const diff = Math.abs(cardLeft - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = idx;
      }
    });

    setActiveIndex(closestIdx);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    updateScrollState();
    const handleScroll = () => {
      requestAnimationFrame(updateScrollState);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollToIndex = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const cards = Array.from(el.children) as HTMLElement[];
    if (cards[index]) {
      const targetLeft = cards[index].offsetLeft - el.offsetLeft;
      el.scrollTo({ left: targetLeft, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement;
    const gap = window.innerWidth >= 1024 ? 32 : 24;
    const scrollAmount = card ? card.offsetWidth + gap : el.clientWidth;
    el.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const handleNext = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement;
    const gap = window.innerWidth >= 1024 ? 32 : 24;
    const scrollAmount = card ? card.offsetWidth + gap : el.clientWidth;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-[var(--border-default)]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 scroll-fade flex flex-col md:flex-row md:items-end justify-between gap-6">
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
              A curated showcase of full stack web applications, mobile platforms, and technical case studies.
            </p>
          </div>

          {/* Navigation Controls in Header */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-[var(--text-tertiary)] font-plex-mono text-[12px] pb-1">
              <AppIcon name="layers" className="w-4 h-4 text-[var(--accent)]" />
              <span>{projects.length} SPECIMENS</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                disabled={!canScrollPrev}
                aria-label="Previous project specimen"
                className="h-9 w-9 rounded-[4px] border border-[var(--border-default)] bg-[var(--surface-base)] text-[var(--text-primary)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-raised)] disabled:opacity-30 disabled:pointer-events-none hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={!canScrollNext}
                aria-label="Next project specimen"
                className="h-9 w-9 rounded-[4px] border border-[var(--border-default)] bg-[var(--surface-base)] text-[var(--text-primary)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-raised)] disabled:opacity-30 disabled:pointer-events-none hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Project Cards Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth py-4 px-1 -mx-1"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(50%-16px)] shrink-0 snap-start card-ring scroll-pop overflow-hidden flex flex-col justify-between border border-[var(--border-default)] hover:border-[var(--border-strong)] hover:-translate-y-1.5 bg-[var(--surface-base)] group rounded-[4px]"
            >
              <div>
                {/* Browser Studio Top Bar */}
                <div className="px-4 py-2.5 bg-[var(--surface-default)] border-b border-[var(--border-default)] flex items-center justify-between gap-3 font-plex-mono text-[11px]">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] shrink-0" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] shrink-0" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] shrink-0" />
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 font-mono text-[10px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] inline-flex items-center gap-1 transition-colors truncate"
                        title={`Open live site for ${project.title}`}
                      >
                        <span className="truncate">{project.id}.app</span>
                        <AppIcon name="external-link" className="w-2.5 h-2.5 opacity-60" />
                      </a>
                    ) : (
                      <span className="ml-2 font-mono text-[10px] text-[var(--text-tertiary)] truncate">
                        {project.id}.app
                      </span>
                    )}
                  </div>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[var(--accent)] font-semibold text-[10px] uppercase tracking-wider shrink-0 hover:underline"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Live Demo</span>
                    </a>
                  ) : project.videoMp4 ? (
                    <div className="inline-flex items-center gap-1.5 text-[var(--accent)] font-semibold text-[10px] uppercase tracking-wider shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Live Video</span>
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-1 text-[var(--text-tertiary)] text-[10px] uppercase tracking-wider shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-tertiary)]" />
                      <span>Specimen</span>
                    </div>
                  )}
                </div>

                {/* Visual Preview Container (16:9 Aspect Ratio) */}
                <div className="relative w-full aspect-video bg-[#0D0D0D] border-b border-[var(--border-default)] overflow-hidden flex items-center justify-center">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-full h-full block group/preview focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                      aria-label={`Open live demo for ${project.title}`}
                    >
                      {project.videoMp4 ? (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          poster={project.previewImage}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        >
                          <source src={project.videoMp4} type="video/mp4" />
                          {project.videoWebm && <source src={project.videoWebm} type="video/webm" />}
                        </video>
                      ) : project.previewImage ? (
                        <Image
                          src={project.previewImage}
                          alt={project.title}
                          fill
                          unoptimized
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        >
                        </Image>
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-[var(--text-tertiary)] font-plex-mono text-[12px] gap-2">
                          <AppIcon name="cube" className="w-8 h-8 text-[var(--accent)]" />
                          <span>Preview Unavailable</span>
                        </div>
                      )}

                      {/* Inspect / Visit Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-[4px] bg-black/85 text-white font-plex-mono text-[11px] font-semibold uppercase tracking-wider border border-white/25 shadow-lg backdrop-blur-xs transform scale-95 group-hover/preview:scale-100 transition-transform">
                          <AppIcon name="external-link" className="w-3.5 h-3.5" />
                          <span>Open Live Site</span>
                        </span>
                      </div>
                    </a>
                  ) : (
                    <>
                      {project.videoMp4 ? (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          poster={project.previewImage}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        >
                          <source src={project.videoMp4} type="video/mp4" />
                          {project.videoWebm && <source src={project.videoWebm} type="video/webm" />}
                        </video>
                      ) : project.previewImage ? (
                        <Image
                          src={project.previewImage}
                          alt={project.title}
                          fill
                          unoptimized
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center text-[var(--text-tertiary)] font-plex-mono text-[12px] gap-2">
                          <AppIcon name="cube" className="w-8 h-8 text-[var(--accent)]" />
                          <span>Preview Unavailable</span>
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6">
                  {project.category && (
                    <span className="font-plex-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--accent)] block mb-1.5">
                      {project.category}
                    </span>
                  )}

                  <h3 className="font-serif-display text-[20px] sm:text-[22px] font-bold text-[var(--text-primary)] tracking-tight leading-snug group-hover:text-[var(--accent)] transition-colors duration-300">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline inline-flex items-center gap-1.5"
                      >
                        <span>{project.title}</span>
                        <AppIcon name="arrow-up-right" className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>

                  <p className="text-[13px] sm:text-[14px] text-[var(--text-secondary)] leading-relaxed mt-2.5">
                    {project.summary}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-plex-mono text-[10px] sm:text-[11px] px-2 py-0.5 rounded-[3px] bg-[var(--fill-subtle)] border border-[var(--border-default)] text-[var(--text-secondary)] font-medium transition-colors duration-300 hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 sm:p-5 bg-[var(--surface-default)]/30 border-t border-[var(--border-default)] flex flex-wrap sm:flex-nowrap items-center justify-between gap-2.5 sm:gap-3 mt-auto">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-[4px] bg-[var(--text-primary)] text-[var(--surface-base)] font-medium text-[12px] sm:text-[13px] hover:bg-[var(--text-secondary)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 shadow-xs shrink-0"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                    <AppIcon name="external-link" className="w-3 h-3 opacity-70" />
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-[4px] bg-[var(--surface-base)] border border-[var(--border-default)] hover:border-[var(--border-strong)] text-[var(--text-primary)] font-medium text-[12px] sm:text-[13px] hover:bg-[var(--surface-raised)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 shadow-xs ml-auto shrink-0"
                  >
                    <span>Live Demo</span>
                    <AppIcon name="external-link" className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Status and Dot Indicators */}
        <div className="mt-8 pt-6 border-t border-[var(--border-default)]">
          {/* Mobile Layout (< 640px) */}
          <div className="flex flex-col gap-3 sm:hidden font-plex-mono text-[12px]">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-1.5 text-[var(--text-tertiary)] min-w-0">
                <span className="uppercase tracking-wider text-[11px] shrink-0">SPECIMEN</span>
                <span className="font-semibold text-[var(--accent)] tabular-nums shrink-0">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span className="shrink-0">/</span>
                <span className="tabular-nums shrink-0">{String(projects.length).padStart(2, "0")}</span>
                <span className="text-[var(--text-primary)] font-medium truncate max-w-[130px] xs:max-w-[180px]">
                  — {projects[activeIndex]?.title}
                </span>
              </div>

              {/* Interactive Dots on Mobile */}
              <div className="flex items-center gap-1.5 shrink-0 ml-2">
                {projects.map((project, idx) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => scrollToIndex(idx)}
                    aria-label={`Slide ${idx + 1}: ${project.title}`}
                    className={`h-2 transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--accent)] ${
                      idx === activeIndex
                        ? "w-6 bg-[var(--accent)]"
                        : "w-2 bg-[var(--border-strong)] hover:bg-[var(--text-tertiary)]"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-[var(--text-tertiary)] pt-2 border-t border-[var(--border-default)]/60">
              <span>SWIPE OR DRAG TO NAVIGATE</span>
              <span className="text-[var(--accent)] font-semibold">← →</span>
            </div>
          </div>

          {/* Tablet & Desktop Layout (>= 640px) */}
          <div className="hidden sm:flex items-center justify-between gap-4 font-plex-mono text-[12px]">
            {/* Left: Specimen Indicator */}
            <div className="flex-1 min-w-0 max-w-[340px] flex items-center gap-2 text-[var(--text-tertiary)]">
              <span className="uppercase tracking-wider text-[11px] sm:text-[12px] shrink-0">
                SPECIMEN
              </span>
              <span className="font-semibold text-[var(--accent)] tabular-nums shrink-0">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="shrink-0">/</span>
              <span className="tabular-nums shrink-0">{String(projects.length).padStart(2, "0")}</span>
              <span className="text-[var(--text-primary)] font-medium ml-1 truncate">
                — {projects[activeIndex]?.title}
              </span>
            </div>

            {/* Center: Interactive Dots */}
            <div className="flex items-center justify-center gap-2 shrink-0 px-2">
              {projects.map((project, idx) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => scrollToIndex(idx)}
                  aria-label={`Slide ${idx + 1}: ${project.title}`}
                  className={`h-2 transition-all duration-300 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--accent)] ${
                    idx === activeIndex
                      ? "w-8 bg-[var(--accent)]"
                      : "w-2 bg-[var(--border-strong)] hover:bg-[var(--text-tertiary)]"
                  }`}
                />
              ))}
            </div>

            {/* Right: Navigation Hint */}
            <div className="flex-1 min-w-0 max-w-[340px] flex items-center justify-end gap-2 text-[11px] text-[var(--text-tertiary)] shrink-0">
              <span className="truncate">SWIPE OR USE ARROWS</span>
              <span className="text-[var(--accent)] shrink-0">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
