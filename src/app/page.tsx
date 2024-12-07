import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

import Services from "@/components/Services";
import ScrollProgressBar from "@/components/ui/scroll-progress-bar";

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-background">
      <ScrollProgressBar type="circle" color="#7c3ef0" showPercentage={true} />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}
