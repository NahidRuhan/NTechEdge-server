import { Request, Response } from 'express';
import { BaseController } from './BaseController';
import { FeedbackService } from '../services/feedbackService';
import { feedbackFilterSchema } from '../validators/feedback.schema';

export class FeedbackController extends BaseController {
  constructor(private readonly feedbackService: FeedbackService) {
    super();
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const filters = feedbackFilterSchema.parse(req.query);
      const feedback = await this.feedbackService.getAllFeedback(filters);
      this.handleSuccess(res, feedback);
    } catch (error) {
      this.handleError(error, res, 'FeedbackController.getAll');
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const feedback = await this.feedbackService.createFeedback(req.body);
      this.handleSuccess(res, feedback, 201);
    } catch (error) {
      this.handleError(error, res, 'FeedbackController.create');
    }
  }

  async upvote(req: Request, res: Response): Promise<void> {
    try {
      const feedback = await this.feedbackService.upvote(req.params.id as string);
      this.handleSuccess(res, feedback);
    } catch (error) {
      this.handleError(error, res, 'FeedbackController.upvote');
    }
  }

  async downvote(req: Request, res: Response): Promise<void> {
    try {
      const feedback = await this.feedbackService.downvote(req.params.id as string);
      this.handleSuccess(res, feedback);
    } catch (error) {
      this.handleError(error, res, 'FeedbackController.downvote');
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      await this.feedbackService.deleteFeedback(req.params.id as string);
      this.handleSuccess(res, { message: 'Feedback deleted successfully' });
    } catch (error) {
      this.handleError(error, res, 'FeedbackController.delete');
    }
  }
}
