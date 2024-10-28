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
  title: "Subash | Full-Stack Web Developer ",
  description:
    "Explore Subash's full-stack portfolio showcasing innovative UI/UX designs, front-end and back-end projects, and expertise in web development technologies. Ideal for clients and recruiters seeking impactful, design-focused solutions.",
  keywords:
    "Subash portfolio, full-stack developer, web developer, UI/UX design, front-end development, back-end development, React.js, Next.js, Tailwind CSS, JavaScript, TypeScript, MongoDB, Express.js, professional portfolio",
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
