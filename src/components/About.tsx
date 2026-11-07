import { portfolioData } from "@/data/portfolio";
import { GithubActivity } from "./GithubActivity";

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Eyebrow & Title */}
        <div className="mb-12 scroll-fade">
          <div className="flex items-center gap-2 mb-2 font-plex-mono text-[12px] uppercase tracking-[0.1em] text-[var(--accent)] font-semibold">
            <span>ABOUT</span>
            <span className="text-[var(--text-tertiary)]">{"//"}</span>
            <span className="text-[var(--text-tertiary)]">BACKGROUND &amp; DOSSIER</span>
          </div>
          <h2 className="font-serif-display text-[32px] sm:text-[40px] font-bold text-[var(--text-primary)] tracking-[-0.03em] leading-tight">
            {about.heading}
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[var(--text-secondary)] mt-2 max-w-2xl">
            Background narrative, engineering mindset, and live developer telemetry.
          </p>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Bio Narrative & Quick Facts */}
        <div className="lg:col-span-7 flex flex-col gap-8 scroll-fade">
          {/* Bio copy */}
          <div className="space-y-4 text-[15px] sm:text-[16px] text-[var(--text-secondary)] leading-[1.75]">
            {about.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Quick Facts Card */}
          <div className="card-ring p-6 sm:p-7 scroll-pop hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-plex-mono text-[12px] uppercase tracking-[0.1em] text-[var(--text-tertiary)] font-semibold mb-4 pb-2 border-b border-[var(--border-default)]">
              QUICK FACTS SPECIFICATION
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-[14px]">
              {about.quickFacts.map((fact) => (
                <div key={fact.label} className="flex flex-col">
                  <span className="font-plex-mono text-[11px] text-[var(--text-tertiary)] uppercase tracking-[0.05em]">
                    {fact.label}
                  </span>
                  <span className="text-[var(--text-primary)] font-medium mt-0.5">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Signature Dark Code Editor Window (Section 8: "Now") */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 scroll-pop">
          <div className="rounded-[8px] bg-[var(--surface-code)] text-[var(--code-text)] shadow-[var(--shadow-code-ring)] border border-[var(--code-chrome)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            {/* Chrome Bar */}
            <div className="h-9 px-4 bg-[#111111] border-b border-[var(--code-chrome)] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#333333]" />
                <span className="w-3 h-3 rounded-full bg-[#333333]" />
                <span className="w-3 h-3 rounded-full bg-[#333333]" />
              </div>
              <span className="font-plex-mono text-[11px] text-[var(--code-muted)] uppercase tracking-wider">
                now.config.ts
              </span>
              <span className="w-3" />
            </div>

            {/* Code Body */}
            <div className="p-5 font-plex-mono text-[12px] sm:text-[13px] leading-[1.8] overflow-x-auto modal-scrollbar-x">
              <div>
                <span className="text-[var(--code-muted)]">01  </span>
                <span className="text-[var(--code-class)]">export const</span>{" "}
                <span className="text-[var(--code-text)]">currentStatus =</span>{" "}
                <span className="text-[var(--code-text)]">&#123;</span>
              </div>
              <div>
                <span className="text-[var(--code-muted)]">02    </span>
                <span className="text-[var(--code-text)]">status:</span>{" "}
                <span className="text-[var(--code-string)]">&quot;Active&quot;</span>,
              </div>
              <div>
                <span className="text-[var(--code-muted)]">03    </span>
                <span className="text-[var(--code-text)]">focus:</span>{" "}
                <span className="text-[var(--code-string)]">&quot;{about.now.focus}&quot;</span>,
              </div>
              <div>
                <span className="text-[var(--code-muted)]">04    </span>
                <span className="text-[var(--code-text)]">building:</span>{" "}
                <span className="text-[var(--code-string)]">&quot;{about.now.currentlyBuilding}&quot;</span>,
              </div>
              <div>
                <span className="text-[var(--code-muted)]">05    </span>
                <span className="text-[var(--code-text)]">learning:</span> [
              </div>
              {about.now.currentlyLearning.map((item, idx) => (
                <div key={item}>
                  <span className="text-[var(--code-muted)]">0{6 + idx}      </span>
                  <span className="text-[var(--code-string)]">&quot;{item}&quot;</span>
                  {idx < about.now.currentlyLearning.length - 1 ? "," : ""}
                </div>
              ))}
              <div>
                <span className="text-[var(--code-muted)]">08    </span>
                <span className="text-[var(--code-text)]">],</span>
              </div>
              <div>
                <span className="text-[var(--code-muted)]">09    </span>
                <span className="text-[var(--code-text)]">availability:</span>{" "}
                <span className="text-[var(--code-string)]">&quot;Open to Internships / Freelance&quot;</span>,
              </div>
              <div>
                <span className="text-[var(--code-muted)]">10    </span>
                <span className="text-[var(--code-text)]">timestamp:</span>{" "}
                <span className="text-[var(--code-value)]">Date.now()</span>
              </div>
              <div>
                <span className="text-[var(--code-muted)]">11  </span>
                <span className="text-[var(--code-text)]">&#125;;</span>
              </div>
            </div>

            {/* Editor Footer Status */}
            <div className="px-4 py-2 bg-[#090909] border-t border-[var(--code-chrome)] flex items-center justify-between font-plex-mono text-[10px] text-[var(--code-muted)]">
              <span>UTF-8 // TypeScript</span>
              <span className="text-[var(--code-class)]">● Live Specimen</span>
            </div>
          </div>
        </div>
      </div>

      {/* Realtime GitHub Telemetry Stream & Contribution Matrix */}
      <div className="mt-12 sm:mt-14 scroll-fade">
        <GithubActivity />
      </div>
      </div>
    </section>
  );
}

