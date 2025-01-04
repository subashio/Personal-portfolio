"use client";
import { GridITems } from "@/constants/data/generalData";
import { BentoGrid, BentoGridItem } from "./ui/bentoGrid";

export default function About() {
  return (
    <section
      id="About"
      aria-labelledby="about-section"
      className="mx-auto w-full max-w-7xl scroll-mt-16"
    >
      <BentoGrid className="scroll-mt-10 md:auto-rows-[20rem]">
        {GridITems.map((item, i) => (
          <BentoGridItem
            customGrid={item.customGrid}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
