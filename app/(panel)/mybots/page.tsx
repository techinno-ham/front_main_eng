import MyBots from "@/src/modules/myBots"
import { Metadata, NextPage } from "next"

const MyBotsPage: NextPage = () => {
    return <MyBots />
}
export const metadata: Metadata = {
    title: "My Assistants | Chatsys",
    description: "Manage and configure your assistants in Chatsys.",
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default MyBotsPage
