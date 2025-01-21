import 'server-only'
import { db } from '../db'
import { projectsTable } from '../schema'
import { eq } from 'drizzle-orm'
import { ProjectRespone, projectSchema, ProjectType } from '@/lib/type'
import { revalidateTag, unstable_cache } from 'next/cache'
import { cache } from 'react'
import * as z from 'zod'

export const getProjects = async (): Promise<ProjectRespone>=>{
    try {
        const data = unstable_cache(async()=>{
            const projects = await db.select().from(projectsTable)
            return projects
        },
        ['/dashboard/projects'],
        { tags: ['projects'], revalidate: 60 }
    )
        return {
            success: true,
            message: 'Projects retrieved successfully',
            data: (await data())
        }
    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : 'Unknown error',
        }
    }
}

export const getProjectById = async (id: string): Promise<ProjectRespone> => {
    try {
        const project = cache(async()=>{
            return await db.select().from(projectsTable).where(eq(projectsTable.id, id))
        })
        return {
            success: true,
            message: 'Project retrieved successfully',
            data: (await project())[0]
        }
    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : 'Unknown error',
        }
    }
}

export const addProject = async (project: z.infer<typeof projectSchema>): Promise<ProjectRespone> => {
    try {
        const data = cache(async ()=>(await db.insert(projectsTable).values(project).returning()))
        revalidateTag('projects')
        return {
            success: true,
            message: 'Project has been added successfully',
            data: (await data())[0]
        }
    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : 'Unknown error',
        }
    }
}

export const updateProjectById = async (id: string, project: z.infer<typeof projectSchema>): Promise<ProjectRespone> => {
    try {
        const update = cache(async()=>(await db.update(projectsTable).set(project).where(eq(projectsTable.id, id)).returning()))
        revalidateTag('projects')
        return {
            success: true,
            message: 'Project has been updated successfully',
            data: (await update())[0]
        }
    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : 'Unknown error',
        }
    }
}

export const deleteProjectById = async (id: string): Promise<ProjectRespone> => {
    try {
        const deleted = cache(async()=>(await db.delete(projectsTable).where(eq(projectsTable.id, id)).returning()))
        revalidateTag('projects')
        return {
            success: true,
            message: 'Project has been deleted successfully',
            data: (await deleted())[0]
        }
    } catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : 'Unknown error',
        }
    }
}