'use client'
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useRef, type JSX } from "react";
import { toast } from "sonner";
import { motion, useInView } from "framer-motion";

export default function Contact(): JSX.Element {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const submit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = {
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            message: messageRef.current?.value,
        }
        try {
            const response = await fetch('https://formspree.io/f/mjkbvdlz', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            toast.success('Thank you for getting in touch! We appreciate you contacting us', {
                description: new Date().toDateString()
            });
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            if (nameRef.current && emailRef.current && messageRef.current) {
                nameRef.current.value = ''
                emailRef.current.value = ''
                messageRef.current.value = ''
            }
        }
    };

    const formRef = useRef(null);
    const inView = useInView(formRef, { once: true });

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:flex md:ps-44 h-screen py-8 md:py-0 justify-center flex-col items-center gap-4 px-4"
        >
            <div className="flex flex-col">
                <main className="flex-1">
                    <section className="w-full py-12 md:py-24 lg:py-32">
                        <div className="md:px-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                                <div className="space-y-4">
                                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500 bg-opacity-50">
                                        Get in Touch
                                    </h1>
                                    <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                        Have a question or want to work together? Fill out the form and we&apos;ll get
                                        back to you as soon as possible.
                                    </p>
                                </div>
                                <motion.div
                                    ref={formRef}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5 }}
                                    className="w-full max-w-md mx-auto"
                                >
                                    <form className="space-y-4" onSubmit={submit}>
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Name</Label>
                                            <Input id="name" placeholder="Enter your name" ref={nameRef} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" placeholder="Enter your email" ref={emailRef} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="message">Message</Label>
                                            <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" ref={messageRef} />
                                        </div>
                                        <Button type="submit" className="w-full">
                                            Submit
                                        </Button>
                                    </form>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </motion.div>
    )
}