import { portfolioData } from "@/data/portfolio";
import { AppIcon } from "./AppIcon";
import { GithubIcon, LinkedinIcon, FacebookIcon, InstagramIcon } from "./SocialIcons";
import { WebsiteLogo } from "./WebsiteLogo";

export default function Footer() {
  const { footer, contact } = portfolioData;

  return (
    <footer className="w-full bg-[#050505] border-t border-[var(--code-chrome)] py-8 sm:py-10 text-[#F9F9F9]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 text-center sm:text-left">
        {/* Left: Logo + Copyright & Stack */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-3.5">
          <WebsiteLogo className="w-7 h-7 sm:w-8 sm:h-8 text-[#F9F9F9] shrink-0" />
          <div className="flex flex-col items-center sm:items-start gap-0.5">
            <p className="text-[13px] sm:text-[14px] text-[#F9F9F9] font-medium">
              {footer.copyright}
            </p>
            <p className="font-plex-mono text-[10.5px] sm:text-[11px] text-[#9A9A9A] uppercase tracking-wider">
              {footer.builtWith}
            </p>
          </div>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-[4px] border border-[#2E2E2E] bg-[#161616] text-[#F9F9F9] hover:text-[var(--accent)] hover:bg-[#222222] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-[4px] border border-[#2E2E2E] bg-[#161616] text-[#F9F9F9] hover:text-[var(--accent)] hover:bg-[#222222] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={contact.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-[4px] border border-[#2E2E2E] bg-[#161616] text-[#F9F9F9] hover:text-[var(--accent)] hover:bg-[#222222] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          >
            <FacebookIcon className="w-4 h-4" />
          </a>
          <a
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-[4px] border border-[#2E2E2E] bg-[#161616] text-[#F9F9F9] hover:text-[var(--accent)] hover:bg-[#222222] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${contact.email}`}
            aria-label="Send Email"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-[4px] border border-[#2E2E2E] bg-[#161616] text-[#F9F9F9] hover:text-[var(--accent)] hover:bg-[#222222] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          >
            <AppIcon name="mail" className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back to Top Anchor */}
        <div className="pt-2 sm:pt-0">
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 font-plex-mono text-[11.5px] sm:text-[12px] text-[#A8CDE4] hover:text-[#F9F9F9] transition-colors uppercase tracking-wider font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--accent)] rounded-[2px] p-1"
          >
            <span>Back to top</span>
            <AppIcon name="arrow-up" className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
