/*
  Warnings:

  - A unique constraint covering the columns `[index]` on the table `islands` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[index]` on the table `levels` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[index]` on the table `slides` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "islands" ADD COLUMN     "index" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "levels" ADD COLUMN     "index" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "slides" ADD COLUMN     "index" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "islands_index_key" ON "islands"("index");

-- CreateIndex
CREATE UNIQUE INDEX "levels_index_key" ON "levels"("index");

-- CreateIndex
CREATE UNIQUE INDEX "slides_index_key" ON "slides"("index");
