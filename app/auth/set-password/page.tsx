
import SetPassword from "@/src/modules/auth/components/setPassword"
import { Metadata, NextPage } from "next"

const SetPasswordPage: NextPage = () => {
    return <SetPassword />
}
export const metadata: Metadata = {
    title: "همیارچت  | تعیین رمز عبور  ",
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default SetPasswordPage
