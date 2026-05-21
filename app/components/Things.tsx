"use client";

import { useContext } from "react";
import { ThingContext } from "../contexts/ThingContext";
import { BtnComponent } from "./BtnComponent";
import { ThingActionType } from "../reducers/thingReducer";

export const Things = () => {
  const { things, dispatch } = useContext(ThingContext);

  return (
    <ul>
      {things.map((t) => (
        <li key={t.id} className="flex gap-10 items-center">
          <span className={t.nothing ? "line-through" : ""}>{t.word}</span>
          <BtnComponent
            onClick={() => {
              dispatch({
                type: ThingActionType.REMOVED,
                payload: t.id.toString(),
              });
            }}
          >
            Delete
          </BtnComponent>
          <BtnComponent
            onClick={() => {
              dispatch({
                type: ThingActionType.TOGGLED,
                payload: t.id.toString(),
              });
            }}
          >
            Toggle
          </BtnComponent>
        </li>
      ))}
    </ul>
  );
};
