'use server'
import * as z from 'zod'

import { addProject, deleteProjectById, getProjectById, getProjects, updateProjectById } from "@/drizzle/func/projects"
import { projectSchema } from '../type'

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