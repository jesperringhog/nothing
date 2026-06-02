"use client";

import { ActionButton } from "./ActionButton";
import { ThingActionType } from "../models/ThingActionType";
import { ThingType } from "../models/Thing";
import { deleteThing, updateThing } from "../actions/thingActions";

type ThingsProps = {
  things: ThingType[];
};


export const Things = ({ things }: ThingsProps) => (
  <ul>
    {things.map((t) => (
      <li key={t.id} className="flex flex-col lg:flex-row gap-2 mb-2">
        <div className="flex gap-0.5 md:gap-2 lg:gap-1 xl:gap-2">
          <ActionButton
            thingActionType={ThingActionType.ELIMINATED}
            thingAction={() => deleteThing(t.id)}
          />
          <ActionButton
            thingActionType={ThingActionType.VARIED}
            thingAction={() => updateThing(t.id, t.nothing)}
          />
        </div>
        <div className={`${t.nothing && "bg-foreground"}`}>
          <p
            className={`min-w-0 break-all transition-default
              -mt-2 lg:-mt-4 xl:-mt-9 mb-[0.65rem] lg:mb-5.5 xl:mb-11 ml-[0.15rem] lg:ml-[0.3rem] xl:ml-[0.55rem] 
              text-[62.5px] lg:text-[130px] xl:text-[265px]
              tracking-[-0.25rem] lg:tracking-[-0.55rem] xl:tracking-[-1.1rem] leading-[2.1rem] lg:leading-[4.33rem] xl:leading-35.5
            ${t.nothing && "font-sanspace text-background"}`}
          >
            {t.text.toUpperCase()}
          </p>
        </div>
      </li>
    ))}
  </ul>
);
