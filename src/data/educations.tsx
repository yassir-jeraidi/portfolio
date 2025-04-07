import {CalendarIcon, CheckIcon} from "@radix-ui/react-icons";
import {Timeline} from "@/components/timeline";
import ensetm_logo from "@/assets/logos/ensetm-logo.png";
import est_logo from "@/assets/logos/estc-logo.png";
import ofppt_logo from "@/assets/logos/ofppt-logo.png";
import school_logo from "@/assets/logos/school-logo.png"

export const EDUCATIONS : Timeline[] = [
    {
        title: "Master's degree in Distributed Systems and Artificial Intelligence",
        company: "ENSET Mohammedia",
        period: "2024 - Present",
        description:
            "Currently pursuing a master's degree focused on advanced topics in distributed systems and AI technologies.",
        technologies: ["Web Development", "Distributed Systems", "Machine Learning", "AI", "AI Agents"],
        icon: CalendarIcon,
        companyLogo: ensetm_logo,
    },
    {
        title: "Professional Bachelor in Software Engineering and Advanced Administration of Computer Systems and Networks",
        company: "EST Casablanca",
        period: "2023 - 2024",
        description:
            "Studied software engineering principles, advanced computer systems, and network administration.",
        technologies: ["Software Engineering", "Network Administration", "Database Management", "Cloud Computing"],
        icon: CheckIcon,
        companyLogo: est_logo,
    },
    {
        title: "Specialized Technician in Web Programming And Technologies",
        company: "IFSO Casablanca (OFPPT)",
        period: "2021 - 2023",
        description:
            "Acquired skills in web programming, including front-end and back-end technologies.",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "MongoDB", "React.js", "Node.js", "Laravel", "Cloud Computing", "Microservices", "And more..."],
        icon: CheckIcon,
        companyLogo: ofppt_logo,
    },
    {
        title: "Baccalaureate In Life and Earth Sciences",
        company: "El Kindi Bouskoura High School",
        period: "2020 - 2021",
        description:
            "Completed high school education with a focus on life and earth sciences.",
        technologies: ["Biology", "Chemistry", "Physics"],
        icon: CheckIcon,
        companyLogo: school_logo,
    }
];
