import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { FormVideoType } from "@/lib/type"


function DescriptionEn({form}: { form: FormVideoType}) {
  return (
    <FormField 
      name="descriptionsEn"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Description English</FormLabel>
          <FormControl>
            <Textarea {...field} placeholder="Description English" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default DescriptionEn