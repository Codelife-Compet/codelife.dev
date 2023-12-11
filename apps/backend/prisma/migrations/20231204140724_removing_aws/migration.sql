/*
  Warnings:

  - You are about to drop the column `distributionName` on the `videos` table. All the data in the column will be lost.
  - You are about to drop the column `videoKey` on the `videos` table. All the data in the column will be lost.
  - Added the required column `youtubeId` to the `videos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "videos" DROP COLUMN "distributionName",
DROP COLUMN "videoKey",
ADD COLUMN     "youtubeId" TEXT NOT NULL;
