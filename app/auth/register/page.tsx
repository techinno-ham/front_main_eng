import Login from "@/src/modules/auth/components/login"
import Register from "@/src/modules/auth/components/register"
import { Metadata, NextPage } from "next"

const RegisterPage: NextPage = () => {
    return <Register />
}
export const metadata: Metadata = {
    title: "ثبت‌نام | همیارچت - دستیار هوش مصنوعی مکالمه‌ای",
    description:
        "در همیارچت ثبت‌نام کنید و به دستیار هوش مصنوعی مکالمه‌ای ما دسترسی پیدا کنید. با ایجاد حساب کاربری، می‌توانید از امکانات پیشرفته ما برای بهبود پشتیبانی مشتریان خود بهره‌مند شوید.",
    // openGraph: {
    //   title: 'Register',
    // },
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default RegisterPage
