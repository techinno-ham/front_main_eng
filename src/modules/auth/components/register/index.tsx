"use client"

import Image from "next/image"
import { useState } from "react"
import useRegister from "../../hooks/register";


const Register = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register, isLoading, error } = useRegister();


    const handleSubmit = async (event:any) => {
        event.preventDefault();
        await register ({name,lastName,email,password})
      };
   
    return (
        <div className="flex h-[100vh] w-full flex-col overflow-hidden md:flex-row">
            <div className="flex h-full w-full  items-center justify-center rounded-l-[30px] rounded-r-[30px] bg-[#5470ff] md:rounded-l-[90px] md:rounded-r-none">
                <div className="flex h-[90%]  w-[90%] flex-col gap-10 md:h-[70%]  md:w-[80%]">
                    <div className="mt-8 flex flex-col items-center gap-1 md:gap-4">
                        <div>
                            <span className=" text-3xl text-white  md:text-4xl">
                                ایجاد حساب کاربری{" "}
                            </span>
                        </div>
                        <div>
                            <span className="text-sm text-white md:text-base">
                                {" "}
                                از قبل حساب کابری دارید؟{" "}
                                <span className="text-xs text-blue-900 md:text-sm">
                                    وارد شوید
                                </span>
                            </span>
                        </div>
                    </div>
                    <form
                          onSubmit={handleSubmit}
                        className="flex flex-col items-center gap-6"
                    >
                        <div className="flex w-[85%] md:w-[75%] gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="نام"
                            className="w-[85%] rounded-xl border-2 p-[18px]  md:w-[75%]"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="text"
                            name="username"
                            placeholder="نام خانوادگی "
                            className="w-[85%] rounded-xl border-2 p-[18px] md:w-[75%]"
                            onChange={(e) => setLastName(e.target.value)}
                        />

                        </div>
      
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

                        <SubmitButton loading={isLoading}/>
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
                        src="/images/register.jpg"
                        height="400"
                        width="500"
                        alt="Logo"
                    />
                </div>
            </div>
        </div>
    )
}

const SubmitButton = ({ loading }:{loading:boolean}) => {
  
    return (
        <button
            disabled={loading}
            className="mt-[22px] w-[180px] rounded-2xl bg-[#47aeff] p-[15px] text-cyan-50"
        >
            {loading ? "صبر کنید ..." : "عضویت"}
        </button>
    )
}

export default Register
