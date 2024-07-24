import Login from "@/src/modules/auth/components/login"
import { Metadata, NextPage } from "next"

const LoginPage: NextPage = () => {
    return <Login />
}
export const metadata: Metadata = {
    title: "همیارچت  | ورود  ",
    icons: {
        icon: "/logo.svg", // /public path
      },
}


export default LoginPage
