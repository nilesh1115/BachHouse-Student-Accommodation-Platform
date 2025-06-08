import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
    userId: { type: String, ref: "user" },
    name: { type: String, required: true },
    description: { type: String, required: true },
    proptype: { type: String, required: true },
    occupancy: { type: String, required: true },
    rent: { type: Number, required: true },
    deposit: { type: Number, required: true },
    gender: { type: String, required: true },
    amenities: { type: [String], required: true },
    address: { type: String, required: true },
    image: { type: [String], required: true }, // Array of image URLs
    date: { type: Date, required: true },
});

const Property = mongoose.models.Property || mongoose.model("Property", propertySchema);
export default Property;