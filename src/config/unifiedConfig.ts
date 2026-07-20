import dotenv from 'dotenv';
dotenv.config();

export const config = {
  server: {
    port: parseInt(process.env.PORT || '5000', 10),
  },
  database: {
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017/feedback-board',
  },
  cors: {
    clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',
  },
} as const;
