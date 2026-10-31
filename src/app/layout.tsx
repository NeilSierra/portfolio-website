import type { Metadata } from "next";
import { Playfair_Display, Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://neilsierra.dev"),
  title: "Neil Sierra | Full Stack Developer",
  description:
    "Portfolio of Neil Sierra, a 3rd-year IT student and full stack developer in Cavite, Philippines. Open to internships and freelance projects.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Neil Sierra | Full Stack Developer",
    description:
      "Portfolio of Neil Sierra, a 3rd-year IT student and full stack developer in Cavite, Philippines. Open to internships and freelance projects.",
    url: "https://neilsierra.dev",
    siteName: "Neil Sierra Portfolio",
    images: [
      {
        url: "/assets/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Neil Sierra - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('theme');
                  if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} ${firaCode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
