import { Thing } from "../models/Thing";
import { ThingActionType } from "../models/ThingActionType";

export type ThingAction = {
  type: ThingActionType;
  payload: string;
};

export const thingReducer = (things: Thing[], action: ThingAction) => {
  switch (action.type) {
    case ThingActionType.CREATED:
      return [
        ...things,
        { id: Date.now(), word: action.payload.toUpperCase(), nothing: true },
      ];

    case ThingActionType.ELIMINATED:
      return things.filter((t) => t.id !== +action.payload);

    case ThingActionType.ALTERNATED:
      return things.map((t) =>
        t.id === +action.payload ? { ...t, nothing: !t.nothing } : t,
      );

    default:
      return things;
  }
};
