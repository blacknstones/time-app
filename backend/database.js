import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = () => {
  const uri = process.env.DATABASE_URL;

  const options = {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  };

  mongoose.connect(uri, options);

  const database = mongoose.connection;

  database.on('connected', () => {
    console.log('MongoDB connected');
  });

  database.on('error', err => {
    console.log(err);
  });

  database.on('disconnected', () => {
    console.log('MongoDB disconnected');
  });
};

const disconnectDB = () => mongoose.disconnect();

export { connectDB, disconnectDB };
