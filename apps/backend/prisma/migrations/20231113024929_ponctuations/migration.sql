-- CreateTable
CREATE TABLE "ponctuations" (
    "id" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "userName" TEXT NOT NULL,
    "levelId" TEXT NOT NULL,

    CONSTRAINT "ponctuations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ponctuations" ADD CONSTRAINT "ponctuations_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "levels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
