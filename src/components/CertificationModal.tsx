"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { AppIcon } from "./AppIcon";
import { CertificationItem } from "@/data/portfolio";

interface CertificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  certifications: CertificationItem[];
  initialIndex?: number;
}

export function CertificationModal({
  isOpen,
  onClose,
  certifications,
  initialIndex = 0,
}: CertificationModalProps) {
  const [prevInitialIndex, setPrevInitialIndex] = useState(initialIndex);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  if (prevInitialIndex !== initialIndex) {
    setPrevInitialIndex(initialIndex);
    setCurrentIndex(initialIndex);
  }

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : certifications.length - 1));
  }, [certifications.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < certifications.length - 1 ? prev + 1 : 0));
  }, [certifications.length]);

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

  if (!isOpen || certifications.length === 0) return null;

  const currentCert = certifications[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Certificate viewer: ${currentCert.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/85 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-[8px] bg-[#111111] text-white border border-[#2E2E2E] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="h-12 px-4 sm:px-6 bg-[#161616] border-b border-[#2E2E2E] flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0 pr-2">
            <AppIcon name="certificate" className="w-4 h-4 text-[var(--accent)] shrink-0" />
            <span className="font-plex-mono text-[11px] sm:text-[12px] uppercase tracking-wider text-[#A8CDE4] truncate">
              {currentCert.issuer}
            </span>
            <span className="text-[#666666]">{"//"}</span>
            <span className="font-plex-mono text-[11px] text-[#9A9A9A] shrink-0">
              {currentCert.year}
            </span>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            {/* Counter Badge */}
            <span className="font-plex-mono text-[11px] px-2.5 py-0.5 rounded-[12px] bg-[#222222] text-[#D1D1D1] border border-[#333333]">
              {currentIndex + 1} / {certifications.length}
            </span>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close certificate viewer"
              className="w-8 h-8 rounded-[4px] border border-[#333333] bg-[#222222] hover:bg-[#333333] hover:border-[var(--accent)] text-[#D1D1D1] hover:text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            >
              <AppIcon name="close" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Center: Image Display Frame */}
        <div className="relative w-full h-[45vh] sm:h-[55vh] md:h-[62vh] bg-[#0A0A0A] flex items-center justify-center p-2 sm:p-4 select-none overflow-hidden">
          {currentCert.imageUrl ? (
            <div className="relative w-full h-full">
              <Image
                src={currentCert.imageUrl}
                alt={currentCert.title}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-contain"
                priority
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-[#666666] font-plex-mono text-[13px]">
              <AppIcon name="certificate" className="w-8 h-8 mb-2 opacity-50" />
              <span>No image preview available</span>
            </div>
          )}

          {/* Navigation Arrows */}
          {certifications.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous certificate"
                className="absolute left-2.5 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/75 hover:bg-black text-white border border-white/20 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent)] shadow-lg"
              >
                <svg className="w-5 h-5 -rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next certificate"
                className="absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/75 hover:bg-black text-white border border-white/20 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent)] shadow-lg"
              >
                <svg className="w-5 h-5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Bottom Bar: Title & Thumbnail Strip */}
        <div className="p-3 sm:p-4 bg-[#141414] border-t border-[#2E2E2E] flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-left">
            <div className="min-w-0">
              <h4 className="text-[14px] sm:text-[15px] font-bold text-[#F9F9F9] leading-snug truncate">
                {currentCert.title}
              </h4>
              <p className="font-plex-mono text-[11px] text-[#9A9A9A] mt-0.5">
                Verified Issuer: <span className="text-[#A8CDE4]">{currentCert.issuer}</span>
              </p>
            </div>

            {currentCert.category && (
              <span className="self-start sm:self-auto font-plex-mono text-[10px] font-semibold uppercase px-2.5 py-0.5 rounded-[3px] bg-[var(--accent)] text-white shrink-0 tracking-wider">
                {currentCert.category}
              </span>
            )}
          </div>

          {/* Thumbnail Strip */}
          {certifications.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
              {certifications.map((cert, idx) => (
                <button
                  key={cert.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative w-14 h-10 sm:w-16 sm:h-11 rounded-[4px] overflow-hidden border-2 transition-all shrink-0 bg-[#0A0A0A] ${
                    currentIndex === idx
                      ? "border-[var(--accent)] ring-2 ring-[var(--accent)]/40 scale-105"
                      : "border-[#333333] opacity-60 hover:opacity-100"
                  }`}
                  title={cert.title}
                >
                  {cert.imageUrl ? (
                    <Image
                      src={cert.imageUrl}
                      alt={cert.title}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-plex-mono text-[9px] text-[#666666]">
                      N/A
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
