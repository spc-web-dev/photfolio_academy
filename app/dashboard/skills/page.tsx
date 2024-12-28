import SkillsTabs from "@/components/dashboard/skills/skills-tabs"


 async function page({ searchParams }:{
  searchParams: Promise<{
    tabs: string;
    skill_id: string;
  }>
}) {
  return (
    <div>
        <SkillsTabs tabs={(await searchParams).tabs} skill_id={(await searchParams).skill_id} />
    </div>
  )
}

export default page