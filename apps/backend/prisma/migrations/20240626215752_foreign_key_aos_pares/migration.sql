/*
  Warnings:

  - A unique constraint covering the columns `[trailId,name]` on the table `islands` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[islandId,name]` on the table `levels` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[levelId,name]` on the table `slides` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "islands_trailId_name_key" ON "islands"("trailId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "levels_islandId_name_key" ON "levels"("islandId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "slides_levelId_name_key" ON "slides"("levelId", "name");
