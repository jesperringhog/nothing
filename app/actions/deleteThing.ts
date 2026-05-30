"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "../lib/db";
import Thing, { ThingType } from "../models/Thing";

export const deleteThing = async (id: string) => {
  await connectDB();

  await Thing.findOneAndDelete({ id });

  revalidatePath("/nothing");
};
