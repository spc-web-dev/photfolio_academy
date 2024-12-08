ALTER TYPE "public"."project_type" RENAME TO "skill_type";--> statement-breakpoint
ALTER TYPE "public"."user_role" RENAME TO "role";--> statement-breakpoint
ALTER TABLE "skillsTable" RENAME COLUMN "type" TO "skill_type";