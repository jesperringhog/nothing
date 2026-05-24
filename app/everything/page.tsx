"use client";

import { useReducer } from "react";
import { CreateThing } from "../components/CreateThing";
import { thingReducer } from "../reducers/thingReducer";
import { ThingContext } from "../contexts/ThingContext";
import { Things } from "../components/Things";

export default function EveryThing() {
  const [things, dispatch] = useReducer(thingReducer, []);

  return (
    <ThingContext.Provider value={{ things, dispatch }}>
      <CreateThing />
      <Things />
    </ThingContext.Provider>
  );
}
