"use client";
import { ScrollArea } from "../ui/scroll-area";
import { VideosData } from "@/lib/data";
import { useEffect, useState } from "react";
import DocsNetworkingSidebar from "./docs-networking-sidebar";
import DocsProgrammingSidebar from "./docs-programming-sidebar";

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

const DocsRightSidebar = ({ params }: Props) => {
  const [videos, setVideos] = useState<(typeof VideosData)[number][]>([]);
  const [slug,setSlug] = useState<string[]>([])

  useEffect(() => {
    async function handle() {
      const { slug } = await params;
      setSlug(slug)
      slug && setVideos((prev) => VideosData.filter((vd) => vd.lesson_id === slug[1]));
    }
    handle();
  }, [params]);

  return (
    <ScrollArea className="max-w-96 w-96 h-[calc(100vh_-_100px)] lg:block hidden ">
      <div>
        <DocsNetworkingSidebar videos={videos} slug={slug}/>
        {slug[0] === 'programming' && (
          <DocsProgrammingSidebar />
        )}
      </div>
    </ScrollArea>
  );
};

export default DocsRightSidebar;
