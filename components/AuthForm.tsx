"use client"

import {z} from "zod";
import {useForm} from "react-hook-form";
import {useRouter} from "next/navigation";
import {zodResolver} from "@hookform/resolvers/zod";
import Link from "next/link";
import {Form} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import FormField from "@/components/FormField";
import {toast} from "sonner";

const authFormSchema = (type: FormType) => {
    return z.object({
        name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
        email: z.string().email(),
        password: z.string().min(8),
    });
};

const AuthForm = ({type}: { type: FormType }) => {

    const router = useRouter();
    const formSchema = authFormSchema(type);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            if(type === 'sign-up'){
               toast.success('Account created successfully.');
               router.push("/sign-in");
            }
            else{
                toast.success('Signed in successfully.');
                router.push("/");
            }
        } catch (e) {
            console.log(e);
            toast.error(`There was an error: ${e}`);

        }
    }

    const isSignIn = type === 'sign-in';

    return (
        <div className={"card-border lg:min-w-[566px]"}>
            <div className={"flex flex-col gap-6 card py-14 px-10"}>
                <div className="flex flex-row gap-2 justify-center items-center">
                    <Image src="/favicon.png" alt="logo" height={56} width={58}/>
                    <h2 className="text-primary-100">PrepMate</h2>
                </div>
                <h3 className={"text-center"}>Practice job interviews with AI</h3>


                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-full space-y-6 mt-4 form"
                    >
                        {!isSignIn && (
                            <FormField
                                control={form.control}
                                name="name"
                                label="Name"
                                placeholder="Your Name"
                                type="text"
                            />
                        )}

                        <FormField
                            control={form.control}
                            name="email"
                            label="Email"
                            placeholder="Your email address"
                            type="email"
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            label="Password"
                            placeholder="Enter your password"
                            type="password"
                        />

                        <Button className="btn" type="submit">
                            {isSignIn ? "Sign In" : "Create an Account"}
                        </Button>
                    </form>
                </Form>
                <p className="text-center">
                    {isSignIn ? "No account yet?" : "Have an account already?"}
                    <Link
                        href={!isSignIn ? "/sign-in" : "/sign-up"}
                        className="font-bold text-user-primary ml-1"
                    >
                        {!isSignIn ? "Sign In" : "Sign Up"}
                    </Link>
                </p>
            </div>
        </div>
    )
}
export default AuthForm
