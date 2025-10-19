/*
  Warnings:

  - Added the required column `unit` to the `item` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Unit" AS ENUM ('kg', 'l', 'ptc', 'un');

-- AlterTable
ALTER TABLE "item" ADD COLUMN     "unit" "Unit" NOT NULL;
