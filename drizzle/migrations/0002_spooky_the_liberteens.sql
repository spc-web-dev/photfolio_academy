ALTER TABLE "projectsTable" ALTER COLUMN "name" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "projectsTable" ALTER COLUMN "github_repo" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "projectsTable" ALTER COLUMN "visit_url" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "skillsTable" ALTER COLUMN "title" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "videosTable" ALTER COLUMN "url" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_password_unique" UNIQUE("password");--> statement-breakpoint
ALTER TABLE "videosTable" ADD CONSTRAINT "videosTable_url_unique" UNIQUE("url");