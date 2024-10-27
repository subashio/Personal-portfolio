import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />=
    </main>
  );
}
