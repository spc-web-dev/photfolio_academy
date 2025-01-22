'use client'

import { useState, useEffect, useRef } from "react";
import SectionCard from "./section-card";
import { Separator } from "../ui/separator";
import { useAppDispatch } from "@/lib/redux/hooks";
import { setInViewId } from "@/lib/redux/features/scroll-slice";
import { getVideosBySkillId } from "@/lib/action/action-videos";
import { VideoType } from "@/lib/type";

const SectionContainer = ({ id }: { id: string }) => {
  const [videos, setVideos] = useState<VideoType[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const childRefs = useRef<(HTMLDivElement)[]>([]);
  const dispatch = useAppDispatch();

  const handleRefChildren = (el: HTMLDivElement | null, index: number) => {
    if (el) childRefs.current[index] = el;
  };

  useEffect(() => {
    async function fetchVideos() {
      const res = await getVideosBySkillId(id);
      if(res.success && res.data){
        setVideos(res.data as VideoType[])
      }
    }
    fetchVideos()
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
      {videos && videos.map((vd, index) => {
        const idPath = vd.titleEn.replace(/ /g, "_").toLowerCase();
        return (
          <div
            key={vd.id}
            id={idPath}
            ref={(el) => handleRefChildren(el, index)}
            style={{
              backgroundColor: "transparent", 
              transition: "background-color 0.3s ease",
            }}
          >
            <SectionCard props={vd}/>
            <Separator className="my-4" />
          </div>
        );
      })}
      {!videos.length && (
        <div className="flex justify-center items-center">
          <h1>Comming soon...</h1>
        </div>
      )}
    </div>
  );
};

export default SectionContainer;
