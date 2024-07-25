import type { Metadata } from "next";

import { Open_Sans } from "next/font/google";
import { Roboto_Condensed } from "next/font/google";
import { Azeret_Mono } from "next/font/google";

import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-opensans",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-сondensed",
});

const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-azeret_mono",
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
        ${robotoCondensed.variable}
        ${azeretMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
