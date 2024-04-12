import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import {
  COUNTRY_NAME,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_URL,
  TWITTER_URL,
} from "@/constants";
import { PropsWithChildren } from "react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "sonner";
import { HeroHighlight } from "@/components/hero-highlight";
import PageAnimatePresence from "@/components/hoc/PageAnimatePresence";
import { Providers } from "./providers";
import ScrollToTop from "@/components/scroll-to-top";

const ogImage = "/og.png";
const twitterImage = "/twitter-og.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "black",
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    url: SITE_URL,
    countryName: COUNTRY_NAME,
    images: {
      url: ogImage,
      width: 1260,
      height: 800,
      alt: "Open Graph image for " + SITE_NAME,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: TWITTER_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: {
      url: twitterImage,
      width: 1260,
      height: 800,
      alt: "Twitter image for " + SITE_NAME,
    },
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${GeistSans.className} antialiased bg-black text-white`}
      >
        <HeroHighlight className="w-3xl">
          <Providers>
            <main className="max-w-3xl w-full min-h-screen mx-auto flex flex-col justify-between">
              <NavBar />
              <PageAnimatePresence>
                <div className="flex-grow">{children}</div>
              </PageAnimatePresence>
              <Footer />
              <ScrollToTop />
              <Toaster position="top-center" richColors />
            </main>
          </Providers>
        </HeroHighlight>
      </body>
    </html>
  );
}
