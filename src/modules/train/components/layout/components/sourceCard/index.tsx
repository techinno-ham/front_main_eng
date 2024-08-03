import useStoreLoadData from "@/src/modules/train/hooks/loadDataSource"
import useDateSourceUpdate from "@/src/modules/train/hooks/useDataSourceUpdate"
import { usePathname } from "next/navigation"
import { toast } from "sonner";

interface UploadedFile {
    url: string;
    fileName: string;
    remove: boolean;
    size?:any
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
    } = useDateSourceUpdate()
    const { data } = useStoreLoadData()

    const QandACharCount =
    isQAListChanged ?
     qaList.reduce(
        (total: any, qa: any) => total + qa.question.length + qa.answer.length,
        0,
    ):   data?.qANDa_input.reduce(
        (total: any, qa: any) => total + qa.question.length + qa.answer.length,
        0,
    );
    const linkNumber=isURLListChanged?urlList.length:data?.urls.length
    const textChar=isTextChanged? text.length:data?.text_input.length;
    const allChar=textChar+QandACharCount;
    const MAX_FILE_SIZE = 10 * 1024 * 1024;
        // Calculate total size from fileList
        let totalSize = fileList.reduce((acc, file) => acc + file.size, 0);

        // Add sizes from uploadedFile where remove is false
        totalSize += (uploadedFile as UploadedFile[])
            .filter((file: UploadedFile) => !file.remove)
            .reduce((acc, file) => acc + file.size, 0);
    
    let totalSizeMB = (totalSize / (1024 * 1024)).toFixed(2);
    const uploadedFileCount = (uploadedFile as UploadedFile[]).filter((item) => !item.remove).length;

    const handleUpdateBot = async (event: any) => {
        event.preventDefault();
        const hasMinimumFiles = fileList.length + uploadedFileCount>= 2;
        const hasMinimumChars = allChar >= 100;

        if (!hasMinimumFiles || !hasMinimumChars) {
            toast.error("لطفاً حداقل 2 فایل یا 100 کاراکتر متن وارد کنید.")
            return;
        }
        await updateDataSource(pathSegments[2])
    }

    return (
        <div className="mt-18  h-fit w-full  rounded-2xl bg-white p-2 shadow-[0_23px_40px_-20px_rgba(0,0,0,0.08)]">
            <div className="p-4">
                <div className="text-center text-xl font-semibold lg:mb-2">
                    منابع اطلاعات
                </div>
                <div className="mb-4 flex flex-col space-y-2">
                    {!isTextChanged ? (
                        data?.text_input.length > 0 && (
                            <div className="text-sm text-zinc-700">
                                {" "}
                                {data?.text_input.length} عدد کارکتر متن{" "}
                            </div>
                        )
                    ) : (
                        <>
                            <div className="text-sm text-zinc-700">
                                {" "}
                                {text.length} عدد کارکتر متن{" "}
                            </div>
                        </>
                    )}
                    {!isURLListChanged
                        ? data?.urls.length > 0 && (
                              <div className="text-sm text-zinc-700">
                                  {data?.urls.length} عدد لینک‌
                              </div>
                          )
                        : urlList.length > 0 && (
                              <>
                                  <div className="text-sm text-zinc-700">
                                      {urlList.length} عدد لینک‌
                                  </div>
                              </>
                          )}
                    {(fileList.length > 0 || uploadedFileCount > 0) && (
                        <div className="text-sm text-zinc-700">
                            {fileList.length + uploadedFileCount} عدد فایل
                        </div>
                    )}
                    {!isQAListChanged
                        ? data?.qANDa_input.length > 0 && (
                              <div className="text-sm text-zinc-700">
                                  {" "}
                                  {data?.qANDa_input.length} عدد پرسش و پاسخ (
                                  {QandACharCount} کارکتر)
                              </div>
                          )
                        : qaList.length > 0 && (
                              <>
                                  <div className="text-sm text-zinc-700">
                                      {" "}
                                      {qaList.length} عدد پرسش و پاسخ (
                                      {QandACharCount} کارکتر)
                                  </div>
                              </>
                          )}
                </div>
                <div className="text-sm ">
                                مجموع حجم فایل‌ها:  {totalSizeMB} MB 
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-1 ">
                                <div
                                    className="bg-blue-600 h-2.5 rounded-full"
                                    style={{
                                        width: `${(totalSize / MAX_FILE_SIZE) * 100}%`
                                    }}
                                ></div>
                            </div>
                            <p className="flex flex-col text-sm mt-2">
                    <span className="font-semibold">
                        {" "}
                        مجموع   تعداد لینک های استفاده شده:
                    </span>
                    <span className="flex justify-center gap-1">
                        <span className=" text-zinc-500"> 40 / </span>
                        <span className="font-bold">
                            {linkNumber}
                        </span>
                    </span>
                            </p>
                <p className="flex flex-col text-sm">
                    <span className="font-semibold">
                        {" "}
                        مجموع کارکترهای استفاده شده:
                    </span>
                    <span className="flex justify-center gap-1">
                        <span className=" text-zinc-500"> 200,000 / </span>
                        <span className="font-bold">
                            {allChar}
                        </span>
                    </span>
                </p>
                <div className="mt-4 flex justify-center">
                    <button
                        onClick={handleUpdateBot}
                        disabled={
                            isLoading ||
                            (!isQAListChanged &&
                                !isTextChanged &&
                                !isURLListChanged)
                        }
                        className={`flex items-center rounded-xl p-3 text-[14px] text-white
                            ${
                                isLoading ||
                                (!isQAListChanged &&
                                    !isTextChanged &&
                                    !isURLListChanged)
                                    ? "cursor-not-allowed bg-[#2563eb] bg-opacity-50"
                                    : "cursor-pointer bg-[#2563eb]"
                            }`}
                    >
                        {isLoading ? (
                            <>
                                <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-blue-600"></div>
                                <span className="mr-3">
                                    مقداری صبر کنید ...
                                </span>
                            </>
                        ) : (
                            <>
                                <span>آموزش مجدد چت بات</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SourceCard
