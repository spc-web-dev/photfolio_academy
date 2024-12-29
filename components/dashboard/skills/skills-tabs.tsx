'use server'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SkillTabsViews from "./skill-tabs-views";
import SkillTabsUpdate from "./skill-tabs-update";
import SkillTabsAdd from "./skill-tabs-add";
import Link from "next/link";
import { SkillType } from "@/lib/type";
import { getSkillById } from "@/drizzle/func/skills";
import SkillSkelentoUpdate from "./skill-skelenton-update";


async function SkillsTabs({ tabs, skill_id }: { tabs: string; skill_id: string }) {
  const skill = await getSkillById(skill_id)
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
      {skill.data ?  <SkillTabsUpdate data={skill.data as SkillType} skillId={skill_id}/> :<SkillSkelentoUpdate />}
      <SkillTabsAdd />
    </Tabs>
  );
}

export default SkillsTabs;
