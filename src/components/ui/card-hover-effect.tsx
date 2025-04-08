import {cn} from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import {JSX, useState} from "react";

export const HoverEffect = ({
                                items,
                                className,
                            }: {
    items: {
        title: string;
        icon: JSX.Element;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4  py-2",
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                    key={item?.title}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full  bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
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
                        <CardTitle className="text-gray-600 dark:text-white">{item.title}</CardTitle>
                        <CardDescription>{item.icon}</CardDescription>
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
                "rounded-2xl backdrop-blur-2xl h-full max-h-[150px] md:max-h-full w-full md:p-4 overflow-hidden border dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4 flex justify-center items-center flex-col gap-4">{children}</div>
            </div>
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
        <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
                                    className,
                                    children,
                                }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mb-4 text-zinc-400 tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};
