import { TableSkillsType, TableUserType } from "@/drizzle/table-type";
import { UseFormReturn } from "react-hook-form";
import * as z from "zod";


export type UserType = {
  id?: string;
  username: string;
  email: string;
  password: string;
  role: "admin" | "student" | "viewer";
  createdAt?: Date;
  updatedAt?: Date;
};


export type UserResponse = {
  success: boolean;
  message: string;
  error?: {
    [K in keyof UserType]?: string[];
  };
  data?: TableUserType[] | TableUserType;
};


export interface ActionResponseUser {
  success: boolean;
  message: string;
  data: UserType | TableUserType;
  errors?: {
    [K in keyof UserType]?: string[];
  };
}


export type SkillType = {
  id?: string;
  skillType: 'programming'|'networking';
  title: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type SkillReponse = {
  success: boolean;
  message: string;
  data?: TableSkillsType[] | TableSkillsType ;
}


export type ProjectType = {
  id?: string;
  name: string;
  skillId?:string;
  image: string;
  githubRep?: string;
  visitUrl?:string;
  createdAt?: Date;
  updatedAt?: Date;
}


export type ProjectRespone =  {
  success: boolean;
  message: string;
  data?: ProjectType[] | ProjectType ;
}

export const projectSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
  skillId: z.string({ message: 'Skill ID is required' }),
  image: z.string().url({ message: 'Image must be a valid URL' }),
  githubRep: z.string().optional().default(''),
  visitUrl: z.string().optional().default(''),
})

export type FormProjectType = UseFormReturn<z.infer<typeof projectSchema>>



export const videoSchema= z.object({
  titleEn: z.string().min(2, { message: 'Title must be at least 2 characters long' }),
  titleKh: z.string().min(2, { message: 'Title must be at least 2 characters long' }),
  descriptionsEn: z.string().optional().default(''),
  descriptionsKh: z.string().optional().default(''),
  url: z.string().url({ message: 'URL must be a valid URL' }),
  skillId: z.string().min(10, { message: 'Skill ID is required' }),
})

export type FormVideoType = UseFormReturn<z.infer<typeof videoSchema>>

export type VideoType = {
  id?: string;
  titleEn: string;
  titleKh: string;
  descriptionsEn?: string | null;
  descriptionsKh?: string | null;
  url: string;
  skillId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type VideoResponse = {
  success: boolean;
  message: string;
  data?: VideoType[] | VideoType;
}