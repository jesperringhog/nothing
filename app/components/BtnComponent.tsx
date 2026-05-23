import React, { useContext } from "react";
import { ThingContext } from "../contexts/ThingContext";
import { Thing } from "../models/Thing";
import { ThingActionType } from "../models/ThingActionType";

type BtnComponentProps = {
  thing?: Thing;
  thingActionType: ThingActionType;
  children?: React.ReactNode;
};

export const BtnComponent = ({
  thing,
  thingActionType,
  children,
}: BtnComponentProps) => {
  const { dispatch } = useContext(ThingContext);
  let className = "size-37.5 text-4xl bg-foreground hover:bg-background";

  switch (thingActionType) {
    case ThingActionType.CREATED:
      className += " rounded-full cursor-cell";
      break;

    case ThingActionType.ALTERNATED:
      className += " rounded-tl-[50%] rounded-br-[50%] cursor-help";
      break;

    case ThingActionType.ELIMINATED:
      className += " rounded-full cursor-grabbing";
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
