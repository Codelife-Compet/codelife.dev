-- AlterTable
ALTER TABLE "users" ALTER COLUMN "github_token" DROP NOT NULL,
ALTER COLUMN "linkedin_token" DROP NOT NULL;
