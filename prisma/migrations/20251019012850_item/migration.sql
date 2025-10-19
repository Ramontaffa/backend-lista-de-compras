-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Bebida', 'Carne', 'Padaria', 'Legume', 'Fruta');

-- CreateTable
CREATE TABLE "item" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "category" "Category" NOT NULL,
    "checked" BOOLEAN DEFAULT false,

    CONSTRAINT "item_pkey" PRIMARY KEY ("id")
);
