import {Timeline} from "@/components/timeline";
import {CheckIcon} from "@radix-ui/react-icons";
import atos_logo from "@/assets/logos/atos-logo.png"
import ofppt_logo from "@/assets/logos/ofppt-logo.png"

export const EXPERIENCES: Timeline[] = [
    {
        title: "Application developer",
        company: "ATOS",
        period: "April 2024 - August 2024",
        description: "Development of a desktop application for the calculation of overtime specific to ATOS. Development of a web application for administrative management. Development of a blog management web application.",
        icon: CheckIcon,
        technologies: [
            "Shadcn UI", "React.js", "Next.js", "Node.js", "Electron.js", "Sqlite"
        ],
        companyLogo : atos_logo
    },
    {
        title : "Web developer",
        company : "CDC Digital and AI",
        period : "Mars 2023 - May 2023",
        description : "Development of a website allowing company employees to print various management documents.",
        icon: CheckIcon,
        technologies: [
            "React.js", "Tailwindcss", "Laravel" , "MySQL"
        ],
        companyLogo : ofppt_logo
    }
]