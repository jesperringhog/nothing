import { ThingActionType } from "../models/ThingActionType";
import { ActionButton } from "./ActionButton";
import { createThing } from "../actions/thingActions";

export const ThingForm = async () => (
  <form action={createThing} className="flex xl:flex-col" autoComplete="off">
    <label htmlFor="thing"></label>
    <input
      className="w-37.5 focus:w-full h-37.5 mr-2 mb-2 font-sansafe uppercase 
      text-xl md:text-4xl text-center text-background bg-foreground
      rounded-none hover:rounded-r-[100%] focus:hover:rounded-none appearence-none 
      outline-none shadow-none border-none transition-default"
      id="thing"
      type="text"
      name="thingText"
      required
    />
    <ActionButton thingActionType={ThingActionType.CREATED} />
  </form>
);
