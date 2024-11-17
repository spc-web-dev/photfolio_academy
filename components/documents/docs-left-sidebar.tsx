'use client'
import Link from "next/link"
import { Button } from "../ui/button"
import { ScrollArea } from "../ui/scroll-area"
import { NetworkingData, ProgrammingData } from "@/lib/data"
import { Separator } from "../ui/separator"
import { usePathname } from "next/navigation"


const DocsLeftSidebar = () => {
  const pathname = usePathname()
  return (
    <ScrollArea className="max-w-96 w-96 h-[calc(100vh_-_100px)] md:block hidden">
      <div className="flex flex-col gap-2">
        <small className=" font-light">Programming</small>
        {ProgrammingData.map(pro=>(
          <Button key={pro.id} asChild variant={'ghost'} className={`${pathname === pro.link && 'bg-neutral-100'} justify-start capitalize`}>
            <Link href={pro.link}>{pro.title}</Link>
          </Button>
        ))}
      </div>
      <Separator className="my-2" />
      <div className="flex flex-col gap-2">
        <small className=" font-light">Networking</small>
        {NetworkingData.map(net=>(
          <Button key={net.id} asChild variant={'ghost'} className={`${pathname === net.link && 'bg-neutral-100 dark:bg-slate-900'} justify-start capitalize`}>
            <Link href={net.link}>{net.title}</Link>
          </Button>
        ))}
      </div>
    </ScrollArea>
  )
}

export default DocsLeftSidebar