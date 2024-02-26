/*
  Warnings:

  - A unique constraint covering the columns `[topic]` on the table `exercisesLists` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "exercisesLists_topic_key" ON "exercisesLists"("topic");
