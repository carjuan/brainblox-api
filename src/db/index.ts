import mongoose from 'mongoose';
import { config } from '../app.config';

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `${config.MONGO_URI}/${config.DB_NAME}`,
    );
    console.log(`MongoDB connected! DB host: ${connection.connection.host}`);
  } catch (error) {
    console.log(`Could not connect to MongoDB: ${error}`);
    process.exit(1);
  }
};

export { connectDB };
