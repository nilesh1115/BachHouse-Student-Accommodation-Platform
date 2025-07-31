import mongoose from "mongoose";

let cached = global.mongoose;
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

    // Try to connect to the remote database, fallback to local if it fails
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
    
    cached.promise = mongoose.connect(`${mongoUri}/Bachhouse`, opts)
      .then((mongoose) => {
        console.log('Connected to MongoDB successfully');
        return mongoose;
      })
      .catch((error) => {
        console.error('Failed to connect to MongoDB:', error.message);
        // Fallback to local MongoDB if remote fails
        console.log('Attempting to connect to local MongoDB...');
        return mongoose.connect('mongodb://localhost:27017/Bachhouse', opts);
      });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    console.error('Database connection failed:', error);
    throw error;
  }
}

export default connectDB;