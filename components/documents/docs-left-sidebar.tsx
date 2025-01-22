"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { ProgrammingData } from "@/lib/data";
import { Separator } from "../ui/separator";
import { usePathname } from "next/navigation";
import {  useEffect, useState } from "react";
import { getSkillsByType } from "@/lib/action/action-skills";
import { SkillType } from "@/lib/type";
import NetworkListSidebar from "./network-list-sidebar";
import { Skeleton } from "../ui/skeleton";

const DocsLeftSidebar = () => {
  const pathname = usePathname();
  const [networking, setNetworking] = useState<SkillType[]>()
  useEffect(()=>{
    async function network(){
      const {success, data}= await getSkillsByType('networking')
      if(success && data){
        setNetworking(data as SkillType[])
      }
    } 
    network()
  },[])
  return (
    <ScrollArea className="max-w-96 w-96 h-[calc(100vh_-_100px)] md:block hidden">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Programming</h3>
        {ProgrammingData.map((pro) => (
          <Button
            key={pro.id}
            asChild
            variant={"ghost"}
            className={`${
              pathname === pro.link ? " text-blue-500 font-semibold" : "font-light"
            } justify-start capitalize `}
          >
            <Link href={pro.link}>{pro.title}</Link>
          </Button>
        ))}
      </div>
      <Separator className="my-2" />
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold">Networking</h3>
          {networking ? <NetworkListSidebar pathname={pathname} networking={networking as SkillType[]}/>: (
            <div className="">
              {[1,2,3].map((i)=>(
                <Button
                asChild
                variant={"ghost"}
                key={i}
                >
                  <Skeleton className="w-full"/>
                </Button>
              ))}
            </div>
          )}

      </div>
    </ScrollArea>
  );
};

export default DocsLeftSidebar;
