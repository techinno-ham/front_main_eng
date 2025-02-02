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
    title: "AI Assistant Dashboard | HamyarChat",
    description: "View and manage the AI assistant dashboard in HamyarChat.",
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default DashboardPage
