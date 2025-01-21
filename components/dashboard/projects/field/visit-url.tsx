import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormProjectType } from "@/lib/type"


function VisitUrl({ form }: { form: FormProjectType }) {
  return (
    <FormField 
        control={form.control}
        name="visitUrl"
        render={({ field })=>(<FormItem>
            <FormLabel>Project url</FormLabel>
            <FormControl>
                <Input type="text" placeholder="url link to project" {...field} />
            </FormControl>
            <FormMessage />
        </FormItem>)}
    />
  )
}

export default VisitUrl