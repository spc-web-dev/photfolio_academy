"use client";
import { Form } from "@/components/ui/form";
import { TabsContent } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { Suspense, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Name from "./field/name";
import { projectSchema, SkillType } from "@/lib/type";
import { fetchSkills } from "@/lib/action/action-skills";
import Skill from "./field/skill";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "./field/image";
import GithubRep from "./field/github-rep";
import VisitUrl from "./field/visit-url";
import { Button } from "@/components/ui/button";
import { handleAddProject } from "@/lib/action/action-project";
import { toast } from "sonner";

function TabsAdd() {
  const [skills, setSkills] = useState<SkillType[]>();
  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      name: "",
      skillId: "",
      image: "",
      githubRep: "",
      visitUrl: "",
    },
  });
  const onSubmit = async (data: z.infer<typeof projectSchema>) => {
    const { message, success } = await handleAddProject(data)
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
    <TabsContent value="add_new">
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
          <Button type="submit" variant={'outline'}>Save</Button>
        </form>
      </Form>
    </TabsContent>
  );
}

export default TabsAdd;
