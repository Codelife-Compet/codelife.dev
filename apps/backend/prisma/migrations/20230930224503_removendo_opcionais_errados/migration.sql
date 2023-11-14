/*
  Warnings:

  - Made the column `islandId` on table `levels` required. This step will fail if there are existing NULL values in that column.
  - Made the column `levelId` on table `slides` required. This step will fail if there are existing NULL values in that column.
  - Made the column `slideId` on table `userCodes` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "levels" DROP CONSTRAINT "levels_islandId_fkey";

-- DropForeignKey
ALTER TABLE "slides" DROP CONSTRAINT "slides_levelId_fkey";

-- DropForeignKey
ALTER TABLE "userCodes" DROP CONSTRAINT "userCodes_slideId_fkey";

-- AlterTable
ALTER TABLE "levels" ALTER COLUMN "islandId" SET NOT NULL;

-- AlterTable
ALTER TABLE "slides" ALTER COLUMN "levelId" SET NOT NULL;

-- AlterTable
ALTER TABLE "userCodes" ALTER COLUMN "slideId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "userCodes" ADD CONSTRAINT "userCodes_slideId_fkey" FOREIGN KEY ("slideId") REFERENCES "slides"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "slides" ADD CONSTRAINT "slides_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "levels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "levels" ADD CONSTRAINT "levels_islandId_fkey" FOREIGN KEY ("islandId") REFERENCES "islands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
