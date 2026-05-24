"use client";

import { useContext } from "react";
import { ThingContext } from "../contexts/ThingContext";
import { ActionButton } from "./ActionButton";
import { ThingActionType } from "../models/ThingActionType";

export const Things = () => {
  const { things, dispatch } = useContext(ThingContext);

  return (
    <ul>
      {things.map((t) => (
        <li
          key={t.id}
          className="flex flex-col xl:flex-row gap-2 mb-8 xl:mb-2"
        >
          <div className="flex xl:flex-col gap-1.5 xl:gap-2">
            <ActionButton
              thing={t}
              thingActionType={ThingActionType.ALTERNATED}
            ></ActionButton>
            <ActionButton
              thing={t}
              thingActionType={ThingActionType.ELIMINATED}
            ></ActionButton>
          </div>
          <p
            className={`min-w-0 wrap-break-word text-[100px] xl:text-[150px] 
                tracking-[-0.4rem] xl:tracking-[-0.65rem] leading-13.5 xl:leading-20 
                xl:mt-[-1.55rem] transition-default
            ${t.nothing ? "font-sanspace" : "font-sansafe"}`}
          >
            {t.word}
          </p>
        </li>
      ))}
    </ul>
  );
};
