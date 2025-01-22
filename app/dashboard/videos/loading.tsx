import { Skeleton } from "@/components/ui/skeleton"


function loading() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className='w-80 h-12 rounded-md' />
      <Skeleton className='w-full h-96 rounded-md' />
    </div>
  )
}

export default loading