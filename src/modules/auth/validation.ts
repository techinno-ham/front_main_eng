import { z } from "zod"

export const RegisterFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters long" }),
    lastName: z
        .string()
        .min(2, { message: "Last name must be at least 2 characters long" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long" }),
})

export const LoginFormSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long" }),
})

export const SetPasswordFormSchema = z.object({
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long" }),
})
