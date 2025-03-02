import SetPassword from "@/src/modules/auth/components/setPassword"
import { Metadata, NextPage } from "next"

const SetPasswordPage: NextPage = () => {
    return <SetPassword />
}
export const metadata: Metadata = {
    title: "Chatsys | Set Password",
    icons: {
        icon: "/logo.svg", 
    },
}

export default SetPasswordPage