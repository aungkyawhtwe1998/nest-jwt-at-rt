/*
  Warnings:

  - Added the required column `discount` to the `menuItems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "menuItems" ADD COLUMN     "discount" INTEGER NOT NULL;
