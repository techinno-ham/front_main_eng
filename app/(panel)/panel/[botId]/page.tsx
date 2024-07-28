import Dashboard from "@/src/modules/dashboard"
import { Metadata, NextPage } from "next"
import { useRouter } from "next/router"

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
    title: "داشبورد دستیار هوش مصنوعی | همیارچت",
    description: "مشاهده و مدیریت داشبورد دستیار هوش مصنوعی در همیارچت.",
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default DashboardPage
