import { SkillsData } from "@/lib/data"
import ProTitle from "./pro-title"
import { Button } from "@/components/ui/button"
import Link from "next/link"


function Skills() {
  return (
    <section className="space-y-4">
        <ProTitle title="Skills" />
        <div className="flex gap-4 flex-wrap">
            {SkillsData.map(skill=>(
                <Button key={skill.id} className="" variant={'secondary'} asChild>
                  <Link href={skill.link} target="_blank">{skill.name}</Link>
                </Button>
            ))}
        </div>
    </section>
  )
}

export default Skills