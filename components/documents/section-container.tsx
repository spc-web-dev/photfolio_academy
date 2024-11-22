'use client'

import { useState, useEffect, useRef } from "react";
import { VideosData } from "@/lib/data";
import { motion } from "framer-motion";
import SectionCard from "./section-card";
import { Separator } from "../ui/separator";
import { useAppDispatch } from "@/lib/redux/hooks";
import { setInViewId } from "@/lib/redux/features/scroll-slice";

const SectionContainer = ({ id }: { id: string }) => {
  const [videos, setVideos] = useState<(typeof VideosData)[number][]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const childRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dispatch = useAppDispatch();

  const handleRefChildren = (el: HTMLDivElement | null, index: number) => {
    if (el) childRefs.current[index] = el;

  };

  useEffect(() => {
    const filteredVideos = VideosData.filter((vd) => vd.lesson_id === id);
    setVideos(filteredVideos);
  }, [id]);

  // Intersection Observer to track visibility of each section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id; // Use the ID of the element to track visibility
          if (entry.isIntersecting) {
            dispatch(setInViewId(id)); // Dispatch the ID when section is in view
          }
        });
      },
      { threshold: 0.8 } // 80% of the section should be visible
    );

    // Observe each child element
    childRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    // Cleanup observer when component unmounts or videos change
    return () => {
      childRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [videos, dispatch]);

  return (
    <div ref={containerRef}>
      {videos.map((vd, index) => {
        let idPath = vd.title.replace(/ /g, "_").toLowerCase();
        return (
          <motion.div
            key={vd.id}
            id={idPath}
            ref={(el) => handleRefChildren(el, index)}
            style={{
              backgroundColor: "transparent", 
              transition: "background-color 0.3s ease",
            }}
          >
            <SectionCard title={vd.title} url={vd.url} />
            <Separator className="my-4" />
          </motion.div>
        );
      })}
    </div>
  );
};

export default SectionContainer;
