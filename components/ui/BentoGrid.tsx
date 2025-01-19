import { cn } from "@/lib/utils";
import { GlobeDemo } from "./GridGlobe";

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
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  titleClassName,
  description,
  header,
  icon,
}: {
  id:number,
  className?: string;
  title?: string | React.ReactNode;
  titleClassName?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative bg-gradient overflow-hidden rounded-3xl border border-white/[0.6] hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      >
        <div className={`${id === 6 && 'flex justify-center'} h-full`}>
          <div className="w-full h-full absolute">

          </div>
          <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
            
          </div>

          <div className={cn(
            titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative w-full md:h-full min-h-40 flex flex-col px-5 p-5 log:p-10'
          )}>
            <div className="font-sans font-normal text-copy text-sm">
              {description}
            </div>
            <div className="font-sans text-copy font-bold text-lg lg:text-3xl mx-w-96 z10">
              {title}
            </div>

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                {['React', 'Next.js', 'TypeScript'].map((item) => (
                  <span key={item} className="py-2 lg:py-4 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E] opacity-80" />
                {['Sitefinity', 'Wordpress', '.NET'].map((item) => (
                  <span key={item} className="py-2 lg:py-4 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg tex
                  t-center bg-[#10132E]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                SIX
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
