import { connectDB } from "../lib/db";
import Thing, { ThingType } from "../models/Thing";
import { ThingForm } from "../components/ThingForm";
import { ThingsPresentation } from "../components/ThingsPresentation";

export default async function Nothing() {
  await connectDB();
  const things: ThingType[] = await Thing.find().select("-_id").lean();

  return (
    <>
      <ThingForm />
      <ThingsPresentation things={things} />
    </>
  );
}
