import Invite from "@/src/modules/invite"
import MyBots from "@/src/modules/myBots"
import { Metadata, NextPage } from "next"

const InvitePage: NextPage = () => {
    return (
        <>
            <Invite />
        </>
    )
}
export const metadata: Metadata = {
    title: "Invite Friends | HamyarChat",
    description: "Invite friends and colleagues to HamyarChat.",
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default InvitePage
