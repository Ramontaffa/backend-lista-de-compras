import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

function errorHandler(err: Error | ZodError, req: Request, res: Response, next: NextFunction): void {
  // zod errors
  if (err instanceof ZodError) {
    res.status(400).json({ error: 'Validation failed', details: err.issues });
    return;
  }
  console.error(err);
  res.status(500).json({ error: err.message || 'Internal Server Error' });
}

export default errorHandler;
