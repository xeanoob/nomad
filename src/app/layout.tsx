import { Poppins, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrolling } from "@/components/layout/SmoothScrolling";
import { Metadata } from "next";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500"],
  variable: "--font-poppins" 
});

// Placeholder for Supreme LL - will fallback to sans-serif until files provided
const supreme = localFont({
  src: [
    {
      path: "../../public/fonts/Supreme-Medium.woff2", // Target path
      weight: "500",
      style: "normal",
    }
  ],
  variable: "--font-supreme",
  fallback: ["sans-serif"]
});

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
    <html lang="fr" className={`${poppins.variable} ${supreme.variable} ${mono.variable}`} suppressHydrationWarning>
      <body className="bg-black text-white antialiased selection:bg-white/10 select-none">
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

