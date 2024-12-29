import 'server-only'
import { db } from '../db'
import { projectsTable } from '../schema'
import { eq } from 'drizzle-orm'
import { TableProjectType } from '../table-type'

export const getProjects = async ()=>{
    try {
        const projects = await db.select().from(projectsTable)
        return {
            error: null,
            projects
        }
    } catch (error) {
        return {
            error,
            projects: null
        }
    }
}

export const getProjectById = async (id: string)=>{
    try {
        const project = await db.select().from(projectsTable).where(eq(projectsTable.id,id))
        return {
            error: null,
            project,
        }
    } catch (error) {
        return {
            error,
            project: null
        }
    }
}

export const addProject = async (project: TableProjectType)=>{
    try {
        await db.insert(projectsTable).values(project)
        console.log("Project has been added sucessfully.")
    } catch (error) {
        console.log("Error while add new project: ", error)
    }
}

export const updateProjectById = async (id: string, project: TableProjectType)=>{
    try {
        await db.update(projectsTable).set(project).where(eq(projectsTable.id, id))
        console.log("Project has been updated sucessfully.")
    } catch (error) {
        console.log("Error while update project: ", error)
    }
}