import { Webhook } from 'svix'
import { headers } from 'next/headers'
import {  WebhookEvent } from '@clerk/nextjs/server'
import { db } from '@/drizzle/db'
import { usersTable } from '@/drizzle/schema'
import { eq } from 'drizzle-orm'




export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET

  if (!SIGNING_SECRET) {
    throw new Error('Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local')
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET)

  // Get headers
  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error: Missing Svix headers', {
      status: 400,
    })
  }

  // Get body
  const payload = await req.json()
  const body = JSON.stringify(payload)

  let evt: WebhookEvent

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent

    const eventType = evt.type

    if(eventType === 'user.created'){
      const { email_addresses, image_url, username, first_name, last_name, id } = evt.data
      const email = email_addresses[0]?.email_address || '';
      const user_name = username || `${first_name} ${last_name}`
      const pass = `${first_name}${last_name}@${Math.random()}`
      const checkUser = await db.select().from(usersTable).where(eq(usersTable.email,email))
      if(checkUser.length > 0){
        await db.update(usersTable).set({...checkUser[0], auth_id: id})
      } else {
        await db.insert(usersTable).values({auth_id:id, username: user_name , email, password: pass, image_url: image_url || '', role: 'viewer' })
      }
    }
  } catch (err) {
    console.error('Error: Could not verify webhook:', err)
    return new Response('Error: Verification error', {
      status: 400,
    })
  }



  return new Response('Webhook received', { status: 200 })
}

