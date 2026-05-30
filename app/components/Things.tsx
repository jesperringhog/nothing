"use client";

import { ActionButton } from "./ActionButton";
import { ThingActionType } from "../models/ThingActionType";
import { ThingType } from "../models/Thing";
import { updateThing } from "../actions/updateThing";

type ThingsProps = {
  things: ThingType[];
};

export const Things = ({ things }: ThingsProps) => (
  <ul>
    {things.map((t) => (
      <li key={t.id} className="flex flex-col xl:flex-row gap-2 mb-8 xl:mb-2">
        <div className="flex xl:flex-col gap-1.5 xl:gap-2">
          <ActionButton
            thingActionType={ThingActionType.ALTERNATED}
            thingAction={() => updateThing(t.id, t.nothing)}
          />
          <ActionButton thingActionType={ThingActionType.ELIMINATED} />
        </div>
        <p
          className={`min-w-0 wrap-break-word text-[100px] xl:text-[150px] 
                tracking-[-0.4rem] xl:tracking-[-0.65rem] leading-13.5 xl:leading-20 
                xl:mt-[-1.55rem] transition-default
            ${t.nothing ? "font-sanspace" : "font-sansafe"}`}
        >
          {t.text.toUpperCase()}
        </p>
      </li>
    ))}
  </ul>
);
