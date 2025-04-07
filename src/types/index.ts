import {JSX} from "react";
import {StaticImageData} from "next/image";

export interface ProjectCardProps {
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    images: StaticImageData[];
    liveUrl?: string;
    githubUrl?: string;
}

export interface Project extends ProjectCardProps{
    id: number;
}

export interface Link {
    id : number,
    title : string,
    icon : JSX.Element,
    path : string
}


