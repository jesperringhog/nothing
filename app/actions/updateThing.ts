"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "../lib/db";
import Thing, { ThingType } from "../models/Thing";

export const updateThing = async (id: string, currentValue: boolean) => {
  await connectDB();

  await Thing.findOneAndUpdate({ id }, { nothing: !currentValue });

  revalidatePath("/nothing");
};
