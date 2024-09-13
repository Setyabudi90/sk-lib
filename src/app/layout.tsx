import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";
import type { NextFont } from "next/dist/compiled/@next/font";

export const metadata: Metadata = {
  title: "Skarisa Lib",
  description: "Skarisa Lib adalah tempat untuk mencari berbagai jenis buku.",
  keywords:
    "Skarisa Lib, perpustakaan online, buku, pencarian buku, buku digital, baca buku",
  authors: [{ name: "ISB" }],
  openGraph: {
    title: "Skarisa Lib",
    description: "Skarisa Lib adalah tempat untuk mencari berbagai jenis buku.",
    url: "https://skarisalib.vercel.app",
    type: "website",
    images: [
      {
        url: "https://i.ibb.co.com/Sn7b3YN/dashboard-profile-logo-transformed.jpg",
        width: 800,
        height: 600,
        alt: "author logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skarisa Lib",
    description: "Skarisa Lib adalah tempat untuk mencari berbagai jenis buku.",
    images: [
      {
        url: "https://i.ibb.co.com/Sn7b3YN/dashboard-profile-logo-transformed.jpg",
        alt: "author logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const roboto: NextFont = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
