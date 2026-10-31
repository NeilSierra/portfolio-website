import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { AppIcon } from "./AppIcon";

export default function Hero() {
  const { hero } = portfolioData;

  return (
    <section id="home" className="relative w-full border-b border-[var(--border-strong)]">
      {/* 48px Grid-paper canvas background */}
      <div className="grid-canvas w-full overflow-hidden">
        <div className="max-w-[1344px] mx-auto flex justify-between relative">
          {/* Left hatched gutter (desktop xl+ only to prevent column squeezing on lg) */}
          <div className="hatch-gutter hidden xl:block shrink-0 self-stretch" aria-hidden="true" />

          {/* Centered 1280px Content Column */}
          <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-16 pb-0 flex flex-col justify-between">
            {/* Mobile & Tablet Layout (< 1024px: base, sm, md) — Exactly matching user sketch */}
            <div className="lg:hidden flex flex-col items-start text-left w-full">
              {/* Availability Badge & Location */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-[16px] bg-[var(--fill-subtle)] border border-[var(--border-default)] shadow-[var(--shadow-ring-faint)]">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
                  <span className="font-plex-mono text-[10px] sm:text-[11px] uppercase tracking-[0.1em] text-[var(--text-primary)] font-medium">
                    {hero.availability}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[var(--text-tertiary)] text-[12px] sm:text-[13px]">
                  <AppIcon name="map-pin" className="w-3.5 h-3.5" />
                  <span>{hero.location}</span>
                </div>
              </div>

              {/* 1. NEIL SIERRA (Display headline) */}
              <h1 className="font-serif-display font-bold uppercase text-[var(--accent)] text-[clamp(2.4rem,8.5vw,4.2rem)] leading-none tracking-[-0.02em] select-none mb-3 sm:mb-4">
                {hero.name}
              </h1>

              {/* 2. Description (Role statement: two lines) */}
              <div className="mb-4 sm:mb-5">
                <p className="text-[18px] sm:text-[22px] md:text-[26px] font-bold text-[var(--text-primary)] leading-tight tracking-[-0.03em]">
                  {hero.roleLine1}
                </p>
                <p className="text-[15px] sm:text-[18px] md:text-[20px] text-[var(--text-secondary)] leading-tight mt-1">
                  {hero.roleLine2}
                </p>
              </div>

              {/* 3. Multiline Quote */}
              <div className="relative max-w-[340px] sm:max-w-[460px] md:max-w-[540px] mb-5 sm:mb-6 pl-3 sm:pl-3.5 border-l-2 border-[var(--accent)]">
                <p className="font-sans italic text-[14px] sm:text-[16px] md:text-[17px] leading-[1.4] text-[var(--text-secondary)]">
                  “{hero.valueStatement}”
                </p>
              </div>

              {/* 4. CTA Buttons (Primary & Secondary stacked vertically) */}
              <div className="w-full max-w-[280px] sm:max-w-[240px] flex flex-col gap-3 mb-6 sm:mb-8">
                {/* Primary CTA (Ink button) */}
                <a
                  href="#projects"
                  className="w-full h-10 px-4 rounded-[4px] bg-[var(--text-primary)] text-[var(--surface-base)] font-medium text-[14px] flex items-center justify-center gap-2 hover:bg-[var(--text-secondary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 shadow-sm"
                >
                  <AppIcon name="folder-git-2" className="w-4 h-4" />
                  <span>View Projects</span>
                </a>

                {/* Secondary CTA (Outlined button) */}
                <a
                  href={hero.cvPdfUrl}
                  download
                  className="w-full h-10 px-4 rounded-[4px] bg-[var(--surface-base)] border border-[var(--text-primary)] text-[var(--text-primary)] font-medium text-[14px] flex items-center justify-center gap-2 hover:bg-[var(--surface-raised)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 shadow-sm"
                >
                  <AppIcon name="file-text" className="w-4 h-4" />
                  <span>Download CV</span>
                </a>
              </div>

              {/* 5. Portrait Image directly above Marquee with Stat Cards flanking the bottom */}
              <div className="relative w-full flex justify-center items-end -mt-8 sm:-mt-16">
                {/* Portrait Image (Enlarged for base, sm, md) */}
                <Image
                  src={hero.portraitUrl}
                  alt={`Portrait of ${hero.name}`}
                  width={1024}
                  height={1024}
                  quality={100}
                  unoptimized
                  priority
                  className="relative z-10 w-auto h-[340px] xs:h-[380px] sm:h-[440px] md:h-[500px] object-contain object-bottom drop-shadow-sm select-none pointer-events-none"
                />

                {/* 6. Stat Cards: Fixed sizing, no text truncation, cleanly positioned at bottom left & right */}
                <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 w-full max-w-[560px] sm:max-w-[660px] md:max-w-[760px] mx-auto flex justify-between items-end px-2.5 sm:px-4 gap-2.5 sm:gap-4 z-20 pointer-events-none">
                  {hero.stats.map((stat, idx) => (
                    <div
                      key={stat.label}
                      className={`pointer-events-auto flex-1 min-w-0 max-w-[150px] xs:max-w-[175px] sm:max-w-[220px] md:max-w-[260px] stat-card flex items-center gap-2 sm:gap-3 p-2 xs:p-2.5 sm:p-3.5 bg-[var(--surface-base)] shadow-md border border-[var(--border-default)] transition-transform hover:-translate-y-0.5 ${idx === 1 ? "ml-auto" : ""
                        }`}
                    >
                      <AppIcon
                        name={stat.icon}
                        className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[var(--accent)] shrink-0"
                      />
                      <div className="flex flex-col text-left min-w-0">
                        <span className="text-[18px] xs:text-[20px] sm:text-[24px] md:text-[26px] font-bold text-[var(--text-primary)] leading-none font-sans">
                          {stat.value}
                        </span>
                        <span className="font-plex-mono text-[8px] xs:text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.05em] sm:tracking-[0.08em] text-[var(--text-secondary)] mt-0.5 sm:mt-1 leading-tight whitespace-normal">
                          {stat.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Composition (lg, xl, 2xl >= 1024px) — 3-column layout */}
            <div className="hidden lg:grid lg:grid-cols-12 lg:gap-4 xl:gap-10 2xl:gap-16 items-end z-10">
              {/* Left Column (Role statement + CTAs) */}
              <div className="lg:col-span-3 xl:col-span-4 flex flex-col items-end text-right pb-8 xl:pb-12 z-10 lg:pr-2 xl:pr-4">
                {/* Availability Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[16px] bg-[var(--fill-subtle)] border border-[var(--border-default)] shadow-[var(--shadow-ring-faint)] mb-4 xl:mb-6 max-w-full">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
                  <span className="font-plex-mono text-[11px] uppercase tracking-[0.1em] text-[var(--text-primary)] font-medium truncate">
                    {hero.availability}
                  </span>
                </div>

                {/* Location indicator */}
                <div className="flex items-center gap-1.5 text-[var(--text-tertiary)] text-[13px] mb-3 xl:mb-4">
                  <AppIcon name="map-pin" className="w-3.5 h-3.5" />
                  <span>{hero.location}</span>
                </div>

                {/* Role Statement: two lines, size hierarchy */}
                <div className="mb-6 xl:mb-8">
                  <p className="text-[24px] xl:text-[32px] font-bold text-[var(--text-primary)] leading-tight tracking-[-0.03em]">
                    {hero.roleLine1}
                  </p>
                  <p className="text-[18px] xl:text-[24px] text-[var(--text-secondary)] leading-tight mt-1">
                    {hero.roleLine2}
                  </p>
                </div>

                {/* CTA Stack */}
                <div className="w-full max-w-[220px] xl:max-w-[240px] flex flex-col gap-3">
                  <a
                    href="#projects"
                    className="w-full h-10 px-4 rounded-[4px] bg-[var(--text-primary)] text-[var(--surface-base)] font-medium text-[14px] flex items-center justify-center gap-2 hover:bg-[var(--text-secondary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
                  >
                    <AppIcon name="folder-git-2" className="w-4 h-4" />
                    <span>View Projects</span>
                  </a>

                  <a
                    href={hero.cvPdfUrl}
                    download
                    className="w-full h-10 px-4 rounded-[4px] bg-[var(--surface-base)] border border-[var(--text-primary)] text-[var(--text-primary)] font-medium text-[14px] flex items-center justify-center gap-2 hover:bg-[var(--surface-raised)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
                  >
                    <AppIcon name="file-text" className="w-4 h-4" />
                    <span>Download CV</span>
                  </a>
                </div>
              </div>

              {/* Center Column: Portrait is relative, H1 sticks directly to it from behind (Enlarged on lg) */}
              <div className="lg:col-span-6 xl:col-span-4 flex justify-center items-end relative z-20 px-2 xl:px-4">
                <div className="relative w-auto h-[480px] xl:h-[560px] 2xl:h-[600px] aspect-square flex items-end">
                  {/* H1 positioned absolute at top inside the container */}
                  <h1 className="absolute top-0 left-1/2 -translate-x-1/2 z-0 font-serif-display font-bold uppercase text-[var(--accent)] text-[2.8rem] lg:text-[3.4rem] xl:text-[clamp(2.4rem,7vw,5.5rem)] 2xl:text-[6rem] leading-none tracking-[-0.02em] select-none whitespace-nowrap pointer-events-none">
                    {hero.name}
                  </h1>

                  {/* Profile image sitting in front with quality 100 & full resolution */}
                  <Image
                    src={hero.portraitUrl}
                    alt={`Portrait of ${hero.name}`}
                    width={1024}
                    height={1024}
                    quality={100}
                    unoptimized
                    priority
                    className="relative z-10 w-auto h-[480px] xl:h-[560px] 2xl:h-[600px] object-contain object-bottom drop-shadow-sm select-none pointer-events-none"
                  />
                </div>
              </div>

              {/* Right Column: Pull Quote + Stat Cards */}
              <div className="lg:col-span-3 xl:col-span-4 flex flex-col items-start text-left pb-8 xl:pb-12 z-10 lg:pl-2 xl:pl-4">
                {/* Pull Quote */}
                <div className="relative max-w-[220px] xl:max-w-[290px] mb-6 xl:mb-8">
                  <span className="text-[32px] text-[var(--accent)] font-serif leading-none absolute -top-3 -left-4 select-none">
                    “
                  </span>
                  <p className="font-sans italic text-[15px] xl:text-[18px] leading-[1.4] text-[var(--text-secondary)] pl-2">
                    {hero.valueStatement}
                  </p>
                </div>

                {/* Stacked Stat Cards with Corner Brackets */}
                <div className="w-full max-w-[220px] xl:max-w-[240px] flex flex-col gap-3">
                  {hero.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="stat-card flex items-center gap-3 xl:gap-4 p-3 xl:p-4 transition-transform hover:-translate-y-0.5"
                    >
                      <AppIcon
                        name={stat.icon}
                        className="w-7 h-7 xl:w-8 xl:h-8 text-[var(--accent)] shrink-0"
                      />
                      <div className="flex flex-col text-left">
                        <span className="text-[22px] xl:text-[26px] font-bold text-[var(--accent)] leading-none font-sans">
                          {stat.value}
                        </span>
                        <span className="font-plex-mono text-[9.5px] xl:text-[11px] uppercase tracking-[0.1em] text-[var(--text-secondary)] mt-1">
                          {stat.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right hatched gutter (desktop xl+ only to prevent column squeezing on lg) */}
          <div className="hatch-gutter hidden xl:block shrink-0 self-stretch" aria-hidden="true" />
        </div>
      </div>

      {/* Marquee Ticker Bar closing the hero */}
      <div className="marquee flex justify-center" aria-label="News ticker">
        <div className="marquee__track font-plex-mono text-[12px] sm:text-[13px] tracking-[0.05em] uppercase select-none whitespace-nowrap">
          {/* Track 1 */}
          <div className="flex items-center shrink-0">
            {hero.tickerItems.map((item, idx) => (
              <span key={`t1-${idx}`} className="inline-flex items-center gap-6 pr-6 text-[var(--code-text)]">
                <span>{item}</span>
                <span className="text-[var(--code-muted)] font-bold">•</span>
              </span>
            ))}
          </div>
          {/* Track 2 (Identical clone for seamless 50% loop) */}
          <div className="flex items-center shrink-0" aria-hidden="true">
            {hero.tickerItems.map((item, idx) => (
              <span key={`t2-${idx}`} className="inline-flex items-center gap-6 pr-6 text-[var(--code-text)]">
                <span>{item}</span>
                <span className="text-[var(--code-muted)] font-bold">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
