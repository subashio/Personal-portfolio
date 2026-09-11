import About from "@/components/About";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import ScrollProgressBar from "@/components/ui/scroll-progress-bar";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export default function Home() {
  return (
    <section className="relative mx-auto flex flex-col items-center justify-center overflow-hidden">
      <GoogleTagManager gtmId="G-TGCRK3LLNN" />
      <GoogleAnalytics gaId="G-2XY8VGZYZW" />
      <ScrollProgressBar type="circle" color="#3e8bf0" showPercentage={true} />
      <HeroSection />
      <About />
      <Services />
      <Projects />
      <Contact />
    </section>
  );
}
