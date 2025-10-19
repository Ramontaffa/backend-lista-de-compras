import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();

prisma
  .$connect()
  .then(() => {
    console.log('📦 Successfully connected with database');
  })
  .catch((error) => {
    console.log('❌ Error connecting to database', error);
  });

export default prisma;