import { TableSkillsType, TableUserType } from "@/drizzle/table-type";


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



