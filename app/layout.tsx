import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mercel-vercel.vercel.app"),
  title: {
    default: "Mercel | Privacy-First AI Automation Solutions & Digital Products",
    template: "%s | Mercel",
  },
  description:
    "Mercel offers privacy-first AI automation solutions, digital products, and business solution reports. Local AI systems that keep your data on your servers. No cloud dependency.",
  keywords: [
    "privacy-first AI",
    "local AI automation",
    "business process automation",
    "AI for small business",
    "custom AI agent",
    "data sovereignty",
    "no cloud dependency",
    "digital products",
    "AI reports",
    "Mercel",
  ],
  authors: [{ name: "Mercel", url: "https://mercel-vercel.vercel.app" }],
  creator: "Mercel",
  verification: {
  google: "RcGyxeCyhSurPPUZP5ATFI7XsWfVjTPlGkAiv55vqiQ",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mercel-vercel.vercel.app",
    siteName: "Mercel",
    title: "Mercel | Privacy-First AI Automation Solutions",
    description:
      "Local AI systems, digital products, and business solutions that keep your data on your servers.",
    images: [
      {
        url: "/Mercel-Logo.png",
        width: 1200,
        height: 630,
        alt: "Mercel Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mercel | Privacy-First AI Automation Solutions",
    description:
      "Local AI systems, digital products, and business solutions that keep your data on your servers.",
    images: ["/Mercel-Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mercel",
  url: "https://mercel-vercel.vercel.app",
  description: "Privacy-first AI automation solutions for small businesses.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://mercel-vercel.vercel.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[#fbfbfb] text-gray-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-[#fbfbfb]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/Mercel-Logo.png"
            alt="Mercel Logo"
            width={120}
            height={40}
            className="h-10 w-auto mix-blend-multiply"
            priority
          />
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-blue-600">Products</Link>
          <Link href="/samples" className="text-sm font-medium text-gray-700 hover:text-blue-600">Free Samples</Link>
          <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-blue-600">Services</Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-blue-600">About</Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-blue-600">Contact</Link>
        </nav>
        <Link
          href="/samples"
          className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Get Free Sample
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#fbfbfb] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-4">
            <Image
              src="/Mercel-Logo.png"
              alt="Mercel Logo"
              width={90}
              height={40}
              className="h-10 w-auto mix-blend-multiply"
            />
            <p className="text-sm text-gray-500">© 2026 Mercel. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <a href="https://www.tiktok.com/@mercel.vercel" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
              <Image
                src="/tiktok.png"
                alt="TikTok"
                width={48}
                height={48}
                className="h-12 w-12 hover:opacity-80 transition-opacity"
              />
            </a>
            <a href="https://www.instagram.com/mercel.vercel/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={48}
                height={48}
                className="h-12 w-12 hover:opacity-80 transition-opacity"
              />
            </a>
            <a href="https://x.com/MercelVercel" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/X.png" 
                alt="X (Twitter)" 
                width={48} height={48} 
                className="h-12 w-12 hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
