import { portfolioData } from "@/data/portfolio";
import { AppIcon } from "./AppIcon";
import { InteractivePortrait } from "./InteractivePortrait";

export default function Hero() {
  const { hero } = portfolioData;

  return (
    <section id="home" className="relative w-full border-b border-[var(--border-strong)]">
      {/* 48px Grid-paper canvas background */}
      <div className="grid-canvas w-full overflow-hidden relative">
        <div className="max-w-[1344px] mx-auto flex justify-between relative">
          {/* Left hatched gutter (desktop xl+ only to prevent column squeezing on lg) */}
          <div className="hatch-gutter hidden xl:block shrink-0 self-stretch" aria-hidden="true" />

          {/* Centered 1280px Content Column */}
          <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14 pb-0 flex flex-col justify-start relative">
            {/* Mobile Layout (< 768px: phone & small screens) */}
            <div className="md:hidden flex flex-col items-center text-center w-full">
              {/* Availability Badge & Location */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
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

              {/* Display headline */}
              <h1 className="font-serif-display font-bold uppercase text-[var(--accent)] text-[clamp(2.4rem,8.5vw,3.8rem)] leading-none tracking-[-0.02em] select-none text-center mb-3 sm:mb-4">
                {hero.name}
              </h1>

              {/* Role Statement */}
              <div className="mb-4 sm:mb-5 text-center">
                <p className="text-[19px] sm:text-[23px] font-bold text-[var(--text-primary)] leading-tight tracking-[-0.03em]">
                  {hero.roleLine1}
                </p>
                <p className="text-[15px] sm:text-[18px] text-[var(--text-secondary)] leading-tight mt-1">
                  {hero.roleLine2}
                </p>
              </div>

              {/* Multiline Quote */}
              <div className="relative max-w-md sm:max-w-lg mb-5 sm:mb-6 px-4 text-center">
                <p className="font-sans italic text-[14px] sm:text-[15.5px] leading-[1.45] text-[var(--text-secondary)]">
                  “{hero.valueStatement}”
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-[280px] sm:max-w-md mb-6 sm:mb-8 mx-auto">
                <a
                  href="#projects"
                  className="w-full sm:flex-1 h-10 sm:h-11 px-4 rounded-[4px] bg-[var(--text-primary)] text-[var(--surface-base)] font-medium text-[14px] flex items-center justify-center gap-2 hover:bg-[var(--text-secondary)] hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent)] shadow-xs"
                >
                  <AppIcon name="folder-git-2" className="w-4 h-4" />
                  <span>View Projects</span>
                </a>

                <a
                  href={hero.cvPdfUrl}
                  download
                  className="w-full sm:flex-1 h-10 sm:h-11 px-4 rounded-[4px] bg-[var(--surface-base)] border border-[var(--text-primary)] text-[var(--text-primary)] font-medium text-[14px] flex items-center justify-center gap-2 hover:bg-[var(--surface-raised)] hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent)] shadow-xs"
                >
                  <AppIcon name="file-text" className="w-4 h-4" />
                  <span>Download CV</span>
                </a>
              </div>

              {/* Portrait Image centered in normal flow with negative top margin */}
              <div className="relative w-full flex justify-center items-end -mt-6 sm:-mt-10">
                <InteractivePortrait
                  name={hero.name}
                  className="relative z-10 w-auto h-[320px] sm:h-[400px] aspect-square flex items-end justify-center drop-shadow-sm select-none"
                />
              </div>
            </div>

            {/* Tablet Layout (md: 768px - 1023px) — Content starts from top, profile at bottom */}
            <div className="hidden md:flex lg:hidden relative w-full min-h-[460px] md:min-h-[500px] items-start justify-between pb-6 pt-0 overflow-hidden">
              {/* Left Content Column starts at the top */}
              <div className="relative z-10 max-w-[420px] md:max-w-[460px] flex flex-col items-start text-left pt-0 gap-4 md:gap-5">
                {/* Availability Badge & Location */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[16px] bg-[var(--fill-subtle)] border border-[var(--border-default)] shadow-[var(--shadow-ring-faint)]">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
                    <span className="font-plex-mono text-[11px] uppercase tracking-[0.1em] text-[var(--text-primary)] font-medium">
                      {hero.availability}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[var(--text-tertiary)] text-[12px]">
                    <AppIcon name="map-pin" className="w-3.5 h-3.5" />
                    <span>{hero.location}</span>
                  </div>
                </div>

                {/* Name Display */}
                <h1 className="font-serif-display font-bold uppercase text-[var(--accent)] text-[2.8rem] md:text-[3.2rem] leading-none tracking-[-0.02em] select-none">
                  {hero.name}
                </h1>

                {/* Role Statement */}
                <div>
                  <p className="text-[22px] md:text-[24px] font-bold text-[var(--text-primary)] leading-tight tracking-[-0.03em]">
                    {hero.roleLine1}
                  </p>
                  <p className="text-[17px] md:text-[18px] text-[var(--text-secondary)] leading-tight mt-1">
                    {hero.roleLine2}
                  </p>
                </div>

                {/* Quote */}
                <div className="relative max-w-[300px] pl-3 border-l-2 border-[var(--accent)]">
                  <p className="font-sans italic text-[15px] leading-[1.45] text-[var(--text-secondary)]">
                    “{hero.valueStatement}”
                  </p>
                </div>

                {/* CTA Buttons (Vertical on tablet) */}
                <div className="flex flex-col gap-2.5 w-full max-w-[240px]">
                  <a
                    href="#projects"
                    className="w-full h-10 px-4 rounded-[4px] bg-[var(--text-primary)] text-[var(--surface-base)] font-medium text-[13px] flex items-center justify-center gap-2 hover:bg-[var(--text-secondary)] hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent)] shadow-xs"
                  >
                    <AppIcon name="folder-git-2" className="w-4 h-4" />
                    <span>View Projects</span>
                  </a>

                  <a
                    href={hero.cvPdfUrl}
                    download
                    className="w-full h-10 px-4 rounded-[4px] bg-[var(--surface-base)] border border-[var(--text-primary)] text-[var(--text-primary)] font-medium text-[13px] flex items-center justify-center gap-2 hover:bg-[var(--surface-raised)] hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent)] shadow-xs"
                  >
                    <AppIcon name="file-text" className="w-4 h-4" />
                    <span>Download CV</span>
                  </a>
                </div>
              </div>

              {/* Profile in absolute and behind, sticking to the bottom with negative right margin on tablet */}
              <div className="absolute bottom-0 right-0 -mr-6 md:-mr-10 lg:mr-0 z-0 pointer-events-auto flex items-end">
                <InteractivePortrait
                  name={hero.name}
                  className="w-auto h-[400px] md:h-[450px] aspect-square flex items-end justify-center drop-shadow-md select-none"
                />
              </div>
            </div>

            {/* Desktop Composition (lg, xl, 2xl >= 1024px) — Elements start from bottom */}
            <div className="hidden lg:grid lg:grid-cols-12 lg:gap-6 xl:gap-10 2xl:gap-16 items-end z-10 relative">
              {/* Left Column (Role statement + CTAs, aligned to bottom) */}
              <div className="lg:col-span-4 flex flex-col items-end text-right pb-8 xl:pb-12 z-10 lg:pr-2 xl:pr-4">
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
                    className="w-full h-10 px-4 rounded-[4px] bg-[var(--text-primary)] text-[var(--surface-base)] font-medium text-[14px] flex items-center justify-center gap-2 hover:bg-[var(--text-secondary)] hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 shadow-xs"
                  >
                    <AppIcon name="folder-git-2" className="w-4 h-4" />
                    <span>View Projects</span>
                  </a>

                  <a
                    href={hero.cvPdfUrl}
                    download
                    className="w-full h-10 px-4 rounded-[4px] bg-[var(--surface-base)] border border-[var(--text-primary)] text-[var(--text-primary)] font-medium text-[14px] flex items-center justify-center gap-2 hover:bg-[var(--surface-raised)] hover:scale-[1.02] active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 shadow-xs"
                  >
                    <AppIcon name="file-text" className="w-4 h-4" />
                    <span>Download CV</span>
                  </a>
                </div>
              </div>

              {/* Center Column: Portrait grounded at bottom, H1 at top */}
              <div className="lg:col-span-4 flex justify-center items-end relative h-[420px] xl:h-[540px] 2xl:h-[600px]">
                {/* H1 positioned absolute at top inside the container */}
                <h1 className="absolute top-0 left-1/2 -translate-x-1/2 z-1 font-serif-display font-bold uppercase text-[var(--accent)] text-[2.6rem] lg:text-[5rem] xl:text-[clamp(2.4rem,7vw,6.2rem)] 2xl:text-[6rem] leading-none tracking-[-0.02em] select-none whitespace-nowrap pointer-events-none">
                  {hero.name}
                </h1>

                {/* Profile image sitting in absolute bottom and behind */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-2 pointer-events-auto">
                  <InteractivePortrait
                    name={hero.name}
                    className="w-auto h-[400px] xl:h-[520px] 2xl:h-[580px] aspect-square flex items-end justify-center drop-shadow-md select-none"
                  />
                </div>
              </div>

              {/* Right Column: Pull Quote + Stat Cards (aligned to bottom) */}
              <div className="lg:col-span-4 flex flex-col items-start text-left pb-8 xl:pb-12 z-10 lg:pl-2 xl:pl-4">
                {/* Pull Quote */}
                <div className="relative max-w-[240px] xl:max-w-[300px] mb-6 xl:mb-8">
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
