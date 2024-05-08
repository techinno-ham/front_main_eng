import Image from "next/image"

const Register = () => {
    return (
        <div className="flex h-[100vh] w-full flex-col md:flex-row overflow-hidden">
            <div className="flex w-full h-full  items-center justify-center rounded-l-[30px] rounded-r-[30px] md:rounded-l-[90px] md:rounded-r-none bg-[#5470ff]">
                <div className="flex h-[90%]  w-[90%] md:h-[70%] md:w-[80%] flex-col  gap-10">
                    <div className="mt-8 flex flex-col gap-1 md:gap-4 items-center">
                        <div>
                            <span className=" text-3xl md:text-4xl  text-white">
                            ایجاد حساب کاربری
{" "}
                            </span>
                        </div>
                        <div>
                            <span className="text-sm md:text-base text-white">
                                {" "}
                                از قبل حساب کابری دارید؟{" "}
                                <span className="text-xs md:text-sm text-blue-900">
                                وارد شوید
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 items-center">
                    <input
                            type="text"
                            placeholder="نام"
                            className="w-[85%] md:w-[75%] rounded-xl border-2 p-[18px]"
                        />
                              <input
                            type="text"
                            placeholder="نام خانوادگی "
                            className="w-[85%] md:w-[75%] rounded-xl border-2 p-[18px]"
                        />
                        <input
                            type="text"
                            placeholder="ایمیل یا شماره همراه "
                            className="w-[85%] md:w-[75%] rounded-xl border-2 p-[18px]"
                        />
                        <input
                            type="password"
                            placeholder="رمز عبور"
                            className="w-[85%] md:w-[75%] rounded-xl border-2 p-[18px]"
                        />

                        <button  className="bg-[#47aeff] p-[15px] w-[180px] mt-[22px] rounded-2xl text-cyan-50">
                            عضویت
                        </button>
                    </div>
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
            <div className="hidden md:flex h-full w-full flex-col items-center  justify-center gap-10 bg-white">
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

export default Register;
