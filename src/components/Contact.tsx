import { portfolioData } from "@/data/portfolio";
import { AppIcon } from "./AppIcon";
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon } from "./SocialIcons";

export default function Contact() {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="border-t border-[var(--border-default)]">
      <div className="grid-canvas w-full">
        <div className="max-w-[1344px] mx-auto flex justify-between relative">
          {/* Left hatched gutter */}
          <div className="hatch-gutter hidden lg:block shrink-0 self-stretch" aria-hidden="true" />

          {/* Centered 1280px Column */}
          <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
            <div className="max-w-3xl scroll-fade">
              <span className="font-plex-mono text-[12px] uppercase tracking-[0.1em] text-[var(--accent)] font-semibold block mb-2">
                CONTACT
              </span>
              <h2 className="font-serif-display text-[32px] sm:text-[40px] font-bold text-[var(--text-primary)] tracking-[-0.03em] leading-tight">
                {contact.heading}
              </h2>
              <p className="text-[16px] text-[var(--text-secondary)] mt-3 leading-relaxed">
                {contact.intro}
              </p>
            </div>

            {/* Directory Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-12 scroll-fade">
              {/* Email Card */}
              <a
                href={`mailto:${contact.email}`}
                className="card-ring p-6 border border-[var(--border-default)] flex flex-col justify-between group hover:border-[var(--accent)] transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-[4px] bg-[var(--fill-subtle)] text-[var(--text-primary)] flex items-center justify-center mb-4">
                    <AppIcon name="mail" className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <span className="font-plex-mono text-[11px] text-[var(--text-tertiary)] uppercase tracking-wider block">
                    EMAIL DIRECT
                  </span>
                  <span className="text-[15px] font-bold text-[var(--text-primary)] mt-1 block break-all">
                    {contact.email}
                  </span>
                </div>
                <div className="mt-6 flex items-center gap-1 font-plex-mono text-[12px] text-[var(--accent)] font-semibold">
                  <span>Send Message</span>
                  <AppIcon name="arrow-up-right" className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="card-ring p-6 border border-[var(--border-default)] flex flex-col justify-between group hover:border-[var(--accent)] transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-[4px] bg-[var(--fill-subtle)] text-[var(--text-primary)] flex items-center justify-center mb-4">
                    <GithubIcon className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <span className="font-plex-mono text-[11px] text-[var(--text-tertiary)] uppercase tracking-wider block">
                    CODE REPOSITORIES
                  </span>
                  <span className="text-[15px] font-bold text-[var(--text-primary)] mt-1 block">
                    github.com/NeilSierra
                  </span>
                </div>
                <div className="mt-6 flex items-center gap-1 font-plex-mono text-[12px] text-[var(--accent)] font-semibold">
                  <span>View Repos</span>
                  <AppIcon name="arrow-up-right" className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="card-ring p-6 border border-[var(--border-default)] flex flex-col justify-between group hover:border-[var(--accent)] transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-[4px] bg-[var(--fill-subtle)] text-[var(--text-primary)] flex items-center justify-center mb-4">
                    <LinkedinIcon className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <span className="font-plex-mono text-[11px] text-[var(--text-tertiary)] uppercase tracking-wider block">
                    PROFESSIONAL NETWORK
                  </span>
                  <span className="text-[15px] font-bold text-[var(--text-primary)] mt-1 block">
                    Neil Alfred Sierra
                  </span>
                </div>
                <div className="mt-6 flex items-center gap-1 font-plex-mono text-[12px] text-[var(--accent)] font-semibold">
                  <span>Connect</span>
                  <AppIcon name="arrow-up-right" className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>

              {/* Facebook Card */}
              <a
                href={contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="card-ring p-6 border border-[var(--border-default)] flex flex-col justify-between group hover:border-[var(--accent)] transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-[4px] bg-[var(--fill-subtle)] text-[var(--text-primary)] flex items-center justify-center mb-4">
                    <FacebookIcon className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <span className="font-plex-mono text-[11px] text-[var(--text-tertiary)] uppercase tracking-wider block">
                    FACEBOOK
                  </span>
                  <span className="text-[15px] font-bold text-[var(--text-primary)] mt-1 block">
                    Neil Alfred Sierra
                  </span>
                </div>
                <div className="mt-6 flex items-center gap-1 font-plex-mono text-[12px] text-[var(--accent)] font-semibold">
                  <span>Follow</span>
                  <AppIcon name="arrow-up-right" className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="card-ring p-6 border border-[var(--border-default)] flex flex-col justify-between group hover:border-[var(--accent)] transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-[4px] bg-[var(--fill-subtle)] text-[var(--text-primary)] flex items-center justify-center mb-4">
                    <InstagramIcon className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <span className="font-plex-mono text-[11px] text-[var(--text-tertiary)] uppercase tracking-wider block">
                    INSTAGRAM
                  </span>
                  <span className="text-[15px] font-bold text-[var(--text-primary)] mt-1 block">
                    @br1xk_
                  </span>
                </div>
                <div className="mt-6 flex items-center gap-1 font-plex-mono text-[12px] text-[var(--accent)] font-semibold">
                  <span>Connect</span>
                  <AppIcon name="arrow-up-right" className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </div>

            {/* Primary Action Button Bar */}
            <div className="mt-12 flex flex-wrap items-center gap-4 scroll-fade">
              <a
                href={`mailto:${contact.email}`}
                className="h-11 px-6 rounded-[4px] bg-[var(--text-primary)] text-[var(--surface-base)] font-medium text-[14px] inline-flex items-center gap-2 hover:bg-[var(--text-secondary)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              >
                <AppIcon name="mail" className="w-4 h-4" />
                <span>Email Neil Sierra</span>
              </a>

              <a
                href={contact.cvPdfUrl}
                download
                className="h-11 px-6 rounded-[4px] bg-[var(--surface-base)] border border-[var(--text-primary)] text-[var(--text-primary)] font-medium text-[14px] inline-flex items-center gap-2 hover:bg-[var(--surface-raised)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              >
                <AppIcon name="file-text" className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right hatched gutter */}
          <div className="hatch-gutter hidden lg:block shrink-0 self-stretch" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
