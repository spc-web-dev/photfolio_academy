import ProjectsTabs from "@/components/dashboard/projects/projects-tabs"


async function page({ searchParams }: { searchParams: Promise<{
  tabs: string;
  project_id: string;
}>}) {
  return (
    <div>
        <ProjectsTabs searchParams={searchParams}/>
    </div>
  )
}

export default page