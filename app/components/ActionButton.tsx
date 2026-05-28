import { useContext } from "react";
import { ThingActionType } from "../models/ThingActionType";
import { DotTriangle } from "./DotTriangle";

type ActionButtonProps = {
  thingActionType: ThingActionType;
  children?: React.ReactNode;
};

export const ActionButton = ({
  thingActionType,
  children,
}: ActionButtonProps) => {
  let className = "text-4xl bg-foreground transition-default cursor-pointer";

  switch (thingActionType) {
    case ThingActionType.CREATED:
      className += " min-w-[150px] min-h-[150px] size-[150px] rounded-[100%] hover:rounded-r-none";
      break;

    case ThingActionType.ALTERNATED:
      className +=
        " size-[75px] xl:size-[150px] rounded-tl-[50%] rounded-br-[50%] hover:rounded-tl-none hover:rounded-br-none hover:rounded-tr-[50%] hover:rounded-bl-[50%]";
      break;

    case ThingActionType.ELIMINATED:
      className += " size-[75px] xl:size-[150px] rounded-full hover:bg-background group";
      children = <DotTriangle />;
  }

  return (
    <button
      className={className}
    >
      {children}
    </button>
  );
};
