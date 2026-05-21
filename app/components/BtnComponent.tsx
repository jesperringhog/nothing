import React, { useContext } from "react";
import { ThingContext } from "../contexts/ThingContext";
import { Thing } from "../models/Thing";
import { ThingActionType } from "../models/ThingActionType";

type BtnComponentProps = {
  thing?: Thing;
  thingActionType: ThingActionType;
  children: React.ReactNode;
};

export const BtnComponent = ({
  thing,
  thingActionType,
  children,
}: BtnComponentProps) => {
  const { dispatch } = useContext(ThingContext);
  let className = "w-30 h-30 bg-black hover:bg-white cursor-pointer";

  switch (thingActionType) {
    case ThingActionType.CREATED:
      className += " rounded-full";
      break;

    case ThingActionType.ALTERNATED:
      className += " rounded-tr-[50%] rounded-bl-[50%]";
      break;

    case ThingActionType.ELIMINATED:
      className += " [clip-path:polygon(50%_0%,0%_100%,100%_100%)] hover:[clip-path:none]";
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
