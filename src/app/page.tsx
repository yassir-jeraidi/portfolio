import {Button} from "@/components/ui/button";
import {FlipWords} from "@/components/ui/flip-words";
import Image from "next/image";
import me from '@/assets/me.png'


export default function Home() {
    const words = ["'m Yassir", "'m developer", "❤️Javascript", "❤️MERN"];
    return (
        <div className="md:flex md:ps-40 h-screen justify-center items-center gap-4">
            <div className="ls">
                <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                    <h1 className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-600 bg-opacity-50">
                        👋Hi, Welcome There!
                    </h1>
                    <div
                        className="text-4xl flex text-wrap font-bold md:text-7xl text-neutral-600 dark:text-neutral-400">
                        <FlipWords words={words}/>
                    </div>
                    <p className="mt-4 font-normal text-base text-neutral-500">
                        Full Stack Web Developer with a degree in Computer Science and practical experience in creating
                        responsive web/desktop applications. Skilled in both front-end and back-end development, with a
                        focus on user experience and performance optimization. Seeking a position to leverage my skills
                        and
                        contribute to innovative projects.
                    </p>
                    <a href='/cv-jy.pdf' download>
                        <Button className='my-4'>view resume</Button>
                    </a>
                </div>
            </div>
            <div className="rs">
                <Image alt='me' src={me} width={800}/>
            </div>
        </div>
    );
}
