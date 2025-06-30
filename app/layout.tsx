import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter( { subsets: [ "latin" ] } );

export const metadata: Metadata = {
  title: "Azhar Andrian",
  description: "Full Stack Developer Portfolio",
  keywords: [ "developer", "portfolio", "react", "nextjs", "typescript" ],
  authors: [ { name: "Azhar Andrian" } ],
  generator: "next.js",
};

// ✅ Tambahkan ini:
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout ( {
  children,
}: {
  children: React.ReactNode;
} )
{
  return (
    <html lang="id">
      <body className={ inter.className }>{ children }</body>
    </html>
  );
}
