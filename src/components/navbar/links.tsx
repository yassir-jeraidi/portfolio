import {CpuIcon, FolderGit2Icon, Home, MessageCircleIcon, UserIcon} from 'lucide-react'
export const LINKS = [
    {
        id : 1,
        title : 'Home',
        icon : <Home size={20} strokeWidth={0.75} />,
        path : '/'
    },
    {
        id : 2,
        title : 'About',
        icon : <UserIcon size={20} strokeWidth={0.75} />,
        path : '/about'
    },
    {
        id : 3,
        title : 'Skills',
        icon : <CpuIcon size={20} strokeWidth={0.75} />,
        path : '/skills'
    },
    {
        id : 4,
        title : 'Projects',
        icon : <FolderGit2Icon size={20} strokeWidth={0.75} />,
        path : '/projects'
    },
    {
        id : 5,
        title : 'Contact',
        icon : <MessageCircleIcon size={20} strokeWidth={0.75} />,
        path : '/contact'
    }
]