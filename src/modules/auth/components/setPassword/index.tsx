"use client"

import Image from "next/image"

import { useState } from "react"

import useLogin from "../../hooks/login"
import { toast } from "sonner"
import Link from "next/link"
import { Eye, EyeSlash, Lock1, Sms, User } from "iconsax-react"
import { useForm } from "react-hook-form"
import { SetPasswordFormSchema } from "../../validation"
import { z } from "zod"

const SetPassword = () => {
    const [showPassword, setShowPassword] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data: any) => {
        //setp 1 (chekc password is same)

        if(data.password!==data.passwordAgain){
           toast.error("مقدادیر رمز عبورها یکسان نمی باشد .")
            return
        }

        try {
           const validatedData = SetPasswordFormSchema.parse(data) 
            // await login(validatedData)
        } catch (error) {
            if (error instanceof z.ZodError) {
                error.errors.forEach((err) => {
                    toast.error(err.message)
                })
            } else {
                console.error("Validation failed with unknown error:", error)
                toast.error("مشکلی در در این مرحله وجود دارد")
            }
        }


    
    }
    const togglePasswordVisibility = () => setShowPassword(!showPassword)

    return (
        <div className=" bg-[#F6F8FB]font-[sans-serif] h-full min-h-screen ">
            <div className="flex h-[25vh] w-full flex-col bg-[#001fbf] text-center ">
                <div className="mb-2 mt-3 md:mb-3 md:mt-6">
                    <Link href={"/"}>
                        <div className="flex items-center justify-center">
                            <Image
                                src="/logo.svg"
                                height="60"
                                width="60"
                                alt="Logo"
                            />
                            <span
                                className={`mr-2 text-4xl font-bold text-[#fff]`}
                            >
                                همیارچت{" "}
                            </span>
                        </div>
                    </Link>
                </div>
                <div className="text-sm text-white md:text-sm ">
                    <span>ساختن چت بات هوشمند برای کسب و کار شما</span>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="absolute top-[110px] z-10 flex max-w-md flex-col">
                    <div className="h-56">
                        <img
                            src="/images/login-image.webp"
                            className="w-full rounded-2xl object-cover"
                            alt="login-image"
                        />
                    </div>
                    <form
                        className="relative z-10 rounded-2xl  bg-white p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="mb-2">
                            <span className="text-3xl font-extrabold text-blue-600">
                                تعیین رمز عبور
                            </span>
                        </div>
                        <div className="relative w-full">
                            <span className="text-sm text-gray-400">
                                 رمز عبور خود را برای ورود به روش های دیگر تعیین کنید.
                            </span>
                        </div>

                       

                        <div className="relative mt-8 w-full ">
                            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                                <Lock1 size="25" color="#bbb" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                className=" mr-1  block w-full border-b   border-gray-300 p-2.5 ps-10 text-sm text-gray-800 outline-none focus:border-blue-500"
                                placeholder="رمز عبور"
                                {...register("password", {
                                    required: "رمز عبور الزامی است",
                                })}
                            />
                            <button
                                type="button"
                                className="pointer-events-auto absolute inset-y-0 end-0 flex items-center pr-3"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? (
                                    <Eye size="25" color="#bbb" />
                                ) : (
                                    <EyeSlash size="25" color="#bbb" />
                                )}
                            </button>
                        </div>

                        <div className="relative mt-6 w-full ">
                            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                                <Lock1 size="25" color="#bbb" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                className=" mr-1  block w-full border-b   border-gray-300 p-2.5 ps-10 text-sm text-gray-800 outline-none focus:border-blue-500"
                                placeholder=" تکرار رمز عبور"
                                {...register("passwordAgain", {
                                    required: "رمز عبور الزامی است",
                                })}
                            />
                        </div>

                        <div className="mt-8">
                            <button
                                type="submit"
                                className="flex w-full justify-center gap-3 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold tracking-wider text-white hover:bg-blue-700 focus:outline-none"
                            >
                                {false ? (
                                    <>
                                        <span className="mr-3">
                                            مقداری صبر کنید ...
                                        </span>
                                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-blue-600"></div>
                                    </>
                                ) : (
                                    <>عوض کردن</>
                                )}
                            </button>
                            <p className="mt-6 text-center text-sm">
                                آیا نیار به تعیین رمز عبورتان  ندارید ؟{" "}
                                <Link
                                    href={"/mybots"}
                                    className=" whitespace-nowrapfont-semibold ml-1 text-blue-600 hover:underline"
                                >
                                    رد کردن مرحله
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SetPassword;
