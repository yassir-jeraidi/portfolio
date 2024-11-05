"use client"
import {useEffect, useState} from "react";

export default function Projects() {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const countdownDate = new Date("2025-01-01").getTime()
        const interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countdownDate - now
            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
            setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
            setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
            setSeconds(Math.floor((distance % (1000 * 60)) / 1000))
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    return (
        /*<div className="md:flex md:ps-44 justify-start flex-col items-start gap-4 px-4">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b pt-20 from-neutral-300 to-neutral-500 bg-opacity-50">
                Projects
            </h1>
        </div>*/
        <div
            className="flex min-h-[100dvh] flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md text-center">
                <h1 className="text-4xl mx-2 font-bold bg-clip-text text-transparent bg-gradient-to-b  from-neutral-300 to-neutral-500 bg-opacity-50">
                    Coming Soon
                </h1>
                <p className="mt-4 text-muted-foreground">
                    I&apos;m working hard to bring you something amazing. Stay tuned for updates!
                </p>
                <div className="mt-8 flex items-center justify-center gap-4">
                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-b  from-neutral-300 to-neutral-500 bg-opacity-50">{days}</span>
                        <span className="text-sm bg-clip-text text-transparent bg-gradient-to-b  from-neutral-300 to-neutral-500 bg-opacity-50">Days</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-b  from-neutral-300 to-neutral-500 bg-opacity-50">{hours}</span>
                        <span className="text-sm bg-clip-text text-transparent bg-gradient-to-b  from-neutral-300 to-neutral-500 bg-opacity-50">Hours</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-b  from-neutral-300 to-neutral-500 bg-opacity-50">{minutes}</span>
                        <span className="text-sm bg-clip-text text-transparent bg-gradient-to-b  from-neutral-300 to-neutral-500 bg-opacity-50">Minutes</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-b  from-neutral-300 to-neutral-500 bg-opacity-50">{seconds}</span>
                        <span className="text-sm bg-clip-text text-transparent bg-gradient-to-b  from-neutral-300 to-neutral-500 bg-opacity-50">Seconds</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
