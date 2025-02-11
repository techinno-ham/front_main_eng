import ForgetPassword from "@/src/modules/auth/components/forgetPassword"
import { Metadata, NextPage } from "next"

const ForgetPasswordPage: NextPage = () => {
    return <ForgetPassword />
}

export const metadata: Metadata = {
    title: "Chatsys | Forgot Password",
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default ForgetPasswordPage