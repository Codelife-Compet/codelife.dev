/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `islands` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "islands_name_key" ON "islands"("name");
