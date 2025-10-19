import { Request, Response, NextFunction } from 'express';
import itemRepository from '../repositories/itemRepository';
import { createItemSchema, updateItemSchema, CategoryEnum } from '../dtos/itemDtos';

class ItemController {
  // Create a new item
  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const parsed = createItemSchema.parse(req.body);
      const item = await itemRepository.create(parsed);
      res.status(201).json(item);
    } catch (err) {
      next(err);
    }
  }

  // Get all items
  async findAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { category, checked } = req.query;

      let items;
      
      if (category) {
        const validCategory = CategoryEnum.parse(category);
        items = await itemRepository.findByCategory(validCategory);
      } else if (checked !== undefined) {
        items = await itemRepository.findChecked(checked === 'true');
      } else {
        items = await itemRepository.findAll();
      }

      res.json(items);
    } catch (err) {
      next(err);
    }
  }

  // Get item by ID
  async findById(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id = Number(req.params.id);
    try {
      const item = await itemRepository.findById(id);
      if (!item) {
        res.status(404).json({ error: 'Item not found' });
        return;
      }
      res.json(item);
    } catch (err) {
      next(err);
    }
  }

  // Update an item
  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id = Number(req.params.id);
    try {
      const parsed = updateItemSchema.parse(req.body);
      const item = await itemRepository.update(id, parsed);
      res.json(item);
    } catch (err) {
      next(err);
    }
  }

  // Delete an item
  async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id = Number(req.params.id);
    try {
      await itemRepository.delete(id);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }

  // Delete all items
  async deleteAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const count = await itemRepository.deleteAll();
      res.json({ message: `${count} items deleted successfully` });
    } catch (err) {
      next(err);
    }
  }

  // Toggle checked status
  async toggleChecked(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id = Number(req.params.id);
    try {
      const currentItem = await itemRepository.findById(id);
      if (!currentItem) {
        res.status(404).json({ error: 'Item not found' });
        return;
      }

      const updatedItem = await itemRepository.update(id, {
        checked: !currentItem.checked
      });
      
      res.json(updatedItem);
    } catch (err) {
      next(err);
    }
  }
}

export default new ItemController();
