import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import NeuralNetwork from "@/components/background/NeuralNetwork";
import ThemeController from "@/components/layout/ThemeController";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Acadeno | High-Tech Innovation Hub",
  description: "Acadeno - The Neural Gateway to AI, Robotics, and Future Tech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} antialiased bg-onyx text-foreground selection:bg-cyan/30 overflow-x-hidden`}
      >
        <ThemeController>
          <CustomCursor />
          <NeuralNetwork />
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeController>
      </body>
    </html>
  );
}
