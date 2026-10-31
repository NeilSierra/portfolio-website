import { AppIcon } from "./AppIcon";

export function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return <AppIcon name="github" className={className} />;
}

export function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return <AppIcon name="linkedin" className={className} />;
}

export function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return <AppIcon name="facebook" className={className} />;
}

export function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return <AppIcon name="instagram" className={className} />;
}
