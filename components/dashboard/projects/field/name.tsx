import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormProjectType } from "@/lib/type"


function Name({ form }: { form: FormProjectType}) {
  return (
    <FormField 
        control={form.control}
        name="name"
        render={({ field })=>(<FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
                <Input type="text" placeholder="project name" {...field} />
            </FormControl>
            <FormMessage />
        </FormItem>)}
    />
  )
}

export default Name