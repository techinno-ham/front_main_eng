import Dashboard from "@/src/modules/dashboard"
import { NextPage } from "next"
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

export default DashboardPage
