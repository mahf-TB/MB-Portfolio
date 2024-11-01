import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";

const MavenPro = Maven_Pro({ subsets: ["latin"] , variable: "--font-Maven"});
const jetbrain = JetBrains_Mono({ subsets: ["latin"] , variable: "--font-JetBrainsMono"});

export const metadata: Metadata = {
  title: "Mahefa Bienvenu ➤ Full-Stack Developer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.variable,GeistMono.variable, MavenPro.variable, jetbrain.variable, "font-sans")}>{children}</body>
    </html>
  );
}
