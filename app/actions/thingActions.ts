"use server";

import { revalidatePath } from "next/cache";
import { connectDB } from "../lib/db";
import Thing from "../models/Thing";
import { v4 as uuidv4 } from "uuid";

export const createThing = async (formData: FormData) => {
  await connectDB();

  const thingText = formData.get("thingtext") as string;

  await Thing.create({
    id: uuidv4(),
    text: thingText,
    nothing: true,
  });

  revalidatePath("/nothing");
};

export const updateThing = async (id: string, currentValue: boolean) => {
  await connectDB();

  await Thing.findOneAndUpdate({ id }, { nothing: !currentValue });

  revalidatePath("/nothing");
};

export const deleteThing = async (id: string) => {
  await connectDB();

  await Thing.findOneAndDelete({ id });

  revalidatePath("/nothing");
};


