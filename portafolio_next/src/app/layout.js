import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Juan7139nf",
  description: "Portafolio Personal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-theme="dark">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
