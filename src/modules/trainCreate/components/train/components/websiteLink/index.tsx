import useDateSourceNew from "@/src/modules/trainCreate/hooks/useDataSourceNew"
import useFetchLinks from "@/src/shared/hooks/fetchLinks"
import { Trash } from "iconsax-react"
import { useState } from "react"
import { toast } from "sonner"
// import { MdDelete } from "react-icons/md";
const MAX_LINK_COUNT = 40 // Maximum number of links

const WebsiteLink = () => {
    const { urlList, addUrlList } = useDateSourceNew()
    const [inputUrl, setInputUrl] = useState("")
    const { isLoading, fetchLink } = useFetchLinks()
    const isValidUrl = (url: string) => {
        const regex =
            /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
        return regex.test(url)
    }

    const handleFetchUrl = async (event: any) => {
        event.preventDefault()
        if (!inputUrl) {
            toast.error("لطفا لینک مورد نظر خود را وارد کنید ...")
            return
        }
        if (!isValidUrl(inputUrl)) {
            toast.error("لینک وارد شده معتبر نمی‌باشد.")
            return
        }
        const res = await fetchLink(inputUrl)
        const remainingLinks = MAX_LINK_COUNT - urlList.length

        if (res?.data.length > remainingLinks) {
            toast.error(
                `شما نمی توانید بیش از 40 لینک اضافه کنید. فقط ${remainingLinks} لینک اضافه شد.`,
            )
            addUrlList([...urlList, ...res?.data.slice(0, remainingLinks)])
            return
        }
        addUrlList([...urlList, ...res?.data])
    }

    const handleAddInput = () => {
        if (urlList.length >= MAX_LINK_COUNT) {
            toast.error("شما نمی توانید بیش از 40 لینک اضافه کنید")
            return
        }
        addUrlList([...urlList, ""])
    }

    const handleDeleteAllInputs = () => {
        addUrlList([])
    }

    const handleInputChange = (index: number, value: string) => {
        const newInputs = [...urlList]
        newInputs[index] = value
        addUrlList(newInputs)
    }

    const handleDeleteInput = (index: number) => {
        const newInputs = [...urlList]
        newInputs.splice(index, 1)
        addUrlList(newInputs)
    }

    return (
        <div className="h-90 mt-4 flex justify-center">
            <div className="h-10/12 w-10/12">
                <div className="mb-3 flex flex-col items-center gap-2 md:flex-row">
                    <input
                        type="text"
                        className=" w-[100%] rounded-md  border border-gray-300 p-2 md:w-[80%]"
                        placeholder="لطفاً یک آدرس وارد کنید، مانند https://example.com"
                        onChange={(e) => setInputUrl(e.target.value)}
                    />
                    <div className="w-full md:w-[20%]">
                        <button
                            onClick={handleFetchUrl}
                            disabled={isLoading}
                            className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm text-white flex items-center justify-center"
                        >
                             {isLoading ? (
                            <>
                                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-blue-600"></div>
                                <span className="mr-2">
                                    مقداری صبر کنید ...
                                </span>
                            </>
                        ) : (
                            <>
                                <span>دریافت لینک ها</span>
                            </>
                        )}
                        </button>
                    </div>
                </div>
                <div>
                    <span className="text-sm text-zinc-600">
                        با این کار تمام پیوندهایی که با URL شروع می شوند (بدون
                        شامل فایل های موجود در وب سایت) می خزند.
                    </span>
                </div>

                <div className="my-6 flex items-center">
                    <hr className="w-full border-t border-zinc-300" />
                    <span className="whitespace-nowrap px-2 text-zinc-600">
                        لینک‌های موجود
                    </span>
                    <hr className="w-full border-t border-zinc-300" />
                </div>
                <div className="mb-3 flex items-center justify-between">
                    <button
                        className="rounded-md border border-red-500 px-3 py-2 text-sm text-red-500 hover:bg-red-100"
                        onClick={handleDeleteAllInputs}
                    >
                        حذف کردن همه
                    </button>
                    <button
                        className="rounded-md bg-blue-600 px-3 py-2 text-sm text-white"
                        onClick={handleAddInput}
                    >
                        اضافه کردن +
                    </button>
                </div>
                <div className="mt-3 flex h-72 flex-col overflow-auto">
                    {urlList.map((input, index) => (
                        <div
                            key={index}
                            className="mb-2 flex items-center gap-2"
                        >
                            <input
                                type="text"
                                className="ml-2 w-full rounded-md border border-gray-300 p-2"
                                placeholder="https://plotset.com"
                                value={input}
                                onChange={(e) =>
                                    handleInputChange(index, e.target.value)
                                }
                            />
                            <button
                                className="p-1"
                                onClick={() => handleDeleteInput(index)}
                            >
                                <Trash size="26" color="red" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WebsiteLink
