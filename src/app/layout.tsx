import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import Navbar from "@/components/navbar/navbar";
import {Spotlight} from "@/components/ui/spotlight";
import {Toaster} from "@/components/ui/sonner";
import React from "react";
import Head from "next/head";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Yassir Jeraidi",
    description: "web developer",
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
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
