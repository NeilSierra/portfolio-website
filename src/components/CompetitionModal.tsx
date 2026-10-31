"use client";

import { useEffect, useState, useCallback, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AppIcon } from "./AppIcon";
import { HackathonItem } from "@/data/portfolio";

const emptySubscribe = () => () => {};

interface CompetitionModalProps {
  isOpen: boolean;
  onClose: () => void;
  competitions: HackathonItem[];
  initialIndex?: number;
}

export function CompetitionModal({
  isOpen,
  onClose,
  competitions,
  initialIndex = 0,
}: CompetitionModalProps) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [prevInitialIndex, setPrevInitialIndex] = useState(initialIndex);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  if (prevInitialIndex !== initialIndex) {
    setPrevInitialIndex(initialIndex);
    setCurrentIndex(initialIndex);
  }

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : competitions.length - 1));
  }, [competitions.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < competitions.length - 1 ? prev + 1 : 0));
  }, [competitions.length]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !isClient || competitions.length === 0) return null;

  const currentComp = competitions[currentIndex];
  const hasImage = Boolean(currentComp.images && currentComp.images.length > 0);
  const currentImage = hasImage ? currentComp.images![0] : null;
  const isWinner = currentComp.result.toLowerCase().includes("winner");

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/60 dark:bg-black/85 backdrop-blur-xs animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={`${currentComp.event} competition modal`}
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-[8px] bg-[var(--surface-base)] text-[var(--text-primary)] border border-[var(--border-strong)] shadow-2xl overflow-hidden transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-[var(--border-default)] bg-[var(--surface-default)] shrink-0 transition-colors">
          <div className="flex items-center gap-2.5 min-w-0 pr-2">
            <span
              className={`font-plex-mono text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-[3px] font-semibold uppercase tracking-wider shrink-0 ${
                isWinner ? "bg-[var(--accent)] text-white" : "bg-[var(--fill-subtle)] text-[var(--text-primary)] border border-[var(--border-default)]"
              }`}
            >
              {currentComp.result}
            </span>
            <h3 className="font-sans font-bold text-[14px] sm:text-[16px] text-[var(--text-primary)] truncate">
              {currentComp.event}
            </h3>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="font-plex-mono text-[11px] sm:text-[12px] px-2.5 py-0.5 rounded-[12px] bg-[var(--surface-base)] text-[var(--text-secondary)] border border-[var(--border-default)]">
              {currentIndex + 1} / {competitions.length}
            </span>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="w-8 h-8 rounded-[4px] border border-[var(--border-default)] bg-[var(--surface-base)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-raised)] hover:border-[var(--accent)] transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            >
              <AppIcon name="close" className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Center: Image Frame - Strictly bounded to avoid vertical scrollbar */}
        <div className="relative flex-1 min-h-0 w-full bg-[var(--surface-raised)]/40 dark:bg-[#0A0A0A] flex items-center justify-center p-2 sm:p-4 select-none overflow-hidden transition-colors">
          {currentImage ? (
            <div className="relative w-full h-[40vh] sm:h-[48vh] md:h-[54vh] max-h-[500px]">
              <Image
                src={currentImage}
                alt={`${currentComp.event} - Banner`}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 900px"
                priority
              />
            </div>
          ) : (
            <div className="h-[40vh] flex flex-col items-center justify-center text-[var(--text-tertiary)] font-plex-mono text-[13px]">
              <AppIcon name="award" className="w-8 h-8 mb-2 opacity-50" />
              <span>No image preview available</span>
            </div>
          )}

          {/* Navigation Controls */}
          {competitions.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous competition"
                className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[var(--surface-base)]/90 hover:bg-[var(--surface-base)] text-[var(--text-primary)] border border-[var(--border-default)] hover:border-[var(--accent)] flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent)] shadow-lg hover:scale-105"
              >
                <svg className="w-5 h-5 -rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next competition"
                className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[var(--surface-base)]/90 hover:bg-[var(--surface-base)] text-[var(--text-primary)] border border-[var(--border-default)] hover:border-[var(--accent)] flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent)] shadow-lg hover:scale-105"
              >
                <svg className="w-5 h-5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Footer Bar: Event Info & Clean Horizontal Thumbnails without scrollbars */}
        <div className="px-4 py-3 bg-[var(--surface-default)] border-t border-[var(--border-default)] flex flex-col gap-2.5 shrink-0 transition-colors">
          <div className="flex items-center justify-between text-[11px] sm:text-[12px] font-plex-mono text-[var(--text-tertiary)]">
            <span className="text-[var(--accent)] font-semibold truncate pr-2">
              {currentComp.event}
            </span>
            <span className="shrink-0 text-[var(--text-secondary)]">{currentComp.date}</span>
          </div>

          {/* Thumbnail Strip with styled custom horizontal scrollbar */}
          {competitions.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto modal-scrollbar-x pt-0.5 pb-2">
              {competitions.map((comp, idx) => {
                const thumb = comp.images && comp.images.length > 0 ? comp.images[0] : null;

                return (
                  <button
                    key={comp.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative w-14 h-9 sm:w-16 sm:h-10 rounded-[3px] overflow-hidden border-2 transition-all shrink-0 bg-[var(--surface-base)] ${
                      currentIndex === idx
                        ? "border-[var(--accent)] ring-2 ring-[var(--accent)]/40 scale-105 shadow-sm"
                        : "border-[var(--border-default)] opacity-70 hover:opacity-100"
                    }`}
                    title={comp.event}
                  >
                    {thumb ? (
                      <Image
                        src={thumb}
                        alt={comp.event}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center font-plex-mono text-[9px] text-[var(--text-tertiary)]">
                        N/A
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
