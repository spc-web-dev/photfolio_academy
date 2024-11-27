
import * as schema from './schema'
import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';

const db = drizzle(sql, { schema })


export const getUser = async ()=>{
    const users = await db.select().from(schema.usersTable)
    return users
}
