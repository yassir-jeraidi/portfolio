"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    images: string[];
    liveUrl?: string;
    githubUrl?: string;
    isLiveUrlActive?: boolean;
    isGithubUrlActive?: boolean;
}

export function ProjectCard({
                                title,
                                description,
                                longDescription,
                                technologies,
                                images,
                                liveUrl,
                                githubUrl,
                                isLiveUrlActive,
                                isGithubUrlActive,
                            }: ProjectCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const previousImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl mx-auto"
        >
            <Card
                className={cn(
                    "overflow-hidden transition-shadow duration-300",
                    isExpanded ? "shadow-xl" : "shadow-md hover:shadow-lg cursor-pointer"
                )}
                onClick={() => !isExpanded && setIsExpanded(true)}
            >
                <motion.div layout="position" className="relative">
                    <motion.div
                        className="relative aspect-video overflow-hidden"
                        layoutId={`image-container-${title}`}
                    >
                        <AnimatePresence initial={false} mode="wait">
                            <motion.img
                                key={currentImageIndex}
                                src={images[currentImageIndex]}
                                alt={`${title} screenshot ${currentImageIndex + 1}`}
                                className="w-full h-full object-cover"
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.3 }}
                            />
                        </AnimatePresence>

                        {isExpanded && images.length > 1 && (
                            <>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        previousImage();
                                    }}
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        nextImage();
                                    }}
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </Button>
                            </>
                        )}
                    </motion.div>
                </motion.div>

                <motion.div layout="position" className="p-6">
                    <motion.h3
                        layout="position"
                        className="text-2xl font-bold mb-2"
                    >
                        {title}
                    </motion.h3>

                    <motion.div layout="position" className="space-y-4">
                        <motion.p
                            layout="position"
                            className="text-muted-foreground"
                        >
                            {isExpanded ? longDescription : description}
                        </motion.p>

                        <motion.div layout="position" className="flex flex-wrap gap-2">
                            {technologies.map((tech) => (
                                <Badge key={tech} variant="secondary">
                                    {tech}
                                </Badge>
                            ))}
                        </motion.div>

                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex gap-4 mt-4"
                            >
                                {liveUrl && (
                                    <Button
                                        disabled={!isLiveUrlActive}
                                        variant="default"
                                        className="flex items-center gap-2"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(liveUrl, '_blank');
                                        }}
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        Live Demo
                                    </Button>
                                )}
                                {githubUrl && (
                                    <Button
                                        disabled={!isGithubUrlActive}
                                        variant="outline"
                                        className="flex items-center gap-2"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(githubUrl, '_blank');
                                        }}
                                    >
                                        <Github className="h-4 w-4" />
                                        View Code
                                    </Button>
                                )}
                                <Button
                                    variant="ghost"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsExpanded(false);
                                    }}
                                >
                                    Close
                                </Button>
                            </motion.div>
                        )}
                    </motion.div>
                </motion.div>
            </Card>
        </motion.div>
    );
}