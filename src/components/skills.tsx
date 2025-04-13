"use client"

import {TracingBeam} from "@/components/ui/tracing-beam";
import {HoverEffect} from "@/components/ui/card-hover-effect";
import {
    backend,
    chartingLibraries,
    databases,
    design,
    devops,
    frontend,
    programmingLanguages,
    software
} from "@/data/skills";
import {useTheme} from "next-themes";
import React from "react";

export default function Skills() {
    const {theme} = useTheme()
    return (
        <TracingBeam className="md:px-8 pb-20">
            <div className="md:py-20 flex flex-col flex-wrap justify-center items-center ">
                <div className="ps-2 mx-auto relative z-10 w-full pt-20 md:pt-0">
                    <h1 className="text-2xl px-2 font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-300 to-neutral-500 bg-opacity-50">
                        Programming Languages :
                    </h1>
                    <HoverEffect items={programmingLanguages(theme)}/>
                    <h1 className="text-2xl px-2 font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-300 to-neutral-500 bg-opacity-50">
                        Front end :
                    </h1>
                    <HoverEffect items={frontend(theme)}/>
                    <h1 className="text-2xl px-2 font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-300 to-neutral-500 bg-opacity-50">
                        Back end :
                    </h1>
                    <HoverEffect items={backend(theme)}/>
                    <h1 className="text-2xl px-2 font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-300 to-neutral-500 bg-opacity-50">
                        Databases :
                    </h1>
                    <HoverEffect items={databases}/>
                    <h1 className="text-2xl px-2 font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-300 to-neutral-500 bg-opacity-50">
                        Devops :
                    </h1>
                    <HoverEffect items={devops(theme)} />
                    <h1 className="text-2xl px-2 font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-300 to-neutral-500 bg-opacity-50">
                        Tools & Desktop dev :
                    </h1>
                    <HoverEffect items={software(theme)} />
                    <h1 className="text-2xl px-2 font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-300 to-neutral-500 bg-opacity-50">
                        Design :
                    </h1>
                    <HoverEffect items={design} />
                
                    <h1 className="text-2xl px-2 font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-300 to-neutral-500 bg-opacity-50">
                        Charting libraries :
                    </h1>
                    <HoverEffect items={chartingLibraries} />
                </div>
            </div>
        </TracingBeam>
    )
}