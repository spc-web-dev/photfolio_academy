ALTER TABLE "videosTable" ALTER COLUMN "url" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "image_url" varchar DEFAULT '';