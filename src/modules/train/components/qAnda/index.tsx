import { useState } from "react"
// import { MdDelete } from "react-icons/md";

const QandA = () => {
    const [qaList, setQAList] = useState([{ question: "", answer: "" }])

    const handleAddQA = () => {
        setQAList([...qaList, { question: "", answer: "" }])
    }

    const handleDeleteQA = (index: number) => {
        const newList = [...qaList]
        newList.splice(index, 1)
        setQAList(newList)
    }

    const handleInputChange = (index: number, field: string, value: string) => {
        const newList = [...qaList]
        // newList[index][field] = value
        setQAList(newList)
    }

    return (
        <div className=" mt-4 flex justify-center">
            <div className="h-[90%] w-[90%]">
                <div className="mb-3 flex items-center justify-between">
                    <button className="rounded-md border border-red-500 px-3 py-2 text-sm text-red-500 hover:bg-red-100" onClick={() => setQAList([])}>
                        حذف کردن همه
                    </button>
                    <button   className="rounded-md bg-blue-600 px-3 py-2 text-sm text-white" onClick={handleAddQA}>
                        اضافه کردن +
                    </button>
                </div>
                <div>
                    {qaList.map((qa, index) => (
                        <div
                            key={index}
                            className="mt-4 bg-white p-4 shadow-md"
                        >
                            <div className="flex justify-between">
                                <button
                                    className="p-2"
                                    onClick={() => handleDeleteQA(index)}
                                >
                                    {/* <MdDelete color="red" size={20} /> */}
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
