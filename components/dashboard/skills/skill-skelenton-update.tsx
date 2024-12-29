
import { Skeleton } from '@/components/ui/skeleton'
import { TabsContent } from '@/components/ui/tabs'
import SkillCombobox from './skill-combobox'


function SkillSkelentoUpdate() {
  return (
    <TabsContent value='update' className='space-y-4'>
        <SkillCombobox />
        <Skeleton className='w-full h-52 rounded-md'/>
    </TabsContent>
  )
}

export default SkillSkelentoUpdate