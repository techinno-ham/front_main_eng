import MyMessage from "@/src/modules/myMessage"
import { Metadata, NextPage } from "next"

const DashboardMyMessagePage: NextPage = () => {
    return (
        <>
            {" "}
            <MyMessage />
        </>
    )
}
export const metadata: Metadata = {
    title: "Message History | Chatsys",
    description:
        "View and review the message history of the AI assistant in Chatsys.",
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default DashboardMyMessagePage
