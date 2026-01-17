import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PoPo Studio | Premium Podcast Creation",
  description: "Create, Edit, and Share professional podcasts with real-time collaboration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cyber-black min-h-screen relative overflow-x-hidden`}
      >
        <div className="fixed inset-0 cyber-grid pointer-events-none opacity-20" />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 pt-24 w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
