import "server-only";
import { db } from "../db";
import { usersTable } from "../schema";
import { eq } from "drizzle-orm";
import { UserResponse, UserType } from "@/lib/type";
import { unstable_noStore, unstable_expirePath as cachePath } from "next/cache";



export const getUsers = async (): Promise<UserResponse> => {
  try {
    unstable_noStore()
    const users = await db.select().from(usersTable);
    return {
      success: true,
      message: "Users has been fetched.",
      data: users,
    };
  } catch (error) {
    let errorMessage = "Error while fetching users!";

    if (error instanceof Error) {
      errorMessage = error.message; 
    }
    return {
      success: false,
      message: errorMessage,
      error,
    };
  }
};

export const getUserById = async (id: string): Promise<UserResponse> => {
  try {
    const user = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, id));
    return {
      success: true,
      message: "User has been fetched.",
      data: user[0],
    };
  } catch (error) {
    let errorMessage = "Error while fetching user!";

    if (error instanceof Error) {
      errorMessage = error.message; 
    }
    return {
      success: false,
      message: errorMessage,
      error,
    };
  }
};

export const addUser = async (user: UserType): Promise<UserResponse> => {
  try {
    await db.insert(usersTable).values(user);
    return {
      success: true,
      message: "User has been added.",
    }
  } catch (error) {
    let errorMessage = "Error while adding user!";

    if (error instanceof Error) {
      errorMessage = error.message; 
    }
    return {
      success: false,
      message: errorMessage,
      error,
    }
  }
};

export const updateUserById = async (id: string, user: UserType): Promise<UserResponse> => {
  try {
    const userUpdate = await db.update(usersTable).set(user).where(eq(usersTable.id, id)).returning();
    return {
      success: true,
      data: userUpdate[0],
      message: "User has been updated.",
    }
  } catch (error) {
    let errorMessage = "Error while updating user!";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return {
      success: false,
      message: errorMessage,
      error,
    };
  }
};

export const deleteUserById = async (id: string): Promise<UserResponse> => {
  try {
    await db.delete(usersTable).where(eq(usersTable.id, id));
    cachePath('/dashboard/users','page')
    return {
      success: true,
      message: "User has been deleted.",
    }
  } catch (error) {
    let errorMessage = "Error while deleting user!";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return {
      success: false,
      message: errorMessage,
      error,
    };
  }
};
