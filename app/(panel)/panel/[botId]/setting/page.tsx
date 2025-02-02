import Setting from "@/src/modules/setting"
import { Metadata, NextPage } from "next"

const DashboardSettingPage: NextPage = () => {
    return (
        <>
            {" "}
            <Setting />
        </>
    )
}
export const metadata: Metadata = {
    title: "Assistant Settings | HamyarChat",
    description: "Manage and configure the artificial intelligence assistant settings in HamyarChat.",
    icons: {
        icon: "/logo.svg", // /public path
    },
}


export default DashboardSettingPage
