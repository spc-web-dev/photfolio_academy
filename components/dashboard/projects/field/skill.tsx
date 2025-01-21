'use client'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FormProjectType, SkillType } from "@/lib/type"


function Skill({ form, data }: { form: FormProjectType; data: SkillType[] }) {
  return (
    <FormField 
        name="skillId"
        control={form.control}
        render={({field})=>(
            <FormItem>
                <FormLabel>Skills</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a skill" />
                        </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        {data && data.map(sk=>(
                            <SelectItem value={sk.id as string} key={sk.id}>{sk.title}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <FormMessage />
            </FormItem>
        )}
    />
  )
}

export default Skill