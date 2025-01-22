'use server'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import TabsViews from "./tabs-views";
import TabsUpdate from "./tabs-update";
import TabsAdd from "./tabs-add";
import { getProjectById } from "@/drizzle/func/projects";
import { ProjectType } from "@/lib/type";

async function ProjectsTabs({ searchParams }: { searchParams: Promise<{ tabs: string; project_id: string; }> }) {
  const { tabs, project_id } = await searchParams;
  const {data, success} = await getProjectById(project_id)
  return (
    <Tabs defaultValue="views" value={tabs ? tabs : 'views'}>
      <TabsList>
        <TabsTrigger value="views">
          <Link href={`/dashboard/projects?tabs=views`}>Views</Link>
        </TabsTrigger>
        <TabsTrigger value="update" disabled={!project_id}>
          <Link href={`/dashboard/projects?tabs=update&project_id=${project_id}`}>Update</Link>
        </TabsTrigger>
        <TabsTrigger value="add_new">
          <Link href={`/dashboard/projects?tabs=add_new`}>Add new</Link>
        </TabsTrigger>
      </TabsList>
      <TabsViews />
      {(success && data ) && <TabsUpdate id={project_id} data={data as ProjectType}/>}
      <TabsAdd />
    </Tabs>
  );
}

export default ProjectsTabs;
