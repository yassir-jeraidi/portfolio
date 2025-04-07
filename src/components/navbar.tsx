"use client";
import React from "react";
import { LINKS } from "@/data/links";
import { FloatingDock } from "@/components/ui/flaoting-dock";
import { usePathname } from "next/navigation";
import ModeToggle from "@/components/ui/mode-toggle";
import {type Link} from "@/types";

const Navbar = () => {
    const pathname = usePathname();

    const links: Link[] = LINKS.map((link : Link) => ({
        ...link,
        icon: (
            <span
                className={`hover:text-gray-500 dark:hover:text-gray-200 p-2 ${
                    pathname === link.path ? "text-black dark:text-white" : "text-gray-400 dark:text-gray-600"
                }`}
            >
                {link.icon}
            </span>
        ),
    }));

    return (
        <div className="container">
            <div
                className="fixed z-50 border bg-white dark:bg-black bottom-2 md:bottom-10 left-1/2 -translate-x-1/2 w-auto h-16 rounded-2xl shadow-lg flex items-center justify-center px-4 backdrop-filter">
                <div className="flex gap-6 items-center">
                    <FloatingDock
                        items={links}
                    />
                    <ModeToggle />
                </div>
            </div>
        </div>
    );
};

export default Navbar;