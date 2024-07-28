import Dashboard from "@/src/modules/dashboard"
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
    title: "آموزش دستیار هوش مصنوعی | همیارچت",
    description: "آموزش و بهینه‌سازی دستیار هوش مصنوعی در همیارچت.",
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default DashboardTrainPage
