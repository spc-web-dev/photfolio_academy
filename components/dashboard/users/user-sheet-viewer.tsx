import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import React from 'react'

function UserSheetViewer({children}: { children: React.ReactNode; }) {
  return (
    <Sheet>
        <SheetTrigger asChild>
            {children}
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
                <SheetTitle>View user</SheetTitle>
                <SheetDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, iusto.</SheetDescription>
            </SheetHeader>
            <div>
                content
            </div>
            <SheetFooter>
                <Button>Back</Button>
            </SheetFooter>
        </SheetContent>
    </Sheet>
  )
}

export default UserSheetViewer