import type { Metadata } from "next";
import { Archivo, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavHeader from "@/components/layout/NavHeader";
import Footer from "@/components/layout/Footer";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hub KE",
  description: "The home of innovation and clarity"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} antialiased`} suppressHydrationWarning
      >
        <NavHeader />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
