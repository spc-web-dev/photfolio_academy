"use server";

import * as z from "zod";
import { ActionResponseUser, UserResponse, UserType } from "../type";
import { addUser, deleteUserById, getUserById, getUsers, updateUserById } from "@/drizzle/func/users";
import { TableUserType } from "@/drizzle/table-type";



const role = z.enum(["admin", "student", "viewer"], {
  message: "Invalid role",
});
const userSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  role: role,
});

export async function handleActionFormUser(
  prevState: ActionResponseUser,
  form: FormData
): Promise<ActionResponseUser> {
  try {
    const rawDataUser: UserType = {
      username: form.get("username") as string,
      email: form.get("email") as string,
      password: form.get("password") as string,
      role: form.get("role") as "admin" | "student" | "viewer",
    };

    const validatedUser = userSchema.safeParse(rawDataUser);
    if (!validatedUser.success) {
      return {
        success: false,
        data: rawDataUser,
        message: "Please fix the errors in the form",
        errors: validatedUser.error.flatten().fieldErrors,
      };
    }
    const user = await addUser(rawDataUser);
    if (!user.success) {
      return {
        success: user.success,
        data: rawDataUser,
        message: user.message,
      };
    }
    return {
      success: user.success,
      data: {
        username: "",
        email: "",
        password: "",
        role: "viewer",
      },
      message: user.message,
    };
  } catch (error) {
    let message = "An unexpected error occurred";
    if(error instanceof Error){
      message = error.message;
    }
    return {
      success: false,
      data: {
        username: prevState.data?.username,
        email: prevState.data?.email,
        password: prevState.data?.password,
        role: prevState.data?.role,
      },
      message,
    };
  }
}

export async function handleActionFormUpdateUser(prevState: ActionResponseUser,
  form: FormData): Promise<ActionResponseUser> {
    try {
      const rawDataUser: UserType = {
        id: form.get('user_id') as string,
        username: form.get("username") as string,
        email: form.get("email") as string,
        password: form.get("password") as string,
        role: form.get("role") as "admin" | "student" | "viewer",
      };
  
      const validatedUser = userSchema.safeParse(rawDataUser);
      if (!validatedUser.success) {
        return {
          success: false,
          data: rawDataUser,
          message: "Please fix the errors in the form",
          errors: validatedUser.error.flatten().fieldErrors,
        };
      }
        const user = await updateUserById(rawDataUser.id as string, rawDataUser);
        
      if (!user.success) {
        return {
          success: user.success,
          data: rawDataUser,
          message: user.message,
        };
      }
      return {
        success: user.success,
        data: user.data as TableUserType,
        message: user.message,
      };
    } catch (error) {
      let message = "An unexpected error occurred";
      if(error instanceof Error){
        message = error.message;
      }
      return {
        success: false,
        data: {
          id: prevState.data.id,
          username: prevState.data?.username,
          email: prevState.data?.email,
          password: prevState.data?.password,
          role: prevState.data?.role,
        },
        message,
      };
  }
}


export async function FetchUserById(id: string): Promise<UserResponse> {
  try {
    const user = await getUserById(id);
    return {
      success: user.success,
      data: user.data,
      message: user.message,
    }
  } catch (error) {
    let message = "An unexpected error occurred";
    if(error instanceof Error){
      message = error.message;
    }
    return {
      success: false,
      message,
    }
  }
}

export async function GetUsers(): Promise<UserResponse> {
  try {
    const users = await getUsers();
    return {
      success: users.success,
      data: users.data,
      message: users.message,
    }
  } catch (error) {
    let message = "An unexpected error occurred";
    if(error instanceof Error){
      message = error.message;
    }
    return {
      success: false,
      message,
    }
  }
}


export async function DeleteUserById(id: string): Promise<UserResponse> {
  try {
    const user = await deleteUserById(id);
    return {
      success: user.success,
      message: user.message,
    }
  } catch (error) {
    let message = "An unexpected error occurred";
    if(error instanceof Error){
      message = error.message;
    }
    return {
      success: false,
      message,
    }
  }

}

