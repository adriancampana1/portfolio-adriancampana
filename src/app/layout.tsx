import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Adrian Campana",
  description: "Adrian Campana - Desenvolvedor full-stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} antialiased`}>{children}</body>
    </html>
  );
}
