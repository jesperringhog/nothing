import { useContext } from "react";
import { ThingContext } from "../contexts/ThingContext";
import { Thing } from "../models/Thing";
import { ThingActionType } from "../models/ThingActionType";
import { DotTriangle } from "./DotTriangle";

type ActionButtonProps = {
  thing?: Thing;
  thingActionType: ThingActionType;
  children?: React.ReactNode;
};

export const ActionButton = ({
  thing,
  thingActionType,
  children,
}: ActionButtonProps) => {
  const { dispatch } = useContext(ThingContext);
  let className = "text-4xl bg-foreground transition-default cursor-pointer";

  switch (thingActionType) {
    case ThingActionType.CREATED:
      className += " size-[150px] rounded-[100%] hover:rounded-r-none";
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
      onClick={() => {
        if (!thing) return;
        dispatch({
          type: thingActionType!,
          payload: thing.id.toString(),
        });
      }}
      className={className}
    >
      {children}
    </button>
  );
};
