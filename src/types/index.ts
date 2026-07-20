import { Request, Response, NextFunction } from 'express';

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export type FeedbackCategory = 'Bug' | 'Feature' | 'Improvement';
export type FeedbackPriority = 'Low' | 'Medium' | 'High';

export interface FeedbackFilters {
  category?: FeedbackCategory;
  priority?: FeedbackPriority;
}

export interface CreateFeedbackInput {
  title: string;
  description: string;
  category: FeedbackCategory;
  priority: FeedbackPriority;
}

export type AsyncRequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;
