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
import { NetworkingData, ProgrammingData } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";


function NavbarLeftSmallScreen() {
    const pathname = usePathname()
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
            </div>
            <div className="flex flex-col gap-4">
              <SheetDescription>Programming</SheetDescription>
              {ProgrammingData.map((pro) => (
                <Link className={`${pathname === pro.link ? ' text-blue-500': ''}`} key={pro.id} href={pro.link}>
                  <Label className=" font-normal cursor-pointer capitalize hover:text-blue-400">
                    {pro.title}
                  </Label>
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <SheetDescription className="">Networking</SheetDescription>
              {NetworkingData.map((net) => (
                <Link className={`${pathname === net.link ? ' text-blue-500': ''}`} key={net.id} href={net.link}>
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
