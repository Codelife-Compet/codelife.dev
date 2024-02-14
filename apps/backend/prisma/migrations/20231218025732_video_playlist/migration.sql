-- AlterTable
ALTER TABLE "videos" ADD COLUMN     "youtubePlaylistId" TEXT;

-- CreateTable
CREATE TABLE "playLists" (
    "id" TEXT NOT NULL,
    "youtubeId" TEXT NOT NULL,

    CONSTRAINT "playLists_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "videos" ADD CONSTRAINT "videos_youtubePlaylistId_fkey" FOREIGN KEY ("youtubePlaylistId") REFERENCES "playLists"("id") ON DELETE SET NULL ON UPDATE CASCADE;
