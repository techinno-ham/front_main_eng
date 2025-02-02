import MyBots from "@/src/modules/myBots"
import { Metadata, NextPage } from "next"

const MyBotsPage: NextPage = () => {
    return <MyBots />
}
export const metadata: Metadata = {
    title: "My Assistants | HamyarChat",
    description: "Manage and configure your assistants in HamyarChat.",
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default MyBotsPage
