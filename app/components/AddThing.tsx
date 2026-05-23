"use client";

import { useContext, useReducer, useRef, useState } from "react";
import { ThingContext } from "../contexts/ThingContext";
import { BtnComponent } from "./BtnComponent";
import { ThingActionType } from "../models/ThingActionType";

export const AddThing = () => {
  const [something, setSomething] = useState("");
  const { dispatch } = useContext(ThingContext);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="size-full flex flex-col gap-2"
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: ThingActionType.CREATED,
          payload: something,
        });
        setSomething("");
        inputRef.current?.blur();
      }}
    >
      <label htmlFor="thingInput"></label>
      <input
        style={{
          maxWidth: `100%`,
          width: `calc(150px + ${something.length}px * 20)`,
        }}
        className="h-37.5 p-5 text-4xl text-background focus:text-foreground 
        bg-foreground focus:bg-background appearence-none outline-none 
        shadow-none border-none"
        id="thingInput"
        ref={inputRef}
        type="text"
        value={something.toUpperCase()}
        onChange={(e) => setSomething(e.target.value)}
        required
      />
      <BtnComponent thingActionType={ThingActionType.CREATED}></BtnComponent>
    </form>
  );
};
