'use server'
import * as z from 'zod'
import { addVideo, deleteVideoById, getVideoById, getVideos, updateVideoById } from "@/drizzle/func/videos"
import { videoSchema } from '../type'
import { db } from '@/drizzle/db'
import { videosTable } from '@/drizzle/schema'
import { eq } from 'drizzle-orm'

export const fetchVideos = async () => {
    const res = await getVideos()
    return res
}

export const fetchVideoById = async (id:string) => {
    const res = await getVideoById(id)
    return res
}

export const handleAddVideo = async (data: z.infer<typeof videoSchema>) => {
    const res = await addVideo(data)
    return res
}

export const handleEditVideo = async (id: string, data: z.infer<typeof videoSchema>) => {
    const res = await updateVideoById(id,data)
    return res
}

export const handleDeleteVideo = async (id: string) => {
    return await deleteVideoById(id);
}

export const getVideosBySkillId = async (id: string) => {
    try {
        const videos = await db.select().from(videosTable).where(eq(videosTable.skillId, id))
        return {
            success: true,
            message: 'Videos retrieved successfully',
            data: videos
        }
    } catch (error) {
        return{
            success: false,
            message: error instanceof Error ? error.message : 'Unknown error'
        }
    }
}

