"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { AppIcon } from "./AppIcon";
import { CompetitionModal } from "./CompetitionModal";

export default function Experience() {
  const { experience } = portfolioData;
  const [selectedCompIndex, setSelectedCompIndex] = useState<number | null>(null);

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
          <span className="font-plex-mono text-[12px] uppercase tracking-[0.1em] text-[var(--accent)] font-semibold block mb-2">
            EXPERIENCE &amp; COMPETITIONS
          </span>
          <h2 className="font-serif-display text-[32px] sm:text-[40px] font-bold text-[var(--text-primary)] tracking-[-0.03em] leading-tight">
            Work &amp; Competitions
          </h2>
          <p className="text-[16px] text-[var(--text-secondary)] mt-2 max-w-2xl">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 scroll-fade">
            {experience.hackathons.map((comp, idx) => {
              const hasImages = Boolean(comp.images && comp.images.length > 0);
              const isWinner = comp.result.toLowerCase().includes("winner");

              return (
                <div
                  key={comp.id}
                  className="card-ring overflow-hidden flex flex-col justify-between border border-[var(--border-default)] hover:border-[var(--border-strong)] transition-all hover:shadow-[var(--shadow-ring)] group"
                >
                  <div>
                    {/* Visual Media Frame if images exist */}
                    {hasImages && (
                      <div
                        onClick={() => openGallery(idx)}
                        className="relative w-full aspect-[16/10] bg-[var(--surface-code)] overflow-hidden cursor-pointer border-b border-[var(--border-default)]"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            openGallery(idx);
                          }
                        }}
                        aria-label={`Open photo gallery for ${comp.event}`}
                      >
                        <Image
                          src={comp.images![0]}
                          alt={`${comp.event} banner`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Result Overlay Badge */}
                        <div className="absolute top-2.5 left-2.5">
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
                          <div className="absolute bottom-2.5 right-2.5 font-plex-mono text-[10px] font-semibold px-2 py-0.5 rounded-[3px] bg-black/85 text-white border border-white/20">
                            {comp.images!.length} Photos
                          </div>
                        )}
                      </div>
                    )}

                    <div className="p-5 sm:p-6">
                      {/* Top Meta for text-only cards without images */}
                      {!hasImages && (
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span
                            className={`inline-flex items-center gap-1.5 font-plex-mono text-[11px] font-semibold px-2.5 py-1 rounded-[4px] uppercase tracking-wider ${
                              isWinner
                                ? "bg-[var(--accent)] text-white shadow-xs"
                                : "bg-[var(--fill-subtle)] text-[var(--accent)] border border-[var(--border-default)]"
                            }`}
                          >
                            <AppIcon name="award" className="w-3.5 h-3.5 shrink-0" />
                            <span>{comp.result}</span>
                          </span>
                        </div>
                      )}

                      {/* Date Indicator */}
                      <div className="flex items-center gap-1.5 font-plex-mono text-[11px] text-[var(--text-tertiary)] mb-2">
                        <AppIcon name="calendar" className="w-3 h-3 text-[var(--text-tertiary)]" />
                        <span>{comp.date}</span>
                      </div>

                      {/* Competition Title */}
                      <h4 className="text-[17px] sm:text-[18px] font-bold text-[var(--text-primary)] leading-snug tracking-tight">
                        {comp.event}
                      </h4>

                      {comp.description && (
                        <p className="text-[13px] text-[var(--text-secondary)] mt-2 leading-relaxed">
                          {comp.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Card Action Button */}
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                    {hasImages ? (
                      <button
                        type="button"
                        onClick={() => openGallery(idx)}
                        className="w-full h-9 px-3 rounded-[4px] bg-[var(--surface-default)] hover:bg-[var(--surface-raised)] text-[var(--text-primary)] font-plex-mono text-[11px] uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 transition-colors border border-[var(--border-default)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                      >
                        <AppIcon name="external-link" className="w-3.5 h-3.5" />
                        <span>View Photo{comp.images!.length > 1 ? `s (${comp.images!.length})` : ""}</span>
                      </button>
                    ) : (
                      <div className="flex items-center justify-between text-[var(--text-tertiary)] font-plex-mono text-[11px] pt-3 border-t border-[var(--border-default)]">
                        <span className="flex items-center gap-1.5 opacity-70">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-tertiary)]" />
                          <span>Images to follow</span>
                        </span>
                        <span className="text-[10px] uppercase tracking-wider opacity-50">
                          VERIFIED
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Work Experience Section */}
        {experience.items.length > 0 ? (
          <div>
            <h3 className="font-plex-mono text-[13px] uppercase tracking-wider text-[var(--text-primary)] font-semibold mb-6 flex items-center gap-2">
              <AppIcon name="folder-git-2" className="w-4 h-4 text-[var(--accent)]" />
              <span>Work Experience</span>
            </h3>

            <div className="space-y-6">
              {experience.items.map((item) => (
                <div key={item.id} className="card-ring p-6 sm:p-8">
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
              className="h-10 px-5 rounded-[4px] bg-[var(--text-primary)] text-[var(--surface-base)] font-medium text-[13px] inline-flex items-center justify-center gap-2 hover:bg-[var(--text-secondary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] shrink-0"
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
