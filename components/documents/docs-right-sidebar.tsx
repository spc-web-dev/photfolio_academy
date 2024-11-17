"use client";
import { ScrollArea } from "../ui/scroll-area";
import { VideosData } from "@/lib/data";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/redux/hooks";

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

const DocsRightSidebar = ({ params }: Props) => {
  const [videos, setVideos] = useState<(typeof VideosData)[number][]>();
  const router = useRouter();
  const { in_view_id } = useAppSelector((state) => state.scroll);

  useEffect(() => {
    async function handle() {
      const { slug } = await params;
      setVideos((prev) => VideosData.filter((vd) => vd.lesson_id === slug[1]));
    }
    handle();
  }, [params]);

  return (
    <ScrollArea className="max-w-96 w-96 h-[calc(100vh_-_100px)] lg:block hidden ">
      <div className="flex flex-col gap-2">
        {videos &&
          videos.map((vd) => {
            let id = vd.title.replace(/ /g, "_").toLowerCase();
            return (
              <Button
                key={vd.id}
                variant={"ghost"}
                onClick={() => router.push("#" + id)}
                className={`${
                  in_view_id === id && "text-blue-500 hover:text-blue-500"
                } capitalize text-sm font-sans justify-start text-left font-light whitespace-normal`}
              >
                {vd.title}
              </Button>
            );
          })}
      </div>
    </ScrollArea>
  );
};

export default DocsRightSidebar;
