"use client";

import { ActionButton } from "./ActionButton";
import { ThingActionType } from "../models/ThingActionType";
import { ThingType } from "../models/Thing";
import { updateThing } from "../actions/updateThing";
import { deleteThing } from "../actions/deleteThing";

type ThingsProps = {
  things: ThingType[];
};


export const Things = ({ things }: ThingsProps) => (
  <ul>
    {things.map((t) => (
      <li key={t.id} className="flex gap-2 mb-2">
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
            className={`min-w-0 -mt-2.5 mr-1.5 mb-6 ml-2.5 break-all 
              text-[125px] tracking-[-0.5rem] leading-[4.2rem]
            ${t.nothing && "font-sanspace text-background"}`}
          >
            {t.text.toUpperCase()}
          </p>
        </div>
      </li>
    ))}
  </ul>
);
