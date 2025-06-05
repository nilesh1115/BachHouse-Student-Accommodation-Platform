import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    _id:{ type : String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    imageUrl: { type: String, required: true },


},{minimize: false});

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
// This code defines a Mongoose schema for a User model in a MongoDB database. The schema includes fields for user ID, name, email, and image URL, with appropriate validation and uniqueness constraints. If the User model already exists, it reuses it; otherwise, it creates a new model. The `minimize: false` option allows empty objects to be stored in the database.