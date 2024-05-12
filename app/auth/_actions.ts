"use server"

import {
    SigninformSchema,
    SignupformSchema,
} from "@/src/infrastructures/lib/validations"

export async function loginUser(state: any, formData: FormData) {
    const result = SigninformSchema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
    })

    if (result.success) {
        return { data: result.data }
    }
    if (result.error) {
        return { error: result.error.format() }
    }
}

export async function createUser(state: any, formData: FormData) {
    const result = SignupformSchema.safeParse({
        name: formData.get("name"),
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
    })

    if (result.success) {
        return { data: result.data }
    }
    if (result.error) {
        return { error: result.error.format() }
    }
}
