"use client"
import React, {JSX} from "react";
import {motion} from "motion/react";
import {FlipWords} from "@/components/ui/flip-words";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type {Link as LinkType} from "@/types";
import {SOCIAL_MEDIA_LINKS} from "@/data/social-media-links";
import {DownloadIcon} from "lucide-react";


export default function Home(): JSX.Element {
    const words: string[] = ["'m Yassir", "'m developer", "❤️Javascript", "❤️MERN"];

    const containerVariants = {
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0, transition: {duration: 0.5, staggerChildren: 0.3}}
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0, transition: {duration: 0.5}}
    };

    return (
        <motion.div
            className="flex min-h-screen justify-center items-center gap-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div className="ls" variants={itemVariants}>
                <div
                    className="p-4 flex flex-col justify-center items-center max-w-7xl mx-auto relative z-10 w-full ">
                    <h1 className="font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-400 to-neutral-600 bg-opacity-50">
                        👋Hi, Welcome There!
                    </h1>
                    <div
                        className="text-4xl flex text-wrap font-bold md:text-7xl text-neutral-600 dark:text-neutral-400">
                        <FlipWords words={words}/>
                    </div>
                    <p className="mt-4 font-normal text-base text-center text-neutral-500">
                        Full Stack Web Developer with a degree in Computer Science and practical experience in creating
                        responsive web/desktop applications. Skilled in both front-end and back-end development, with a
                        focus on user experience and performance optimization. Seeking a position to leverage my skills
                        and contribute to innovative projects.
                    </p>
                    <motion.div variants={itemVariants} className="flex gap-3 my-3">
                        {
                            SOCIAL_MEDIA_LINKS.map((link: LinkType) => (
                                <Link href={link.path} key={link.id} target="_blank">
                                    <Button size="icon"
                                            className="bg-transparent border-none dark:hover:text-white/50 hover:text-black/50 hover:bg-transparent transition-all text-black dark:text-white">
                                        {
                                            link.icon
                                        }
                                    </Button>
                                </Link>
                            ))
                        }

                    </motion.div>
                    <Link href="./Jeraidi-Yassir.pdf" target="_blank">
                        <Button className='my-4'>
                            view resume
                            <span>
                                <DownloadIcon className="w-5 h-5 mx-2"/>
                        </span>
                        </Button>
                    </Link>
                </div>
            </motion.div>

            {/*<motion.div className="rs" variants={itemVariants} >*/}
            {/*    <Image alt='me' className='rounded-full z-50 hover:scale-105 transition-all' src={me} width={800}/>*/}
            {/*</motion.div>*/}
        </motion.div>
    );
}