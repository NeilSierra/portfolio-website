export interface Project {
  id: string;
  title: string;
  flagship?: boolean;
  summary: string;
  role: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  points: string[];
  techStack?: string[];
}

export interface HackathonItem {
  id: string;
  event: string;
  date: string;
  result: string;
  description?: string;
  images?: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  graduationYear: string;
  honors: string;
  coursework: string[];
}

export interface AchievementItem {
  title: string;
  institution: string;
  program?: string;
  logo?: string;
  badge?: string;
  note: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

export const portfolioData = {
  meta: {
    title: "Neil Sierra | Portfolio",
    description:
      "Portfolio of Neil Sierra, a 3rd-year IT student and full stack developer in Cavite, Philippines. Open to internships and freelance projects.",
    canonicalName: "Neil Sierra",
    ogImage: "/assets/og-image.svg",
  },
  hero: {
    name: "Neil Sierra",
    roleLine1: "Full Stack Developer",
    roleLine2: "3rd-Year IT Student",
    valueStatement:
      "I build full stack web and mobile apps from database to interface, and I'm looking for an internship or freelance project where I can ship real features.",
    location: "Cavite, Philippines",
    availability: "Open to Internship / Freelance",
    portraitUrl: "/assets/profile-cutout.png",
    cvPdfUrl: "/assets/Neil-Sierra-CV.pdf",
    stats: [
      {
        value: "04",
        label: "PROJECTS",
        icon: "cube",
      },
      {
        value: "14",
        label: "CERTIFICATIONS",
        icon: "certificate",
      },
    ],
    tickerItems: [
      "BSIT Student",
      "Neil Sierra",
      "Full-Stack Developer",
      "Cavite, Philippines",
      "Open to Internship / Freelance",
      "LPU-Cavite '28",
      "Web & Mobile Technologies",
    ],
  },
  about: {
    heading: "About Me",
    bio: [
      "I'm Neil Sierra, a third-year Information Technology student at the Lyceum of the Philippines - Cavite, majoring in Web and Mobile Technologies. I'm expected to graduate in 2028.",
      "My interest in development started with a hobby: tinkering with computers and building websites. That curiosity grew into building complete applications, from the database and server logic to the interface people actually use.",
      "Right now I'm sharpening my full stack skills and building projects that put them to work. Outside of code, I play table tennis and video games.",
    ],
    quickFacts: [
      { label: "Based in", value: "Cavite, Philippines" },
      { label: "Studying", value: "BS Information Technology - Web & Mobile Technologies" },
      { label: "School", value: "Lyceum of the Philippines - Cavite" },
      { label: "Expected graduation", value: "2028" },
      { label: "Languages", value: "English, Filipino" },
      { label: "Interests", value: "Table Tennis, Video Games" },
      { label: "Currently", value: "Improving my full stack skills" },
    ],
    now: {
      currentlyBuilding: "Full Stack Portfolio & Client Systems",
      currentlyLearning: ["Docker", "Kotlin"],
      focus: "Improving my full stack skills",
    },
  },
  skills: [
    {
      category: "Frontend",
      skills: [
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "TailwindCSS" },
        { name: "Next.js" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "PHP" },
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "Python" },
        { name: "C#" },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL" },
        { name: "PostgreSQL" },
        { name: "SQLite" },
        { name: "Supabase" },
      ],
    },
    {
      category: "Mobile",
      skills: [
        { name: "Android Studio" },
        { name: "Kotlin" },
      ],
    },
    {
      category: "Tools and DevOps",
      skills: [
        { name: "GitHub" },
        { name: "VSCode" },
        { name: "Figma" },
        { name: "Visual Studio" },
        { name: "Docker" },
        { name: "Vercel" },
      ],
    },
  ] as SkillCategory[],
  projects: [
    {
      id: "project-1",
      title: "Full-Stack Enterprise Hub",
      flagship: true,
      summary: "Modern web architecture with dynamic API routes, role-based access control, and responsive interfaces.",
      role: "Solo Developer — UI/UX in Figma, database schema, REST API endpoints, and React frontend.",
      techStack: ["Next.js", "TailwindCSS", "Node.js", "PostgreSQL", "Supabase"],
      liveUrl: "https://github.com/NeilSierra",
      githubUrl: "https://github.com/NeilSierra",
    },
    {
      id: "project-2",
      title: "Mobile Task & Workflow Companion",
      flagship: false,
      summary: "Native Android utility with offline-first synchronization and task management.",
      role: "Mobile Developer — UI layouts and local SQLite storage routines in Android Studio.",
      techStack: ["Android Studio", "Kotlin", "SQLite", "Material Design"],
      liveUrl: "https://github.com/NeilSierra",
      githubUrl: "https://github.com/NeilSierra",
    },
    {
      id: "project-3",
      title: "Database Management Portal",
      flagship: false,
      summary: "Robust PHP & MySQL administrative portal with relational reporting and security middleware.",
      role: "Backend & Database Developer — Normalized 3NF schemas, SQL triggers, and prepared PHP handlers.",
      techStack: ["PHP", "MySQL", "JavaScript", "CSS"],
      liveUrl: "https://github.com/NeilSierra",
      githubUrl: "https://github.com/NeilSierra",
    },
    {
      id: "project-4",
      title: "Cloud API & Analytics Service",
      flagship: false,
      summary: "Lightweight Express.js REST service delivering aggregated telemetry and data endpoints.",
      role: "Backend Developer — API routing, rate limiting middleware, and Docker containerization.",
      techStack: ["Express.js", "Node.js", "PostgreSQL", "Docker"],
      liveUrl: "https://github.com/NeilSierra",
      githubUrl: "https://github.com/NeilSierra",
    },
  ] as Project[],
  experience: {
    emptyStateCopy:
      "I'm currently looking for my first internship or freelance project. If you have something in mind, I'd love to hear about it.",
    items: [] as ExperienceItem[],
    hackathons: [
      {
        id: "comp-1",
        event: "Hack the Campus 2026",
        date: "October 2026",
        result: "Winner",
        images: ["/assets/competitions/hack-the-campus-2026.jpg"],
      },
      {
        id: "comp-2",
        event: "Code Chum National Programming Challenge 2025",
        date: "December 2025",
        result: "Finalist - Team MVP",
        images: ["/assets/competitions/code-chum-npc-2025.jpg"],
      },
      {
        id: "comp-3",
        event: "BPI Data Wave 2025 Hackathon",
        date: "September 2025",
        result: "Qualifiers",
        images: ["/assets/competitions/bpi-datawave-2025.jpg"],
      },
      {
        id: "comp-4",
        event: "iSite National IT Skills Competition (Campus Level)",
        date: "April 2025",
        result: "Winner",
        images: ["/assets/competitions/isite-skills-competition-2025.jpg"],
      },
      {
        id: "comp-5",
        event: "iSite National IT Skills Competition (National Level)",
        date: "April 2025",
        result: "13th Placer",
        images: ["/assets/competitions/isite-skills-competition-2025.jpg"],
      },
      {
        id: "comp-6",
        event: "DCS and SATA Programming Competition",
        date: "March 2025",
        result: "3rd Placer",
        images: ["/assets/competitions/dcs-sata-programming-2025.jpg"],
      },
    ] as HackathonItem[],
  },
  education: {
    degree: "BS Information Technology - Web and Mobile Technologies",
    school: "Lyceum of the Philippines - Cavite",
    graduationYear: "2028",
    honors: "Dean's Lister",
    coursework: [
      "Web Systems & Technologies",
      "Database Management Systems",
      "Mobile Application Development",
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Software Engineering",
    ],
    achievements: [
      {
        title: "3rd Year College",
        institution: "Lyceum of the Philippines University - Cavite (LPU-C)",
        program: "BSIT - Web and Mobile Technology",
        logo: "/assets/education/lpu-logo.png",
        badge: "Ongoing",
        note: "Currently ongoing 3rd-year studies in Web & Mobile Technologies.",
      },
      {
        title: "2nd Year College — Dean’s Lister",
        institution: "Lyceum of the Philippines University - Cavite (LPU-C)",
        program: "BSIT - Web and Mobile Technology",
        logo: "/assets/education/lpu-logo.png",
        badge: "GPA 1.31",
        note: "Achieved a GPA of 1.31 and earned a spot on the Dean’s List.",
      },
      {
        title: "1st Year College — Dean’s Lister",
        institution: "Lyceum of the Philippines University - Cavite (LPU-C)",
        program: "BSIT - Web and Mobile Technology",
        logo: "/assets/education/lpu-logo.png",
        badge: "GPA 1.24",
        note: "Achieved a GPA of 1.24 and earned a spot on the Dean’s List.",
      },
      {
        title: "Senior High School — 3rd Honorable Mention",
        institution: "New Generation International School (NGIS)",
        program: "STEM Strand",
        logo: "/assets/education/ngis-logo.png",
        badge: "3rd Hon. Mention",
        note: "Consistent academic achiever, graduated as the 3rd Honorable Mention of the school.",
      },
    ] as AchievementItem[],
    certifications: [] as CertificationItem[],
  },
  contact: {
    heading: "Let's Work Together",
    intro:
      "I'm open to internships and freelance projects. If you have an opportunity or a project in mind, send me a message and I'll get back to you.",
    email: "neilsierra.dev@gmail.com",
    github: "https://github.com/NeilSierra",
    linkedin: "https://ph.linkedin.com/in/neil-alfred-sierra-508470418",
    facebook: "https://www.facebook.com/neilalfred.sierra/",
    instagram: "https://www.instagram.com/br1xk_/",
    cvPdfUrl: "/assets/Neil-Sierra-CV.pdf",
  },
  footer: {
    copyright: "© 2026 Neil Sierra. All rights reserved.",
    builtWith: "Built with Next.js, Tailwind CSS & Vercel",
  },
};
