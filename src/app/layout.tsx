import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./style/globals.css";
import Loader from "./components/layout/Loader";
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
      // The load-state script below adds is-loading before React hydrates, so
      // the class list legitimately differs from the server render. Scoped to
      // this element's own attributes; it does not mask anything in the tree.
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#08090a" />
        {/*
          Runs before first paint so the curtain is never a flash of unstyled
          content. It also owns the guaranteed exit: whatever happens to React,
          the class is cleared after 2.2s and the page is usable. Visitors who
          asked for reduced motion never get the class at all.
        */}
        <script
          id="load-state"
          dangerouslySetInnerHTML={{
            __html: `(function(){var d=document.documentElement;try{
if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
d.classList.add('is-loading');
setTimeout(function(){d.classList.remove('is-loading');d.classList.add('is-loaded');},2200);
}catch(e){d.classList.remove('is-loading');}})();`,
          }}
        />
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
        {/*
          Reveal and .stagger both start hidden and wait on an IntersectionObserver.
          With no JavaScript that observer never fires, which would leave every
          section below the hero invisible. A static page beats a blank one.
        */}
        <noscript>
          <style>{`[data-shown="false"],.stagger>*{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="font-sans t-body leading-[1.65]">
        <Loader />
        <Texture />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
