import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const basePath = process.env.NODE_ENV === "production" ? "/BricksInfraspaceWebsite" : "";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bricks Infraspace - Building Better Tomorrow",
  description: "A comprehensive construction consultancy and turnkey contracting firm with decades of experience delivering reliable, compliant, and end-to-end construction solutions.",
  icons: {
    icon: `${basePath}/logo.jpeg`,
    shortcut: `${basePath}/logo.jpeg`,
    apple: `${basePath}/logo.jpeg`,
  },
  openGraph: {
    title: "Bricks Infraspace - Building Better Tomorrow",
    description: "A comprehensive construction consultancy and turnkey contracting firm with decades of experience delivering reliable, compliant, and end-to-end construction solutions.",
    images: [
      {
        url: `${basePath}/logo.jpeg`,
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
    description: "A comprehensive construction consultancy and turnkey contracting firm with decades of experience delivering reliable, compliant, and end-to-end construction solutions.",
    images: [`${basePath}/logo.jpeg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
