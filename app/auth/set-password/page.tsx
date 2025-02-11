import Login from "@/src/modules/auth/components/login"
import Register from "@/src/modules/auth/components/register"
import { Metadata, NextPage } from "next"

const RegisterPage: NextPage = () => {
    return <Register />
}
export const metadata: Metadata = {
    title: "Sign Up | Chatsys - Conversational AI Agent",
    description:
        "Sign up on Chatsys and get access to our conversational AI Agent. By creating an account, you can take advantage of our advanced features to improve your customer support.",
    // openGraph: {
    //   title: 'Register',
    // },
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default RegisterPage
