"use client";

import { Inter, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrolling } from "@/components/layout/SmoothScrolling";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const mono = Space_Grotesk({ subsets: ["latin"], variable: "--font-mono" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable} ${mono.variable}`}>
      <body className="bg-black text-white antialiased selection:bg-nomad-pink/30 select-none">
        <SmoothScrolling>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}

