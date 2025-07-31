import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, required: true },
    gender: { type: String, required: true },
    rent: { type: Number, required: true },
    deposit: { type: Number, required: true },
    occupancy: { type: String, required: true },
    image: [{ type: String }],
    amenities: [{ type: String }],
    rules: [{ type: String }],
    ownerName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    date: { type: Date, default: Date.now },
    // Additional fields for property details
    available: {
        type: Boolean,
        default: true,
    },
    distance: {
        type: String,
        default: '0',
    },
    furnishing: {
        type: String,
        default: 'Furnished',
    },
    ownerPhone: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: false,
    },
    latitude: {
        type: Number,
        required: false,
    },
    longitude: {
        type: Number,
        required: false,
    },
    googleMapsLink: {
        type: String,
        required: false,
    },
});

const Property = mongoose.models.Property || mongoose.model("Property", propertySchema);
export default Property;