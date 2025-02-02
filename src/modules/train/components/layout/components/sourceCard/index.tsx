import useStoreLoadData from "@/src/modules/train/hooks/loadDataSource"
import useDateSourceUpdate from "@/src/modules/train/hooks/useDataSourceUpdate"
import { usePathname } from "next/navigation"
import { toast } from "sonner"

interface UploadedFile {
    url: string
    fileName: string
    remove: boolean
    size?: any
}

const SourceCard = () => {
    const pathname = usePathname()
    const pathSegments = pathname.split("/")
    const {
        textInputCharNumber,
        qaList,
        urlList,
        fileList,
        updateDataSource,
        isLoading,
        text,
        uploadedFile,
        isTextChanged,
        isQAListChanged,
        isURLListChanged,
        isFileChanged,
        isUploadedChanged,
    } = useDateSourceUpdate()
    const { data } = useStoreLoadData()

    const QandACharCount = isQAListChanged
        ? qaList.reduce(
              (total: any, qa: any) =>
                  total + qa.question.length + qa.answer.length,
              0,
          )
        : data?.qANDa_input.reduce(
              (total: any, qa: any) =>
                  total + qa.question.length + qa.answer.length,
              0,
          )
    const linkNumber = isURLListChanged ? urlList.length : data?.urls.length
    const textChar = isTextChanged ? text.length : data?.text_input.length
    const allChar = textChar + QandACharCount
    const MAX_FILE_SIZE = 10 * 1024 * 1024
    // Calculate total size from fileList
    let totalSize = fileList.reduce((acc, file) => acc + file.size, 0)

    // Add sizes from uploadedFile where remove is false
    totalSize += (uploadedFile as UploadedFile[])
        .filter((file: UploadedFile) => !file.remove)
        .reduce((acc, file) => acc + file.size, 0)

    let totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2)
    const uploadedFileCount = (uploadedFile as UploadedFile[]).filter(
        (item) => !item.remove,
    ).length

    const handleUpdateBot = async (event: any) => {
        event.preventDefault()
        const hasMinimumFiles = fileList.length + uploadedFileCount >= 2
        const hasMinimumChars = allChar >= 100

        if (data.bot.status == "notActive") {
            toast.error(
                "Your chatbot is currently being trained and cannot be retrained.",
            )
            return
        }

        // if (data.bot.update_datasource >= 2) {
        //     toast.error("Your request limit has been exceeded.")
        //     return
        // }

        // if (!hasMinimumFiles || !hasMinimumChars) {
        //     toast.error("Please upload at least 2 files or enter 100 characters of text.")
        //     return
        // }

        await updateDataSource(pathSegments[2])
    }

    return (
        <>
            <div className="mt-18  h-fit w-full  rounded-2xl bg-white p-2 shadow-[0_23px_40px_-20px_rgba(0,0,0,0.08)]">
                <div className="p-4">
                    <div className="text-center text-xl font-semibold lg:mb-2">
                        Information Sources
                    </div>
                    <div className="mb-4 flex flex-col space-y-2">
                        {!isTextChanged
                            ? data?.text_input.length > 0 && (
                                  <div className="text-sm text-zinc-700">
                                      {" "}
                                      {data?.text_input.length} text characters{" "}
                                  </div>
                              )
                            : text.length > 0 && (
                                  <>
                                      <div className="text-sm text-zinc-700">
                                          {text.length} text characters{" "}
                                      </div>
                                  </>
                              )}
                        {!isURLListChanged
                            ? data?.urls.length > 0 && (
                                  <div className="text-sm text-zinc-700">
                                      {data?.urls.length} links
                                  </div>
                              )
                            : urlList.length > 0 && (
                                  <>
                                      <div className="text-sm text-zinc-700">
                                          {urlList.length} links
                                      </div>
                                  </>
                              )}
                        {(fileList.length > 0 || uploadedFileCount > 0) && (
                            <div className="text-sm text-zinc-700">
                                {fileList.length + uploadedFileCount} files
                            </div>
                        )}
                        {!isQAListChanged
                            ? data?.qANDa_input.length > 0 && (
                                  <div className="text-sm text-zinc-700">
                                      {" "}
                                      {data?.qANDa_input.length} Q&A items (
                                      {QandACharCount} characters)
                                  </div>
                              )
                            : qaList.length > 0 && (
                                  <>
                                      <div className="text-sm text-zinc-700">
                                          {" "}
                                          {qaList.length} Q&A items (
                                          {QandACharCount} characters)
                                      </div>
                                  </>
                              )}
                    </div>
                    <div className="text-sm ">
                        Total file size: {totalSizeMB} MB
                    </div>
                    <div className="mt-1 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700 ">
                        <div
                            className="h-2.5 rounded-full bg-blue-600"
                            style={{
                                width: `${(totalSize / MAX_FILE_SIZE) * 100}%`,
                            }}
                        ></div>
                    </div>
                    <p className="mt-2 flex flex-col text-sm">
                        <span className="font-semibold">
                            Total number of used links:
                        </span>
                        <span className="flex justify-center gap-1">
                            <span className=" text-zinc-500"> 40 / </span>
                            <span className="font-bold">{linkNumber}</span>
                        </span>
                    </p>
                    <p className="flex flex-col text-sm">
                        <span className="font-semibold">
                            Total number of used characters:
                        </span>
                        <span className="flex justify-center gap-1">
                            <span className=" text-zinc-500"> 200,000 / </span>
                            <span className="font-bold">{allChar}</span>
                        </span>
                    </p>
                    {/* <div className="mt-4 text-sm text-red-600">
                        Retraining request count:{" "}
                        {data.bot.update_datasource} / 2
                    </div> */}

                    <div className="mt-4 flex justify-center">
                        <button
                            onClick={handleUpdateBot}
                            disabled={
                                isLoading ||
                                (!isQAListChanged &&
                                    !isTextChanged &&
                                    !isURLListChanged &&
                                    !isFileChanged &&
                                    !isUploadedChanged)
                            }
                            className={`flex items-center rounded-xl p-3 text-[14px] text-white
                            ${
                                isLoading ||
                                (!isQAListChanged &&
                                    !isTextChanged &&
                                    !isURLListChanged &&
                                    !isFileChanged &&
                                    !isUploadedChanged)
                                    ? "cursor-not-allowed bg-[#2563eb] bg-opacity-50"
                                    : "cursor-pointer bg-[#2563eb]"
                            }`}
                        >
                            {isLoading ? (
                                <>
                                    <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-blue-600"></div>
                                    <span className="mr-3">
                                        Please wait...
                                    </span>
                                </>
                            ) : (
                                <>
                                    <span>Retrain Chatbot</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SourceCard
