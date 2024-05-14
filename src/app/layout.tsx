import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ weight: ["500", "800"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meal Mate",
  description:
    "Meal Mate helps you to plan and follow your diet plan consistently through the days easier than ever!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
