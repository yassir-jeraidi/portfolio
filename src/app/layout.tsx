import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import {Spotlight} from "@/components/ui/spotlight";
import {Toaster} from "@/components/ui/sonner";
import React, {JSX} from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Yassir Jeraidi",
    keywords: "Jeraidi Yassir, portfolio, web developer, full-stack developer",
    description: "web developer",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>): JSX.Element {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
        >
            <div
                className=" min-h-screen pb-20 md:pb-0 w-full px-6 md:px-36 rounded-md  dark:bg-black/[0.95]  bg-grid-sky-600/[0.05] relative overflow-hidden ">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                />
                <Navbar/>
                {children}
                <Toaster/>
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}
