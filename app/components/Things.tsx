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
        <li key={t.id}>
          <div className="flex gap-5">
            <BtnComponent
              thing={t}
              thingActionType={ThingActionType.ELIMINATED}
            >
              ELIMINATE
            </BtnComponent>
            <BtnComponent
              thing={t}
              thingActionType={ThingActionType.ALTERNATED}
            >
              ALTERNATE
            </BtnComponent>
          </div>
          <p className={t.nothing ? "font-sanspace" : "font-sansafe"}>
            {t.word}
          </p>
        </li>
      ))}
    </ul>
  );
};
