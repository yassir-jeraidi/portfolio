import Image from "next/image";

import html_icon from "@/assets/skills-icons/html5.svg";
import css_icon from "@/assets/skills-icons/css.svg";
import js_icon from "@/assets/skills-icons/javascript.svg";
import php_icon_dark from "@/assets/skills-icons/Php_dark.svg";
import php_icon_light from "@/assets/skills-icons/Php_light.svg";
import java_icon from "@/assets/skills-icons/java.svg";
import ts_icon from "@/assets/skills-icons/typescript.svg";
import python_icon from "@/assets/skills-icons/python.svg";

import react_icon from "@/assets/skills-icons/react.svg";
import nextjs_icon from "@/assets/skills-icons/nextjs_icon_dark.svg";
import angular_icon from "@/assets/skills-icons/angular.svg";
import vue_icon from "@/assets/skills-icons/vue.svg";
import tailwindcss_icon from "@/assets/skills-icons/tailwindcss.svg";
import bootstrap_icon from "@/assets/skills-icons/bootstrap.svg";
import headless_ui_icon from "@/assets/skills-icons/headlessui.svg";
import material_ui_icon from "@/assets/skills-icons/materialui.svg";
import shadcn_ui_icon_dark from "@/assets/skills-icons/ui_dark.svg";
import shadcn_ui_icon_light from "@/assets/skills-icons/ui_light.svg";
import react_query_icon from "@/assets/skills-icons/reactquery.svg";
import react_router_icon from "@/assets/skills-icons/reactrouter.svg";
import redux_icon from "@/assets/skills-icons/redux.svg";

import nodejs_icon from "@/assets/skills-icons/nodejs.svg";
import expressjs_icon_dark from "@/assets/skills-icons/Express.js_dark.svg";
import expressjs_icon_light from "@/assets/skills-icons/Express.js_light.svg";
import jwt_icon from "@/assets/skills-icons/jwt.svg";
import laravel_icon from "@/assets/skills-icons/laravel.svg";
import spring_icon from "@/assets/skills-icons/spring.svg";

import mongodb_icon from "@/assets/skills-icons/mongodb.svg";
import mysql_icon from "@/assets/skills-icons/mysql.svg";
import sqlite_icon from "@/assets/skills-icons/sqlite.svg";
import supabase_icon from "@/assets/skills-icons/supabase.svg";
import firebase_icon from "@/assets/skills-icons/firebase.svg";

import docker_icon from "@/assets/skills-icons/docker.svg";
import vercel_light_icon from "@/assets/skills-icons/Vercel_light.svg";
import vercel_dark_icon from "@/assets/skills-icons/Vercel_dark.svg";

import git_icon from "@/assets/skills-icons/git.svg";
import jetbrains_icon from "@/assets/skills-icons/jetbrainsSolid.svg";
import vscode_icon from "@/assets/skills-icons/vscode.svg";
import vite_icon from "@/assets/skills-icons/vitejs.svg";
import warp_icon from "@/assets/skills-icons/warp.svg";
import electron_icon from "@/assets/skills-icons/electron.svg";

import figma_icon from "@/assets/skills-icons/figma.svg";
import canva_icon from "@/assets/skills-icons/canva.svg";

import chartjs_icon from "@/assets/skills-icons/chartjs.svg";

export const programmingLanguages = (theme: string | undefined) => [
    { title: "HTML", icon: <Image src={html_icon} alt="HTML" width={50} height={50} /> },
    { title: "CSS", icon: <Image src={css_icon} alt="CSS" width={50} height={50} /> },
    { title: "JavaScript", icon: <Image src={js_icon} alt="JavaScript" width={50} height={50} /> },
    { title: "TypeScript", icon: <Image src={ts_icon} alt="TypeScript" width={50} height={50} /> },
    { title: "Java", icon: <Image src={java_icon} alt="Java" width={50} height={50} /> },
    {
        title: "PHP",
        icon: <Image src={theme === "dark" ? php_icon_dark : php_icon_light} alt="PHP" width={50} height={50} />,
    },
    { title: "Python", icon: <Image src={python_icon} alt="Python" width={50} height={50} /> },
];

export const frontend = (theme: string | undefined) => [
    { title: "React", icon: <Image src={react_icon} alt="React" width={50} height={50} /> },
    { title: "Next.js", icon: <Image src={nextjs_icon} alt="Next.js" width={50} height={50} /> },
    { title: "Angular", icon: <Image src={angular_icon} alt="Angular" width={50} height={50} /> },
    { title: "Vue.js", icon: <Image src={vue_icon} alt="Vue.js" width={50} height={50} /> },
    { title: "Tailwind CSS", icon: <Image src={tailwindcss_icon} alt="Tailwind CSS" width={50} height={50} /> },
    { title: "Bootstrap", icon: <Image src={bootstrap_icon} alt="Bootstrap" width={50} height={50} /> },
    { title: "Material UI", icon: <Image src={material_ui_icon} alt="Material UI" width={50} height={50} /> },
    {
        title: "Shadcn UI",
        icon: <Image src={theme === "dark" ? shadcn_ui_icon_dark : shadcn_ui_icon_light} alt="Shadcn UI" width={50} height={50} />,
    },
    { title: "Headless UI", icon: <Image src={headless_ui_icon} alt="Headless UI" width={50} height={50} /> },
    { title: "React Query", icon: <Image src={react_query_icon} alt="React Query" width={50} height={50} /> },
    { title: "React Router", icon: <Image src={react_router_icon} alt="React Router" width={50} height={50} /> },
    { title: "Redux", icon: <Image src={redux_icon} alt="Redux" width={50} height={50} /> },
];

export const backend = (theme: string | undefined) => [
    { title: "Node.js", icon: <Image src={nodejs_icon} alt="Node.js" width={50} height={50} /> },
    {
        title: "Express.js",
        icon: <Image src={theme === "dark" ? expressjs_icon_dark : expressjs_icon_light} alt="Express.js" width={50} height={50} />,
    },
    { title: "JWT", icon: <Image src={jwt_icon} alt="JWT" width={50} height={50} /> },
    { title: "Laravel", icon: <Image src={laravel_icon} alt="Laravel" width={50} height={50} /> },
    { title: "Spring", icon: <Image src={spring_icon} alt="Spring" width={50} height={50} /> },
];

export const databases = [
    { title: "MongoDB", icon: <Image src={mongodb_icon} alt="MongoDB" width={40} height={40} /> },
    { title: "MySQL", icon: <Image src={mysql_icon} alt="MySQL" width={50} height={50} /> },
    { title: "SQLite", icon: <Image src={sqlite_icon} alt="SQLite" width={50} height={50} /> },
    { title: "Firebase", icon: <Image src={firebase_icon} alt="Firebase" width={50} height={50} /> },
    { title: "Supabase", icon: <Image src={supabase_icon} alt="Supabase" width={50} height={50} /> },
];

export const devops = (theme: string | undefined) => [
    { title: "Docker", icon: <Image src={docker_icon} alt="Docker" width={50} height={50} /> },
    {
        title: "Vercel",
        icon: <Image src={theme === "dark" ? vercel_dark_icon : vercel_light_icon} alt="Vercel" width={50} height={50} />,
    },
];

export const software = (theme: string | undefined) => [
    { title: "Git", icon: <Image src={git_icon} alt="Git" width={50} height={50} /> },
    { title: "JetBrains", icon: <Image src={jetbrains_icon} alt="JetBrains" width={50} height={50} /> },
    { title: "VSCode", icon: <Image src={vscode_icon} alt="VSCode" width={50} height={50} /> },
    { title: "Vite", icon: <Image src={vite_icon} alt="Vite" width={50} height={50} /> },
    { title: "Warp", icon: <Image src={warp_icon} alt="Warp" width={50} height={50} /> },
    { title: "Electron", icon: <Image src={electron_icon} alt="Electron" width={50} height={50} /> },
];

export const design = [
    { title: "Figma", icon: <Image src={figma_icon} alt="Figma" width={50} height={50} /> },
    { title: "Canva", icon: <Image src={canva_icon} alt="Canva" width={50} height={50} /> },
];

export const chartingLibraries = [
    { title: "Chart.js", icon: <Image src={chartjs_icon} alt="Chart.js" width={50} height={50} /> },
];
