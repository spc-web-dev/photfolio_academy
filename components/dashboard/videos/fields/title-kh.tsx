import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormVideoType } from "@/lib/type"


function TitleKh({form}: { form: FormVideoType}) {
  return (
    <FormField 
      name="titleKh"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Title Khmer</FormLabel>
          <FormControl>
            <Input type="text" {...field} placeholder="Title Khmer" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default TitleKh