import Projects from "@/components/projects";
import {JSX} from "react";

export const metadata = {
    title: "Projects",
    description: "My projects",
}

export default function ProjectsPage() : JSX.Element {
    return (
        <Projects />
    )
}
