import {ProjectCard} from "@/components/project-card";
import {PROJECTS_DATA} from "@/data/projects-data";
import {type Project} from "@/types";

export default function Projects() {
    return (
        <div className="w-full min-h-screen my-20 flex flex-wrap md:gap-5 justify-center items-center ">
            {
                PROJECTS_DATA.sort((a , b) => b.id - a.id).map((project: Project) => (
                    <ProjectCard {...project} key={project.id}/>
                ))
            }
        </div>
    );
}