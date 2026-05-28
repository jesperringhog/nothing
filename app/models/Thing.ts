import { InferSchemaType, model, models, Schema } from "mongoose";

const thingSchema = new Schema({
    id: {type: String, required: true},
    text: {type: String, required: true},
    nothing: {type: Boolean, required: true}
})

export type ThingType = InferSchemaType<typeof thingSchema>;

const Thing = models.thing || model("thing", thingSchema);

export default Thing;