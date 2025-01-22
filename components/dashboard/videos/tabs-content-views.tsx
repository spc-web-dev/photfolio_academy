'use server'
import { TabsContent } from "@/components/ui/tabs"
import VideosViewsTable from "./videos-views-table"
import { fetchVideos } from "@/lib/action/action-videos"
import { VideoType } from "@/lib/type"

async function TabsContentViews() {
    const { success , data } = await fetchVideos()
    return (
      <TabsContent value='views'>
        {success && <VideosViewsTable data={data as VideoType[]}/>}
      </TabsContent>
    )
  }
  
  export default TabsContentViews