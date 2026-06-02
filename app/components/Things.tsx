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
        <div className="flex gap-2">
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
              -mt-0.7 lg:-mt-1.5 xl:-mt-7.5 mr-1.5 lg:mr-2 xl:mr-0.5 mb-4.5 lg:mb-6 xl:mb-11 ml-2.5 
              text-[62.5px] lg:text-[105px] xl:text-[250px]
              tracking-[-0.25rem] lg:tracking-[-0.42rem] xl:tracking-[-1rem] leading-[2.1rem] lg:leading-14 xl:leading-33.5
            ${t.nothing && "font-sanspace text-background"}`}
          >
            {t.text.toUpperCase()}
          </p>
        </div>
      </li>
    ))}
  </ul>
);
