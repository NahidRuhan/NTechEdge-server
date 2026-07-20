import { Response } from 'express';

export abstract class BaseController {
  protected handleSuccess<T>(res: Response, data: T, statusCode: number = 200): void {
    res.status(statusCode).json({
      success: true,
      data,
    });
  }

  protected handleError(error: unknown, res: Response, context: string): void {
    console.error(`[${context}] Error:`, error);

    if (error instanceof Error) {
      const statusCode = error.message.includes('not found') ? 404 : 400;
      res.status(statusCode).json({
        success: false,
        error: error.message,
      });
      return;
    }

    res.status(500).json({
      success: false,
      error: 'An unexpected error occurred',
    });
  }
}
