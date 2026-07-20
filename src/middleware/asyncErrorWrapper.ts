import { Request, Response, NextFunction } from 'express';
import { AsyncRequestHandler } from '../types';

export function asyncErrorWrapper(fn: AsyncRequestHandler) {
  return (req: Request, res: Response, next: NextFunction): void => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}
