"use client";
import React from "react";
import { LINKS } from "@/components/navbar/links";
import { FloatingDock } from "@/components/ui/flaoting-dock";
import { usePathname } from "next/navigation";
import ModeToggle from "@/components/ui/mode-toggle";

const Navbar = () => {
    const pathname = usePathname();

    const links = LINKS.map(link => ({
        title: link.title,
        icon: (
            <span
                className={`hover:text-gray-500 dark:hover:text-gray-200 p-2 ${
                    pathname === link.path ? "text-black dark:text-gray-100" : "text-gray-500"
                }`}
            >
                {link.icon}
            </span>
        ),
        href: link.path,
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