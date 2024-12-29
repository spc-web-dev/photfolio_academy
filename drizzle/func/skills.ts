import "server-only";
import { db } from "../db";
import { skillsTable } from "../schema";
import { SkillReponse, SkillType } from "@/lib/type";
import { eq } from "drizzle-orm";
import { unstable_cache } from "next/cache";
import { cache } from "react";

export const getSkills = async (): Promise<SkillReponse> => {
  try {
    const skills = unstable_cache(
      async () => {
        return await db.select().from(skillsTable);
      },
      ["/dashboard/skills"],
      { tags: ["/dashboard/skills"], revalidate: 3600 }
    );
    const data = await skills();
    return {
      success: true,
      message: "Skills has been fetched successfully.",
      data,
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
    const skill = cache(async ()=>{
      const skill = await db
                .select()
                .from(skillsTable)
                .where(eq(skillsTable.id, id));
      return skill
    })
    const data = (await skill())[0]
    return {
      success: true,
      message: "Skill has been fetched successfully.",
      data,
    };
  } catch (error) {
    let message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return {
      success: false,
      message,
    };
  }
};

export const addSkill = async (skill: SkillType): Promise<SkillReponse> => {
  try {
    const data = unstable_cache(
      async () => {
        return await db.insert(skillsTable).values(skill).returning();
      },
      ["/dashboard/skills"],
      { tags: ["/dashboard/skills"] }
    );
    return {
      success: true,
      message: "Skill has been added successfully.",
      data:(await data())[0],
    };
  } catch (error) {
    let message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return {
      success: false,
      message,
    };
  }
};

export const updateSkillById = async (
  id: string,
  skill: SkillType
): Promise<SkillReponse> => {
  try {
    const res = unstable_cache(
        async () => {
          return await db
          .update(skillsTable)
          .set(skill)
          .where(eq(skillsTable.id, id))
          .returning();
        },
        ["/dashboard/skills"],
        { tags: ["/dashboard/skills"], revalidate: 3600 }
      );
    return {
      success: true,
      data: (await res())[0],
      message: "Skill has been updated successfully.",
    };
  } catch (error) {
    let message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return {
      success: false,
      message,
    };
  }
};
