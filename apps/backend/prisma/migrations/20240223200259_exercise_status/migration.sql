/*
  Warnings:

  - The primary key for the `exercises` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "exerciseStatus" DROP CONSTRAINT "exerciseStatus_exerciseId_fkey";

-- AlterTable
ALTER TABLE "exerciseStatus" ALTER COLUMN "exerciseId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "exercises" DROP CONSTRAINT "exercises_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "exercises_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "exercises_id_seq";

-- AddForeignKey
ALTER TABLE "exerciseStatus" ADD CONSTRAINT "exerciseStatus_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "exercises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
