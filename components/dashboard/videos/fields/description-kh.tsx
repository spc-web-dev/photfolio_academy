import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { FormVideoType } from "@/lib/type"


function DescriptionKh({form}: { form: FormVideoType}) {
  return (
    <FormField 
      name="descriptionsKh"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Description Khmer</FormLabel>
          <FormControl>
            <Textarea {...field} placeholder="Description Khmer" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default DescriptionKh