export interface ProjectSpecification {
  label: string;
  value: string;
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  category?: string;
  flagship?: boolean;
  summary: string;
  role?: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  videoMp4?: string;
  videoWebm?: string;
  previewImage?: string;
  specifications?: ProjectSpecification[];
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
  category?: string;
  imageUrl?: string;
  credentialUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "landbank-iaccess-redesign",
    title: "LandBank iAccess Redesign",
    category: "Full-Stack Web Application // UI/UX Redesign",
    summary:
      "A modern, accessible, and responsive redesign of the Land Bank of the Philippines (LANDBANK) iAccess digital banking web portal.",
    role: "Lead Developer — Modern banking portal architecture, responsive design system, and component engineering.",
    videoMp4: "/assets/projects/iaccess-redesign.mp4",
    videoWebm: "/assets/projects/iaccess-redesign.webm",
    previewImage: "/assets/projects/landbank-iaccess.svg",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Lucide React",
      "Vercel",
    ],
    githubUrl: "https://github.com/NeilSierra/landbank-iaccess-redesign",
  },
  {
    id: "mobile-task-companion",
    title: "Mobile Task & Workflow Companion",
    category: "Mobile Application // Android",
    summary:
      "Native Android utility with offline-first synchronization, local SQLite storage routines, and reactive task management.",
    role: "Mobile Developer — UI layouts and local SQLite storage routines in Android Studio.",
    previewImage: "/assets/projects/project-2.svg",
    techStack: ["Android Studio", "Kotlin", "SQLite", "Material Design"],
    githubUrl: "https://github.com/NeilSierra",
  },
  {
    id: "database-management-portal",
    title: "Database Management Portal",
    category: "Administrative Database System",
    summary:
      "Robust administrative portal featuring 3NF normalized relational schemas, SQL triggers, reporting, and prepared PHP handlers.",
    role: "Backend & Database Developer — Normalized 3NF schemas, SQL triggers, and prepared PHP handlers.",
    previewImage: "/assets/projects/project-3.svg",
    techStack: ["PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/NeilSierra",
  },
  {
    id: "cloud-api-analytics",
    title: "Cloud API & Analytics Service",
    category: "Backend REST API & Telemetry",
    summary:
      "High-throughput REST service delivering aggregated telemetry, JWT token rotation, rate-limiting middleware, and Docker containerization.",
    role: "Backend Developer — API routing, rate limiting middleware, and Docker containerization.",
    previewImage: "/assets/projects/project-4.svg",
    techStack: ["Express.js", "Node.js", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/NeilSierra",
  },
];

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-1",
    title: "IT Specialist — Databases",
    issuer: "Certiport",
    category: "Databases",
    year: "2025",
    imageUrl: "/assets/certifications/it-specialist-databases.png",
  },
  {
    id: "cert-2",
    title: "IT Specialist — HTML and CSS",
    issuer: "Certiport",
    category: "Frontend",
    year: "2025",
    imageUrl: "/assets/certifications/it-specialist-html-and-css.png",
  },
  {
    id: "cert-3",
    title: "IT Specialist — Python",
    issuer: "Certiport",
    category: "Programming",
    year: "2025",
    imageUrl: "/assets/certifications/it-specialist-python.png",
  },
  {
    id: "cert-4",
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    category: "Networking",
    year: "2025",
    imageUrl: "/assets/certifications/ccna-1-introduction-to-networking-certificate.png",
  },
  {
    id: "cert-5",
    title: "Python Essentials 1",
    issuer: "Cisco & Python Institute",
    category: "Programming",
    year: "2025",
    imageUrl: "/assets/certifications/python-essentials-1-certificate.png",
  },
  {
    id: "cert-6",
    title: "Python Essentials 2",
    issuer: "Cisco & Python Institute",
    category: "Programming",
    year: "2025",
    imageUrl: "/assets/certifications/python-essentials-2-certificate.png",
  },
  {
    id: "cert-7",
    title: "SAP Business One (SAP B1)",
    issuer: "SAP",
    category: "Enterprise ERP",
    year: "2025",
    imageUrl: "/assets/certifications/sap-b1-certificate-of-completion.png",
  },
  {
    id: "cert-8",
    title: "BPI DataWaveSprint AI Development — Module 1",
    issuer: "Bank of the Philippine Islands (BPI)",
    category: "AI & Innovation",
    year: "2025",
    imageUrl: "/assets/certifications/bpi-datawavesprint-ai-dev-module-1-2025-08.png",
  },
  {
    id: "cert-9",
    title: "BPI DataWaveSprint AI Development — Module 2",
    issuer: "Bank of the Philippine Islands (BPI)",
    category: "AI & Innovation",
    year: "2025",
    imageUrl: "/assets/certifications/bpi-datawavesprint-ai-dev-module-2-2025-08.png",
  },
  {
    id: "cert-10",
    title: "BPI DataWaveSprint AI Development — Module 3",
    issuer: "Bank of the Philippine Islands (BPI)",
    category: "AI & Innovation",
    year: "2025",
    imageUrl: "/assets/certifications/bpi-datawavesprint-ai-dev-module-3-2025-08.png",
  },
  {
    id: "cert-11",
    title: "CodeChum NPC 2025 — Group Stage 3 (5th Place)",
    issuer: "CodeChum",
    category: "Competitive Programming",
    year: "2025",
    imageUrl: "/assets/certifications/codechum-national-programming-challenge-2025-group-stage-3-5th-place.png",
  },
  {
    id: "cert-12",
    title: "CodeChum NPC 2025 — Group Stage 3 (Participation)",
    issuer: "CodeChum",
    category: "Competitive Programming",
    year: "2025",
    imageUrl: "/assets/certifications/codechum-national-programming-challenge-2025-group-stage-3-participation.png",
  },
  {
    id: "cert-13",
    title: "CyberJump Seminar — Cybersecurity & Emerging Tech",
    issuer: "CyberJump",
    category: "Cybersecurity",
    year: "2025",
    imageUrl: "/assets/certifications/cyberjump-seminar.png",
  },
];

export const portfolioData = {
  meta: {
    title: "Neil Sierra | Full Stack Developer & IT Student",
    description:
      "Portfolio of Neil Sierra, a 3rd-year IT student and full stack developer in Cavite, Philippines. Building responsive web and mobile applications from database to interface. Open to internships and freelance opportunities.",
    canonicalName: "Neil Sierra",
    url: "https://neilsierra.dev",
    ogImage: "/assets/og-image.svg",
    siteName: "Neil Sierra Portfolio",
    locale: "en_US",
    twitterHandle: "@br1xk_",
    keywords: [
      "Neil Sierra",
      "Full Stack Developer",
      "IT Student",
      "Web Developer",
      "Mobile Developer",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Android Studio",
      "Kotlin",
      "Cavite Philippines",
      "Software Engineer Portfolio",
      "LPU-Cavite",
    ],
  },
  hero: {
    name: "Neil Sierra",
    roleLine1: "Full Stack Developer",
    roleLine2: "3rd-Year IT Student",
    valueStatement:
      "I build full stack web and mobile apps from database to interface, and I'm looking for an internship or freelance project where I can ship real features.",
    location: "Cavite, Philippines",
    availability: "Open to Internship / Freelance",
    portraitUrl: "/assets/profile/profile-cutout-crossed-arms.png",
    cvPdfUrl: "/assets/Neil-Sierra-CV.pdf",
    stats: [
      {
        value: String(projectsData.length).padStart(2, "0"),
        label: "PROJECTS",
        icon: "cube",
      },
      {
        value: String(certificationsData.length).padStart(2, "0"),
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
  projects: projectsData,
  experience: {
    emptyStateCopy:
      "I'm currently looking for my first internship or freelance project. If you have something in mind, I'd love to hear about it.",
    items: [] as ExperienceItem[],
    hackathons: [
      {
        id: "comp-1",
        event: "15th IT Skills Olympics",
        date: "November 2026",
        result: "Finalist",
        images: ["/assets/competitions/it-skills-olympics-2026.png"],
      },
      {
        id: "comp-2",
        event: "Hack the Campus 2026",
        date: "October 2026",
        result: "Winner",
        images: ["/assets/competitions/hack-the-campus-2026.jpg"],
      },
      {
        id: "comp-3",
        event: "Code Chum National Programming Challenge 2025",
        date: "December 2025",
        result: "Finalist - Team MVP",
        images: ["/assets/competitions/code-chum-npc-2025.jpg"],
      },
      {
        id: "comp-4",
        event: "BPI Data Wave 2025 Hackathon",
        date: "September 2025",
        result: "Qualifiers",
        images: ["/assets/competitions/bpi-datawave-2025.jpg"],
      },
      {
        id: "comp-5",
        event: "iSite National IT Skills Competition (Campus Level)",
        date: "April 2025",
        result: "Winner",
        images: ["/assets/competitions/isite-skills-competition-2025.jpg"],
      },
      {
        id: "comp-6",
        event: "iSite National IT Skills Competition (National Level)",
        date: "April 2025",
        result: "13th Placer",
        images: ["/assets/competitions/isite-skills-competition-2025.jpg"],
      },
      {
        id: "comp-7",
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
    certifications: certificationsData,
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
