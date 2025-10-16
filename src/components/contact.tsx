'use client'
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import { useRef, type JSX} from "react";
import {toast} from "sonner";
import {motion, useInView} from "motion/react";
import {z} from "zod";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Field, FieldError, FieldGroup, FieldLabel} from "@/components/ui/field";
import {InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea} from "@/components/ui/input-group";

const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.email('Invalid email address'),
    message: z.string().min(1, 'Message is required'),
})

export default function Contact(): JSX.Element {

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        },
    })


    const formRef = useRef(null);
    const inView = useInView(formRef, {once: true});

    async function onSubmit(data: z.infer<typeof schema>) {
        try {
            await fetch('https://formspree.io/f/mjkbvdlz', {
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
            toast.error('Something went wrong. Please try again later.', {
                description: new Date().toDateString()
            });
        } finally {
            form.reset();
        }
    }

    return (
        <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            className="md:flex md:ps-44 h-screen py-8 md:py-0 justify-center flex-col items-center gap-4 px-4"
        >
            <div className="flex flex-col z-10 ">
                <main className="flex-1">
                    <section className="w-full py-12 md:py-24 lg:py-32">
                        <div className="md:px-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                                <div className="space-y-4">
                                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-300 to-neutral-500 bg-opacity-50">
                                        Get in Touch
                                    </h1>
                                    <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                        Have a question or want to work together? Fill out the form and we&apos;ll get
                                        back to you as soon as possible.
                                    </p>
                                </div>
                                <motion.div
                                    ref={formRef}
                                    initial={{opacity: 0, y: 50}}
                                    animate={inView ? {opacity: 1, y: 0} : {}}
                                    transition={{duration: 0.5}}
                                    className="w-full max-w-md mx-auto"
                                >
                                    <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
                                        <FieldGroup>
                                            <Controller
                                                name="name"
                                                control={form.control}
                                                render={({field, fieldState}) => (
                                                    <Field data-invalid={fieldState.invalid}>
                                                        <FieldLabel htmlFor="form-rhf-name">
                                                            Name </FieldLabel>
                                                        <Input
                                                            {...field}
                                                            id="form-rhf-name"
                                                            aria-invalid={fieldState.invalid}
                                                            placeholder="Enter your name"
                                                            autoComplete="off"
                                                        />
                                                        {fieldState.invalid && (
                                                            <FieldError errors={[fieldState.error]}/>
                                                        )}
                                                    </Field>
                                                )}
                                            />
                                            <Controller
                                                name="email"
                                                control={form.control}
                                                render={({field, fieldState}) => (
                                                    <Field data-invalid={fieldState.invalid}>
                                                        <FieldLabel htmlFor="form-rhf-name">
                                                            Email </FieldLabel>
                                                        <Input
                                                            {...field}
                                                            id="form-rhf-email"
                                                            aria-invalid={fieldState.invalid}
                                                            placeholder="Enter your email"
                                                            autoComplete="off"
                                                        />
                                                        {fieldState.invalid && (
                                                            <FieldError errors={[fieldState.error]}/>
                                                        )}
                                                    </Field>
                                                )}
                                            />
                                            <Controller
                                                name="message"
                                                control={form.control}
                                                render={({field, fieldState}) => (
                                                    <Field data-invalid={fieldState.invalid}>
                                                        <FieldLabel htmlFor="form-rhf-name">
                                                            Message </FieldLabel>

                                                        <InputGroup>
                                                            <InputGroupTextarea
                                                                {...field}
                                                                id="form-rhf-message"
                                                                placeholder="Enter your message"
                                                                autoComplete="off"
                                                                rows={6}
                                                                className="min-h-24 resize-none"
                                                                aria-invalid={fieldState.invalid}
                                                            />
                                                            <InputGroupAddon align="block-end">
                                                                <InputGroupText className="tabular-nums">
                                                                    {field.value.length}/100 characters
                                                                </InputGroupText>
                                                            </InputGroupAddon>
                                                        </InputGroup>
                                                        {fieldState.invalid && (
                                                            <FieldError errors={[fieldState.error]}/>
                                                        )}
                                                    </Field>
                                                )}
                                            />
                                        </FieldGroup>
                                        <Button type="submit" className="w-full my-2">
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