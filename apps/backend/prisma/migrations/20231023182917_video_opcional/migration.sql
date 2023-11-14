-- DropForeignKey
ALTER TABLE "slides" DROP CONSTRAINT "slides_videoId_fkey";

-- AlterTable
ALTER TABLE "slides" ALTER COLUMN "videoId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "videos" ADD CONSTRAINT "videos_slideId_fkey" FOREIGN KEY ("slideId") REFERENCES "slides"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
