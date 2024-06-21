import useDateSource from "@/src/modules/trainCreate/hooks/useDataSource"
import { Trash } from "iconsax-react"
import { useState } from "react"

const QandA = () => {
    const { qaList, addQAList } = useDateSource()

    const handleAddQA = () => {
        addQAList([...qaList, { question: "", answer: "" }])
    }

    const handleDeleteQA = (index: number) => {
        const newList = [...qaList]
        newList.splice(index, 1)
        addQAList(newList)
    }

    const handleInputChange = (index: number, field: string, value: string) => {
        const newList: any = [...qaList]
        newList[index][field] = value
        addQAList(newList)
    }

    return (
        <div className=" mt-4 flex justify-center">
            <div className="h-[90%] w-[90%]">
                <div className="mb-3 flex items-center justify-between">
                    <button
                        className="rounded-md border border-red-500 px-3 py-2 text-sm text-red-500 hover:bg-red-100"
                        onClick={() => addQAList([])}
                    >
                        حذف کردن همه
                    </button>
                    <button
                        className="rounded-md bg-blue-600 px-3 py-2 text-sm text-white"
                        onClick={handleAddQA}
                    >
                        اضافه کردن +
                    </button>
                </div>
                <div className="custom-scrollbar mt-3 flex h-72 flex-col gap-10  overflow-auto">
                    {qaList.map((qa, index) => (
                        <div
                            key={index}
                            className="mt-4 rounded-lg bg-[#55505004] p-4 shadow-md"
                        >
                            <div className="flex justify-end">
                                <button
                                    className="p-2"
                                    onClick={() => handleDeleteQA(index)}
                                >
                                    <Trash size="26" color="red" />
                                </button>
                            </div>
                            <div className="flex flex-col gap-3">
                                <span>سوال:</span>
                                <textarea
                                    className="rounded-md border border-gray-300 p-2"
                                    placeholder="مهدیار جعفری کیه؟"
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
                                <span>پاسخ :</span>
                                <textarea
                                    className="rounded-md border border-gray-300 p-2"
                                    placeholder="مهدیار جعفری یکی از بزرگ ترین برنامه نویس های جهان هست که ..."
                                    value={qa.answer}
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
