"use client";

import { useContext, useReducer, useRef, useState } from "react";
import { ThingContext } from "../contexts/ThingContext";
import { ActionButton } from "./ActionButton";
import { ThingActionType } from "../models/ThingActionType";

export const CreateThing = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(ThingContext);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="flex xl:flex-col"
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: ThingActionType.CREATED,
          payload: text,
        });
        setText("");
        inputRef.current?.blur();
      }}
    >
      <label htmlFor="thingInput"></label>
      <input
        className={`${text ? "xl:w-full" : "hover:rounded-r-[100%]"} 
        w-37.5 h-37.5 mr-2 mb-2 text-xl md:text-4xl text-center text-background focus:text-foreground 
        bg-foreground focus:bg-background rounded-none appearence-none outline-none 
        shadow-none border-none transition-default`}
        id="thingInput"
        ref={inputRef}
        type="text"
        value={text.toUpperCase()}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <ActionButton thingActionType={ThingActionType.CREATED}></ActionButton>
    </form>
  );
};
