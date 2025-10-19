import { z } from 'zod';

// category enum schema
export const CategoryEnum = z.enum(['Bebida', 'Carne', 'Padaria', 'Legume', 'Fruta']);

// schema for creating item
export const createItemSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  quantity: z.number().int().positive('Quantidade deve ser positiva'),
  category: CategoryEnum,
  checked: z.boolean().optional().default(false),
});

// schema for updating item
export const updateItemSchema = z.object({
  name: z.string().min(1).optional(),
  quantity: z.number().int().positive().optional(),
  category: CategoryEnum.optional(),
  checked: z.boolean().optional(),
});