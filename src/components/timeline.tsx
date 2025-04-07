import {Badge} from "@/components/ui/badge";
import {CalendarIcon} from "@radix-ui/react-icons";
import Image, {StaticImageData} from "next/image";

export type Timeline = {
    title: string;
    company: string;
    companyLogo: StaticImageData;
    period: string;
    description: string;
    technologies: string[];
    icon: React.ElementType;
}

export default function Timeline(
    {
        data
    }: {
        data: Timeline[]
    }
) {
    return (
        <div className="relative ml-3">
            <div className="absolute left-0 inset-y-0 border-l-2"/>
            {data.map(
                (
                    {company, companyLogo, description, period, technologies, title, icon: Icon},
                    index
                ) => (
                    <div key={index} className="relative pl-10 pb-12 last:pb-0">
                        <div
                            className="absolute left-px -translate-x-1/2 h-9 w-9 flex items-center justify-center rounded-full bg-background">
                            <Icon className="h-5 w-5"/>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div
                                    className="flex-shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center overflow-hidden">
                                    <Image src={companyLogo} alt="atos logo" width={40} height={40}/>
                                </div>
                                <span className="text-base sm:text-lg font-semibold text-gray-500 md:text-xl dark:text-gray-400">
                    {company}
                  </span>
                            </div>
                            <div>
                                <h3 className="text-lg sm:text-xl font-medium ">{title}</h3>
                                <div className="flex items-center gap-2 mt-1 text-sm">
                                    <CalendarIcon className="h-4 w-4"/>
                                    <span className='text-muted-foreground'>{period}</span>
                                </div>
                            </div>
                            <p className="text-sm sm:text-base text-muted-foreground">
                                {description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {technologies.map((tech) => (
                                    <Badge
                                        key={tech}
                                        variant="secondary"
                                        className="rounded-full"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
}
