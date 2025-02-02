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
    title: "AI Assistant Deployment | HamyarChat",
    description: "Deploy and manage your AI assistant in HamyarChat.",
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default DashboardDeployPage
