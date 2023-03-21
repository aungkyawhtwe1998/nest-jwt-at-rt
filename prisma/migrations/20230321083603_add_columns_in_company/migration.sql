-- AlterTable
ALTER TABLE "companies" ADD COLUMN     "address" TEXT NOT NULL DEFAULT 'Default',
ADD COLUMN     "coverPhoto" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "currency" TEXT NOT NULL DEFAULT '฿',
ADD COLUMN     "imageUrl" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "name" TEXT NOT NULL DEFAULT 'Default',
ADD COLUMN     "serviceChargeRate" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "taxRate" INTEGER NOT NULL DEFAULT 0;
