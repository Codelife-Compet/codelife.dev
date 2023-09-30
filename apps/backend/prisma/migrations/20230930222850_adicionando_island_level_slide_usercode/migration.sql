-- CreateTable
CREATE TABLE "userCodes" (
    "id" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "code" TEXT DEFAULT '',
    "slideId" TEXT,

    CONSTRAINT "userCodes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "slides" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "baseCode" TEXT NOT NULL,
    "levelId" TEXT,

    CONSTRAINT "slides_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "levels" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "theme" TEXT NOT NULL,
    "islandId" TEXT,

    CONSTRAINT "levels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "islands" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "theme" TEXT NOT NULL,

    CONSTRAINT "islands_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "userCodes" ADD CONSTRAINT "userCodes_slideId_fkey" FOREIGN KEY ("slideId") REFERENCES "slides"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "slides" ADD CONSTRAINT "slides_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "levels"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "levels" ADD CONSTRAINT "levels_islandId_fkey" FOREIGN KEY ("islandId") REFERENCES "islands"("id") ON DELETE SET NULL ON UPDATE CASCADE;
