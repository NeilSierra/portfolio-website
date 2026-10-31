"use client";

import Image from "next/image";

// Map project skill names to their public/assets/skill-icons SVG filename
const SKILL_ICON_MAP: Record<string, { dark: string; light?: string }> = {
  html: { dark: "HTML.svg" },
  css: { dark: "CSS.svg" },
  javascript: { dark: "JavaScript.svg" },
  typescript: { dark: "TypeScript.svg" },
  tailwindcss: { dark: "TailwindCSS-Dark.svg", light: "TailwindCSS-Light.svg" },
  "next.js": { dark: "NextJS-Dark.svg", light: "NextJS-Light.svg" },
  php: { dark: "PHP-Dark.svg", light: "PHP-Light.svg" },
  "node.js": { dark: "NodeJS-Dark.svg", light: "NodeJS-Light.svg" },
  "express.js": { dark: "ExpressJS-Dark.svg", light: "ExpressJS-Light.svg" },
  python: { dark: "Python-Dark.svg", light: "Python-Light.svg" },
  "c#": { dark: "CS.svg" },
  mysql: { dark: "MySQL-Dark.svg", light: "MySQL-Light.svg" },
  postgresql: { dark: "PostgreSQL-Dark.svg", light: "PostgreSQL-Light.svg" },
  sqlite: { dark: "SQLite.svg" },
  supabase: { dark: "Supabase-Dark.svg", light: "Supabase-Light.svg" },
  "android studio": { dark: "AndroidStudio-Dark.svg", light: "AndroidStudio-Light.svg" },
  kotlin: { dark: "Kotlin-Dark.svg", light: "Kotlin-Light.svg" },
  github: { dark: "Github-Dark.svg", light: "Github-Light.svg" },
  vscode: { dark: "VSCode-Dark.svg", light: "VSCode-Light.svg" },
  figma: { dark: "Figma-Dark.svg", light: "Figma-Light.svg" },
  "visual studio": { dark: "VisualStudio-Dark.svg", light: "VisualStudio-Light.svg" },
  docker: { dark: "Docker.svg" },
  vercel: { dark: "Vercel-Dark.svg", light: "Vercel-Light.svg" },
  react: { dark: "React-Dark.svg", light: "React-Light.svg" },
  "react 19": { dark: "React-Dark.svg", light: "React-Light.svg" },
  "next.js 16": { dark: "NextJS-Dark.svg", light: "NextJS-Light.svg" },
  "typescript 5": { dark: "TypeScript.svg" },
  "tailwind css v4": { dark: "TailwindCSS-Dark.svg", light: "TailwindCSS-Light.svg" },
  "tailwind css": { dark: "TailwindCSS-Dark.svg", light: "TailwindCSS-Light.svg" },
  eslint: { dark: "ESLint.svg" },
  "eslint 9": { dark: "ESLint.svg" },
  lucide: { dark: "Lucide.svg" },
  "lucide react": { dark: "Lucide.svg" },
};

export function TechIcon({ name, className = "w-6 h-6" }: { name: string; className?: string }) {
  const key = name.toLowerCase().trim();
  const mapping = SKILL_ICON_MAP[key];

  if (!mapping) {
    return (
      <span className={`inline-block font-plex-mono text-xs font-bold ${className}`}>
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  // If there's only a single file (like Docker, HTML, JavaScript, CS, SQLite)
  if (!mapping.light) {
    return (
      <div className={`relative ${className} shrink-0 flex items-center justify-center`}>
        <Image
          src={`/assets/skill-icons/${mapping.dark}`}
          alt={name}
          width={32}
          height={32}
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  // If theme variants exist, switch between Light and Dark seamlessly
  return (
    <div className={`relative ${className} shrink-0 flex items-center justify-center`}>
      {/* Light Mode Icon */}
      <Image
        src={`/assets/skill-icons/${mapping.light}`}
        alt={name}
        width={32}
        height={32}
        className="w-full h-full object-contain dark:hidden"
      />
      {/* Dark Mode Icon */}
      <Image
        src={`/assets/skill-icons/${mapping.dark}`}
        alt={name}
        width={32}
        height={32}
        className="w-full h-full object-contain hidden dark:block"
      />
    </div>
  );
}
