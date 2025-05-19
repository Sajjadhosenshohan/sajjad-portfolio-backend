/*
  Warnings:

  - You are about to drop the column `product_image` on the `projects` table. All the data in the column will be lost.
  - Added the required column `project_image` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "projects" DROP COLUMN "product_image",
ADD COLUMN     "project_image" TEXT NOT NULL;
