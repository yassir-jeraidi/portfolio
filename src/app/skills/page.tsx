import {HoverEffect} from "@/components/ui/card-hover-effect";
import {JSX} from "react";

export default function SkillsPage() : JSX.Element {
    return (

        <div className="md:flex md:ps-44 justify-start flex-col items-start gap-4 pb-12 px-1.5">
            <h1 className="text-4xl mx-2 font-bold bg-clip-text text-transparent bg-gradient-to-b pt-10 md:pt-20 from-neutral-300 to-neutral-500 bg-opacity-50">
                Skills
            </h1>
            <HoverEffect/>
        </div>
    );
}

