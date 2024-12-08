"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { motion } from "motion/react";
import { RefObject } from "react";
type Props = {
  index: number;
  projectsRef: RefObject<HTMLDivElement[] | unknown[]>;
};

function ProjectCard({ index, projectsRef }: Props) {
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
      <div className="w-full h-full" id={"project" + index} 
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
                src={"/images/programming.avif"}
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
            <CardTitle>Photfolio Web.</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, modi.
            </CardDescription>
            <div className="space-x-2">
              <Button variant={"secondary"}>View website</Button>
              <Button variant={"secondary"}>Github</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
