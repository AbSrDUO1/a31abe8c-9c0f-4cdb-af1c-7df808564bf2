import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { PageNav } from '@/components/common/PageNav';

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Button Playground Single-Page",
  description: "Showcase a single primary action with accessible variants and provide a simple CTA for inquiries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} antialiased bg-[#f8fafc]`}>{children}</body>
    </html>
  );
}