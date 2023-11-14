/*
  Warnings:

  - A unique constraint covering the columns `[trailId]` on the table `islands` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `trailId` to the `islands` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "islands" ADD COLUMN     "trailId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "trails" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "theme" TEXT NOT NULL,

    CONSTRAINT "trails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "trails_name_key" ON "trails"("name");

-- CreateIndex
CREATE UNIQUE INDEX "islands_trailId_key" ON "islands"("trailId");

-- AddForeignKey
ALTER TABLE "islands" ADD CONSTRAINT "islands_trailId_fkey" FOREIGN KEY ("trailId") REFERENCES "trails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
