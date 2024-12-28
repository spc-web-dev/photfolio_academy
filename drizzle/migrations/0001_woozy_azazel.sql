ALTER TABLE "users" DROP CONSTRAINT "users_password_unique";--> statement-breakpoint
ALTER TABLE "videosTable" DROP CONSTRAINT "videosTable_url_unique";--> statement-breakpoint
ALTER TABLE "projectsTable" ALTER COLUMN "name" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "projectsTable" ALTER COLUMN "github_repo" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "projectsTable" ALTER COLUMN "visit_url" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "skillsTable" ALTER COLUMN "title" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "videosTable" ALTER COLUMN "url" SET DEFAULT '';