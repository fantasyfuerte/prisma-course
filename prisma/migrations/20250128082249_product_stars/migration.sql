/*
  Warnings:

  - Added the required column `stars` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "stars" INTEGER NOT NULL;
