import { z } from "zod"

export const RegisterFormSchema = z.object({
    name: z.string().min(2, { message: "نام باید حداقل 2 کاراکتر باشد" }),
    lastName: z
        .string()
        .min(2, { message: "نام خانوادگی باید حداقل 2 کاراکتر باشد" }),
    email: z.string().email({ message: "ایمیل معتبر نیست" }),
    password: z
        .string()
        .min(8, { message: "رمز عبور باید حداقل 8 کاراکتر باشد" }),
})

export const LoginFormSchema = z.object({
    email: z.string().email({ message: "ایمیل معتبر نیست" }),
    password: z
        .string()
        .min(8, { message: "رمز عبور باید حداقل 8 کاراکتر باشد" }),
})
