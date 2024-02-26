-- CreateTable
CREATE TABLE "languageExercisesLists" (
    "id" TEXT NOT NULL,
    "language" TEXT NOT NULL,

    CONSTRAINT "languageExercisesLists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exercisesLists" (
    "id" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "languageExercisesListId" TEXT NOT NULL,

    CONSTRAINT "exercisesLists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exercises" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "exercisesListId" TEXT NOT NULL,

    CONSTRAINT "exercises_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exerciseStatus" (
    "id" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "exerciseId" INTEGER NOT NULL,

    CONSTRAINT "exerciseStatus_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "languageExercisesLists_language_key" ON "languageExercisesLists"("language");

-- CreateIndex
CREATE UNIQUE INDEX "exercisesLists_languageExercisesListId_key" ON "exercisesLists"("languageExercisesListId");

-- CreateIndex
CREATE UNIQUE INDEX "exercises_exercisesListId_key" ON "exercises"("exercisesListId");

-- AddForeignKey
ALTER TABLE "exercisesLists" ADD CONSTRAINT "exercisesLists_languageExercisesListId_fkey" FOREIGN KEY ("languageExercisesListId") REFERENCES "languageExercisesLists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exercises" ADD CONSTRAINT "exercises_exercisesListId_fkey" FOREIGN KEY ("exercisesListId") REFERENCES "exercisesLists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exerciseStatus" ADD CONSTRAINT "exerciseStatus_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "exercises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
