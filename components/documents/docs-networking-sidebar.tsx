'use client'

import { Button } from "../ui/button";
import { useAppSelector } from "@/lib/redux/hooks";
import { useRouter } from "next/navigation";
import { VideoType } from "@/lib/type";

type Props = {
    slug: string[];
    videos:VideoType[];
}

function DocsNetworkingSidebar({ slug, videos }: Props) {
    const { in_view_id } = useAppSelector((state: { scroll: { in_view_id: string } }) => state.scroll);
    const router = useRouter()
  return (
    <div className="flex flex-col gap-2">
        {(slug && slug[0] === 'networking' && videos) &&
          videos.map((vd) => {
            const id = 'id'+vd.id;
            return (
              <Button
                key={vd.id}
                variant={"ghost"}
                onClick={() => {
                  router.push("#" + id)
                }}
                className={`${
                  in_view_id === id ? "text-blue-500 hover:text-blue-500 font-normal": 'font-light'
                } capitalize text-sm font-sans justify-start text-left whitespace-normal`}
              >
                {vd.titleEn}
              </Button>
            );
          })}
    </div>
  )
}

export default DocsNetworkingSidebar