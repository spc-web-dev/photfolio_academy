import "server-only";
import { db } from "../db";
import { skillsTable } from "../schema";
import { TableSkillsType } from "../table-type";
import { SkillReponse, SkillType } from "@/lib/type";
import { eq } from "drizzle-orm";
import { unstable_noStore as noStore } from "next/cache";

export const getSkills = async (): Promise<SkillReponse> => {
  try {
    noStore()
    const skills = await db.select().from(skillsTable);
    return {
      success: true,
      message: "Skills has been fetched successfully.",
      data: skills,
    };
  } catch (error) {
    let message =
      error instanceof Error ? error.message : "An unknown error occured";
    return {
      success: false,
      message,
    };
  }
};

export const getSkillById = async (id: string): Promise<SkillReponse> => {
  try {
    const skill = await db
      .select()
      .from(skillsTable)
      .where(eq(skillsTable.id, id));
    return {
      success: true,
      message: "Skill has been fetched successfully.",
      data: skill[0],
    };
  } catch (error) {
    let message = error instanceof Error ? error.message : "An unknown error occurred";
    return {
      success: false,
      message,
    };
    };
  }


export const addSkill = async (skill: SkillType): Promise<SkillReponse> => {
  try {
    const data = await db.insert(skillsTable).values(skill).returning();
    return {
        success: true,
        message: "Skill has been added successfully.",
        data: data[0],
    }
  } catch (error) {
    let message = error instanceof Error ? error.message : "An unknown error occurred";
    return {
        success: false,
        message,
    }
  }
};

export const updateSkillById = async (id: string, skill: SkillType): Promise<SkillReponse> => {
  try {
    const res = await db.update(skillsTable).set(skill).where(eq(skillsTable.id, id)).returning();
    return {
      success: true,
      data: res[0],
      message: "Skill has been updated successfully.",
    };
  } catch (error) {
    let message = error instanceof Error ? error.message : "An unknown error occurred";
    return {
      success: false,
      message,
    };
  }
};
