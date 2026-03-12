import { Inter, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrolling } from "@/components/layout/SmoothScrolling";
import { NoiseOverlay } from "@/components/layout/NoiseOverlay";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const mono = Space_Grotesk({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "NOMAD — Collectif House Music",
  description: "Collectif House Music & Événementiel basé à Orléans. Exploration des textures sonores et expériences immersives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="bg-black text-white antialiased selection:bg-nomad-pink/30 select-none">
        <NoiseOverlay />
        <Header />
        <SmoothScrolling>
          <main className="min-h-screen">
            {children}
          </main>
        </SmoothScrolling>
        <Footer />
      </body>
    </html>
  );
}

