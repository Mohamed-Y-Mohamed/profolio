import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./style/globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Texture from "./components/layout/Texture";
import ScrollProgress from "./components/layout/ScrollProgress";
import { site } from "./data/site";

/* Self-hosted by Next at build time — no external request, no layout shift. */
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} | ${site.role}`,
  description:
    "Graduate Software Engineer in London. First Class BEng, University of Westminster. Full-stack work in TypeScript, React, Next.js, Node and Java — with shipped, deployed products.",
  openGraph: {
    title: `${site.name} | ${site.role}`,
    description:
      "Graduate Software Engineer in London. Full-stack TypeScript, React, Next.js, Node and Java.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${playfair.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        <meta name="theme-color" content="#08090a" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KQ3TN32SLJ"
        />
        <script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-KQ3TN32SLJ');`,
          }}
        />
      </head>
      <body className="font-sans t-body leading-[1.65]">
        <Texture />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
