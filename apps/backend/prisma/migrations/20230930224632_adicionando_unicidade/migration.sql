/*
  Warnings:

  - A unique constraint covering the columns `[islandId]` on the table `levels` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[levelId]` on the table `slides` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slideId]` on the table `userCodes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "levels_islandId_key" ON "levels"("islandId");

-- CreateIndex
CREATE UNIQUE INDEX "slides_levelId_key" ON "slides"("levelId");

-- CreateIndex
CREATE UNIQUE INDEX "userCodes_slideId_key" ON "userCodes"("slideId");
