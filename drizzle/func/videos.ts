import 'server-only'
import { db } from '../db'
import { videosTable } from '../schema'
import { eq } from 'drizzle-orm'
import { TableVideoType } from '../table-type'

export const getVideos = async ()=>{
    try {
        const videos = await db.select().from(videosTable)
        return {
            error: null,
            videos
        }
    } catch (error) {
        return {
            error,
            videos: null
        }
    }
}

export const getSkillById = async (id: string)=>{
    try {
        const video = await db.select().from(videosTable).where(eq(videosTable.id,id))
        return {
            error: null,
            video,
        }
    } catch (error) {
        return {
            error,
            video: null
        }
    }
}

export const addVideo = async (video: TableVideoType)=>{
    try {
        await db.insert(videosTable).values(video)
        console.log("video has been added sucessfully.")
    } catch (error) {
        console.log("Error while add new video: ", error)
    }
}

export const updateVideoById = async (id: string, video: TableVideoType)=>{
    try {
        await db.update(videosTable).set(video).where(eq(videosTable.id, id))
        console.log("video has been updated sucessfully.")
    } catch (error) {
        console.log("Error while update video: ", error)
    }
}