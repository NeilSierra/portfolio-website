"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { AppIcon } from "./AppIcon";
import { CertificationModal } from "./CertificationModal";

export default function Education() {
  const { education } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedCertIndex, setSelectedCertIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(6);

  // Dynamic capacity to strictly maintain 2 rows across all screen breakpoints
  useEffect(() => {
    const updateCapacity = () => {
      const width = window.innerWidth;
      if (width >= 1024) setItemsPerPage(6); // 3 cols * 2 rows = 6
      else if (width >= 640) setItemsPerPage(4); // 2 cols * 2 rows = 4
      else setItemsPerPage(4); // 1-2 cols * 2 rows = 4
    };

    updateCapacity();
    window.addEventListener("resize", updateCapacity);
    return () => window.removeEventListener("resize", updateCapacity);
  }, []);

  // Extract unique categories
  const categories = [
    "All",
    ...Array.from(new Set(education.certifications.map((c) => c.category).filter(Boolean) as string[])),
  ];

  const filteredCerts =
    activeCategory === "All"
      ? education.certifications
      : education.certifications.filter((c) => c.category === activeCategory);

  const totalItems = filteredCerts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Paginated slice for current page
  const paginatedCerts = filteredCerts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const openModal = (index: number) => {
    setSelectedCertIndex(index);
  };

  const closeModal = () => {
    setSelectedCertIndex(null);
  };

  return (
    <section id="education" className="py-20 sm:py-24 border-t border-[var(--border-default)]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 scroll-fade">
          <div className="flex items-center gap-2 mb-2 font-plex-mono text-[12px] uppercase tracking-[0.1em] text-[var(--accent)] font-semibold">
            <span>EDUCATION</span>
            <span className="text-[var(--text-tertiary)]">{"//"}</span>
            <span className="text-[var(--text-tertiary)]">ACADEMICS &amp; HONORS</span>
          </div>
          <h2 className="font-serif-display text-[32px] sm:text-[40px] font-bold text-[var(--text-primary)] tracking-[-0.03em] leading-tight">
            Education &amp; Achievements
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[var(--text-secondary)] mt-2 max-w-2xl">
            My academic foundation, formal program coursework, and scholastic milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Main Education Card */}
          <div className="lg:col-span-7 card-ring p-5 sm:p-8 border border-[var(--border-default)] scroll-scale">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="relative w-12 h-12 rounded-[6px] bg-white border border-[var(--border-default)] p-1.5 flex items-center justify-center shrink-0 shadow-xs">
                <Image
                  src="/assets/education/lpu-logo.png"
                  alt="LPU Cavite Seal"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-[18px] sm:text-[22px] font-bold text-[var(--text-primary)] leading-snug">
                    {education.degree}
                  </h3>
                  <span className="font-plex-mono text-[11px] sm:text-[12px] text-[var(--accent)] font-semibold mt-1 sm:mt-0">
                    Class of {education.graduationYear}
                  </span>
                </div>
                <p className="text-[14px] sm:text-[15px] text-[var(--text-secondary)] mt-1">
                  {education.school}
                </p>

                {/* Academic Standing */}
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[var(--fill-subtle)] border border-[var(--border-default)]">
                  <AppIcon name="award" className="w-4 h-4 text-[var(--accent)]" />
                  <span className="font-plex-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[var(--text-primary)] font-semibold">
                    Honors: {education.honors}
                  </span>
                </div>

                {/* Coursework Pills */}
                <div className="mt-6 pt-5 border-t border-[var(--border-default)]">
                  <span className="font-plex-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[var(--text-tertiary)] block mb-3">
                    RELEVANT COURSEWORK
                  </span>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {education.coursework.map((course) => (
                      <span
                        key={course}
                        className="text-[11px] sm:text-[12px] px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-[4px] bg-[var(--surface-default)] text-[var(--text-secondary)] border border-[var(--border-default)]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scholastic Achievements & Honors */}
          <div className="lg:col-span-5 card-ring p-5 sm:p-7 border border-[var(--border-default)]">
            <div className="flex items-center justify-between gap-3 mb-6 pb-3 border-b border-[var(--border-default)]">
              <div className="flex items-center gap-2.5">
                <AppIcon name="award" className="w-5 h-5 text-[var(--accent)]" />
                <h3 className="text-[18px] font-bold text-[var(--text-primary)]">
                  Academic Achievements
                </h3>
              </div>
              <span className="font-plex-mono text-[11px] text-[var(--text-tertiary)] uppercase tracking-wider">
                {education.achievements.length} Milestones
              </span>
            </div>

            <div className="space-y-3.5 scroll-fade">
              {education.achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-[4px] bg-[var(--surface-base)] border border-[var(--border-default)] hover:border-[var(--border-strong)] transition-all flex items-start gap-3.5"
                >
                  {/* School Crest Logo */}
                  {item.logo ? (
                    <div className="relative w-10 h-10 rounded-[4px] bg-white border border-[var(--border-default)] p-1 shrink-0 overflow-hidden flex items-center justify-center shadow-xs">
                      <Image
                        src={item.logo}
                        alt={`${item.institution} seal`}
                        width={36}
                        height={36}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-[4px] bg-[var(--fill-subtle)] text-[var(--accent)] flex items-center justify-center shrink-0">
                      <AppIcon name="award" className="w-5 h-5" />
                    </div>
                  )}

                  {/* Milestone Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-[14px] sm:text-[15px] font-bold text-[var(--text-primary)] leading-snug">
                        {item.title}
                      </h4>
                      {item.badge && (
                        <span className="font-plex-mono text-[10px] font-semibold px-2 py-0.5 rounded-[3px] bg-[var(--accent)] text-white shrink-0 uppercase tracking-wider">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-[12px] sm:text-[13px] text-[var(--accent)] font-medium mt-0.5">
                      {item.institution}
                    </p>

                    {item.program && (
                      <p className="font-plex-mono text-[11px] text-[var(--text-tertiary)] mt-0.5">
                        {item.program}
                      </p>
                    )}

                    <p className="text-[12px] text-[var(--text-secondary)] mt-1.5 leading-relaxed">
                      {item.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full-width Certifications Showcase (2 Rows Max + Pagination) */}
        {education.certifications.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[var(--border-default)] scroll-fade">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-2 font-plex-mono text-[11px] sm:text-[12px] uppercase tracking-[0.1em] text-[var(--accent)] font-semibold mb-1">
                  <AppIcon name="certificate" className="w-4 h-4 text-[var(--accent)] shrink-0" />
                  <span>CREDENTIALS</span>
                  <span className="text-[var(--text-tertiary)]">{"//"}</span>
                  <span className="text-[var(--text-secondary)]">LICENSES &amp; CERTIFICATIONS</span>
                </div>
                <h3 className="font-serif-display text-[26px] sm:text-[32px] font-bold text-[var(--text-primary)] tracking-tight">
                  Verified Certifications
                </h3>
              </div>

              {/* Counter badge */}
              <div className="font-plex-mono text-[11px] sm:text-[12px] text-[var(--accent)] font-semibold px-3 py-1.5 rounded-[4px] bg-[var(--fill-subtle)] border border-[var(--border-default)] self-start sm:self-auto">
                {education.certifications.length} Industry Accreditations
              </div>
            </div>

            {/* Category Filter Tabs (Tech Stack Category Button Design & Custom Scrollbar) */}
            <div className="flex items-center gap-2 overflow-x-auto pt-1 pb-3 mb-8 border-b border-[var(--border-default)] custom-scrollbar-x -mx-4 px-4 sm:-mx-0 sm:px-0 scroll-fade">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                const count =
                  cat === "All"
                    ? education.certifications.length
                    : education.certifications.filter((c) => c.category === cat).length;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleCategoryChange(cat)}
                    className={`h-9 px-4 rounded-[4px] font-plex-mono text-[12px] uppercase tracking-wider font-semibold flex items-center gap-2 transition-all shrink-0 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] ${
                      isActive
                        ? "bg-[var(--text-primary)] text-[var(--surface-base)] shadow-sm"
                        : "bg-[var(--surface-base)] text-[var(--text-secondary)] hover:bg-[var(--surface-raised)] hover:text-[var(--text-primary)] border border-[var(--border-default)]"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-[2px] ${
                        isActive
                          ? "bg-[var(--surface-base)] text-[var(--text-primary)]"
                          : "bg-[var(--surface-raised)] text-[var(--text-tertiary)]"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Certifications Responsive Grid (Strictly 2 Rows Max) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {paginatedCerts.map((cert, pageIdx) => {
                const globalIdx = (currentPage - 1) * itemsPerPage + pageIdx;

                return (
                  <div
                    key={cert.id}
                    className="card-ring overflow-hidden flex flex-col justify-between border border-[var(--border-default)] hover:border-[var(--border-strong)] transition-all hover:shadow-[var(--shadow-ring)] group"
                  >
                    <div>
                      {/* Visual Preview Frame */}
                      {cert.imageUrl && (
                        <div
                          onClick={() => openModal(globalIdx)}
                          className="relative w-full aspect-[16/10] bg-[var(--surface-code)] overflow-hidden cursor-pointer border-b border-[var(--border-default)]"
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              openModal(globalIdx);
                            }
                          }}
                          aria-label={`View certificate for ${cert.title}`}
                        >
                          <Image
                            src={cert.imageUrl}
                            alt={cert.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />

                          {/* Category Badge Overlay */}
                          {cert.category && (
                            <div className="absolute top-2.5 left-2.5">
                              <span className="font-plex-mono text-[10px] font-semibold px-2 py-0.5 rounded-[3px] bg-black/80 text-white border border-white/20 uppercase tracking-wider">
                                {cert.category}
                              </span>
                            </div>
                          )}

                          {/* Inspect Indicator Overlay */}
                          <div className="absolute bottom-2.5 right-2.5 font-plex-mono text-[10px] font-semibold px-2 py-0.5 rounded-[3px] bg-black/80 text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                            <AppIcon name="external-link" className="w-3 h-3" />
                            <span>Inspect</span>
                          </div>
                        </div>
                      )}

                      {/* Metadata Content */}
                      <div className="p-4 sm:p-5">
                        <div className="flex items-center justify-between text-[11px] font-plex-mono text-[var(--text-tertiary)] mb-1.5">
                          <span className="text-[var(--accent)] font-semibold truncate pr-2">
                            {cert.issuer}
                          </span>
                          <span className="shrink-0">{cert.year}</span>
                        </div>

                        <h4 className="text-[15px] sm:text-[16px] font-bold text-[var(--text-primary)] leading-snug line-clamp-2">
                          {cert.title}
                        </h4>
                      </div>
                    </div>

                    {/* Card Action Button */}
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
                      <button
                        type="button"
                        onClick={() => openModal(globalIdx)}
                        className="w-full h-9 px-3 rounded-[4px] bg-[var(--surface-default)] hover:bg-[var(--surface-raised)] text-[var(--text-primary)] font-plex-mono text-[11px] uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 transition-colors border border-[var(--border-default)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                      >
                        <AppIcon name="external-link" className="w-3.5 h-3.5" />
                        <span>View Certificate</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination Controls (Only when total items exceed 2 rows) */}
            {totalPages > 1 && (
              <div className="mt-8 pt-6 border-t border-[var(--border-default)] flex flex-col sm:flex-row items-center justify-between gap-4 font-plex-mono text-[12px]">
                <span className="text-[var(--text-tertiary)] uppercase tracking-wider text-[11px] sm:text-[12px]">
                  SHOWING {(currentPage - 1) * itemsPerPage + 1}–
                  {Math.min(currentPage * itemsPerPage, totalItems)} OF {totalItems} ACCREDITATIONS
                </span>

                <div className="flex items-center gap-1.5">
                  {/* Prev Button */}
                  <button
                    type="button"
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className="h-8 px-3 rounded-[4px] border border-[var(--border-default)] bg-[var(--surface-base)] text-[var(--text-primary)] hover:bg-[var(--surface-raised)] disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
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
                      className={`w-8 h-8 rounded-[4px] font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent)] ${
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
                    className="h-8 px-3 rounded-[4px] border border-[var(--border-default)] bg-[var(--surface-base)] text-[var(--text-primary)] hover:bg-[var(--surface-raised)] disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                    aria-label="Next page"
                  >
                    <span className="hidden xs:inline">NEXT</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Fullscreen Certificate Viewer Lightbox */}
      {selectedCertIndex !== null && (
        <CertificationModal
          isOpen={selectedCertIndex !== null}
          initialIndex={selectedCertIndex}
          onClose={closeModal}
          certifications={filteredCerts}
        />
      )}
    </section>
  );
}
