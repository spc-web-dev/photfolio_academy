"use client";
import { ScrollArea } from "../ui/scroll-area";
import { useEffect, useState } from "react";
import DocsNetworkingSidebar from "./docs-networking-sidebar";
import DocsProgrammingSidebar from "./docs-programming-sidebar";
import { fetchProjects } from "@/lib/action/action-project";
import { ProjectType, VideoType } from "@/lib/type";
import { getVideosBySkillId } from "@/lib/action/action-videos";

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

const DocsRightSidebar = ({ params }: Props) => {
  const [videos, setVideos] = useState<VideoType[]>([]);
  const [slug, setSlug] = useState<string[]>([]);
  const [programming, setProgramming] = useState<
    ProjectType[]
  >();

  useEffect(() => {
    async function handle() {
      const { slug } = await params;
      setSlug(slug);
      if (slug) {
        const vds= await getVideosBySkillId(slug[1]);
        if(vds.success && vds.data){
          setVideos(vds.data as VideoType[]);
        }

        const { success,data }= await fetchProjects()
        if (success && data) {
          setProgramming(data as ProjectType[]);
        }
      }
    }
    handle();
  }, [params]);

  return (
    <ScrollArea className="max-w-96 w-96 h-[calc(100vh_-_100px)] lg:block hidden ">
      <div>
        <DocsNetworkingSidebar videos={videos} slug={slug} />
        {slug && slug[0] === "programming" ? (
          <DocsProgrammingSidebar data={programming as ProjectType[]} />
        ) : null}
      </div>
    </ScrollArea>
  );
};

export default DocsRightSidebar;
