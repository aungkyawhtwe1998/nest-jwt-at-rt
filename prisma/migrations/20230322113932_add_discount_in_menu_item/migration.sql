/*
  Warnings:

  - You are about to drop the column `menuCategoryId` on the `menuCategories` table. All the data in the column will be lost.
  - Added the required column `name` to the `menuCategories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "menuCategories" DROP COLUMN "menuCategoryId",
ADD COLUMN     "name" TEXT NOT NULL;
