import Dashboard from "@/src/modules/dashboard"
import Deploy from "@/src/modules/deploy"
import Setting from "@/src/modules/setting"
import Train from "@/src/modules/train"
import { NextPage } from "next"

const DashboardDeployPage: NextPage = () => {
    return (
        <>
            {" "}
            <Deploy />
        </>
    )
}

export default DashboardDeployPage
