'use server'
import { TabsContent } from "@/components/ui/tabs";
import ViewsTable from "./views-table";
import { getProjects } from "@/drizzle/func/projects";
import { ProjectType } from "@/lib/type";


async function TabsViews() {
  const projects = await getProjects()
  return (
    <TabsContent value="views">
        <ViewsTable data={projects.data as ProjectType[]}/>
    </TabsContent>
  )
}

export default TabsViews