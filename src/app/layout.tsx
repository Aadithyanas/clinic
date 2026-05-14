import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Dermanova Skin Clinic",
  description: "Dermatologist clinic in Nemom, Kerala. Rated 5.0 stars.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
