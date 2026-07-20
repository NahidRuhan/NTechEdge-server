import express from 'express';
import cors from 'cors';
import { config } from './config/unifiedConfig';
import feedbackRoutes from './routes/feedbackRoutes';
import { errorHandler } from './middleware/errorHandler';

const app = express();

// Middleware
app.use(cors({
  origin: config.cors.clientUrl,
  credentials: true,
}));
app.use(express.json());

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes
app.use(feedbackRoutes);

// Error handler (must be last)
app.use(errorHandler);

export default app;
