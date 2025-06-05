import mongoose from "mongoose";

let cached =global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {

    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/Bachhouse`, opts).then((mongoose) => {
            return mongoose;
        });
    }


    cached.conn = await cached.promise;
    return cached.conn;
}
export default connectDB;
// This code connects to a MongoDB database using Mongoose. It checks if a connection already exists and reuses it if available, otherwise it creates a new connection. The connection string is constructed using an environment variable for the MongoDB URI, appending "/Bachhouse" to it.