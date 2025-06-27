"use client"

import { TracingBeam } from "@/components/ui/tracing-beam";
import { HoverEffect } from "@/components/ui/card-hover-effect";
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
import { useTheme } from "next-themes";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Skills() {
    const { theme } = useTheme();

    const FadeInSection = ({ children }: { children: React.ReactNode }) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });

        return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        );
    };

    const Section = ({ title, items }: { title: string; items: any }) => (
        <FadeInSection>
            <h1 className="text-2xl px-2 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500 bg-opacity-50 mb-4">
                {title}
            </h1>
            <HoverEffect items={items} />
        </FadeInSection>
    );

    return (
        <TracingBeam className="md:px-8 pb-20">
            <div className="md:py-20 flex flex-col flex-wrap justify-center items-center">
                <div className="ps-2 mx-auto relative z-10 w-full pt-20 md:pt-0 space-y-10">
                    <Section title="Programming Languages :" items={programmingLanguages(theme)} />
                    <Section title="Front end :" items={frontend(theme)} />
                    <Section title="Back end :" items={backend(theme)} />
                    <Section title="Databases :" items={databases} />
                    <Section title="Devops :" items={devops(theme)} />
                    <Section title="Tools & Desktop dev :" items={software(theme)} />
                    <Section title="Design :" items={design} />
                    <Section title="Charting libraries :" items={chartingLibraries} />
                </div>
            </div>
        </TracingBeam>
    );
}
