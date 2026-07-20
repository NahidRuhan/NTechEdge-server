import { z } from 'zod';

export const createFeedbackSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title cannot exceed 100 characters'),
  description: z
    .string()
    .trim()
    .min(10, 'Description must be at least 10 characters')
    .max(1000, 'Description cannot exceed 1000 characters'),
  category: z.enum(['Bug', 'Feature', 'Improvement']),
  priority: z.enum(['Low', 'Medium', 'High']),
});

export const feedbackFilterSchema = z.object({
  category: z.enum(['Bug', 'Feature', 'Improvement']).optional(),
  priority: z.enum(['Low', 'Medium', 'High']).optional(),
});

export type CreateFeedbackDto = z.infer<typeof createFeedbackSchema>;
export type FeedbackFilterDto = z.infer<typeof feedbackFilterSchema>;
