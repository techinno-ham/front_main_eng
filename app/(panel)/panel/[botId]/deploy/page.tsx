import Deploy from "@/src/modules/deploy"
import { Metadata, NextPage } from "next"

const DashboardDeployPage: NextPage = () => {
    return (
        <>
            {" "}
            <Deploy />
        </>
    )
}
export const metadata: Metadata = {
    title: "AI Assistant Deployment | Chatsys",
    description: "Deploy and manage your AI assistant in Chatsys.",
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default DashboardDeployPage
