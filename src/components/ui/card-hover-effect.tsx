'use client'
import { cn} from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import {skills} from "@/data/skills";
import {useTheme} from "next-themes";

export const HoverEffect = ({
                                className,
                            }: {
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const {theme} = useTheme();
    return (
        <div
            className={cn(
                "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 ",
                className
            )}
        >
            {skills(theme).map((item, idx) => (
                <div
                    key={idx}
                    className="relative group p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0  h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <div className='mb-5'>{item.icon}</div>
                        <CardTitle>{item.title}</CardTitle>
                    </Card>
                </div>
            ))}
        </div>
    );
};

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
