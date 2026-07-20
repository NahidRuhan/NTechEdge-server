import { Feedback, IFeedback } from '../models/Feedback';
import { FeedbackFilters, CreateFeedbackInput } from '../types';

export class FeedbackRepository {
  async findAll(filters?: FeedbackFilters): Promise<IFeedback[]> {
    const query: Record<string, unknown> = {};

    if (filters?.category) {
      query.category = filters.category;
    }
    if (filters?.priority) {
      query.priority = filters.priority;
    }

    return Feedback.find(query).sort({ createdAt: -1 });
  }

  async findById(id: string): Promise<IFeedback | null> {
    return Feedback.findById(id);
  }

  async create(data: CreateFeedbackInput): Promise<IFeedback> {
    return Feedback.create(data);
  }

  async updateVotes(id: string, increment: number): Promise<IFeedback | null> {
    return Feedback.findByIdAndUpdate(
      id,
      { $inc: { votes: increment } },
      { new: true }
    );
  }

  async delete(id: string): Promise<IFeedback | null> {
    return Feedback.findByIdAndDelete(id);
  }
}
