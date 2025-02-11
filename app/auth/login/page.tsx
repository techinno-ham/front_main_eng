import Login from "@/src/modules/auth/components/login"
import { Metadata, NextPage } from "next"

const LoginPage: NextPage = () => {
    return <Login />
}
export const metadata: Metadata = {
    title: "Login | Chatsys - AI Conversational Assistant",
    description:
        "Log into your Chatsys account and take advantage of our AI conversational assistant features. If you don't have an account yet, you can easily sign up and use our services.",
    // openGraph: {
    //   title: 'Login',
    // },
    icons: {
        icon: "/logo.svg", // /public path
    },
}


export default LoginPage
