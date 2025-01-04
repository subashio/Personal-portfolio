import About from "@/components/About";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import ScrollProgressBar from "@/components/ui/scroll-progress-bar";

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden">
      <ScrollProgressBar type="circle" color="#3e8bf0" showPercentage={true} />
      <HeroSection />
      <About />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}
