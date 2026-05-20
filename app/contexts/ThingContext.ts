import { createContext, Dispatch } from "react";
import { Thing } from "../models/Thing";
import { ThingAction } from "../reducers/thingReducer";

export type ThingContextType = {
    things: Thing[];
    dispatch: Dispatch<ThingAction>;
}

export const ThingContext = createContext<ThingContextType>({
    things: [],
    dispatch: () => {}
})