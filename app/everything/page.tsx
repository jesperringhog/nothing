"use client";

import { useReducer } from "react";
import { AddThing } from "../components/AddThing";
import { thingReducer } from "../reducers/thingReducer";
import { ThingContext } from "../contexts/ThingContext";

export default function EveryThing() {
  const [things, dispatch] = useReducer(thingReducer, []);

  return (
    <ThingContext.Provider value={{ things, dispatch }}>
      <AddThing />
      {/* <Things /> */}
    </ThingContext.Provider>
  );
}
