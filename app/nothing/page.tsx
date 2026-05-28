import { Document } from "mongoose";
import { ThingForm } from "../components/ThingForm";
import { Things } from "../components/Things";
import { connectDB } from "../lib/db";
import Thing, { ThingType } from "../models/Thing";

export default async function Nothing() {
  await connectDB();
  const things: ThingType[] = await Thing.find().select("-_id").lean();

  return (
    <>
      <ThingForm />
      <Things things={things} />
    </>
  );
}
