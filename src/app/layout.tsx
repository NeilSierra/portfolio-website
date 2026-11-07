import type { Metadata } from "next";
import { Playfair_Display, Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";

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
  metadataBase: new URL(portfolioData.meta.url),
  title: {
    default: portfolioData.meta.title,
    template: "%s | Neil Sierra",
  },
  description: portfolioData.meta.description,
  keywords: portfolioData.meta.keywords,
  authors: [{ name: portfolioData.meta.canonicalName, url: portfolioData.meta.url }],
  creator: portfolioData.meta.canonicalName,
  publisher: portfolioData.meta.canonicalName,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: "/assets/website-logo.svg",
  },
  openGraph: {
    title: portfolioData.meta.title,
    description: portfolioData.meta.description,
    url: portfolioData.meta.url,
    siteName: portfolioData.meta.siteName,
    images: [
      {
        url: portfolioData.meta.ogImage,
        width: 1200,
        height: 630,
        alt: portfolioData.meta.title,
        type: "image/svg+xml",
      },
    ],
    locale: portfolioData.meta.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioData.meta.title,
    description: portfolioData.meta.description,
    creator: portfolioData.meta.twitterHandle,
    site: portfolioData.meta.twitterHandle,
    images: [portfolioData.meta.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
