"use client"

import Image from "next/image"

import { useState } from "react"

import useLogin from "../../hooks/login"
import { toast } from "sonner"
import Link from "next/link"
import { Eye, EyeSlash, Lock1, Sms, User } from "iconsax-react"
import { useForm } from "react-hook-form"
import useRegister from "../../hooks/register"

const Register = () => {
    const { registerAuth, isLoading, error } = useRegister()
    const [showPassword, setShowPassword] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const togglePasswordVisibility = () => setShowPassword(!showPassword)

    const onSubmit = async (data: any) => {
        console.log(data)
        
        if (!data.email || !data.password ) {
            toast.error("لطفا اطلاغات را کامل وارد کنید.")
            return
        }
        await registerAuth(data)
    }

    const handleGoogleLogin = (event: any) => {
        event.preventDefault()
        window.location.href = `http://localhost:12000/v1/auth/google`
    }

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
                                همیار چت
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
                        <div className="mb-10">
                            <span className="text-3xl font-extrabold text-blue-600">
                                ثبت نام
                            </span>
                        </div>
                        <div className="relative flex w-full gap-9">
                            <div className="relative w-1/2">
                                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                                    <User size="25" color="#bbb" />
                                </div>
                                <input
                                    type="text"
                                    id="simple-search"
                                    className=" mr-1  block w-full border-b   border-gray-300 p-2.5 ps-10 text-sm text-gray-800 outline-none focus:border-blue-500"
                                    placeholder="نام "
                                    {...register("name", {
                                        required: "نام الزامی است",
                                    })}
                                />
                            </div>
                            <div className="relative w-1/2">
                                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                                    <User size="25" color="#bbb" />
                                </div>
                                <input
                                    type="text"
                                    id="simple-search"
                                    className=" mr-1  block w-full border-b   border-gray-300 p-2.5 ps-10 text-sm text-gray-800 outline-none focus:border-blue-500"
                                    placeholder="نام خانوادگی"
                                    {...register("lastName", {
                                        required: "نام خانوادگی الزامی است",
                                    })}
                                />
                            </div>
                        </div>

                        <div className="relative mt-6 w-full">
                            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                                <Sms size="25" color="#bbb" />
                            </div>
                            <input
                                type="text"
                                id="simple-search"
                                className=" mr-1  block w-full border-b   border-gray-300 p-2.5 ps-10 text-sm text-gray-800 outline-none focus:border-blue-500"
                                placeholder="ایمیل یا نام کاربری"
                                {...register("email", {
                                    required: "ایمیل الزامی است",
                                })}
                            />
                        </div>

                        <div className="relative mt-6 w-full ">
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

                        <div className="mt-10">
                            <button
                                type="submit"
                                className="flex w-full justify-center gap-3 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold tracking-wider text-white hover:bg-blue-700 focus:outline-none"
                            >
                                {isLoading ? (
                                    <>
                                        <span className="mr-3">
                                            مقداری صبر کنید ...
                                        </span>
                                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-blue-600"></div>
                                    </>
                                ) : (
                                    <>ثبت نام همیار چت</>
                                )}
                            </button>
                            <p className="mt-6 text-center text-sm">
                                آیا قبلا اکانت کاربری دارید ؟{" "}
                                <Link
                                    href={"/auth/login"}
                                    className=" whitespace-nowrapfont-semibold ml-1 text-blue-600 hover:underline"
                                >
                                    ورود
                                </Link>
                            </p>
                        </div>

                        <hr className="my-6 border-gray-300" />

                        <div className="flex justify-center ">
                            <div className="flex w-20 justify-between">
                                <button
                                    type="button"
                                    className="border-none outline-none"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30px"
                                        className="inline"
                                        viewBox="0 0 512 512"
                                    >
                                        <path
                                            fill="#fbbd00"
                                            d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                                            data-original="#fbbd00"
                                        />
                                        <path
                                            fill="#0f9d58"
                                            d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                                            data-original="#0f9d58"
                                        />
                                        <path
                                            fill="#31aa52"
                                            d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                                            data-original="#31aa52"
                                        />
                                        <path
                                            fill="#3c79e6"
                                            d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                                            data-original="#3c79e6"
                                        />
                                        <path
                                            fill="#cf2d48"
                                            d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                                            data-original="#cf2d48"
                                        />
                                        <path
                                            fill="#eb4132"
                                            d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                                            data-original="#eb4132"
                                        />
                                    </svg>
                                </button>

                                <button
                                    type="button"
                                    className="border-none outline-none"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30px"
                                        fill="#007bff"
                                        viewBox="0 0 167.657 167.657"
                                    >
                                        <path
                                            d="M83.829.349C37.532.349 0 37.881 0 84.178c0 41.523 30.222 75.911 69.848 82.57v-65.081H49.626v-23.42h20.222V60.978c0-20.037 12.238-30.956 30.115-30.956 8.562 0 15.92.638 18.056.919v20.944l-12.399.006c-9.72 0-11.594 4.618-11.594 11.397v14.947h23.193l-3.025 23.42H94.026v65.653c41.476-5.048 73.631-40.312 73.631-83.154 0-46.273-37.532-83.805-83.828-83.805z"
                                            data-original="#010002"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
