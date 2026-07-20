import app from '../src/app';
import { connectDatabase } from '../src/config/database';
import mongoose from 'mongoose';

// Ensure database connection is established in the serverless environment
if (mongoose.connection.readyState !== 1) {
  connectDatabase().catch(console.error);
}

export default app;
