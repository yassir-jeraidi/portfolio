import atos_chs_login_light from "@/assets/projects/atos-chs/atos-chs-login-light.png";
import atos_chs_main_light from "@/assets/projects/atos-chs/atos-chs-main-light.png";
import atos_chs_login_dark from "@/assets/projects/atos-chs/atos-chs-login-dark.png";
import atos_chs_main_dark from "@/assets/projects/atos-chs/atos-chs-main-dark.png";

import atos_gda_list_emp_light from "@/assets/projects/atos-gestion-doc/atos-gda-list-emp-light.png";
import atos_gda_list_stg_light from "@/assets/projects/atos-gestion-doc/atos-gda-list-stg-light.png";
import atos_gda_gen_doc_light from "@/assets/projects/atos-gestion-doc/atos-gda-gen-doc-light.png";
import atos_gda_list_gen_doc_light from "@/assets/projects/atos-gestion-doc/atos-gda-list-gen-doc-light.png";
import atos_gda_import_base_light from "@/assets/projects/atos-gestion-doc/atos-gda-import-base-light.png";
import atos_gda_export_base_light from "@/assets/projects/atos-gestion-doc/atos-gda-export-base-light.png";
import atos_gda_list_emp_dark from "@/assets/projects/atos-gestion-doc/atos-gda-list-emp-dark.png";
import atos_gda_list_stg_dark from "@/assets/projects/atos-gestion-doc/atos-gda-list-stg-dark.png";
import atos_gda_list_gen_doc_dark from "@/assets/projects/atos-gestion-doc/atos-gda-list-gen-doc-dark.png";
import atos_gda_import_base_dark from "@/assets/projects/atos-gestion-doc/atos-gda-import-base-dark.png";
import atos_gda_export_base_dark from "@/assets/projects/atos-gestion-doc/atos-gda-export-base-dark.png";

import sms_about_dark from "@/assets/projects/school-management-system/sms-about-dark.png";
import sms_about_light from "@/assets/projects/school-management-system/sms-about-light.png";
import sms_contact_dark from "@/assets/projects/school-management-system/sms-contact-dark.png";
import sms_contact_light from "@/assets/projects/school-management-system/sms-contact-light.png";
import sms_enjoy_moment_dark from "@/assets/projects/school-management-system/sms-enjoy-moment-dark.png";
import sms_enjoy_moment_light from "@/assets/projects/school-management-system/sms-enjoy-moment-light.png";
import sms_footer_dark from "@/assets/projects/school-management-system/sms-footer-dark.png";
import sms_footer_light from "@/assets/projects/school-management-system/sms-footer-light.png";
import sms_home_dark from "@/assets/projects/school-management-system/sms-home-dark.png";
import sms_home_light from "@/assets/projects/school-management-system/sms-home-light.png";
import sms_login_dark from "@/assets/projects/school-management-system/sms-login-dark.png";
import sms_login_light from "@/assets/projects/school-management-system/sms-login-light.png";
import sms_more_info_dark from "@/assets/projects/school-management-system/sms-more-inf-dark.png";
import sms_more_info_light from "@/assets/projects/school-management-system/sms-more-info-light.png";
import sms_services_dark from "@/assets/projects/school-management-system/sms-services-dark.png";
import sms_services_light from "@/assets/projects/school-management-system/sms-services-light.png";

import full_calendar_month_view_light from "@/assets/projects/full-calendar/month-view-light.png";
import full_calendar_month_view_dark from "@/assets/projects/full-calendar/month-view-dark.png";
import full_calendar_year_view_dark from "@/assets/projects/full-calendar/year-view-dark.png";
import full_calendar_year_view_light from "@/assets/projects/full-calendar/year-view-light.png";

import {Project} from "@/types";


export const PROJECTS_DATA: Project[] = [
    {
        id: 1,
        title: "Calculation of overtime hours",
        description: "A full-featured desktop application for tracking and managing overtime hours. built with React, Node.js, and ElectronJS.",
        longDescription: "This project involved building a customized Overtime application using Node.js, ElectronJS, and React. It combines the backend capabilities of Node.js with the cross-platform desktop app development features of ElectronJS, all while leveraging the UI components provided by React. The application allows users to efficiently manage and track overtime hours, providing a seamless and user-friendly experience across different operating systems.This project involved building a customized Overtime application using Node.js, ElectronJS, and React. It combines the backend capabilities of Node.js with the cross-platform desktop app development features of ElectronJS, all while leveraging the UI components provided by React. The application allows users to efficiently manage and track overtime hours, providing a seamless and user-friendly experience across different operating systems.\n",
        technologies: ["Electron.js", "React.js", "Node.js", "TypeScript", "Tailwind CSS", "Sqlite"],
        images: [
            atos_chs_login_light,
            atos_chs_login_dark,
            atos_chs_main_light,
            atos_chs_main_dark,
        ],
    },
    {
        id: 2,
        title: "Administrative Document Management at Atos",
        description: "As part of my project at Atos, I developed an administrative document management application using Next.js, Prisma, and SQLite. The goal of this project was to facilitate the creation, management, and storage of administrative documents efficiently and securely.",
        longDescription: "As part of my project at Atos, I developed an administrative document management application using Next.js, Prisma, and SQLite. The goal of this project was to facilitate the creation, management, and storage of administrative documents efficiently and securely. The application allows users to create, edit, and delete documents, as well as search for specific documents based on various criteria. The project involved building a user-friendly interface using Next.js and Prisma, as well as implementing secure data storage and retrieval using SQLite. The application also includes features such as user authentication and authorization, ensuring that only authorized users can access and modify documents.\n",
        technologies: ["Next.js", "Prisma", "SQLite", "TypeScript", "Tailwind CSS", "Git", "Github", "DOCX"],
        images: [
            atos_gda_list_emp_light,
            atos_gda_list_emp_dark,
            atos_gda_list_stg_light,
            atos_gda_list_stg_dark,
            atos_gda_gen_doc_light,
            atos_gda_list_gen_doc_light,
            atos_gda_import_base_light,
            atos_gda_export_base_light,
            atos_gda_list_emp_light,
            atos_gda_list_gen_doc_dark,
            atos_gda_import_base_dark,
            atos_gda_export_base_dark,
        ],
    },
    {
        id: 3,
        title: "School management system",
        description: "A full-featured school management system built with Laravel, React.js, and MySQL.",
        longDescription: "I have developed a fully decoupled school management application from A to Z, using Laravel for the backend and React for the frontend. This application offers a smooth user experience and comprehensive management of school activities, including student, teacher, course, timetable management, and much more.",
        technologies: ["Laravel", "React.js", "MySQL", "Tailwind CSS", "Git", "Github", "JWT"],
        images: [
            sms_home_light,
            sms_home_dark,
            sms_about_light,
            sms_about_dark,
            sms_more_info_light,
            sms_more_info_dark,
            sms_services_light,
            sms_services_dark,
            sms_contact_light,
            sms_contact_dark,
            sms_enjoy_moment_light,
            sms_enjoy_moment_dark,
            sms_footer_light,
            sms_footer_dark,
            sms_login_light,
            sms_login_dark,
        ],
    },
    {
        id: 4,
        title: "Big calendar",
        description: "A feature-rich calendar application built with React, TypeScript, and ShadCN UI components. This project provides a customizable and interactive calendar experience with multiple views, event management, and a modern UI.",
        longDescription: "This project provides a customizable and interactive calendar experience with multiple views, event management, and a modern UI.",
        technologies: ["Next.js", "Typescript", "Tailwind CSS", "Shadcn UI", "Framer motion", "Date-Fns", "Github"],
        images: [
            full_calendar_month_view_light,
            full_calendar_month_view_dark,
            full_calendar_year_view_light,
            full_calendar_year_view_dark
        ],
        liveUrl: "https://full-calendar-yassir-jr.vercel.app/calendar",
        githubUrl : "https://github.com/yassir-jeraidi/full-calendar"
    }
]
