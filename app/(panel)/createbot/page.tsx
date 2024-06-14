import MyBots from "@/src/modules/myBots"
import Train from "@/src/modules/train"
import TrainCreate from "@/src/modules/trainCreate"
import { NextPage } from "next"

const CreateBotsPage: NextPage = () => {
    return (
        <>
            <TrainCreate />
        </>
    )
}

export default CreateBotsPage
