CREATE TYPE "public"."skill_type" AS ENUM('programming', 'networking');--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projectsTable" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NOT NULL,
	"skill_id" uuid NOT NULL,
	"image" text NOT NULL,
	"github_repo" text DEFAULT '' NOT NULL,
	"visit_url" text DEFAULT '' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "skillsTable" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"skill_type" "skill_type" NOT NULL,
	"title" varchar NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "skillsTable_title_unique" UNIQUE("title")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "videosTable" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title_en" varchar(255) NOT NULL,
	"title_kh" varchar(255) NOT NULL,
	"descriptions_en" text DEFAULT '',
	"descriptions_kh" text DEFAULT '',
	"url" text,
	"skill_id" uuid NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "videosTable_url_unique" UNIQUE("url")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projectsTable" ADD CONSTRAINT "projectsTable_skill_id_skillsTable_id_fk" FOREIGN KEY ("skill_id") REFERENCES "public"."skillsTable"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "videosTable" ADD CONSTRAINT "videosTable_skill_id_skillsTable_id_fk" FOREIGN KEY ("skill_id") REFERENCES "public"."skillsTable"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
