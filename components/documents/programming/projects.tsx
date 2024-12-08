'use client'

import { useEffect, useRef } from "react";
import ProTitle from "./pro-title"
import ProjectCard from "./project-card"
import { useAppDispatch } from "@/lib/redux/hooks";
import { setInViewId } from "@/lib/redux/features/scroll-slice";


function Projects() {
  const dispatch = useAppDispatch()
  const projectRefs = useRef<(HTMLDivElement)[]>([])
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const id = entry.target.id; 
            if (entry.isIntersecting) {
              dispatch(setInViewId(id)); 
            }
          });
        },
        { threshold: 0.8 } // 80% of the section should be visible
      );
  
      // Observe each child element
      projectRefs.current.forEach((ref) => {
        if (ref) {
          observer.observe(ref);
        }
      });
      console.log('hello')
      // Cleanup observer when component unmounts or videos change
      return () => {
        projectRefs.current.forEach((ref) => {
          if (ref) {
            observer.unobserve(ref);
          }
        });
      };
      
    }, [dispatch]);

  return (
    <section className="space-y-4 text-sm">
        <ProTitle title="Projects" />
        <div className="flex flex-wrap justify-around gap-4">
            {Array.from({ length: 10 }).map((_,index)=>(
                <ProjectCard key={index} index={index} projectsRef={projectRefs}/>
            ))}
        </div>
    </section>
  )
}

export default Projects