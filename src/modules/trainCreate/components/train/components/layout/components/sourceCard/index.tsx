import useDateSourceNew from "@/src/modules/trainCreate/hooks/useDataSourceNew"
import { toast } from "sonner"

const SourceCard = () => {
    const {
        textInputCharNumber,
        qaList,
        urlList,
        fileList,
        createBot,
        isLoading,
    } = useDateSourceNew()
    const QandACharCount = qaList.reduce(
        (total, qa) => total + qa.question.length + qa.answer.length,
        0,
    )
    const MAX_FILE_SIZE = 10 * 1024 * 1024
    let totalSize = fileList.reduce((acc, file) => acc + file.size, 0)
    let totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2)

    const handleCrateBot = async (event: any) => {
        event.preventDefault()
        // Check if conditions are met
        const totalCharCount = textInputCharNumber + QandACharCount;
        const hasMinimumFiles = fileList.length >= 1;
        const hasMinimumChars = totalCharCount >= 100;

        if (hasMinimumChars || hasMinimumFiles) {
            await createBot()
        } else {
            toast.error("Please enter at least 1 file or 100 characters of text.")
            return
        }
    }

    return (
        <div className="mt-18 h-fit w-full rounded-2xl bg-white p-2 shadow-[0_23px_40px_-20px_rgba(0,0,0,0.08)]">
            <div className="p-4">
                <div className="text-center text-xl font-semibold lg:mb-2">
                    Information Sources
                </div>
                <div className="mb-4 flex flex-col space-y-2">
                    {textInputCharNumber > 0 && (
                        <div className="text-sm text-zinc-700">
                            {textInputCharNumber} text characters
                        </div>
                    )}
                    {urlList.length > 0 && (
                        <div className="text-sm text-zinc-700">
                            {urlList.length} links
                        </div>
                    )}
                    {fileList.length > 0 && (
                        <>
                            <div className="text-sm text-zinc-700">
                                {fileList.length} files
                            </div>
                        </>
                    )}
                    {qaList.length > 0 && (
                        <div className="text-sm text-zinc-700">
                            {qaList.length} questions and answers ({QandACharCount} characters)
                        </div>
                    )}
                </div>
                <div className="text-sm">
                    Total file size: {totalSizeMB} MB
                </div>
                <div className="mt-1 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                        className="h-2.5 rounded-full bg-blue-600"
                        style={{
                            width: `${(totalSize / MAX_FILE_SIZE) * 100}%`,
                        }}
                    ></div>
                </div>
                <p className="mt-2 flex flex-col text-sm">
                    <span className="font-semibold">
                        Total number of links used:
                    </span>
                    <span className="flex justify-center gap-1">
                        <span className="text-zinc-500">40 /</span>
                        <span className="font-bold">{urlList.length}</span>
                    </span>
                </p>
                <p className="flex flex-col text-sm">
                    <span className="font-semibold">
                        Total number of text characters used:
                    </span>
                    <span className="flex justify-center gap-1">
                        <span className="text-zinc-500">200,000 /</span>
                        <span className="font-bold">
                            {textInputCharNumber + QandACharCount}
                        </span>
                    </span>
                </p>

                <div className="mt-4 flex justify-center">
                    <button
                        onClick={handleCrateBot}
                        disabled={isLoading}
                        className="flex items-center rounded-xl bg-[#2563eb] p-3 text-[14px] text-white"
                    >
                        {isLoading ? (
                            <>
                                <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-blue-600"></div>
                                <span className="mr-3">
                                    Please wait ...
                                </span>
                            </>
                        ) : (
                            <>
                                <span>Train New Chatbot</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SourceCard