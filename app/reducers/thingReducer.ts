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
      return [
        ...things,
        { id: Date.now(), word: action.payload, nothing: true },
      ];

    case ThingActionType.REMOVED:
      return things.filter((t) => t.id !== +action.payload);

    case ThingActionType.TOGGLED:
      return things.map((t) =>
        t.id === +action.payload ? { ...t, nothing: !t.nothing } : t,
      );

    default:
      return things;
  }
};
