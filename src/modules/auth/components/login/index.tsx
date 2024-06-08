"use client"

import Image from "next/image"

import { useState } from "react"

import useLogin from "../../hooks/login"
import { toast } from "sonner"


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login, isLoading, error } = useLogin()

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        if (!email || !password) {
            toast.error("لطفا ایمیل و رمز عبور را وارد کنید")
            return
        }
        await login({ username: email, password })
    }
    return (
        <div className="flex h-[100vh] w-full flex-col overflow-hidden md:flex-row">
            <div className="flex h-full w-full  items-center justify-center rounded-l-[30px] rounded-r-[30px] bg-[#5470ff] md:rounded-l-[90px] md:rounded-r-none">
                <div className="flex h-[80%]  w-[80%] flex-col gap-10 md:h-[70%]  md:w-[80%]">
                    <div className="mt-8 flex flex-col items-center gap-1 md:gap-4">
                        <div>
                            <span className=" text-3xl text-white  md:text-4xl">
                                ورود به پنل کاربری{" "}
                            </span>
                        </div>
                        <div>
                            <span className="text-sm text-white md:text-base">
                                {" "}
                                حساب کاربری ندارید؟{" "}
                                <span className="text-xs text-blue-900 md:text-sm">
                                    ثبت نام کنید
                                </span>
                            </span>
                        </div>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col items-center gap-6"
                    >
                        <input
                            type="text"
                            name="email"
                            placeholder="ایمیل یا شماره همراه "
                            className="w-[85%] rounded-xl border-2 p-[18px] md:w-[75%]"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="رمز عبور"
                            className="w-[85%] rounded-xl border-2 p-[18px] md:w-[75%]"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <SubmitButton loading={isLoading} />
                    </form>
                    <div className="flex flex-col items-center justify-center gap-1 md:hidden">
                        <div>
                            <span className="text-4xl">
                                {" "}
                                به پلتفرم{" "}
                                <span className="text-white"> هوشینو</span>
                            </span>
                        </div>
                        <div>
                            <span className="text-4xl">خوش آمدید !</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden h-full w-full flex-col items-center justify-center  gap-10 bg-white md:flex">
                <div className="flex flex-col items-center justify-center gap-1">
                    <div>
                        <span className="text-4xl">
                            {" "}
                            به پلتفرم{" "}
                            <span className="text-[#5470ff]"> هوشینو</span>
                        </span>
                    </div>
                    <div>
                        <span className="text-4xl">خوش آمدید !</span>
                    </div>
                </div>
                <div>
                    <Image
                        src="/images/login.jpg"
                        height="400"
                        width="500"
                        alt="Logo"
                    />
                </div>
            </div>
        </div>
    )
}

const SubmitButton = ({ loading }: { loading: boolean }) => {
    return (
        <button
            disabled={loading}
            className="mt-[22px] w-[180px] rounded-2xl bg-[#47aeff] p-[15px] text-cyan-50"
        >
            {loading ? "صبر کنید ..." : "ورود"}
        </button>
    )
}

export default Login
