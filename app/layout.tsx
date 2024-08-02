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
    "A DEMO for simple slider on React with multiple scrolling modes and the ability to add custom buttons! Check out the documentation and learn more about the different slider features",
  openGraph: {
    title: "Simple Slider DEMO",
    description:
      "A DEMO for simple slider on React with multiple scrolling modes and the ability to add custom buttons! Check out the documentation and learn more about the different slider features",
    url: "https://simple-slider-demo.netlify.app/",
    siteName: "Simple Slider DEMO",
    type: "website",
    images: [
      {
        url: "https://i.postimg.cc/MHyfbF1S/Simple-Slider-DEMO.webp",
        secureUrl: "https://i.postimg.cc/MHyfbF1S/Simple-Slider-DEMO.webp",
        width: 1200,
        height: 630,
        alt: "Превью для сайта https://simple-slider-demo.netlify.app/",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
