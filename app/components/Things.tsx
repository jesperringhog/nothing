"use client";

import { useContext } from "react";
import { ThingContext } from "../contexts/ThingContext";
import { BtnComponent } from "./BtnComponent";
import { ThingActionType } from "../models/ThingActionType";

export const Things = () => {
  const { things, dispatch } = useContext(ThingContext);

  return (
    <ul>
      {things.map((t) => (
        <li key={t.id} className="flex gap-10 items-center">
          <span className={t.nothing ? "line-through" : ""}>{t.word}</span>
          <BtnComponent thing={t} thingActionType={ThingActionType.ELIMINATED}>
            Eliminate
          </BtnComponent>
          <BtnComponent thing={t} thingActionType={ThingActionType.ALTERNATED}>
            Alternate
          </BtnComponent>
        </li>
      ))}
    </ul>
  );
};
