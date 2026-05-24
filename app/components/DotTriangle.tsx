const Dot = () => (
  <div className="size-1.5 xl:size-2.5 bg-background group-hover:bg-foreground transition-default rounded-full"></div>
);

export const DotTriangle = () => (
  <>
    <div className="w-full h-[50%] flex flex-col justify-center items-center">
      <Dot />
    </div>
    <div className="w-full h-[50%] flex justify-around items-center">
      <Dot />
      <Dot />
    </div>
  </>
);
