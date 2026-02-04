// <== IMPORTS ==>
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// <== SANS FONT CONFIGURATION ==>
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// <== MONO FONT CONFIGURATION ==>
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// <== METADATA CONFIGURATION ==>
export const metadata: Metadata = {
  // <== TITLE ==>
  title: "Admin Dashboard",
  // <== DESCRIPTION ==>
  description: "Modern Admin Dashboard built with Next.js and Tailwind CSS",
};

// <== ROOT LAYOUT COMPONENT ==>
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // RETURNING THE ROOT LAYOUT STRUCTURE
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
