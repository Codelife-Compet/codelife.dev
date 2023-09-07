/*
  Warnings:

  - You are about to drop the column `password_hash` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[github_token]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[linkedin_token]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `github_token` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linkedin_token` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "password_hash",
ADD COLUMN     "github_token" TEXT NOT NULL,
ADD COLUMN     "linkedin_token" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_github_token_key" ON "users"("github_token");

-- CreateIndex
CREATE UNIQUE INDEX "users_linkedin_token_key" ON "users"("linkedin_token");
