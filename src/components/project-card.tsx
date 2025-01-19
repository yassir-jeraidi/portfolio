"use client"
import { memo, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Code2, Boxes, GitGraphIcon, EyeIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Image from "next/image";
import { useTheme } from "next-themes";
import {ProjectCardProps} from "@/types";


const TechBadge = memo(({ tech }: { tech: string }) => (
    <Badge
        variant="secondary"
        className="px-3 py-1 text-sm"
    >
        {tech}
    </Badge>
));
TechBadge.displayName = 'TechBadge';

const ImageDots = memo(({
                            total,
                            current,
                            onClick
                        }: {
    total: number;
    current: number;
    onClick: (index: number) => void;
}) => (
    <div className="hidden absolute -bottom-4 right-4 md:flex gap-2">
        {Array.from({ length: total }, (_, index) => (
            <button
                key={index}
                onClick={(e) => {
                    e.stopPropagation();
                    onClick(index);
                }}
                aria-label={`Go to image ${index + 1}`}
                className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    current === index
                        ? "bg-gray-900 dark:bg-white w-6"
                        : "bg-gray-900/50 hover:bg-gray-900/75 dark:bg-white/50 dark:hover:bg-white/75"
                )}
            />
        ))}
    </div>
));
ImageDots.displayName = 'ImageDots';

export const ProjectCard = memo(function ProjectCard({
                                                         title,
                                                         description,
                                                         longDescription,
                                                         technologies,
                                                         images,
                                                         liveUrl,
                                                         githubUrl,
                                                     }: ProjectCardProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isImageDialogOpen, setIsImageDialogOpen] = useState(false);
    const { theme } = useTheme();

    const nextImage = useCallback(() => {
        setCurrentImageIndex(prev => (prev + 1) % images.length);
    }, [images.length]);

    const previousImage = useCallback(() => {
        setCurrentImageIndex(prev => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    const handleImageDotClick = useCallback((index: number) => {
        setCurrentImageIndex(index);
    }, []);

    const navigationButtons = useMemo(() => images.length > 1 && (
        <>
            <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                onClick={(e) => {
                    e.stopPropagation();
                    previousImage();
                }}
                aria-label="Previous image"
            >
                <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                }}
                aria-label="Next image"
            >
                <ChevronRight className="h-6 w-6" />
            </Button>
        </>
    ), [images.length, nextImage, previousImage]);

    const actionButtons = useMemo(() => (
        <div className="flex gap-4 pt-4">
            {liveUrl && (
                <Button
                    disabled
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
                    disabled
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
        </div>
    ), [liveUrl, githubUrl]);

    return (
        <div className="project-card">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <CardContainer className="inter-var mb-4 sm:mb-10 ">
                    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 sm:p-6 border">
                        {/* Card content */}
                        <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                            {title}
                        </CardItem>
                        <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                            {description}
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={theme === "light" ? images[0] : images[1]}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt={title}
                                priority
                            />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                translateX={-40}
                                as="button"
                                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                onClick={() => setIsOpen(true)}
                            >
                                <EyeIcon className="h-5 w-5" />
                                View Project
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                translateX={40}
                                as="button"
                                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                <GitGraphIcon className="h-5 w-5" />
                                Source Code
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            </motion.div>

            {/* Project Details Dialog */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="w-[90vw] p-1 pt-10 md:p-5 rounded lg:max-w-screen-lg overflow-y-scroll max-h-[80vh] bg-white dark:bg-black/20 backdrop-blur">
                    <DialogTitle className="sr-only">{title} - Project Details</DialogTitle>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="h-full"
                    >
                        <div className="relative aspect-video">
                            <AnimatePresence initial={false} mode="wait">
                                <motion.img
                                    key={currentImageIndex}
                                    src={images[currentImageIndex]}
                                    alt={`${title} screenshot ${currentImageIndex + 1}`}
                                    className="w-full h-full object-contain"
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => setIsImageDialogOpen(true)}
                                />
                            </AnimatePresence>

                            {navigationButtons}
                            <ImageDots
                                total={images.length}
                                current={currentImageIndex}
                                onClick={handleImageDotClick}
                            />
                        </div>

                        <div className="p-6 space-y-6">
                            <div>
                                <h2 className="text-3xl font-bold mb-2">{title}</h2>
                                <p className="text-muted-foreground text-lg">{description}</p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Code2 className="h-5 w-5" />
                                    <h3 className="font-semibold">Tech Stack</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {technologies.map(tech => (
                                        <TechBadge key={tech} tech={tech} />
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Boxes className="h-5 w-5" />
                                    <h3 className="font-semibold">About the Project</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    {longDescription}
                                </p>
                            </div>

                            {actionButtons}
                        </div>
                    </motion.div>
                </DialogContent>
            </Dialog>

            {/* Image Preview Dialog */}
            <Dialog open={isImageDialogOpen} onOpenChange={setIsImageDialogOpen}>
                <DialogContent className="w-[90vw] p-1 pt-10 md:p-5 rounded lg:max-w-screen-lg overflow-y-scroll max-h-[80vh] bg-white dark:bg-black/20 backdrop-blur">
                    <DialogTitle className="sr-only">{title} - Image</DialogTitle>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="h-full"
                    >
                        <Image
                            src={images[currentImageIndex]}
                            height="1000"
                            width="1000"
                            className="w-full h-full object-contain"
                            alt={`${title} screenshot ${currentImageIndex + 1}`}
                            priority
                        />
                    </motion.div>
                </DialogContent>
            </Dialog>
        </div>
    );
});

