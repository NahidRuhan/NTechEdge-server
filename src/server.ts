import { config } from './config/unifiedConfig';
import { connectDatabase } from './config/database';
import app from './app';

async function startServer(): Promise<void> {
  try {
    await connectDatabase();

    app.listen(config.server.port, () => {
      console.log(`🚀 Server running on port ${config.server.port}`);
      console.log(`📡 API available at http://localhost:${config.server.port}/api`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
