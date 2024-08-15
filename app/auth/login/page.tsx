import Login from "@/src/modules/auth/components/login"
import { Metadata, NextPage } from "next"

const LoginPage: NextPage = () => {
    return <Login />
}
export const metadata: Metadata = {
    title: "ورود | همیارچت - دستیار هوش مصنوعی مکالمه‌ای",
    description:
        "به حساب کاربری خود در همیارچت وارد شوید و از امکانات دستیار هوش مصنوعی مکالمه‌ای ما بهره‌مند شوید. اگر هنوز حساب کاربری ندارید، می‌توانید به راحتی ثبت‌نام کنید و از خدمات ما استفاده کنید.",
    // openGraph: {
    //   title: 'Login',
    // },
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default LoginPage
