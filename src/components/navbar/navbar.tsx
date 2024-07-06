"use client"
import React from 'react';
import {LINKS} from "@/components/navbar/links";
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import ModeToggle from "@/components/ui/mode-toggle";


const Navbar = () => {

    const pathname = usePathname()
    return (
        <div className='fixed z-50  border md:bg-transparent md:dark:bg-transparent backdrop-blur-lg bg-white dark:bg-black md:top-10 bottom-2 right-2 left-2
        w-auto h-16 md:w-20 md:h-auto md:bottom-10 md:-left-3
        md:rounded-l-2xl rounded-2xl'>
            <div className='relative h-full w-full'>
                <div className="flex gap-3  h-full md:flex-col items-center justify-center"
                >
                    {
                        LINKS.map(link => (
                            <TooltipProvider key={link.id}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link href={link.path}
                                              className='cursor-pointer transition-all duration-300 md:hover:-translate-y-1.5 '>
                                            <div className='flex flex-col items-center justify-center'>

                                <span className={` hover:text-gray-500 dark:hover:text-gray-200 p-2
                                ${pathname === link.path ? 'text-black dark:text-gray-100' : 'text-gray-500'}`}>
                                    {
                                        link.icon
                                    }
                                </span>
                                                <span
                                                    className={`h-1 w-10 rounded ${pathname === link.path ? 'bg-black dark:bg-gray-100' : 'bg-transparent'} `}></span>
                                            </div>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>
                                            {
                                                link.title
                                            }
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                        ))
                    }
                    <ModeToggle/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;