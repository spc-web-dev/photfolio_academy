import { SkillsData } from "@/lib/data"
import ProTitle from "./pro-title"
import { Button } from "@/components/ui/button"


function Skills() {
  return (
    <section className="space-y-4">
        <ProTitle title="Programming Languages" />
        <div className="flex gap-4 flex-wrap">
            {SkillsData.map(skill=>(
                <Button key={skill.id} className="" variant={'secondary'}>{skill.name}</Button>
            ))}
        </div>
    </section>
  )
}

export default Skills