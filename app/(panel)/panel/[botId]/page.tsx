import Dashboard from "@/src/modules/dashboard"
import { Metadata, NextPage } from "next"

const DashboardPage: NextPage = ({ params }: any) => {
    const botId = params.botId

    return (
        <>
            {" "}
            <Dashboard botId={botId as string} />
        </>
    )
}
export const metadata: Metadata = {
    title: "AI Assistant Dashboard | Chatsys",
    description: "View and manage the AI assistant dashboard in Chatsys.",
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default DashboardPage
