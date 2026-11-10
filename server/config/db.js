const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error("MONGODB_URI is not configured.");
    }

    await mongoose.connect(uri);
    console.log("MongoDB Atlas Connected Successfully");
  } catch (error) {
    console.error("MongoDB Error:", error.message);
    throw error;
  }
};

module.exports = connectDB;