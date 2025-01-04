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
  title: "Subash Portfolio | Full-Stack Web Developer ",
  description:
    "Subash, a versatile full-stack web developer, showcases an innovative portfolio featuring UI/UX designs, front-end and back-end projects. Explore impactful web solutions tailored to clients' needs. Visit Subash's portfolio for exceptional web development expertise.",

  authors: [{ name: "Subash", url: "https://github.com/subashio" }],
  keywords: [
    "subash",
    "Subash",
    "M Subash",
    "M Subash",
    "subash portfolio",
    "Subash Portfolio",
    "Subash M",
    "Visit Subash's portfolio",
    "Visit Subash portfolio",
    "i am Subash",
    "Subash M",
    "Subash Developer",
    "website builder",
    "website solution",
    "website developer",
    "need developer",
    "Subash portfolio",
    "full-stack developer",
    "web developer",
    "UI/UX design",
    "UI design",
    "UX design",
    "front-end development",
    "frontend development",
    "back-end development",
    "backend development",
    "React.js developer",
    "React developer",
    "Next.js developer",
    "Next developer",
    "Tailwind CSS",
    "JavaScript developer",
    "js developer",
    "ts developer",
    "TypeScript developer",
    "MongoDB ",
    "Express developer",
    "Express.js developer",
    "professional portfolio developer",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://subashfolio.site",
  },
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
