/*
  Warnings:

  - Added the required column `printSettingsId` to the `Prints` table without a default value. This is not possible if the table is not empty.
  - Added the required column `printerId` to the `Prints` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Prints" ADD COLUMN     "printSettingsId" TEXT NOT NULL,
ADD COLUMN     "printerId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserDesign" ADD COLUMN     "price" DECIMAL(65,30) NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Printers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "location" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Printers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PrintersPrintSettings" (
    "printersId" TEXT NOT NULL,
    "printSettingsId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PrintSettings" (
    "id" TEXT NOT NULL,
    "params" JSONB NOT NULL,

    CONSTRAINT "PrintSettings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PrintersPrintSettings_printersId_printSettingsId_key" ON "PrintersPrintSettings"("printersId", "printSettingsId");

-- AddForeignKey
ALTER TABLE "Prints" ADD CONSTRAINT "Prints_printSettingsId_fkey" FOREIGN KEY ("printSettingsId") REFERENCES "PrintSettings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prints" ADD CONSTRAINT "Prints_printerId_fkey" FOREIGN KEY ("printerId") REFERENCES "Printers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrintersPrintSettings" ADD CONSTRAINT "PrintersPrintSettings_printersId_fkey" FOREIGN KEY ("printersId") REFERENCES "Printers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrintersPrintSettings" ADD CONSTRAINT "PrintersPrintSettings_printSettingsId_fkey" FOREIGN KEY ("printSettingsId") REFERENCES "PrintSettings"("id") ON DELETE CASCADE ON UPDATE CASCADE;
