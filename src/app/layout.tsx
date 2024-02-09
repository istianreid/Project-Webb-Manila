import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "webbmanila.com",
  description:
    "Welcome to Webb Manila - Your Gateway to Digital Excellence! Discover innovative web design and development solutions tailored for Small and Medium Enterprises (SMEs). Elevate your online presence with captivating designs, expert coding, and hassle-free maintenance. Let's simplify sales and marketing together! Visit us now and unlock the power of Webb Manila.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
      <Analytics />
    </html>
  );
}
