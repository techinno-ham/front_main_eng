import { useEffect, useState } from "react"
import { Trash } from "iconsax-react"
import useDateSourceUpdate from "../../hooks/useDataSourceUpdate"
import useStoreLoadData from "../../hooks/loadDataSource"

const QandA = () => {
    const [searchTerm, setSearchTerm] = useState("")

    const {
        qaList,
        addQAList,
        isQAInitialized,
        addQAInitialized,
        isQAListChanged,
        addQAListChanged,
    } = useDateSourceUpdate()
    const { data, setData } = useStoreLoadData()

    useEffect(() => {
        if (!isQAInitialized) {
            const initQa = data.qANDa_input
            addQAList(initQa)
            addQAInitialized(true)
        }
    }, [isQAInitialized, addQAList, addQAInitialized])

    const handleAddQA = () => {
        if (!isQAListChanged) {
            addQAListChanged(true)
        }
        addQAList([...qaList, { question: "", answer: "" }])
    }

    const handleDeleteQA = (index: number) => {
        if (!isQAListChanged) {
            addQAListChanged(true)
        }
        const newList = [...qaList]
        newList.splice(index, 1)
        addQAList(newList)
    }

    const handleInputChange = (index: number, field: string, value: string) => {
        if (!isQAListChanged) {
            addQAListChanged(true)
        }
        const newList: any = [...qaList]
        newList[index][field] = value
        addQAList(newList)
    }

    return (
        <div className=" mt-4 flex justify-center">
            <div className="h-[90%] w-[100%]">
                <div className="mb-3 flex items-center justify-between">
                    {/* <button
                        className="rounded-md border border-red-500 px-3 py-2 text-sm text-red-500 hover:bg-red-100"
                        onClick={() => {
                            addQAList([])
                            setData({
                                ...data,
                                qANDa_input: [],
                            })
                        }}
                    >
                        حذف کردن همه
                    </button> */}

                    <form className="w-[80%]">
                        <label
                            htmlFor="default-search"
                            className="sr-only mb-2 
                            text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Search
                        </label>
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                                <svg
                                    className="h-4 w-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                onChange={(e) => {
                                    setSearchTerm(e.target.value)
                                }}
                                className="block w-full rounded-lg border
                                 border-gray-300 bg-white px-4 py-[10px] ps-10 text-sm 
                                 text-gray-900 focus:border-blue-50
                                  focus:ring-blue-500"
                                placeholder="جستجو در پرسش و پاسخ‌ها ..."
                                required
                            />
                            {/* <button
                                type="submit"
                                className="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Search
                            </button> */}
                        </div>
                    </form>

                    <button
                        className="rounded-md bg-blue-600 px-3 py-2 text-sm text-white"
                        onClick={handleAddQA}
                    >
                        اضافه کردن +
                    </button>
                </div>
                <div className="custom-scrollbar mt-3 flex h-72 flex-col gap-3 overflow-auto px-2 md:h-[50vh]">
                    {qaList
                        .filter(
                            (qa) =>
                                qa.question.includes(searchTerm) ||
                                qa.answer.includes(searchTerm),
                        )
                        .map((qa, index) => (
                            <div
                                key={index}
                                className="mt-4 rounded-lg bg-slate-200/20 p-4 shadow-md"
                            >
                                <div className="flex flex-col gap-3">
                                    <div className="flex h-[12px] items-center justify-between">
                                        <span>سوال:</span>
                                        <button
                                            className="p-2"
                                            onClick={() =>
                                                handleDeleteQA(index)
                                            }
                                        >
                                            <Trash size="20" color="red" />
                                        </button>
                                    </div>

                                    <textarea
                                        className="rounded-md border border-gray-300 p-2"
                                        placeholder="مثال: چطوری از قیمت ها مطلع بشم؟"
                                        rows={1}
                                        value={qa.question}
                                        onChange={(e) =>
                                            handleInputChange(
                                                index,
                                                "question",
                                                e.target.value,
                                            )
                                        }
                                    />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className="mt-2">پاسخ :</span>
                                    <textarea
                                        className="rounded-md border border-gray-300 p-2"
                                        placeholder="با مراجعه به صفحه قیمتگزاری میتونید از آخرین وضعیت قیمت مطلع شوید"
                                        value={qa.answer}
                                        rows={5}
                                        onChange={(e) =>
                                            handleInputChange(
                                                index,
                                                "answer",
                                                e.target.value,
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default QandA
