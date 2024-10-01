"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"


const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }),
    website: z.string().url({
        message: "Invalid website URL.",
    }),
    phone: z.string().regex(/^(\+\d{1,3})(\d{9,12})$/, {
        message: "Invalid phone number. Must be in the format +CCCXXXXXXXXX.",
    }),
    message: z.string().min(2, {
        message: "Please write a proper message.",
    }),
})

export function SignupForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            phone: "",
            website: "",
            message: ""
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (

                            <FormItem className="w-full">
                                <FormLabel>Your Full Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Muhammad Ali" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="safwan@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (

                            <FormItem className="w-full">
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="+971" {...field} />
                                </FormControl>
                                <FormDescription>
                                    with Country Code and without dashes
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="website"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Website URL</FormLabel>
                                <FormControl>
                                    <Input placeholder="www.yoursite.com" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel>Your Message</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Type your message here." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button size={"xl"} variant={"success"} type="submit">Submit</Button>

            </form>
        </Form>
    )
}
