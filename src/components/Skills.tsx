"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { TechIcon } from "./TechIcons";
import { AppIcon } from "./AppIcon";

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(24);

  const categories = ["All", ...skills.map((s) => s.category)];

  // Flat list of all skills or filtered by category
  const displayedSkills =
    activeTab === "All"
      ? skills.flatMap((group) =>
        group.skills.map((skill) => ({
          ...skill,
          category: group.category,
        }))
      )
      : (skills.find((s) => s.category === activeTab)?.skills || []).map(
        (skill) => ({
          ...skill,
          category: activeTab,
        })
      );

  // Dynamic items per page corresponding to exactly 4 rows across breakpoints
  useEffect(() => {
    const updateCapacity = () => {
      const width = window.innerWidth;
      if (width >= 1280) setItemsPerPage(24); // 6 cols * 4 rows = 24
      else if (width >= 1024) setItemsPerPage(20); // 5 cols * 4 rows = 20
      else if (width >= 768) setItemsPerPage(16); // 4 cols * 4 rows = 16
      else if (width >= 640) setItemsPerPage(12); // 3 cols * 4 rows = 12
      else setItemsPerPage(8); // 2 cols * 4 rows = 8
    };

    updateCapacity();
    window.addEventListener("resize", updateCapacity);
    return () => window.removeEventListener("resize", updateCapacity);
  }, []);

  const totalItems = displayedSkills.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const exceedsFourRows = totalItems > itemsPerPage;

  // Active slice of skills for current page
  const paginatedSkills = exceedsFourRows
    ? displayedSkills.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : displayedSkills;

  const handleTabChange = (cat: string) => {
    setActiveTab(cat);
    setCurrentPage(1);
  };

  return (
    <section id="skills" className="border-t border-[var(--border-default)]">
      <div className="grid-canvas w-full">
        <div className="max-w-[1344px] mx-auto flex justify-between relative">
          {/* Left hatched gutter */}
          <div className="hatch-gutter hidden lg:block shrink-0 self-stretch" aria-hidden="true" />

          {/* Centered 1280px Column */}
          <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 scroll-fade">
              <div>
                <span className="font-plex-mono text-[12px] uppercase tracking-[0.1em] text-[var(--accent)] font-semibold block mb-2">
                  SKILLS &amp; TECHNOLOGIES
                </span>
                <h2 className="font-serif-display text-[32px] sm:text-[40px] font-bold text-[var(--text-primary)] tracking-[-0.03em] leading-tight">
                  Tech Stack
                </h2>
              </div>

              <div className="flex items-center gap-2 text-[var(--text-tertiary)] font-plex-mono text-[12px]">
                <AppIcon name="layers" className="w-4 h-4 text-[var(--accent)]" />
                <span>{displayedSkills.length} TECHNOLOGIES LOADED</span>
              </div>
            </div>

            {/* Tab Navigation (Multi-Page Category Switcher) */}
            <div className="flex items-center gap-2 overflow-x-auto pt-1 pb-3 mb-8 border-b border-[var(--border-default)] custom-scrollbar-x -mx-4 px-4 sm:-mx-1 sm:px-1 scroll-fade">
              {categories.map((cat) => {
                const isActive = activeTab === cat;
                const count =
                  cat === "All"
                    ? skills.reduce((acc, curr) => acc + curr.skills.length, 0)
                    : skills.find((s) => s.category === cat)?.skills.length || 0;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleTabChange(cat)}
                    className={`h-9 px-4 rounded-[4px] font-plex-mono text-[12px] uppercase tracking-wider font-semibold flex items-center gap-2 transition-all shrink-0 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] ${
                      isActive
                        ? "bg-[var(--text-primary)] text-[var(--surface-base)] shadow-sm"
                        : "bg-[var(--surface-base)] text-[var(--text-secondary)] hover:bg-[var(--surface-raised)] hover:text-[var(--text-primary)] border border-[var(--border-default)]"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-[2px] ${
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

            {/* Multi-Page Grid (No levels, only clean iconic cards) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 scroll-fade">
              {paginatedSkills.map((skill) => (
                <div
                  key={`${skill.category}-${skill.name}`}
                  className="card-ring p-3.5 sm:p-5 flex flex-col items-center justify-center text-center gap-2.5 sm:gap-3 transition-all hover:shadow-[var(--shadow-elevated)] hover:-translate-y-1 group border border-[var(--border-default)]"
                >
                  {/* Icon Container */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[6px] bg-[var(--surface-default)] text-[var(--text-primary)] flex items-center justify-center transition-colors group-hover:bg-[var(--text-primary)] group-hover:text-[var(--surface-base)]">
                    <TechIcon name={skill.name} className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  {/* Title & Category info */}
                  <div className="flex flex-col items-center w-full min-w-0">
                    <span className="font-sans font-semibold text-[13px] sm:text-[14px] text-[var(--text-primary)] tracking-tight truncate w-full">
                      {skill.name}
                    </span>
                    <span className="font-plex-mono text-[9px] sm:text-[10px] text-[var(--text-tertiary)] uppercase mt-0.5 tracking-wider truncate w-full">
                      {skill.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Toolbar (Rendered only when items exceed 4 rows) */}
            {exceedsFourRows && totalPages > 1 && (
              <div className="mt-8 pt-6 border-t border-[var(--border-default)] flex flex-col sm:flex-row items-center justify-between gap-4 font-plex-mono text-[12px]">
                {/* Status Indicator */}
                <span className="text-[var(--text-tertiary)] uppercase tracking-wider text-[11px] sm:text-[12px]">
                  SHOWING {(currentPage - 1) * itemsPerPage + 1}–
                  {Math.min(currentPage * itemsPerPage, totalItems)} OF {totalItems} TECHNOLOGIES
                </span>

                {/* Page Navigation Controls */}
                <div className="flex items-center gap-1.5">
                  {/* Previous Button */}
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

          {/* Right hatched gutter */}
          <div className="hatch-gutter hidden lg:block shrink-0 self-stretch" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
