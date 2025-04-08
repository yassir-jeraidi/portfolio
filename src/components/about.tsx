"use client"
import aboutMe from '@/assets/me/about-me.png'
import Image from "next/image";
import {TracingBeam} from "@/components/ui/tracing-beam";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import Timeline from "@/components/timeline";
import {EDUCATIONS} from "@/data/educations";
import {EXPERIENCES} from "@/data/experiences";

export default function About() {
    const aboutRef = useRef(null);
    const educationRef = useRef(null);
    const experienceRef = useRef(null);

    const aboutInView = useInView(aboutRef, { once: true });
    const educationInView = useInView(educationRef, { once: true });
    const experienceInView = useInView(experienceRef, { once: true });

    return (
        <TracingBeam className="md:px-8 pb-28">
            <div className="md:flex md:py-20 justify-center flex-col items-center gap-4">
                <div className="ls">
                    <motion.div
                        ref={aboutRef}
                        initial={{ opacity: 0, y: 50 }}
                        animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="ps-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0"
                    >
                        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-300 to-neutral-500 bg-opacity-50">
                            About Me
                        </h1>
                        <div className="mt-4 font-normal text-base gap-2 text-neutral-500 flex justify-center items-center flex-col">
                            <p>
                                Hello! I&apos;m Jeraidi Yassir, a 21-year-old web development enthusiast with a
                                Bachelor’s degree in Information Technology. My passion lies in crafting innovative web
                                solutions while continuously honing my skills to stay at the forefront of technology.
                            </p>
                            <p>
                                I specialize in full-stack development, seamlessly bridging the gap between front-end
                                and back-end. On the front-end, I work with HTML, CSS, JavaScript, React.js, and Next.js
                                to design engaging and dynamic user interfaces. For back-end solutions, I leverage
                                Node.js with Express.js, PHP with Laravel, and Java with Spring Boot to build robust,
                                scalable applications. I also have experience developing desktop applications using
                                Electron.js and am proficient in version control with Git, GitHub, and GitLab.
                            </p>
                            <p>
                                My development environment is powered by tools like VSCode and JetBrains IDEs, ensuring
                                efficient workflows and high-quality results. Having worked in private IT companies and
                                as a freelancer, I’ve gained valuable insights into diverse project environments and
                                client requirements. I’m a positive and open-minded individual, always eager to embrace
                                new challenges, refine my expertise, and deliver impactful solutions.
                            </p>
                        </div>
                    </motion.div>
                </div>
                <div className="rs">
                    <Image alt='about me' src={aboutMe} width={800}/>
                </div>
            </div>
            <div className='p-4'>
                <motion.div
                    ref={experienceRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={experienceInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl w-fit my-6 font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-300 to-neutral-500 bg-opacity-50">
                        <span>Experience</span>
                    </h1>
                    <Timeline data={EXPERIENCES} />
                </motion.div>
            </div>
            <div className='p-4'>
                <motion.div
                    ref={educationRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={educationInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl w-fit my-6 font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-300 to-neutral-500 bg-opacity-50">
                        <span>Education</span>
                    </h1>
                    <Timeline data={EDUCATIONS} />
                </motion.div>
            </div>
        </TracingBeam>
    );
}