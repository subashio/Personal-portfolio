import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid grid-cols-1 gap-4 px-2.5 py-10 md:auto-rows-[18rem] md:grid-cols-3 md:px-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  imgClassName,
  img,
  customGrid,
}: TItem) => {
  return (
    <div
      className={cn(
        "group/bento relative z-10 row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-transparent bg-gradient-to-tr from-[#0d0314b9] to-[#2c0344] p-4 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
    >
      {customGrid}

      <div className="absolute left-0 top-0 h-full w-full">
        {img && (
          <img
            src={img}
            alt={img}
            className={cn(
              imgClassName,
              "h-full w-full object-cover object-center",
            )}
          />
        )}
      </div>
    </div>
  );
};
