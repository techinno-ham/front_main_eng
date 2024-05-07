import Image from "next/image"

const Login = () => {
    return (
        <div className="flex h-[100vh] w-full flex-row overflow-hidden">
            <div className="flex w-full  items-center justify-center rounded-l-[90px] bg-[#5470ff]">
                <div className="flex h-[70%]  w-[70%] flex-col  gap-10">
                    <div className="flex flex-col gap-4 mt-8">
                        <div>
                            <span className="text-4xl text-white">
                                ورود به پنل کاربری{" "}
                            </span>
                        </div>
                        <div>
                            <span className="text-base text-white">
                                {" "}
                                حساب کاربری ندارید؟{" "}
                                <span className="text-sm text-blue-900">
                                    ثبت نام کنید
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <input
                            type="text"
                            placeholder="ایمیل یا شماره همراه "
                            className="w-[80%] p-[18px] rounded-xl border-2"
                        
                        />
                        <input
                            type="password"
                            placeholder="رمز عبور"
                            className="w-[80%] p-[18px] rounded-xl border-2"
                         
                        />

<button
              
              style={{
                backgroundColor:"#47aeff",
              color:'white',
              padding:"15px",
              borderRadius:"18px",
              width:"40%",
              marginRight:"22%",
              marginTop:"22px"

             }}>
              ورود  
            </button>
                    </div>
                </div>
            </div>
            <div className="flex h-full w-full flex-col items-center  justify-center gap-10 bg-white">
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

export default Login
