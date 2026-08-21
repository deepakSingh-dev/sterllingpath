import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SteerlingPath — Hire Smarter. Get Hired Faster.",
    template: "%s — SteerlingPath",
  },
  description:
    "SteerlingPath connects top tech talent with global opportunities through expert recruitment, training, and career support.",
  openGraph: {
    type: "website",
    siteName: "SteerlingPath",
    title: "SteerlingPath — Hire Smarter. Get Hired Faster.",
    description:
      "Connecting top tech talent with global opportunities through expert recruitment, training, and career support.",
    images: ["/images/steerlingpath-logo.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SteerlingPath — Hire Smarter. Get Hired Faster.",
    description:
      "Connecting top tech talent with global opportunities through expert recruitment, training, and career support.",
    images: ["/images/steerlingpath-logo.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- rule targets Pages Router; this is the documented App Router pattern for a root-layout-wide stylesheet */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-display text-text-main antialiased min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-grow page-enter">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
