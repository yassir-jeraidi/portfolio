import {TracingBeam} from "@/components/ui/tracing-beam";
import {HoverEffect} from "@/components/ui/card-hover-effect";

export default function Skills(){
    return (
        <TracingBeam className="md:px-8 pb-12 md:pb-20">
            <div className="w-full min-h-screen md:py-20 flex flex-col flex-wrap justify-center items-center ">
                <HoverEffect/>
            </div>
        </TracingBeam>
    )
}