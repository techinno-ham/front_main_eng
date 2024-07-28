import MyBots from "@/src/modules/myBots"
import { Metadata, NextPage } from "next"

const MyBotsPage: NextPage = () => {
    return <MyBots />
}
export const metadata: Metadata = {
    title: "دستیارهای من | همیارچت",
    description: "مدیریت و پیکربندی دستیارهای خود در همیارچت.",
    icons: {
        icon: "/logo.svg", // /public path
    },
}
export default MyBotsPage
