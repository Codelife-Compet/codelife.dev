/*
  Warnings:

  - You are about to drop the column `linkedin_token` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[google_token]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[facebook_token]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "users_linkedin_token_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "linkedin_token",
ADD COLUMN     "facebook_token" TEXT,
ADD COLUMN     "google_token" TEXT,
ADD COLUMN     "password" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX "users_google_token_key" ON "users"("google_token");

-- CreateIndex
CREATE UNIQUE INDEX "users_facebook_token_key" ON "users"("facebook_token");
