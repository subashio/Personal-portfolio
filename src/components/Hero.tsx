"use client";
import { Mail } from "lucide-react";
import Link from "next/link";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { motion } from "framer-motion";
import { opacityAnimation } from "@/constants/animation";

export default function HeroSection() {
  return (
    <section className="py-36">
      <div className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-grid-white/[0.05]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#0B031F]/100 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />
      </div>
      <div className="my-20 flex w-full flex-col items-center justify-center gap-2">
        <TextGenerateEffect
          className="bg-gradient-to-tr"
          duration={1}
          filter={false}
          words="Hello👋,I'm Aravind  and I'm a"
        />
        <motion.h1
          variants={opacityAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative z-20 mx-auto bg-transparent bg-gradient-to-br from-neutral-200 to-neutral-600 bg-clip-text py-1 text-center text-4xl font-bold tracking-wider text-transparent sm:text-6xl"
        >
          Software
          <span className="relative ml-1 bg-transparent bg-gradient-to-b from-[#9900ffbb] to-[#b13cff9f] bg-clip-text">
            Developer
          </span>
        </motion.h1>
        <TextGenerateEffect
          className="text-xs"
          duration={0.5}
          filter={false}
          words="To contribute to a prestigious organization by applying my full-stack development skills while continuously learning and adapting to new technologies."
        />
        <motion.div
          variants={opacityAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="my-8 flex items-center justify-center gap-6"
        >
          <Link
            href="#Projects"
            className="z-20 rounded-xl bg-gradient-to-tr from-[#180929bb] to-[#420879bb] p-4 text-sm text-secondary-foreground transition-all duration-500 hover:scale-95 hover:bg-gradient-to-tr hover:from-[#290f47bb] hover:to-[#51148abb]"
          >
            🚀 Check My Projects
          </Link>
          <Link
            href="#Contact"
            className="z-20 flex items-center justify-center gap-4 rounded-xl bg-gradient-to-tr from-[#180929bb] to-[#420879bb] p-4 text-sm text-secondary-foreground transition-all duration-500 hover:scale-95 hover:bg-gradient-to-tr hover:from-[#290f47bb] hover:to-[#51148abb]"
          >
            <Mail /> Email Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
