"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { AppIcon } from "./AppIcon";
import { CompetitionModal } from "./CompetitionModal";

export default function Experience() {
  const { experience } = portfolioData;
  const [selectedCompIndex, setSelectedCompIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;
  const totalItems = experience.hackathons.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedComps = experience.hackathons.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const openGallery = (index: number) => {
    setSelectedCompIndex(index);
  };

  const closeGallery = () => {
    setSelectedCompIndex(null);
  };

  return (
    <section id="experience" className="py-20 sm:py-24 border-t border-[var(--border-default)]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 scroll-fade">
          <div className="flex items-center gap-2 mb-2 font-plex-mono text-[12px] uppercase tracking-[0.1em] text-[var(--accent)] font-semibold">
            <span>EXPERIENCE &amp; COMPETITIONS</span>
            <span className="text-[var(--text-tertiary)]">{"//"}</span>
            <span className="text-[var(--text-tertiary)]">HACKATHONS &amp; TRACK RECORD</span>
          </div>
          <h2 className="font-serif-display text-[32px] sm:text-[40px] font-bold text-[var(--text-primary)] tracking-[-0.03em] leading-tight">
            Work &amp; Competitions
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[var(--text-secondary)] mt-2 max-w-2xl">
            A track record of competitive programming, hackathons, and real-world technology challenges.
          </p>
        </div>

        {/* Competitions Grid */}
        <div className="mb-16 scroll-fade">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-plex-mono text-[13px] uppercase tracking-wider text-[var(--text-primary)] font-semibold flex items-center gap-2">
              <AppIcon name="award" className="w-4 h-4 text-[var(--accent)]" />
              <span>Competitions &amp; Hackathons ({experience.hackathons.length})</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 scroll-stagger">
            {paginatedComps.map((comp, pageIdx) => {
              const globalIdx = (currentPage - 1) * itemsPerPage + pageIdx;
              const hasImages = Boolean(comp.images && comp.images.length > 0);
              const isWinner = comp.result.toLowerCase().includes("winner");

              return (
                <div
                  key={comp.id}
                  onClick={hasImages ? () => openGallery(globalIdx) : undefined}
                  onKeyDown={
                    hasImages
                      ? (e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            openGallery(globalIdx);
                          }
                        }
                      : undefined
                  }
                  role={hasImages ? "button" : undefined}
                  tabIndex={hasImages ? 0 : undefined}
                  aria-label={hasImages ? `Open photo gallery for ${comp.event}` : undefined}
                  className={`card-ring scroll-pop overflow-hidden flex flex-col sm:flex-row border border-[var(--border-default)] hover:border-[var(--border-strong)] hover:-translate-y-1.5 group h-full sm:h-[185px] lg:h-[190px] ${
                    hasImages
                      ? "cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                      : ""
                  }`}
                >
                  {/* Left side: Image Frame */}
                  {hasImages && (
                    <div className="relative w-full sm:w-[200px] md:w-[220px] lg:w-[200px] xl:w-[220px] shrink-0 aspect-[16/10] sm:aspect-auto min-h-[160px] sm:min-h-full sm:h-full bg-[var(--surface-code)] overflow-hidden border-b sm:border-b-0 sm:border-r border-[var(--border-default)]">
                      <Image
                        src={comp.images![0]}
                        alt={`${comp.event} banner`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 220px, 220px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Result Overlay Badge */}
                      <div className="absolute top-2.5 left-2.5 z-10">
                        <span
                          className={`inline-flex items-center gap-1.5 font-plex-mono text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-[4px] uppercase tracking-wider shadow-sm ${
                            isWinner
                              ? "bg-[var(--accent)] text-white"
                              : "bg-black/85 text-white border border-white/20"
                          }`}
                        >
                          <AppIcon name="award" className="w-3.5 h-3.5 shrink-0" />
                          <span>{comp.result}</span>
                        </span>
                      </div>

                      {/* Photo Count Indicator (if multiple) */}
                      {comp.images!.length > 1 && (
                        <div className="absolute bottom-2.5 right-2.5 z-10 font-plex-mono text-[10px] font-semibold px-2 py-0.5 rounded-[3px] bg-black/85 text-white border border-white/20">
                          {comp.images!.length} Photos
                        </div>
                      )}

                      {/* Inspect Image Overlay on Hover */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center pointer-events-none z-10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-black/85 text-white font-plex-mono text-[11px] font-semibold uppercase tracking-wider border border-white/25 shadow-lg backdrop-blur-xs transform scale-95 group-hover:scale-100 transition-transform">
                          <AppIcon name="external-link" className="w-3.5 h-3.5" />
                          <span>Inspect Image</span>
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Right side: Details */}
                  <div className="flex-1 flex flex-col justify-between p-4 sm:p-5 min-w-0 h-full">
                    <div>
                      {/* Top Meta: Date + Badge (if text-only) */}
                      <div className="flex items-center justify-between gap-2 mb-2 font-plex-mono text-[11px] text-[var(--text-tertiary)]">
                        <div className="flex items-center gap-1.5">
                          <AppIcon name="calendar" className="w-3 h-3 text-[var(--text-tertiary)]" />
                          <span>{comp.date}</span>
                        </div>
                        {!hasImages && (
                          <span
                            className={`inline-flex items-center gap-1 font-plex-mono text-[10px] font-semibold px-2 py-0.5 rounded-[3px] uppercase tracking-wider ${
                              isWinner
                                ? "bg-[var(--accent)] text-white"
                                : "bg-[var(--fill-subtle)] text-[var(--accent)] border border-[var(--border-default)]"
                            }`}
                          >
                            <AppIcon name="award" className="w-3 h-3 shrink-0" />
                            <span>{comp.result}</span>
                          </span>
                        )}
                      </div>

                      {/* Competition Title */}
                      <h4 className="text-[16px] sm:text-[17px] font-bold text-[var(--text-primary)] leading-snug tracking-tight group-hover:text-[var(--accent)] transition-colors line-clamp-2 min-h-[44px] flex items-center">
                        {comp.event}
                      </h4>

                      {/* Description */}
                      {comp.description && (
                        <p className="text-[13px] text-[var(--text-secondary)] mt-1.5 leading-relaxed line-clamp-2">
                          {comp.description}
                        </p>
                      )}
                    </div>

                    {/* Footer info row */}
                    {hasImages && (
                      <div className="flex items-center gap-1.5 font-plex-mono text-[11px] text-[var(--accent)] font-medium mt-3 pt-2.5 border-t border-[var(--border-default)]/60">
                        <AppIcon name="external-link" className="w-3.5 h-3.5 opacity-80" />
                        <span>Inspect Gallery{comp.images!.length > 1 ? ` (${comp.images!.length} Photos)` : ""}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-8 pt-6 border-t border-[var(--border-default)] flex flex-col sm:flex-row items-center justify-between gap-4 font-plex-mono text-[12px]">
              <span className="text-[var(--text-tertiary)] uppercase tracking-wider text-[11px] sm:text-[12px]">
                SHOWING {(currentPage - 1) * itemsPerPage + 1}–
                {Math.min(currentPage * itemsPerPage, totalItems)} OF {totalItems} COMPETITIONS
              </span>

              <div className="flex items-center gap-1.5">
                {/* Prev Button */}
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="h-8 px-3 rounded-[4px] border border-[var(--border-default)] bg-[var(--surface-base)] text-[var(--text-primary)] hover:bg-[var(--surface-raised)] disabled:opacity-30 disabled:pointer-events-none hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  aria-label="Previous page"
                >
                  <span>←</span>
                  <span className="hidden xs:inline">PREV</span>
                </button>

                {/* Numbered Page Buttons */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
                  <button
                    key={pg}
                    type="button"
                    onClick={() => setCurrentPage(pg)}
                    className={`w-8 h-8 rounded-[4px] font-semibold hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent)] ${
                      currentPage === pg
                        ? "bg-[var(--text-primary)] text-[var(--surface-base)] shadow-xs"
                        : "border border-[var(--border-default)] bg-[var(--surface-base)] text-[var(--text-secondary)] hover:bg-[var(--surface-raised)] hover:text-[var(--text-primary)]"
                    }`}
                    aria-label={`Page ${pg}`}
                    aria-current={currentPage === pg ? "page" : undefined}
                  >
                    {pg}
                  </button>
                ))}

                {/* Next Button */}
                <button
                  type="button"
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="h-8 px-3 rounded-[4px] border border-[var(--border-default)] bg-[var(--surface-base)] text-[var(--text-primary)] hover:bg-[var(--surface-raised)] disabled:opacity-30 disabled:pointer-events-none hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                  aria-label="Next page"
                >
                  <span className="hidden xs:inline">NEXT</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Work Experience Section */}
        {experience.items.length > 0 ? (
          <div>
            <h3 className="font-plex-mono text-[13px] uppercase tracking-wider text-[var(--text-primary)] font-semibold mb-6 flex items-center gap-2">
              <AppIcon name="folder-git-2" className="w-4 h-4 text-[var(--accent)]" />
              <span>Work Experience</span>
            </h3>

            <div className="space-y-6 scroll-stagger">
              {experience.items.map((item) => (
                <div
                  key={item.id}
                  className="card-ring scroll-pop p-6 sm:p-8 hover:-translate-y-1 transition-all duration-300 border border-[var(--border-default)] hover:border-[var(--border-strong)]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-[20px] font-bold text-[var(--text-primary)]">
                        {item.role}
                      </h4>
                      <p className="text-[14px] text-[var(--accent)] font-medium">
                        {item.company}
                      </p>
                    </div>
                    <span className="font-plex-mono text-[12px] text-[var(--text-tertiary)]">
                      {item.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-[14px] text-[var(--text-secondary)]">
                    {item.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Clean Opportunity State Banner */
          <div className="p-6 sm:p-8 rounded-[6px] border border-dashed border-[var(--border-default)] bg-[var(--surface-base)] flex flex-col sm:flex-row items-center justify-between gap-6 scroll-scale">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-[4px] bg-[var(--fill-subtle)] text-[var(--accent)] flex items-center justify-center shrink-0">
                <AppIcon name="mail" className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-[17px] font-bold text-[var(--text-primary)]">
                  Ready for New Opportunities
                </h4>
                <p className="text-[14px] text-[var(--text-secondary)] mt-0.5 max-w-xl">
                  {experience.emptyStateCopy}
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="h-10 px-5 rounded-[4px] bg-[var(--text-primary)] text-[var(--surface-base)] font-medium text-[14px] inline-flex items-center justify-center gap-2 hover:bg-[var(--text-secondary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 shadow-sm shrink-0"
            >
              <AppIcon name="mail" className="w-4 h-4" />
              <span>Get in Touch</span>
            </a>
          </div>
        )}
      </div>

      {/* Competition Lightbox Modal */}
      {selectedCompIndex !== null && (
        <CompetitionModal
          isOpen={selectedCompIndex !== null}
          onClose={closeGallery}
          competitions={experience.hackathons}
          initialIndex={selectedCompIndex}
        />
      )}
    </section>
  );
}
