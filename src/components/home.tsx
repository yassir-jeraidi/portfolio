"use client"
import React, {JSX} from "react";
import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import me from "@/assets/me/me.png";

export default function Home() : JSX.Element {
    const words: string[] = ["'m Yassir", "'m developer", "❤️Javascript", "❤️MERN"];

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.3 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.div
            className="md:flex md:ps-40 h-screen justify-center items-center gap-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div className="ls" variants={itemVariants}>
                <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                    <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-600 bg-opacity-50">
                        👋Hi, Welcome There!
                    </h1>
                    <div className="text-4xl flex text-wrap font-bold md:text-7xl text-neutral-600 dark:text-neutral-400">
                        <FlipWords words={words} />
                    </div>
                    <p className="mt-4 font-normal text-base text-neutral-500">
                        Full Stack Web Developer with a degree in Computer Science and practical experience in creating
                        responsive web/desktop applications. Skilled in both front-end and back-end development, with a
                        focus on user experience and performance optimization. Seeking a position to leverage my skills
                        and contribute to innovative projects.
                    </p>
                    <a href='/cv-jy.pdf' download>
                        <Button className='my-4'>view resume</Button>
                    </a>
                </div>
            </motion.div>
            <motion.div className="rs" variants={itemVariants}>
                <Image alt='me' src={me} width={800} />
            </motion.div>
        </motion.div>
    );
}