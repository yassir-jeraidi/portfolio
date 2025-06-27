import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import {Spotlight} from "@/components/ui/spotlight";
import {Toaster} from "@/components/ui/sonner";
import React, {JSX} from "react";
import {cn} from "@/lib/utils";

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
            enableColorScheme
            enableSystem
        >
            <div className="relative min-h-screen w-full ">
                <div
                    className={cn(
                        "absolute -z-30 inset-0",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,#e4e4e7_0.1px,transparent_0.1px),linear-gradient(to_bottom,#e4e4e7_0.3px,transparent_0.3px)]",
                        "dark:[background-image:linear-gradient(to_right,#262626_0.3px,transparent_0.3px),linear-gradient(to_bottom,#262626_0.3px,transparent_0.3px)]",
                    )}
                />
                <div
                    className="pointer-events-none absolute inset-0 -z-20 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)] dark:bg-black"></div>
                <Spotlight
                    className="-top-40 z-10 left-0 md:left-60 md:-top-20"
                />
                <div className="z-50 px-8">
                    {children}
                </div>
                <Toaster/>
            <Navbar/>
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}
