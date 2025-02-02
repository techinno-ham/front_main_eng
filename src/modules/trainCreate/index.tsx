import TrainForCreate from "./components/train"

const TrainCreate = () => {
    return (
        <>
            <div className="container mx-auto mb-28 mt-20  h-full  overflow-hidden px-4 md:mb-4">
                <div className="border-t py-8">
                    <h1 className="mb-2 text-center text-3xl font-bold">
                        Training Resources
                    </h1>
                    <p className="text-center text-zinc-500">
                        Add your data and information to train your chatbot.
                    </p>
                </div>

                <div>
                    <TrainForCreate />
                </div>
            </div>
        </>
    )
}
export default TrainCreate
