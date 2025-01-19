'use client'

import {cn} from "@/lib/utils";
import {AnimatePresence, motion, useInView} from "framer-motion";
import React, {useState, useRef} from "react";
import {
    programmingLanguages,
    frontend,
    design,
    backend,
    databases,
    devops,
    chartingLibraries,
    software
} from "@/data/skills";
import {useTheme} from "next-themes";

const cardVariants = {
    hiddenLeft: {opacity: 0, x: -100},
    hiddenRight: {opacity: 0, x: 100},
    hiddenTop: {opacity: 0, y: -100},
    hiddenBottom: {opacity: 0, y: 100},
    visible: {opacity: 1, x: 0, y: 0},
    exit: {opacity: 0, x: 0, y: 0},
};

export const HoverEffect = ({
                                className,
                            }: {
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const {theme} = useTheme() || "light";

    const handleClick = (idx: number): void => {
        if (hoveredIndex === idx) {
            setHoveredIndex(null); // Deselect if the same card is clicked
        } else {
            setHoveredIndex(idx);  // Select the clicked card
        }
    };

    return (
        <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 50}}
            transition={{duration: 0.5}}
        >
            <div className="programming-languages">
                <h2 className="text-3xl mx-2 my-3 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500 bg-opacity-50">
                    Programming Languages :
                </h2>
                <div
                    className={cn(
                        "grid grid-cols-2 gap-5 md:gap-0 md:grid-cols-5  ",
                        className
                    )}
                >
                    <AnimatedCard skills={programmingLanguages(theme)} handleClick={handleClick}/>
                </div>
            </div>
            <div className="frontend">
                <h2 className="text-3xl mx-2 my-3 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500 bg-opacity-50">
                    Frontend :
                </h2>
                <div
                    className={cn(
                        "grid grid-cols-2 gap-5 md:gap-0 md:grid-cols-5  ",
                        className
                    )}
                >
                    <AnimatedCard skills={frontend(theme)} handleClick={handleClick}/>
                </div>
            </div>
            <div className="design">
                <h2 className="text-3xl mx-2 my-3 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500 bg-opacity-50">
                    Design :
                </h2>
                <div
                    className={cn(
                        "grid grid-cols-2 gap-5 md:gap-0 md:grid-cols-5  ",
                        className
                    )}
                >
                    <AnimatedCard skills={design} handleClick={handleClick}/>
                </div>
            </div>
            <div className="backend">
                <h2 className="text-3xl mx-2 my-3 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500 bg-opacity-50">
                    Backend :
                </h2>
                <div
                    className={cn(
                        "grid grid-cols-2 gap-5 md:gap-0 md:grid-cols-5  ",
                        className
                    )}
                >
                    <AnimatedCard skills={backend(theme)} handleClick={handleClick}/>
                </div>
            </div>
            <div className="databases">
                <h2 className="text-3xl mx-2 my-3 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500 bg-opacity-50">
                    Databases :
                </h2>
                <div
                    className={cn(
                        "grid grid-cols-2 gap-5 md:gap-0 md:grid-cols-5  ",
                        className
                    )}
                >
                    <AnimatedCard skills={databases} handleClick={handleClick}/>
                </div>
            </div>
            <div className="devops">
                <h2 className="text-3xl mx-2 my-3 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500 bg-opacity-50">
                    DevOps :
                </h2>
                <div
                    className={cn(
                        "grid grid-cols-2 gap-5 md:gap-0 md:grid-cols-5  ",
                        className
                    )}
                >
                    <AnimatedCard skills={devops(theme)} handleClick={handleClick}/>
                </div>
            </div>
            <div className="charting-libraries">
                <h2 className="text-3xl mx-2 my-3 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500 bg-opacity-50">
                    Charting Libraries :
                </h2>
                <div
                    className={cn(
                        "grid grid-cols-2 gap-5 md:gap-0 md:grid-cols-5  ",
                        className
                    )}
                >
                    <AnimatedCard skills={chartingLibraries} handleClick={handleClick}/>
                </div>
            </div>
            <div className="software">
                <h2 className="text-3xl mx-2 my-3 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500 bg-opacity-50">
                    Software :
                </h2>
                <div
                    className={cn(
                        "grid grid-cols-2 gap-5 md:gap-0 md:grid-cols-5  ",
                        className
                    )}
                >
                    <AnimatedCard skills={software(theme)} handleClick={handleClick}/>
                </div>
            </div>
        </motion.div>
    );
};


const AnimatedCard = (
    {
        skills,
        handleClick,
    }: {
        skills: { title: string; icon: React.ReactNode }[];
        handleClick: (idx: number) => void;
    }
) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const ref = useRef(null);
    const inView = useInView(ref, {once: true});
    return (
        skills.map((item, idx) => {

            return (
                <motion.div
                    key={idx}
                    className="relative group p-2 h-full w-full cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => handleClick(idx)}  // Handle clicks for mobile
                    initial={idx % 4 === 0 ? "hiddenLeft" : idx % 4 === 1 ? "hiddenRight" : idx % 4 === 2 ? "hiddenTop" : "hiddenBottom"}
                    animate={inView ? "visible" : ""}
                    exit="exit"
                    variants={cardVariants}
                    transition={{duration: 0.5, delay: idx * 0.1}}
                    ref={ref}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{opacity: 0}}
                                animate={{
                                    opacity: 1,
                                    transition: {duration: 0.15},
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: {duration: 0.15, delay: 0.2},
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <div className="mb-5">{item.icon}</div>
                        <CardTitle>{item.title}</CardTitle>
                    </Card>
                </motion.div>
            );
        })
    );
}

export const Card = ({
                         className,
                         children,
                     }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-[150px] w-[150px] flex flex-col justify-center items-center " +
                " overflow-hidden  border text-slate-500 dark:bg-slate-800/[0.1]  border-black" +
                "  dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                className
            )}
        >
            {
                children
            }
        </div>
    );
};
export const CardTitle = ({
                              className,
                              children,
                          }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("font-bold tracking-wide text-center absolute bottom-5", className)}>
            {children}
        </h4>
    );
};