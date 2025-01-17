import {ProjectCard} from "@/components/project-card";

const project1 = {
    title: "Modern E-commerce Platform",
    description: "A full-featured e-commerce platform built with React and Node.js",
    longDescription: "A sophisticated e-commerce platform that offers a seamless shopping experience with features like real-time inventory management, secure payment processing, and an intuitive admin dashboard. Built with performance and scalability in mind, it utilizes modern web technologies and best practices.",
    technologies: ["React", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    images: [
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=450&fit=crop",
        "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=800&h=450&fit=crop",
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=450&fit=crop",
    ],
    liveUrl: "https://example.com",
    isLiveUrlActive: false,
    githubUrl: "https://github.com/example/project",
    isGithubUrlActive: false,
};

const projects = [project1]

export default function Projects() {
    return (
        <div className="w-full h-screen flex justify-center items-center ">
            {
                projects.map((project , index) => (
                    <ProjectCard {...project} key={index}/>
                ))
            }
        </div>

    );
}