/*
  Warnings:

  - Added the required column `videoId` to the `slides` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "slides" ADD COLUMN     "videoId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "videos" (
    "id" TEXT NOT NULL,
    "videoKey" TEXT NOT NULL,
    "distributionName" TEXT NOT NULL,
    "slidelId" TEXT NOT NULL,
    "slideId" TEXT NOT NULL,

    CONSTRAINT "videos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "videos_slideId_key" ON "videos"("slideId");

-- AddForeignKey
ALTER TABLE "slides" ADD CONSTRAINT "slides_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "videos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
