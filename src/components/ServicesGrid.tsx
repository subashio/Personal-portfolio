import { cardArr } from "@/constants/details";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function ServicesGrid({ icon, title, description }: TItem) {
  return (
    <>
      <div className="relative transition duration-200">
        <div className="mb-2 mt-2 flex items-center justify-center gap-2 bg-transparent bg-gradient-to-br from-neutral-200 to-neutral-600 bg-clip-text font-bold text-transparent">
          {icon}
          {title}
        </div>
        <div className="text-center text-sm font-normal text-neutral-300">
          {description}
        </div>
      </div>
      <div className="relative flex w-full items-center justify-center gap-4 overflow-hidden antialiased">
        <InfiniteMovingCards
          items={cardArr}
          speed="normal"
          direction="right"
          type="service"
        />
      </div>
    </>
  );
}
