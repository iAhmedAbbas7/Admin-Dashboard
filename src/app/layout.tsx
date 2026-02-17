// <== IMPORTS ==>
import "./globals.css";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import Navbar from "@/src/components/common/Navbar";
import Sidebar from "@/src/components/common/Sidebar";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/src/context/ThemeProvider";
import { SidebarProvider } from "@/src/components/ui/sidebar";

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
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // GETTING THE SIDEBAR STATE
  const cookieStore = await cookies();
  // DEFAULT OPEN STATE
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  // RETURNING THE ROOT LAYOUT STRUCTURE
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        {/* THEME PROVIDER */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* SIDEBAR PROVIDER */}
          <SidebarProvider defaultOpen={defaultOpen}>
            {/* SIDEBAR */}
            <Sidebar />
            {/* MAIN CONTENT */}
            <main className="w-full">
              {/* NAVBAR */}
              <Navbar />
              {/* CHILDREN CONTENT */}
              <div className="px-4">{children}</div>
            </main>
          </SidebarProvider>
          {/* SIDEBAR */}
        </ThemeProvider>
      </body>
    </html>
  );
}
