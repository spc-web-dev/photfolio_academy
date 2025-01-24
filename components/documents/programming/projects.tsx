'use client'

import { useEffect, useRef, useState } from "react";
import ProTitle from "./pro-title";
import ProjectCard from "./project-card";
import { useAppDispatch } from "@/lib/redux/hooks";
import { setInViewId } from "@/lib/redux/features/scroll-slice";
import { fetchProjects } from "@/lib/action/action-project";
import { ProjectType } from "@/lib/type";

function Projects() {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const dispatch = useAppDispatch();
  const projectRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleProjects = async () => {
      const { success, data } = await fetchProjects();
      if (success) {
        setProjects(data as ProjectType[]);
      }
    };
    handleProjects();
  }, []);

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

    // Cleanup observer when component unmounts or projects change
    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [dispatch, projects]);

  return (
    <section className="space-y-4 text-sm">
      <ProTitle title="Projects" />
      <div className="flex flex-wrap flex-col justify-around gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            id={project.id as string}
            key={project.id}
            data={project}
            index={index}
            projectsRef={projectRefs}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;