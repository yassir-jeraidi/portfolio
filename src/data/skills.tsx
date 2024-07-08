import Image from "next/image";
import html_icon from "@/assets/html5.svg";
import css_icon from "@/assets/css.svg";
import tailwindcss_icon from "@/assets/tailwindcss.svg";
import js_icon from "@/assets/javascript.svg";
import react_icon from "@/assets/react.svg";
import nextjs_icon from "@/assets/nextjs_icon_dark.svg";
import material_ui_icon from "@/assets/materialui.svg";
import shadcn_ui_icon_dark from "@/assets/ui_dark.svg";
import shadcn_ui_icon_light from "@/assets/ui_light.svg";
import react_query_icon from "@/assets/reactquery.svg";
import react_router_icon from "@/assets/reactrouter.svg";
import redux_icon from "@/assets/redux.svg";
import nodejs_icon from "@/assets/nodejs.svg";
import expressjs_icon_dark from "@/assets/Express.js_dark.svg";
import expressjs_icon_light from "@/assets/Express.js_light.svg";
import mongodb_icon from "@/assets/mongodb.svg";
import jwt_icon from "@/assets/jwt.svg";
import php_icon_dark from "@/assets/Php_dark.svg";
import php_icon_light from "@/assets/Php_light.svg";
import laravel_icon from "@/assets/laravel.svg";
import java_icon from "@/assets/java.svg";
import spring_icon from "@/assets/spring.svg";
import mysql_icon from "@/assets/mysql.svg";
import git_icon from "@/assets/git.svg";
import jetbrains_icon from "@/assets/jetbrainsSolid.svg";


export const skills = (theme: string | undefined = 'dark')=> {
    return [
        {
            icon: <Image src={html_icon} alt='html icon' width={60}/>,
            title: "HTML",
        },
        {
            icon: <Image src={css_icon} alt='css icon' width={60}/>,
            title: "CSS",
        },
        {
            icon: <Image src={tailwindcss_icon} alt='tailwind css icon' width={60}/>,
            title: "Tailwind CSS",
        },
        {
            icon: <Image src={js_icon} alt='js icon' width={60}/>,
            title: "Javascript",
        },
        {
            icon: <Image src={react_icon} alt='react icon' width={60}/>,
            title: "ReactJs",
        },
        {
            icon: <Image src={nextjs_icon} alt='nextjs icon' width={60}/>,
            title: "NextJs",
        },
        {
            icon: <Image src={material_ui_icon} alt='material ui icon' width={60}/>,
            title: "Material UI",
        },
        {
            icon: <Image src={theme === 'dark' ? shadcn_ui_icon_dark : shadcn_ui_icon_light} alt='shadcn ui icon' width={60}/>,
            title: "Shadcn UI",
        },
        {
            icon: <Image src={react_query_icon} alt='react query icon' width={60}/>,
            title: "React Query",
        },
        {
            icon: <Image src={react_router_icon} alt='react router icon' width={60}/>,
            title: "React Router",
        },
        {
            icon: <Image src={redux_icon} alt='redux icon' width={60}/>,
            title: "Redux",
        },
        {
            icon: <Image src={nodejs_icon} alt='nodejs icon' width={60}/>,
            title: "NodeJS",
        },
        {
            icon: <Image src={theme === 'dark' ? expressjs_icon_dark : expressjs_icon_light} alt='expressjs icon' width={60}/>,
            title: "ExpressJs",
        },
        {
            icon: <Image src={mongodb_icon} alt='mongodb icon' width={30}/>,
            title: "MongoDB",
        },
        {
            icon: <Image src={jwt_icon} alt='jwt icon' width={60}/>,
            title: "JWT",
        },
        {
            icon: <Image src={theme === 'dark' ? php_icon_dark : php_icon_light}  alt='php icon' width={60}/>,
            title: "PHP",
        },
        {
            icon: <Image src={laravel_icon} alt='laravel icon' width={60}/>,
            title: "Laravel",
        },
        {
            icon: <Image src={java_icon} alt='java icon' width={60}/>,
            title: "JAVA",
        },
        {
            icon: <Image src={spring_icon} alt='spring icon' width={60}/>,
            title: "Spring",
        },
        {
            icon: <Image src={mysql_icon} alt='mysql icon' width={60}/>,
            title: "MySql",
        },
        {
            icon: <Image src={git_icon} alt='git icon' width={60}/>,
            title: "Git",
        },
        {
            icon: <Image src={jetbrains_icon} alt='jetbrains products icon' width={60}/>,
            title: "Jetbrains",
        },
    ];

}
