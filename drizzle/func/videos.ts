import 'server-only'
import { db } from '../db'
import { videosTable } from '../schema'
import { eq } from 'drizzle-orm'
import { revalidateTag, unstable_cache } from 'next/cache'
import { VideoResponse, VideoType } from '@/lib/type'
import { cache } from 'react'

export const getVideos = async (): Promise<VideoResponse>=>{
    try {
        const videos = unstable_cache(async ()=>{
            return await db.select().from(videosTable)
        },
        ['/dashboard/videos'],
        {
            revalidate: 60,
            tags: ['videos']
        }
    )
        return {
            message: "Videos fetched successfully.",
            success: true,
            data: (await videos())
        }
    } catch (error) {
        return {
            message: error instanceof Error ? error.message : "An unknown error occurred.",
            success: false,
        }
    }
}

export const getVideoById = async (id: string): Promise<VideoResponse> => {
    try {
        const video = cache(async ()=>{
            return await db.select().from(videosTable).where(eq(videosTable.id, id)).limit(1);
        })
        return {
            message: "Video fetched successfully.",
            success: true,
            data: (await video())[0] 
        };
    } catch (error) {
        return {
            message: error instanceof Error ? error.message : "An unknown error occurred.",
            success: false,
        };
    }
};

export const addVideo = async (video: VideoType): Promise<VideoResponse> => {
    try {
        await db.insert(videosTable).values(video);
        revalidateTag('videos')
        return {
            message: "Video has been added successfully.",
            success: true,
        };
    } catch (error) {
        return {
            message: error instanceof Error ? error.message : "An unknown error occurred.",
            success: false,
        };
    }
};

export const updateVideoById = async (id: string, video: VideoType): Promise<VideoResponse> => {
    try {
        await db.update(videosTable).set(video).where(eq(videosTable.id, id));
        revalidateTag('videos')
        return {
            message: "Video has been updated successfully.",
            success: true,
        };
    } catch (error) {
        return {
            message: error instanceof Error ? error.message : "An unknown error occurred.",
            success: false,
        };
    }
};

export const deleteVideoById = async (id: string): Promise<VideoResponse> => {
    try {
        await db.delete(videosTable).where(eq(videosTable.id, id));
        revalidateTag('videos')
        return {
            message: "Video has been deleted successfully.",
            success: true,
        };
    } catch (error) {
        return {
            message: error instanceof Error ? error.message : "An unknown error occurred.",
            success: false,
        };
    }
}