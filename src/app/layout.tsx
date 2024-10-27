import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Manrope as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  weight: ["300", "400", "500", "700", "200"],
  subsets: ["latin"],
  variable: "--font-sans",
  fallback: ["Arial", "sans-serif"],
});
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio for professional useage",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full !scroll-smooth">
      <body
        className={cn(
          "relative h-full min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <main className="relative flex min-h-screen flex-col">
          <Navbar /> {children} <Toaster />
        </main>
      </body>
    </html>
  );
}
