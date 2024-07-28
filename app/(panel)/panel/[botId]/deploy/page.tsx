import Dashboard from "@/src/modules/dashboard"
import Deploy from "@/src/modules/deploy"
import Setting from "@/src/modules/setting"
import Train from "@/src/modules/train"
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
    title: "استقرار دستیار هوش مصنوعی | همیارچت",
    description: "استقرار و مدیریت دستیار هوش مصنوعی در همیارچت.",
    icons: {
        icon: "/logo.svg", // /public path
    },
}
export default DashboardDeployPage
