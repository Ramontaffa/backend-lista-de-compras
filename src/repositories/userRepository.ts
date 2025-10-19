import prisma from '../database/prismaClient';
import { User, Prisma } from '../../generated/prisma';

class UserRepository {
  async create(data: Prisma.UserCreateInput): Promise<User> {
    return prisma.user.create({ data });
  }

  async findById(id: number | string): Promise<User | null> {
    return prisma.user.findUnique({ where: { id: Number(id) } });
  }

  async findAll(): Promise<User[]> {
    return prisma.user.findMany();
  }

  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({ where: { email } });
  }

  async update(id: number | string, data: Prisma.UserUpdateInput): Promise<User> {
    return prisma.user.update({ where: { id: Number(id) }, data });
  }

  async delete(id: number | string): Promise<User> {
    return prisma.user.delete({ where: { id: Number(id) } });
  }
}

export default new UserRepository();
