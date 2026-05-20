import { Thing } from "../models/Thing";

export enum ThingActionType {
  ADDED,
  REMOVED,
  TOGGLED,
}

export type ThingAction = {
  type: ThingActionType;
  payload: string;
};

export const thingReducer = (things: Thing[], action: ThingAction) => {
  switch (action.type) {
    case ThingActionType.ADDED:
      return [...things, action.payload];

    default:
      return things;
  }
};
