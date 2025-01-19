import {JSX} from "react";

export interface ProjectCardProps {
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    images: string[];
    liveUrl?: string;
    githubUrl?: string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    images: string[];
    liveUrl: string;
    githubUrl: string;
}

export interface Link {
    id : number,
    title : string,
    icon : JSX.Element,
    path : string
}


