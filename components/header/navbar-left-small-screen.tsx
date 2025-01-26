'use client'
import { TextAlignLeftIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { getSkillsByType } from "@/lib/action/action-skills";
import { SkillType } from "@/lib/type";


function NavbarLeftSmallScreen() {
    const pathname = usePathname()
    const [networking,setNetworking] = useState<SkillType[]>([])
    const { user } = useUser()

    useEffect(()=>{
      async function handle(){
        const nets = await getSkillsByType('networking')
        if(nets.data && nets.success){
          setNetworking(nets.data as SkillType[])
        }
      }
      handle()
    },[])
  return (
    <div className="md:hidden inline-block">
      <Sheet>
        <SheetTrigger asChild>
          <Button asChild variant={"outline"} size={"icon"}>
            <span>
              <TextAlignLeftIcon />
            </span>
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="space-y-4">
          <div className="flex flex-col gap-4">
              <SheetDescription>General</SheetDescription>
              <Link className={`${pathname === '/' ? ' text-blue-500': ''}`} href={'/'}>
                  <Label className=" font-normal cursor-pointer capitalize hover:text-blue-400">
                    Homepage
                  </Label>
                </Link>
                <Link className={`${pathname === '/docs' ? ' text-blue-500': ''}`} href={'/docs'}>
                  <Label className=" font-normal cursor-pointer capitalize hover:text-blue-400">
                    Documents
                  </Label>
                </Link>
                {(user && user.primaryEmailAddress?.emailAddress === process.env.NEXT_PUBLIC_SECRET_USER) && <Link className={`${pathname === '/dashboard' ? ' text-blue-500': ''}`} href={'/dashboard'}>
                  <Label className=" font-normal cursor-pointer capitalize hover:text-blue-400">
                    Dashboard
                  </Label>
                </Link>}
            </div>
            <div className="flex flex-col gap-4">
              <SheetDescription>Programming</SheetDescription>
              <Link className={`${pathname === `/docs/programming/web_dev` ? ' text-blue-500': ''}`} href={'/docs/programming/web_dev'}>
                  <Label className=" font-normal cursor-pointer capitalize hover:text-blue-400">
                    Web Development
                  </Label>
                </Link>
            </div>
            <div className="flex flex-col gap-4">
              <SheetDescription className="">Networking</SheetDescription>
              {networking && networking.map((net) => (
                <Link className={`${pathname === `/docs/networking/${net.id}` ? ' text-blue-500': ''}`} key={net.id} href={`/docs/networking/${net.id}`}>
                  <Label className=" font-normal cursor-pointer capitalize hover:text-blue-400">
                    {net.title}
                  </Label>
                </Link>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default NavbarLeftSmallScreen;
