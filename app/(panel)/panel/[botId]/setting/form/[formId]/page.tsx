import Forms from "@/src/modules/froms"
import Setting from "@/src/modules/setting"
import { Metadata, NextPage } from "next"

const DashboardSettingPage: NextPage = () => {
    return (
        <>
            <Forms/>
        </>
    )
}
export const metadata: Metadata = {
    title: "AI Assistant Form Settings | Chatsys",
    description: "Management and configuration of AI assistant settings in Chatsys.",
    icons: {
        icon: "/logo.svg", // /public path
    },
}
export default DashboardSettingPage
