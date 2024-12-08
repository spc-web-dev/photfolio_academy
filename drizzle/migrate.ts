import { db } from "./db";
import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import '@/drizzle/config'

async function main() {
    try {
        await migrate(db,{
            migrationsFolder:'drizzle/migrations'
        })
        console.log('Migration completed')
    } catch (error) {
        console.error("Error during mikgration: ", error)
        process.exit(1)
    }
}

main()