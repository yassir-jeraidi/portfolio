import Home from "@/components/home";
import {JSX} from "react";
import {Metadata} from "next";

export const metadata : Metadata= {
    title: "Jeraidi Yassir",
    description: "Welcome to my portfolio",
}

export default function HomePage(): JSX.Element {
    return (
        <Home/>
    );
}

