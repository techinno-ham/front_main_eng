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
    title: "دعوت دوستان | همیارچت",
    description: "دعوت دوستان و همکاران به همیارچت.",
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default InvitePage
