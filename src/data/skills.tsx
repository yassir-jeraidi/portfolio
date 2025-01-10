import Image from "next/image";

// Icons - Programming Languages
import html_icon from "@/assets/html5.svg";
import css_icon from "@/assets/css.svg";
import js_icon from "@/assets/javascript.svg";
import php_icon_dark from "@/assets/Php_dark.svg";
import php_icon_light from "@/assets/Php_light.svg";
import java_icon from "@/assets/java.svg";
import ts_icon from "@/assets/typescript.svg";
import python_icon from "@/assets/python.svg";

// Icons - Frontend Frameworks
import react_icon from "@/assets/react.svg";
import nextjs_icon from "@/assets/nextjs_icon_dark.svg";
import angular_icon from "@/assets/angular.svg";
import vue_icon from "@/assets/vue.svg";
import tailwindcss_icon from "@/assets/tailwindcss.svg";
import bootstrap_icon from "@/assets/bootstrap.svg";
import headless_ui_icon from "@/assets/headlessui.svg";
import material_ui_icon from "@/assets/materialui.svg";
import shadcn_ui_icon_dark from "@/assets/ui_dark.svg";
import shadcn_ui_icon_light from "@/assets/ui_light.svg";
import react_query_icon from "@/assets/reactquery.svg";
import react_router_icon from "@/assets/reactrouter.svg";
import redux_icon from "@/assets/redux.svg";

// Icons - Backend Frameworks
import nodejs_icon from "@/assets/nodejs.svg";
import expressjs_icon_dark from "@/assets/Express.js_dark.svg";
import expressjs_icon_light from "@/assets/Express.js_light.svg";
import jwt_icon from "@/assets/jwt.svg";
import laravel_icon from "@/assets/laravel.svg";
import spring_icon from "@/assets/spring.svg";

// Icons - Databases
import mongodb_icon from "@/assets/mongodb.svg";
import mysql_icon from "@/assets/mysql.svg";
import sqlite_icon from "@/assets/sqlite.svg";
import supabase_icon from "@/assets/supabase.svg";
import firebase_icon from "@/assets/firebase.svg";

// Icons - DevOps Tools
import docker_icon from "@/assets/docker.svg";
import vercel_light_icon from "@/assets/Vercel_light.svg";
import vercel_dark_icon from "@/assets/Vercel_dark.svg";


// Icons - Software Tools
import git_icon from "@/assets/git.svg";
import jetbrains_icon from "@/assets/jetbrainsSolid.svg";
import vscode_icon from "@/assets/vscode.svg";
import vite_icon from "@/assets/vitejs.svg";
import warp_icon from "@/assets/warp.svg";
import electron_icon from "@/assets/electron.svg";

// Icons - Design Tools
import figma_icon from "@/assets/figma.svg";
import canva_icon from "@/assets/canva.svg";

// Icons - Charting Libraries
import chartjs_icon from "@/assets/chartjs.svg";

// Programming Languages
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

// Frontend Frameworks
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

// Backend Frameworks
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

// Databases
export const databases = [
    { title: "MongoDB", icon: <Image src={mongodb_icon} alt="MongoDB" width={40} height={40} /> },
    { title: "MySQL", icon: <Image src={mysql_icon} alt="MySQL" width={50} height={50} /> },
    { title: "SQLite", icon: <Image src={sqlite_icon} alt="SQLite" width={50} height={50} /> },
    { title: "Firebase", icon: <Image src={firebase_icon} alt="Firebase" width={50} height={50} /> },
    { title: "Supabase", icon: <Image src={supabase_icon} alt="Supabase" width={50} height={50} /> },
];

// DevOps Tools
export const devops = (theme: string | undefined) => [
    { title: "Docker", icon: <Image src={docker_icon} alt="Docker" width={50} height={50} /> },
    {
        title: "Vercel",
        icon: <Image src={theme === "dark" ? vercel_dark_icon : vercel_light_icon} alt="Vercel" width={50} height={50} />,
    },
];

// Software Tools
export const software = (theme: string | undefined) => [
    { title: "Git", icon: <Image src={git_icon} alt="Git" width={50} height={50} /> },
    { title: "JetBrains", icon: <Image src={jetbrains_icon} alt="JetBrains" width={50} height={50} /> },
    { title: "VSCode", icon: <Image src={vscode_icon} alt="VSCode" width={50} height={50} /> },
    { title: "Vite", icon: <Image src={vite_icon} alt="Vite" width={50} height={50} /> },
    { title: "Warp", icon: <Image src={warp_icon} alt="Warp" width={50} height={50} /> },
    { title: "Electron", icon: <Image src={electron_icon} alt="Electron" width={50} height={50} /> },
];

// Design Tools
export const design = [
    { title: "Figma", icon: <Image src={figma_icon} alt="Figma" width={50} height={50} /> },
    { title: "Canva", icon: <Image src={canva_icon} alt="Canva" width={50} height={50} /> },
];

// Charting Libraries
export const chartingLibraries = [
    { title: "Chart.js", icon: <Image src={chartjs_icon} alt="Chart.js" width={50} height={50} /> },
];
