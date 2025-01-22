"use server";

import { revalidatePath, unstable_expirePath } from "next/cache";
import { SkillReponse, SkillType } from "@/lib/type";
import { addSkill, getSkillById, getSkills, updateSkillById } from "@/drizzle/func/skills";
import { db } from "@/drizzle/db";
import { skillsTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";


export const fetchSkills = async (): Promise<SkillReponse> => {
  try {
    const skills = await getSkills();
    return {
        success: skills.success,
        data: skills.data,
        message: skills.message
    }
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return {
      success: false,
      message,
    };
  }
};

export const addNewSkill = async (data: SkillType): Promise<SkillReponse> => {
    const add = await addSkill(data)
    unstable_expirePath('/dashboard/skills','page')
    return {
        success: add.success,
        message: add.message,
        data: add.data
    }
}

export const fetchSkillById = async (id: string): Promise<SkillReponse>=>{
  const res = await getSkillById(id)
  return {
    success: res.success,
    data: res.data,
    message: res.message,
  }
}

export const editSkillById = async (id: string, data: SkillType): Promise<SkillReponse>=>{
  const res = await updateSkillById(id,data)
  revalidatePath('/dashboard/skills')
  return {
    success: res.success,
    message: res.message,
    data: res.data,
  }
}


export const getSkillsByType = async (type: 'programming' | 'networking'): Promise<SkillReponse> => {
  try {
    const skills = await db.select().from(skillsTable).where(eq(skillsTable.skillType, type));
    return {
      success: true,
      data: skills,
      message: "Skills retrieved successfully",
    }
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unknown error occurred";
    return {
      success: false,
      message,
    };
  }
}



