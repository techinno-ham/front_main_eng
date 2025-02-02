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
    title: "AI Assistant Tutorial | HamyarChat",
    description: "Training and optimizing the AI assistant in HamyarChat.",
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default DashboardTrainPage
