import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Photo Showcase",
    template: "%s | Photo Showcase",
  },
  description:
    "An app showcasing photos through various different caching strategies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gradient-to-b from-gray-50 to-gray-300 flex flex-col min-h-screen ${inter.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
