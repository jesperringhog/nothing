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
      className="flex gap-5 items-center font-sansafe"
      autoComplete="off"
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
        className="size-75 text-4xl text-background text-center bg-foreground
        appearence-none outline-none shadow-none border-none"
        id="thingInput"
        type="text"
        value={something.toUpperCase()}
        onChange={(e) => setSomething(e.target.value)}
        required
      />
      <BtnComponent thingActionType={ThingActionType.CREATED}>
        CREATE
      </BtnComponent>
    </form>
  );
};
