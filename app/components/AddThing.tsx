"use client";

import { useContext, useReducer, useState } from "react";
import { ThingContext } from "../contexts/ThingContext";
import { ThingActionType } from "../reducers/thingReducer";

export const AddThing = () => {
  const [something, setSomething] = useState("");
  const { dispatch } = useContext(ThingContext);

  return (
    <form
      className="flex gap-10"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: ThingActionType.ADDED,
          payload: something
        })
        setSomething("");
      }}
    >
      <label htmlFor="thingInput">Add</label>
      <input
        id="thingInput"
        type="text"
        placeholder="something"
        value={something}
        onChange={(e) => setSomething(e.target.value)}
      />
      <button>Create</button>
    </form>
  );
};
