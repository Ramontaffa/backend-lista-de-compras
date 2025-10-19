import prisma from '../database/prismaClient';
import { item, Prisma, Category } from '../../generated/prisma';

class ItemRepository {
  // CRUD operations for 'item' entity

  // Create a new item
  async create(data: Prisma.itemCreateInput): Promise<item> {
    return prisma.item.create({ data });
  }

  // Get item by ID
  async findById(id: number): Promise<item | null> {
    return prisma.item.findUnique({ where: { id } });
  }

  // Get all items
  async findAll(): Promise<item[]> {
    return prisma.item.findMany({
      orderBy: { id: 'desc' }
    });
  }

  // Get items by category
  async findByCategory(category: Category): Promise<item[]> {
    return prisma.item.findMany({ 
      where: { category },
      orderBy: { name: 'asc' }
    });
  }

  // Get items by checked status
  async findChecked(checked: boolean): Promise<item[]> {
    return prisma.item.findMany({ 
      where: { checked },
      orderBy: { name: 'asc' }
    });
  }

  // Update an item
  async update(id: number, data: Prisma.itemUpdateInput): Promise<item> {
    return prisma.item.update({ 
      where: { id }, 
      data 
    });
  }

  // Delete an item
  async delete(id: number): Promise<item> {
    return prisma.item.delete({ where: { id } });
  }

  // Delete all items
  async deleteAll(): Promise<number> {
    const result = await prisma.item.deleteMany();
    return result.count;
  }
}

export default new ItemRepository();
