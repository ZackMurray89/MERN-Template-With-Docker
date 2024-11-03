import { Request, Response, NextFunction } from 'express';

import { AppError } from './errorHandler.middleware';

export const routeNotFound = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next(new AppError(`Route Not Found: ${req.originalUrl}`, 404));
};
