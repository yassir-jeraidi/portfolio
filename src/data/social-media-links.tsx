import { GithubIcon  , MailIcon , LinkedinIcon } from "lucide-react";
import {Link} from "@/types";

export const SOCIAL_MEDIA_LINKS : Link[] = [
    {
        id: 1,
        title: "Github",
        path: "https://github.com/yassir-jeraidi",
        icon: <GithubIcon size={20}/>,
    },
    {
        id: 2,
        title: "LinkedIn",
        path: "https://www.linkedin.com/in/yassir-jeraidi",
        icon: <LinkedinIcon size={20}/>,
    },
    {
        id: 3,
        title: "Email",
        path: "mailto:yassir.jeraidi@gmail.com",
        icon: <MailIcon size={20}/>,
    }
]
