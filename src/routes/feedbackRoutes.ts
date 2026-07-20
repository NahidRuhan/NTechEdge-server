import { Router } from 'express';
import { FeedbackController } from '../controllers/FeedbackController';
import { FeedbackService } from '../services/feedbackService';
import { FeedbackRepository } from '../repositories/FeedbackRepository';
import { asyncErrorWrapper } from '../middleware/asyncErrorWrapper';

const router = Router();

// Dependency injection
const feedbackRepository = new FeedbackRepository();
const feedbackService = new FeedbackService(feedbackRepository);
const feedbackController = new FeedbackController(feedbackService);

// Routes
router.get(
  '/api/feedback',
  asyncErrorWrapper((req, res, next) => feedbackController.getAll(req, res))
);

router.post(
  '/api/feedback',
  asyncErrorWrapper((req, res, next) => feedbackController.create(req, res))
);

router.patch(
  '/api/feedback/:id/upvote',
  asyncErrorWrapper((req, res, next) => feedbackController.upvote(req, res))
);

router.patch(
  '/api/feedback/:id/downvote',
  asyncErrorWrapper((req, res, next) => feedbackController.downvote(req, res))
);

router.delete(
  '/api/feedback/:id',
  asyncErrorWrapper((req, res, next) => feedbackController.delete(req, res))
);

export default router;
