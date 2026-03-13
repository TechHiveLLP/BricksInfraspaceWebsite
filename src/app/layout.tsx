import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bricksinfraspace.com"),
  title: "Bricks Infraspace - Building Better Tomorrow",
  description:
    "A comprehensive construction consultancy and turnkey contracting firm with decades of experience delivering reliable, compliant, and end-to-end construction solutions.",
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  openGraph: {
    title: "Bricks Infraspace - Building Better Tomorrow",
    description:
      "A comprehensive construction consultancy and turnkey contracting firm with decades of experience delivering reliable, compliant, and end-to-end construction solutions.",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Bricks Infraspace Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bricks Infraspace - Building Better Tomorrow",
    description:
      "A comprehensive construction consultancy and turnkey contracting firm with decades of experience delivering reliable, compliant, and end-to-end construction solutions.",
    images: ["/logo.jpeg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bricks Infraspace",
  url: "https://bricksinfraspace.com",
  logo: "https://bricksinfraspace.com/logo.jpeg",
  description:
    "A comprehensive construction consultancy and turnkey contracting firm with decades of experience delivering reliable, compliant, and end-to-end construction solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
