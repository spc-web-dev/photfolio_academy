'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { TabsContent } from '@/components/ui/tabs'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { editSkillById } from '@/lib/action-skills'
import { toast } from 'sonner'
import { SkillType } from '@/lib/type'

const skillSchema = z.object({
  skillType: z.enum(['programming', 'networking'], { message: 'Skill type must be either programming or networking' }),
  title: z.string().min(2, { message: 'Title must be at least 2 characters long' }),
})

function SkillTabsUpdate({ data, skillId }: { data : SkillType; skillId: string ; }) {
  const form = useForm<z.infer<typeof skillSchema>>({
    resolver: zodResolver(skillSchema),
    defaultValues: {
      title: data.title,
      skillType:data.skillType,
    }
  })

  const onSubmit = async (data: z.infer<typeof skillSchema>)=>{
    if(skillId){
      const { success, message } = await editSkillById(skillId, data)
      toast(success ? 'Add new skill.' : 'Error',{
        description: message
      })
    }
  }
  console.log(data)
  return (
    <TabsContent value='update'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-4'>
            <FormField
              name='title'
              render={({ field })=>(
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input type='text' placeholder='the title of the skill' {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name='skillType'
              render={({ field })=>(
                <FormItem>
                  <FormLabel>Skill Type</FormLabel>
                  <FormControl>
                    <Select name='skillType' onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type of this skill"/>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='programming'>Programming</SelectItem>
                        <SelectItem value='networking'>Networking</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button variant={'secondary'} type='submit'>Save change</Button>
          </form>
        </Form>
    </TabsContent>
  )
}

export default SkillTabsUpdate