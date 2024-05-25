import { useState } from "react"
// import { MdDelete } from "react-icons/md";

const WebsiteLink = () => {
    const [inputs, setInputs] = useState([""])

    const handleAddInput = () => {
        setInputs([...inputs, ""])
    }

    const handleDeleteAllInputs = () => {
        setInputs([""])
    }

    const handleInputChange = (index: number, value: string) => {
        const newInputs = [...inputs]
        newInputs[index] = value
        setInputs(newInputs) // Update input value
    }

    const handleDeleteInput = (index: number) => {
        const newInputs = [...inputs]
        newInputs.splice(index, 1) // Remove input at index
        setInputs(newInputs)
    }

    return (
        <div className="h-90 mt-4 flex justify-center">
            <div className="h-11/12 w-11/12">
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
                    {inputs.map((input, index) => (
                        <div key={index} className="mb-2 flex items-center">
                            <button
                                className="p-1"
                                onClick={() => handleDeleteInput(index)}
                            >
                                {/* <MdDelete color="red" size={20} /> */}
                            </button>
                            <input
                                type="text"
                                className="ml-2 w-full rounded-md border border-gray-300 p-2"
                                placeholder="https://plotset.com"
                                value={input}
                                onChange={(e) =>
                                    handleInputChange(index, e.target.value)
                                }
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WebsiteLink
