import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { AppIcon } from "./AppIcon";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 sm:py-24 border-t border-[var(--border-default)]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 scroll-fade">
          <span className="font-plex-mono text-[12px] uppercase tracking-[0.1em] text-[var(--accent)] font-semibold block mb-2">
            ACADEMICS &amp; HONORS
          </span>
          <h2 className="font-serif-display text-[32px] sm:text-[40px] font-bold text-[var(--text-primary)] tracking-[-0.03em] leading-tight">
            Education &amp; Achievements
          </h2>
          <p className="text-[16px] text-[var(--text-secondary)] mt-2 max-w-2xl">
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

          {/* Achievements & Academic Honors */}
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

            <div className="space-y-3.5">
              {education.achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-[4px] bg-[var(--surface-base)] border border-[var(--border-default)] hover:border-[var(--border-strong)] transition-all flex items-start gap-3.5 scroll-scale"
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

            {/* Certifications Block: automatically displayed if populated */}
            {education.certifications.length > 0 && (
              <div className="mt-6 pt-6 border-t border-[var(--border-default)]">
                <span className="font-plex-mono text-[11px] uppercase tracking-wider text-[var(--text-tertiary)] block mb-3">
                  CERTIFICATIONS
                </span>
                <div className="space-y-3">
                  {education.certifications.map((cert) => (
                    <div key={cert.id} className="text-[13px]">
                      <span className="font-medium text-[var(--text-primary)]">{cert.title}</span>
                      <span className="text-[var(--text-tertiary)] block text-[12px]">
                        {cert.issuer} • {cert.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
