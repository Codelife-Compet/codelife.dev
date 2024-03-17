-- CreateTable
CREATE TABLE "inouts" (
    "id" TEXT NOT NULL,
    "input" TEXT NOT NULL,
    "output" TEXT NOT NULL,
    "exerciseId" TEXT NOT NULL,

    CONSTRAINT "inouts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "inouts" ADD CONSTRAINT "inouts_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "exercises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
