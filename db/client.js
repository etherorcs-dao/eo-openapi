import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

export default async () => {
  // Here is where we check if there is an active connection.
  if (mongoose.connections[0].readyState) return;

  try {
    // Here is where we create a new connection.
    await mongoose.connect(uri);
    console.info('Connected to database.');
  } catch (error) {
    console.error('DB error', error);
  }
};
