import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "../components/Header"
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const navigation = [
    { name: 'Dashboard', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'About us', href: '#' },
  ]
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
       <Header />
        {children}
      </body>
    </html>
  );
}
