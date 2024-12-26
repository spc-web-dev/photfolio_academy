import 'server-only'
import { db } from '../db'
import { skillsTable } from '../schema'
import { eq } from 'drizzle-orm'
import { TableSkillsType } from '../table-type'

export const getSkills = async ()=>{
    try {
        const skills = await db.select().from(skillsTable)
        return {
            error: null,
            skills
        }
    } catch (error) {
        return {
            error,
            skills: null
        }
    }
}

export const getSkillById = async (id: number)=>{
    try {
        const skill = await db.select().from(skillsTable).where(eq(skillsTable.id,id))
        return {
            error: null,
            skill,
        }
    } catch (error) {
        return {
            error,
            skill: null
        }
    }
}

export const addSkill = async (skill: TableSkillsType)=>{
    try {
        await db.insert(skillsTable).values(skill)
        console.log("Skill has been added sucessfully.")
    } catch (error) {
        console.log("Error while add new skill: ", error)
    }
}

export const updateSkillById = async (id: number, skill: TableSkillsType)=>{
    try {
        await db.update(skillsTable).set(skill).where(eq(skillsTable.id, id))
        console.log("Skill has been updated sucessfully.")
    } catch (error) {
        console.log("Error while update skill: ", error)
    }
}