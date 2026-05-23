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
        <li key={t.id} className="flex justify-start gap-41.5 mb-12.5">
          <div className="flex flex-col gap-2">
            <BtnComponent
              thing={t}
              thingActionType={ThingActionType.ALTERNATED}
            >
            </BtnComponent>
            <BtnComponent
              thing={t}
              thingActionType={ThingActionType.ELIMINATED}
            >
            </BtnComponent>
          </div>
          <p
            className={`min-w-0 wrap-break-word text-[300px] tracking-[-1.3rem] leading-40 -mt-12.5
            ${t.nothing ? "font-sanspace" : "font-sansafe"}`}
          >
            {t.word}
          </p>
        </li>
      ))}
    </ul>
  );
};
