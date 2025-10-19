import { Request, Response, NextFunction } from 'express';
import userRepository from '../repositories/userRepository';
import { createUserSchema, updateUserSchema } from '../dtos/userDtos';

class UserController {
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const parsed = createUserSchema.parse(req.body);
      const existing = await userRepository.findByEmail(parsed.email);
      if (existing) {
        res.status(409).json({ error: 'Email already in use' });
        return;
      }
      const user = await userRepository.create(parsed);
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const users = await userRepository.findAll();
      res.json(users);
    } catch (err) {
      next(err);
    }
  }

  async findById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = await userRepository.findById(req.params.id);
      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      res.json(user);
    } catch (err) {
      next(err);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const parsed = updateUserSchema.parse(req.body);
      const user = await userRepository.update(req.params.id, parsed);
      res.json(user);
    } catch (err) {
      next(err);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await userRepository.delete(req.params.id);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}

export default new UserController();
