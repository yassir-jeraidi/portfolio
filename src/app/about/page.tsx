import About from "@/components/about";
import {JSX} from "react";

export const metadata = {
    title: "About",
    description: "About me",
}

export default function AboutPage(): JSX.Element {
    return (
       <About />
    );
}


