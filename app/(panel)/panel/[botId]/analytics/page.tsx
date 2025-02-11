import Analytics from "@/src/modules/analytics"
import { Metadata, NextPage } from "next"

const AnalyticsPage: NextPage = () => {
    return (
        <>
            {" "}
            <Analytics botId={""} />
        </>
    )
}
export const metadata: Metadata = {
    title: "Deploy AI Assistant | Chatsys",
    description: "Deployment and management of AI assistant in Chatsys.",
    icons: {
        icon: "/logo.svg", // /public path
    },
}
export default AnalyticsPage
