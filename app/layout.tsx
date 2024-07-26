import type { Metadata } from "next";

import { Open_Sans } from "next/font/google";
import { Source_Sans_3 } from "next/font/google";
import { Azeret_Mono } from "next/font/google";

import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-opensans",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans-3",
});

const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-azeret-mono",
});

export const metadata: Metadata = {
  title: "Simple Slider DEMO",
  description:
    "A DEMO for simple slider on React with multiple scrolling modes and the ability to add custom buttons!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${openSans.variable} 
        ${sourceSans3.variable}
        ${azeretMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
