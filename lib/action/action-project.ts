'use server'
import * as z from 'zod'

import { addProject, deleteProjectById, getProjectById, getProjects, updateProjectById } from "@/drizzle/func/projects"
import { projectSchema } from '../type'
import { db } from '@/drizzle/db'
import { projectsTable } from '@/drizzle/schema'
import { desc } from 'drizzle-orm'



export const fetchProjects = async ()=>{
    const res = await getProjects()
    return res
}

export const fetchProjectById = async (id:string)=>{
    const res = await getProjectById(id)
    return res
}

export const handleAddProject = async (data: z.infer<typeof projectSchema>)=>{
    return await addProject(data)
}

export const handleUpdateProjectById = async ( id: string, data: z.infer<typeof projectSchema>)=>{
    return await updateProjectById(id, data)
}

export const handleDeleteProjectByid = async (id: string)=>{
    return await deleteProjectById(id)
}

export const handleGetprojectBySkillType = async (type: 'programming' | 'networking') => {
    const res = await db.query.skillsTable.findMany({
      with: {
        projects: true, 
      },
      columns: {
        skillType: true, 
      }, 
      where: (skills, { eq, and, exists }) => and(
        eq(skills.skillType, type), 
        exists(
          db.select()
            .from(projectsTable) 
            .where(eq(projectsTable.skillId, skills.id)).orderBy(desc(projectsTable.createdAt)) 
        )
      ),
    });
  
    return res;
  };