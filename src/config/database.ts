import mongoose from 'mongoose';
import { config } from './unifiedConfig';

export async function connectDatabase(): Promise<void> {
  try {
    await mongoose.connect(config.database.uri);
    console.log('✅ MongoDB connected successfully');

    mongoose.connection.on('error', (err) => {
      console.error('❌ MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('⚠️ MongoDB disconnected');
    });
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error);
    process.exit(1);
  }
}
