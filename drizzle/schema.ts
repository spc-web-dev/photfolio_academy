import { relations } from "drizzle-orm";
import {
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

// table

export const userRole = pgEnum("role", ["admin", "student", "viewer"]);

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  username: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar().unique().notNull(),
  role: userRole("role").notNull().default("viewer"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const skillsType = pgEnum("skill_type", [
  "programming",
  "networking",
]);

export const skillsTable = pgTable("skillsTable", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  skillType: skillsType("skill_type").notNull(),
  title: varchar("title").notNull().unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const projectsTable = pgTable("projectsTable", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name").notNull(),
  skillId: integer("skill_id")
    .notNull()
    .references(() => skillsTable.id),
  image: text("image").notNull(),
  githubRep: text("github_repo").notNull().default(""),
  visitUrl: text("visit_url").notNull().default(""),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const videosTable = pgTable("videosTable", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  titleEn: varchar("title_en", { length: 255 }).notNull(),
  titleKh: varchar("title_kh", { length: 255 }).notNull(),
  descriptionsEn: text("descriptions_en").default(""),
  descriptionsKh: text("descriptions_kh").default(""),
  url: text("url").unique(),
  skillId: integer("skill_id")
    .notNull()
    .references(() => skillsTable.id),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

// relationship

export const skillsTableRelations = relations(skillsTable, ({ many }) => ({
  videos: many(videosTable),
  projects: many(projectsTable),
}));

export const projectsTableRelations = relations(projectsTable, ({ one }) => ({
  skill: one(skillsTable, {
    fields: [projectsTable.skillId],
    references: [skillsTable.id],
  }),
}));

export const videosTableRelations = relations(videosTable, ({ one }) => ({
  skill: one(skillsTable, {
    fields: [videosTable.skillId],
    references: [skillsTable.id],
  }),
}));