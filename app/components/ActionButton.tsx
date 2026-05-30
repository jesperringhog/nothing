"use client";

import { ThingActionType } from "../models/ThingActionType";
import { DotTriangle } from "./DotTriangle";

type ActionButtonProps = {
  thingActionType: ThingActionType;
  thingAction?: () => Promise<void>;
  children?: React.ReactNode;
};

export const ActionButton = ({
  thingActionType,
  thingAction,
  children,
}: ActionButtonProps) => {
  let className = "text-4xl bg-foreground transition-default cursor-pointer";

  switch (thingActionType) {
    case ThingActionType.CREATED:
      className +=
        " min-w-[150px] min-h-[150px] size-[150px] rounded-[100%] hover:rounded-r-none";
      break;

    case ThingActionType.VARIED:
      className +=
        " size-[75px] xl:size-[150px] rounded-tr-[50%] rounded-bl-[50%] hover:rounded-tr-none hover:rounded-bl-none hover:rounded-tl-[50%] hover:rounded-br-[50%]";
      break;

    case ThingActionType.ELIMINATED:
      className +=
        " size-[75px] xl:size-[150px] rounded-full hover:bg-background group";
      children = <DotTriangle />;
  }

  return (
    <button className={className} onClick={thingAction}>
      {children}
    </button>
  );
};
