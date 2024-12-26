import { projectsTable, skillsTable, usersTable, videosTable } from "./schema";

export type TableUserType = typeof usersTable.$inferSelect;

export type InsertUserType = typeof usersTable.$inferInsert;

export type TableSkillsType = typeof skillsTable.$inferSelect;

export type InsertSkillType = typeof skillsTable.$inferInsert;

export type TableProjectType = typeof projectsTable.$inferSelect;

export type InsertProjectType = typeof projectsTable.$inferInsert;

export type TableVideoType = typeof videosTable.$inferSelect;

export type InsertVideoType = typeof videosTable.$inferInsert;