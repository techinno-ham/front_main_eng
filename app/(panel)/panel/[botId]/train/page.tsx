import Train from "@/src/modules/train"
import { Metadata, NextPage } from "next"

const DashboardTrainPage: NextPage = () => {
    return (
        <>
            {" "}
            <Train />
        </>
    )
}
export const metadata: Metadata = {
    title: "AI Assistant Tutorial | Chatsys",
    description: "Training and optimizing the AI assistant in Chatsys.",
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default DashboardTrainPage
