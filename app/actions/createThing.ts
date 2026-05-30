"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "../lib/db";
import Thing from "../models/Thing";
import { v4 as uuidv4 } from "uuid";

export const createThing = async (formData: FormData) => {
  await connectDB();

  const thingText = formData.get("thingText") as string;

  await Thing.create({
    id: uuidv4(),
    text: thingText,
    nothing: true,
  });

  revalidatePath("/nothing");
};
