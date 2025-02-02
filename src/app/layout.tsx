import type { Metadata } from "next";
import { Lexend_Giga } from "next/font/google";
import "./globals.css";
import Header from "@/utils/Header";
import Hero from "@/components/Hero";

const lexendGiga = Lexend_Giga({
  variable: "--lexend-giga",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexendGiga.variable} antialiased py-[70px]`}>
        <Header />
        <Hero />
        {children}
      </body>
    </html>
  );
}
