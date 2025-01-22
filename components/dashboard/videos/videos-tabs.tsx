"use server";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import TabsContentViews from "./tabs-content-views";
import TabsContentUpdate from "./tabs-content-update";
import TabsContentAdd from "./tabs-content-add";
import { fetchVideoById } from "@/lib/action/action-videos";
import { videoSchema } from "@/lib/type";
import * as z from "zod";

async function VideosTabs({
  searchParams,
}: {
  searchParams: Promise<{ tabs: string; video_id: string }>;
}) {
  const { tabs, video_id } = await searchParams;
  const { success, data } = await fetchVideoById(video_id);
  return (
    <Tabs defaultValue="views" value={tabs ? tabs : "views"}>
      <TabsList>
        <TabsTrigger value="views">
          <Link href={`/dashboard/videos?tabs=views`}>Views</Link>
        </TabsTrigger>
        <TabsTrigger value="update" disabled={!video_id}>
          <Link href={`/dashboard/videos?tabs=update&video_id=${video_id}`}>
            Update
          </Link>
        </TabsTrigger>
        <TabsTrigger value="add_new">
          <Link href={`/dashboard/videos?tabs=add_new`}>Add new</Link>
        </TabsTrigger>
      </TabsList>

      <TabsContentViews />
      {(success && data ) && <TabsContentUpdate id={video_id} data={data as z.infer<typeof videoSchema>}/>}
      <TabsContentAdd />
    </Tabs>
  );
}

export default VideosTabs;
