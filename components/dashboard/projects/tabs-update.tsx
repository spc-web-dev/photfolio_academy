'use client'
import { Form } from '@/components/ui/form'
import { Skeleton } from '@/components/ui/skeleton'
import { TabsContent } from '@/components/ui/tabs'
import { Suspense, useEffect, useState } from 'react'
import Skill from './field/skill'
import Image from './field/image'
import GithubRep from './field/github-rep'
import VisitUrl from './field/visit-url'
import Name from './field/name'
import { Button } from '@/components/ui/button'
import { projectSchema, ProjectType, SkillType } from '@/lib/type'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { fetchSkills } from '@/lib/action/action-skills'
import { handleUpdateProjectById } from '@/lib/action/action-project'


function TabsUpdate({ id, data }: { id: string; data: ProjectType  }) {
  const [skills, setSkills] = useState<SkillType[]>();
  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: data,
  });
  const onSubmit = async (data: z.infer<typeof projectSchema>) => {
    const { message, success } = await handleUpdateProjectById(id,data)
    if(!success){
      toast('Error',{
        description: message
      })
      return
    }
    toast('Project',{
      description: message
    })
  };
  useEffect(() => {
      async function handleFetchSkill() {
        const res = await fetchSkills();
        if (res) {
          setSkills(res.data as SkillType[]);
        }
      }
      handleFetchSkill();
    }, []);
  return (
    <TabsContent value='update'>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col gap-4">
            <Name form={form} />
            <Suspense
              fallback={
                <>
                  <Skeleton className="w-full h-4 rounded-md" />
                </>
              }
            >
              <Skill data={skills as SkillType[]} form={form} />
            </Suspense>
            <Image form={form} />
            <GithubRep form={form} />
            <VisitUrl form={form} />
          </div>
          <Button type="submit" variant={'outline'}>Save change</Button>
        </form>
      </Form>
    </TabsContent>
  )
}

export default TabsUpdate