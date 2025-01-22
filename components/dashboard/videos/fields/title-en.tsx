import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormVideoType } from "@/lib/type"


function TitleEn({form}: { form: FormVideoType}) {
  return (
    <FormField 
      name="titleEn"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Title English</FormLabel>
          <FormControl>
            <Input type="text" {...field} placeholder="Title English" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default TitleEn