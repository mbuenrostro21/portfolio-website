import "./globals.css";

import type { Metadata } from "next";
import { Anta } from "next/font/google";
import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { AosInit } from "../../components/AosInit";

const anta = Anta({ subsets: ["latin"], weight: "400", variable: "--font-anta" });


export const metadata: Metadata = {
  title: "Michael Buenrostro Portfolio",
  description: "Michael Buenrostro, Full Stack Developer in Los Angeles.",
  icons: {
    icon: '/port-logo.png', // Standard favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={anta.variable} data-scroll-behavior="smooth">
      <body className="antialiased">
        <AosInit />
        <div className="min-h-screen overflow-x-clip">
          <NavBar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
