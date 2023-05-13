/*
  Warnings:

  - You are about to drop the `Example` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Example";

-- CreateTable
CREATE TABLE "UserDesign" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "description" TEXT,
    "name" TEXT,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "UserDesign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Prints" (
    "id" TEXT NOT NULL,
    "userDesignId" TEXT NOT NULL,
    "isFulfilled" BOOLEAN NOT NULL DEFAULT false,
    "isCancelled" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Prints_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PrintsImages" (
    "printsId" TEXT NOT NULL,
    "imageId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "UserDesignModels" (
    "id" TEXT NOT NULL,
    "userDesignId" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "UserDesignModels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserDesignImages" (
    "userDesignId" TEXT NOT NULL,
    "imageId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Images" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PrintsImages_printsId_imageId_key" ON "PrintsImages"("printsId", "imageId");

-- CreateIndex
CREATE UNIQUE INDEX "UserDesignImages_userDesignId_imageId_key" ON "UserDesignImages"("userDesignId", "imageId");

-- AddForeignKey
ALTER TABLE "UserDesign" ADD CONSTRAINT "UserDesign_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prints" ADD CONSTRAINT "Prints_userDesignId_fkey" FOREIGN KEY ("userDesignId") REFERENCES "UserDesign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Prints" ADD CONSTRAINT "Prints_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrintsImages" ADD CONSTRAINT "PrintsImages_printsId_fkey" FOREIGN KEY ("printsId") REFERENCES "Prints"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PrintsImages" ADD CONSTRAINT "PrintsImages_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Images"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDesignModels" ADD CONSTRAINT "UserDesignModels_userDesignId_fkey" FOREIGN KEY ("userDesignId") REFERENCES "UserDesign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDesignImages" ADD CONSTRAINT "UserDesignImages_userDesignId_fkey" FOREIGN KEY ("userDesignId") REFERENCES "UserDesign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDesignImages" ADD CONSTRAINT "UserDesignImages_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Images"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
