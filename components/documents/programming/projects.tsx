import ProTitle from "./pro-title"
import ProjectCard from "./project-card"


function Projects() {
  return (
    <section className="space-y-4 text-sm">
        <ProTitle title="Projects" />
        <div className="flex flex-wrap justify-around gap-4">
            {Array.from({ length: 10 }).map((_,index)=>(
                <ProjectCard key={index} index={index}/>
            ))}
        </div>
    </section>
  )
}

export default Projects