import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";



import Nav from "./components/Navigation/Nav";
import Footer from "@/app/components/Sections/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stickles Electric - Coachella Valley Electrician",
  description: "Stickles Electric is a licensed electrician serving the Coachella Valley area. We provide residential and commercial electrical services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-45ZDS6XMQR"></Script>
  <Script>
    {
      `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-45ZDS6XMQR');`
    }
  </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <Nav />
        <main className="w-full px-4 py-8 bg-primary">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
