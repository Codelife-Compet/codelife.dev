/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `exercises` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "exercises_name_key" ON "exercises"("name");
