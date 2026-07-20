import { FeedbackRepository } from '../repositories/FeedbackRepository';
import { createFeedbackSchema } from '../validators/feedback.schema';
import { IFeedback } from '../models/Feedback';
import { FeedbackFilters, CreateFeedbackInput } from '../types';

export class FeedbackService {
  constructor(private readonly feedbackRepository: FeedbackRepository) {}

  async getAllFeedback(filters?: FeedbackFilters): Promise<IFeedback[]> {
    return this.feedbackRepository.findAll(filters);
  }

  async createFeedback(data: CreateFeedbackInput): Promise<IFeedback> {
    const validated = createFeedbackSchema.parse(data);
    return this.feedbackRepository.create(validated as CreateFeedbackInput);
  }

  async upvote(id: string): Promise<IFeedback> {
    const feedback = await this.feedbackRepository.updateVotes(id, 1);
    if (!feedback) {
      throw new Error('Feedback not found');
    }
    return feedback;
  }

  async downvote(id: string): Promise<IFeedback> {
    const feedback = await this.feedbackRepository.updateVotes(id, -1);
    if (!feedback) {
      throw new Error('Feedback not found');
    }
    return feedback;
  }

  async deleteFeedback(id: string): Promise<IFeedback> {
    const feedback = await this.feedbackRepository.delete(id);
    if (!feedback) {
      throw new Error('Feedback not found');
    }
    return feedback;
  }
}
