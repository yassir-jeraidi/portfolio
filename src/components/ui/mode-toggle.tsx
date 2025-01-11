"use client"
import React from 'react';
import {useTheme} from "next-themes";
import {MoonIcon, SunIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button";
import {motion} from "framer-motion";

const ModeToggle = () => {
    const {setTheme, theme} = useTheme()

    const iconVariants = {
        initial: {opacity: 0, x: -50},
        animate: {opacity: 1, x: 0},
        exit: {opacity: 0, x: 50},
    };

    return (
        <Button
            variant='outline'
            size='icon'
            className="dark:bg-neutral-900 bg-white"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            {
                theme === 'dark' ? (
                    <motion.div
                        key="icon2"
                        variants={iconVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <SunIcon className='w-5 h-5'/>
                    </motion.div>
                ) : (
                    <motion.div
                        key="icon1"
                        variants={iconVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <MoonIcon className='w-5 h-5'/>
                    </motion.div>
                )
            }
        </Button>
    );
};

export default ModeToggle;