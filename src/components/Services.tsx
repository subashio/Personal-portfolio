"use client";

import { cardArr } from "@/constants/details";
import { motion } from "framer-motion";

export const fadeInAnimation = {
  initial: {
    opacity: 0,
  },
  animate: (index: number) => ({
    opacity: 1,

    transition: {
      delay: 0.05 * index,
      duration: 0.3,
    },
  }),
};

export default function Services() {
  return (
    <section
      id="Services"
      className="mx-auto scroll-mt-20 space-y-6 py-12 md:py-12 lg:py-24"
    >
      <div className="mx-auto mb-10 flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading bg-gradient-to-b from-neutral-100 to-neutral-500 bg-clip-text text-4xl font-bold leading-[1.1] text-transparent sm:text-4xl md:text-6xl">
          What I Do
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          I create custom websites and web apps that combine beautiful design
          with seamless functionality.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 border border-transparent px-2.5 sm:grid-cols-2 md:max-w-7xl md:grid-cols-2 md:px-10 lg:grid-cols-3">
        {cardArr.map((item, index) => (
          <motion.div
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            key={item.id}
            className="group relative cursor-pointer overflow-hidden rounded-lg border border-transparent bg-transparent bg-gradient-to-tr from-[#1a092938] to-[#4605644f] hover:shadow-[rgb(100,20,203)_0px_3px_8px]"
          >
            <div className="flex h-[200px] flex-col justify-between rounded-md p-6">
              <img
                width={48}
                height={48}
                src={item.logo}
                alt="image"
                className="lucide lucide-palette"
              />
              <div className="space-y-2">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
