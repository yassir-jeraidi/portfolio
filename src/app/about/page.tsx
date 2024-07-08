import aboutMe from '@/assets/about-me.png'
import Image from "next/image";
import {
    Timeline,
    TimelineDot,
    TimelineHeading,
    TimelineItem,
    TimelineLine,
    TimelineContent
} from "@/components/ui/timeline";
import {TracingBeam} from "@/components/ui/tracing-beam";
import React from "react";

export default function About() {
    return (
        <TracingBeam className="md:px-8">
            <div className="md:flex md:py-20 justify-center flex-col items-center gap-4">
                <div className="ls">
                    <div className="ps-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500 bg-opacity-50">
                            About Me
                        </h1>
                        <div
                            className="mt-4 font-normal text-base gap-2 text-neutral-500 flex justify-center items-center flex-col">
                            <p>
                                Hello! I&apos;m Jeraidi Yassir, a 20-year-old web development enthusiast with a
                                Bachelor&apos;s degree in Information Technology. My passion for web development
                                p drives me to continuously improve my skills and stay updated with the latest
                                technologies.
                            </p>

                            <p>
                                I specialize in both front-end and back-end development,
                                using HTML, CSS, JavaScript, React.js, and Next.js to create dynamic
                                user interfaces, and Node.js with Express.js, PHP with Laravel, and
                                Java with Spring Boot for robust back-end solutions. I also have
                                p experience with Electron.js for desktop apps and am proficient
                                with version control using Git, GitHub, and GitLab.
                            </p>

                            <p>
                                My typical development environment includes VSCode and JetBrains IDEs. I am positive,
                                open-minded, and always seeking new challenges and opportunities for growth. My
                                experience
                                in private IT companies and as a freelancer has given me a well-rounded perspective on
                                project environments and client needs. My journey in web development is driven by a
                                p desire
                                for continuous self-improvement and creating impactful solutions.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="rs">
                    <Image alt='about me' src={aboutMe} width={800}/>
                </div>
            </div>
            <div className='p-4'>
                <h1 className="text-3xl  w-fit my-3 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500 bg-opacity-50">
                    <span>Education</span>
                </h1>
                <Timeline positions={'left'} className='w-full'>
                    <TimelineItem>
                        <TimelineHeading>
                            Professional Bachelor in Software Engineering and Advanced Administration of Computer
                            Systems and Networks
                        </TimelineHeading>

                        <TimelineDot/>
                        <TimelineLine/>
                        <TimelineContent>
                            <p className='text-sm my-2 text-neutral-500'>
                                October 2023 - July 2024.
                            </p>
                            EST Casablanca
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem status="done">
                        <TimelineHeading>Specialized Technician in Web Programming And
                            Technologies</TimelineHeading>

                        <TimelineDot status="current"/>
                        <TimelineLine/>
                        <TimelineContent>
                            <p className='text-sm my-2 text-neutral-500'>
                                September 2021 - July 2023.
                            </p>
                            ISFO Casablanca
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineHeading>
                            Baccalaureate In Life and Earth Sciences
                        </TimelineHeading>

                        <TimelineDot/>
                        <TimelineContent>
                            <p className='text-sm my-2 text-neutral-500'>
                                June 2021.
                            </p>
                            El Kindi Bouskoura High School
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
            <div className='p-4'>
                <h1 className="text-3xl  w-fit my-3 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500 bg-opacity-50">
                    <span>Experience</span>
                </h1>
                <Timeline positions={'left'} className='w-full'>
                    <TimelineItem>
                        <TimelineHeading>
                            ATOS | Application developer
                        </TimelineHeading>
                        <TimelineDot/>
                        <TimelineLine/>
                        <TimelineContent>
                            <p className='text-sm my-2 text-neutral-500'>
                                April 2024 - July 2024.
                            </p>

                            <ul className='text-sm  list-disc ps-6'>
                                <li>
                                    Development of a desktop application for the calculation of overtime specific to
                                    ATOS .
                                </li>
                                <li>
                                    Development of a blog management web application.
                                </li>
                            </ul>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem status="done">
                        <TimelineHeading>
                            CDC Digital and AI | Web developer
                        </TimelineHeading>

                        <TimelineDot status="current"/>
                        <TimelineContent>
                            <p className='text-sm my-2 text-neutral-500'>
                                Mars 2023 - May 2023.
                            </p>
                            <ul className='text-sm  list-disc ps-6'>
                                <li>
                                    Development of a website allowing company employees to print various management
                                    documents.
                                </li>
                            </ul>
                        </TimelineContent>
                    </TimelineItem>

                </Timeline>
            </div>
        </TracingBeam>
    );
}
