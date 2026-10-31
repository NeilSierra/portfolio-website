"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { AppIcon } from "./AppIcon";

interface CompetitionModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  result: string;
  images: string[];
  initialIndex?: number;
}

export function CompetitionModal({
  isOpen,
  onClose,
  title,
  result,
  images,
  initialIndex = 0,
}: CompetitionModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }, [images.length]);

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

  if (!isOpen || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} image viewer`}
      onClick={onClose}
    >
      {/* Container - Stop propagation on inner content click */}
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-[8px] bg-[var(--surface-base)] border border-[var(--border-strong)] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-[var(--border-default)] bg-[var(--surface-raised)]/60">
          <div className="flex items-center gap-3 min-w-0 pr-3">
            <span className="font-plex-mono text-[10px] sm:text-[11px] px-2 py-0.5 rounded-[3px] bg-[var(--accent)] text-white font-semibold uppercase tracking-wider shrink-0">
              {result}
            </span>
            <h3 className="font-sans font-bold text-[14px] sm:text-[16px] text-[var(--text-primary)] truncate">
              {title}
            </h3>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {images.length > 1 && (
              <span className="font-plex-mono text-[11px] sm:text-[12px] text-[var(--text-tertiary)] font-medium">
                {currentIndex + 1} / {images.length}
              </span>
            )}

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="w-8 h-8 rounded-[4px] border border-[var(--border-default)] bg-[var(--surface-base)] text-[var(--text-primary)] hover:bg-[var(--surface-raised)] hover:border-[var(--accent)] transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            >
              <AppIcon name="close" className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Main Image Frame */}
        <div className="relative flex-1 min-h-[300px] sm:min-h-[460px] max-h-[70vh] bg-black/40 flex items-center justify-center p-2 sm:p-4 select-none">
          <div className="relative w-full h-full min-h-[300px] sm:min-h-[460px] flex items-center justify-center">
            <Image
              src={images[currentIndex]}
              alt={`${title} - Photo ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
            />
          </div>

          {/* Navigation Controls (Only if multiple images) */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Modal Thumbnail Strip (if multiple images) */}
        {images.length > 1 && (
          <div className="flex items-center justify-center gap-2 px-4 py-3 border-t border-[var(--border-default)] bg-[var(--surface-base)] overflow-x-auto">
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-12 h-12 rounded-[4px] overflow-hidden border-2 transition-all shrink-0 ${
                  currentIndex === idx
                    ? "border-[var(--accent)] ring-2 ring-[var(--accent)]/30 scale-105"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

