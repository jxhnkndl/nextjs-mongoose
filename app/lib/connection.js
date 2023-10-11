import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Only try to connect if not already connected
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('Connected to MongoDB! 🚀');
    }
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;