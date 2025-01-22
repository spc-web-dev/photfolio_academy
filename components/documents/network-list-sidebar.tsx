import { SkillType } from '@/lib/type'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

function NetworkListSidebar({networking, pathname}:{networking: SkillType[], pathname: string}) {
  return (
    <>
        {networking && networking.map((net) => (
          <Button
            key={net.id}
            asChild
            variant={"ghost"}
            className={`${
              pathname === net.id ? " text-blue-500 font-semibold" : "font-light"
            } justify-start capitalize `}
          >
            <Link href={'/docs/networking/'+net.id as string}>{net.title}</Link>
          </Button>
        ))}
    </>
  )
}

export default NetworkListSidebar