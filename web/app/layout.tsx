import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Mono } from "next/font/google";
import "./globals.css";

const inter    = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"], variable: "--font-playfair" });
const mono     = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Rootstratum — Cloud, DevOps & AIOps for Modern Businesses",
  description:
    "Expert Cloud Architecture, DevOps Platform Engineering, and AIOps solutions. Trusted by engineering teams across India and globally to build, migrate, and operate infrastructure at scale.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${mono.variable}`} style={{ fontFamily: "var(--font-inter, Inter, system-ui, sans-serif)" }}>
        {children}
      </body>
    </html>
  );
}
