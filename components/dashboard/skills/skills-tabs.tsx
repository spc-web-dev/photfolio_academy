'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SkillTabsViews from "./skill-tabs-views";
import SkillTabsUpdate from "./skill-tabs-update";
import SkillTabsAdd from "./skill-tabs-add";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchSkillById } from "@/lib/action-skills";
import { SkillType } from "@/lib/type";


function SkillsTabs({ tabs, skill_id }: { tabs: string; skill_id: string }) {
  const [skill,setSkill] = useState<SkillType>()
  useEffect(()=>{
    if(skill_id != ''){
      async function handleFetch(){
        const { data } = await fetchSkillById(skill_id)
        data && setSkill(data as SkillType)
      }
      handleFetch()
    }
  },[skill_id])
  return (
    <Tabs defaultValue={"views"} value={tabs ? tabs : "views"}>
      <TabsList>
        <TabsTrigger value="views" asChild>
          <Link href={"/dashboard/skills?tabs=views"}>Views</Link>
        </TabsTrigger>
        <TabsTrigger value="update" asChild>
          <Link href={"/dashboard/skills?tabs=update&skill_id="}>Update</Link>
        </TabsTrigger>
        <TabsTrigger value="add_skill" asChild>
          <Link href={"/dashboard/skills?tabs=add_skill"}>Add Skill</Link>
        </TabsTrigger>
      </TabsList>
      <SkillTabsViews tabs={tabs} />
        {skill ? <SkillTabsUpdate data={skill as SkillType} skillId={skill_id}/> : <TabsContent value="tabs">
            <div>
            loading... loading....
            </div>
          </TabsContent>}
      <SkillTabsAdd />
    </Tabs>
  );
}

export default SkillsTabs;
