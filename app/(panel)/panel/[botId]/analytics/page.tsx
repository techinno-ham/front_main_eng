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
    title: "Deploy AI Assistant | HamyarChat",
    description: "Deployment and management of AI assistant in HamyarChat.",
    icons: {
        icon: "/logo.svg", // /public path
    },
}
export default AnalyticsPage
