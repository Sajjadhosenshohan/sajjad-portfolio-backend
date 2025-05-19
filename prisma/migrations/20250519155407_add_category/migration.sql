/*
  Warnings:

  - Added the required column `category` to the `skills` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "skills" ADD COLUMN     "category" TEXT NOT NULL;
