import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormProjectType } from "@/lib/type"


function GithubRep({ form }: { form: FormProjectType }) {
  return (
    <FormField 
        control={form.control}
        name="githubRep"
        render={({ field })=>(<FormItem>
            <FormLabel>Github repo.</FormLabel>
            <FormControl>
                <Input type="text" placeholder="github repo" {...field} />
            </FormControl>
            <FormMessage />
        </FormItem>)}
    />
  )
}

export default GithubRep