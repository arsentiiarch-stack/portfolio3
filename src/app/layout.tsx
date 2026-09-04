import type { Metadata } from "next";
import { Inter, Syne, Roboto, Montserrat, Lato, Libre_Franklin } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const libreF = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-libre-franklin",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KOHO Visual — Architectural Visualization Studio",
    template: "%s | KOHO Visual",
  },
  description:
    "KOHO Visual is an architectural visualization studio specializing in high-end CGI renders, animations, and immersive visuals for developers and architects.",
  keywords: [
    "architectural visualization",
    "CGI rendering",
    "3D renders",
    "architectural animation",
    "real estate visualization",
    "interior rendering",
  ],
  authors: [{ name: "KOHO Visual" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://koho.visual",
    siteName: "KOHO Visual",
    title: "KOHO Visual — Architectural Visualization Studio",
    description:
      "High-end architectural visualization: CGI renders, animations, and immersive visuals.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "KOHO Visual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KOHO Visual — Architectural Visualization Studio",
    description:
      "High-end architectural visualization: CGI renders, animations, and immersive visuals.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${roboto.variable} ${montserrat.variable} ${lato.variable} ${libreF.variable}`}>
      <body>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
