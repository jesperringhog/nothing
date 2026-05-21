"use client";

import { useContext, useReducer, useState } from "react";
import { ThingContext } from "../contexts/ThingContext";
import { BtnComponent } from "./BtnComponent";
import { ThingActionType } from "../models/ThingActionType";

export const AddThing = () => {
  const [something, setSomething] = useState("");
  const { dispatch } = useContext(ThingContext);

  return (
    <form
      className="flex gap-10 items-center"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: ThingActionType.CREATED,
          payload: something,
        });
        setSomething("");
      }}
    >
      <label htmlFor="thingInput"></label>
      <input
        className="w-30 h-30 text-white text-center placeholder:text-center bg-black"
        id="thingInput"
        type="text"
        value={something}
        onChange={(e) => setSomething(e.target.value)}
        required
      />
      <BtnComponent thingActionType={ThingActionType.CREATED}>Create</BtnComponent>
    </form>
  );
};
