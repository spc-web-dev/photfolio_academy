"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { motion } from "motion/react";
import { RefObject } from "react";
import { ProjectType } from "@/lib/type";
import Link from "next/link";
type Props = {
  index: number;
  projectsRef: RefObject<HTMLDivElement[] | unknown[]>;
  data: ProjectType;
  id: string;
};

function ProjectCard({ index, projectsRef, data, id }: Props) {
  return (
    <motion.div
      initial={{
        y: 200,
        opacity: 0,
      }}
      animate={{
        transition: {
          delay: 2 * index,
          duration: 2,
          ease: "easeInOut",
        },
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: false }}
    >
      <div className="w-full h-full" id={'id'+id} 
      ref={(el) => {
            projectsRef.current[index] = el;
      }}>
        <Card className="w-full">
          <CardHeader className="px-0 pt-0">
            <CardTitle></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative w-full max-h-72 h-72 rounded-md overflow-hidden">
              <Image
                src={data.image}
                alt="project"
                width={385}
                height={250}
                priority
                quality={95}
                className=" absolute object-cover w-full h-full transition-all duration-500 ease-in-out hover:scale-125"
              />
            </div>
          </CardContent>
          <CardFooter className="space-y-2 flex-col items-start">
            <CardTitle>{data.name}</CardTitle>
            <div className="space-x-2">
              {data.visitUrl && <Button variant={"secondary"}>
                <Link href={data.visitUrl as string}>View website</Link>
              </Button>}
              {data.githubRep && <Button variant={"secondary"}>
                <Link href={data.githubRep as string}>Github</Link>
              </Button>}
            </div>
          </CardFooter>
        </Card>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
