/*
  Warnings:

  - You are about to drop the column `phone` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `subject` on the `messages` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `long_description` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `short_description` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `technology` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `resumes` table. All the data in the column will be lost.
  - You are about to drop the column `level` on the `skills` table. All the data in the column will be lost.
  - You are about to drop the `Blog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `authors` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `profiles` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_image` to the `projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pdfUrl` to the `resumes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `resumes` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BlogStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'USER');

-- DropForeignKey
ALTER TABLE "Blog" DROP CONSTRAINT "Blog_authorId_fkey";

-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_authorId_fkey";

-- AlterTable
ALTER TABLE "messages" DROP COLUMN "phone",
DROP COLUMN "subject";

-- AlterTable
ALTER TABLE "projects" DROP COLUMN "image",
DROP COLUMN "long_description",
DROP COLUMN "short_description",
DROP COLUMN "technology",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "product_image" TEXT NOT NULL,
ADD COLUMN     "technologies" TEXT[];

-- AlterTable
ALTER TABLE "resumes" DROP COLUMN "link",
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "pdfUrl" TEXT NOT NULL,
ADD COLUMN     "publicId" TEXT,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "skills" DROP COLUMN "level";

-- DropTable
DROP TABLE "Blog";

-- DropTable
DROP TABLE "authors";

-- DropTable
DROP TABLE "profiles";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profile_image" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blogs" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT,
    "short_description" TEXT NOT NULL,
    "blog_image" TEXT NOT NULL,
    "status" "BlogStatus" NOT NULL DEFAULT 'DRAFT',
    "publishDate" TIMESTAMP(3),
    "tags" TEXT[],
    "authorId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "blogs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blogs" ADD CONSTRAINT "blogs_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
