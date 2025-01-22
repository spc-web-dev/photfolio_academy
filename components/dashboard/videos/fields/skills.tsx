'use client'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { fetchSkills } from "@/lib/action/action-skills"
import { FormVideoType, SkillType } from "@/lib/type"
import { useEffect, useState } from "react"


function Skills({ form }: { form: FormVideoType }) {
  const [skills, setSkills] = useState<SkillType[]>()

  useEffect(()=>{
    async function handleGetSkils() {
      const { success , data } = await fetchSkills()
      if(success && data){
        setSkills(data as SkillType[])
      }
    }
    handleGetSkils()
  },[])

  return (
    <FormField 
      name="skillId"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Skills</FormLabel>
          <Select onValueChange={field.onChange} value={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select a skill..."/>
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {skills && skills.map((skill) => (
                <SelectItem key={skill.id} value={skill.id as string}>{skill.title}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default Skills