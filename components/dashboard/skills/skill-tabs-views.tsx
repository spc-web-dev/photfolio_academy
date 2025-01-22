'use client'
import { TabsContent } from '@/components/ui/tabs'
import React, { useEffect, useState } from 'react'
import SkillsViewsTable from './skills-views-table'
import { SkillType } from '@/lib/type';
import { fetchSkills } from '@/lib/action/action-skills';

function SkillTabsViews({ tabs }: { tabs: string; }) {
    const [skills,setSkills] = useState<SkillType[] | [] >([])
    useEffect(()=>{
        async function fetch() {
            const res = await fetchSkills()
            if (res) {
                setSkills(res.data as SkillType[])
            }
        }
        fetch()
    },[tabs])
  return (
    <TabsContent value='views'>
        <SkillsViewsTable data={skills}/>
    </TabsContent>
  )
}

export default SkillTabsViews