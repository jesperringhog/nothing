import { ThingActionType } from "../models/ThingActionType";
import { ActionButton } from "./ActionButton";
import { createThing } from "../actions/thingActions";

export const ThingForm = async () => (
  <form action={createThing} className="w-full pt-2 flex bg-background fixed" autoComplete="off">
    <label htmlFor="thing"></label>
    <div className="w-18.75 lg:w-37.5 focus-within:w-[50%] h-18.75 lg:h-37.5 mr-2 mb-2 flex justify-center 
    items-center bg-foreground group relative transition-default">
      <input
        className="w-full h-full font-sansafe uppercase text-xl md:text-4xl 
        text-center text-background bg-foreground appearence-none 
        outline-none shadow-none border-none transition-default"
        id="thing"
        type="text"
        name="thingtext"
        required
      />
      <div className="w-1 lg:w-2 h-full group-hover:bg-background group-focus-within:opacity-0
      absolute pointer-events-none transition-default"></div>
    </div>
    <ActionButton thingActionType={ThingActionType.CREATED} />
  </form>
);
