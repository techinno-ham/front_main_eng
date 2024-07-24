import Login from "@/src/modules/auth/components/login"
import Register from "@/src/modules/auth/components/register"
import { Metadata, NextPage } from "next"

const RegisterPage: NextPage = () => {
    return <Register />
}
export const metadata: Metadata = {
    title: "همیارچت  | ثبت نام",
    icons: {
        icon: "/logo.svg", // /public path
      },
}


export default RegisterPage
