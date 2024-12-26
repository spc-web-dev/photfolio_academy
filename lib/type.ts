import { TableUserType } from "@/drizzle/table-type";


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
  error?: any;
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

