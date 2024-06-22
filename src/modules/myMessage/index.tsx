"use client"

import { useEffect, useState } from "react"
import { getHistoryMessages } from "./utils"

const MyMessage = () => {
    const [messages, setMessages] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchHistoryList = async () => {
            setIsLoading(true)
            try {
                const response: any = await getHistoryMessages()
                console.log({ response })
                setMessages(response.data.bots)
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchHistoryList()
    }, [])

    const handleDownload = async () => {
        try {
            const apiUrl = "https://jsonplaceholder.typicode.com/todos/1" // Replace with your API endpoint
            const response = await fetch(apiUrl)

            if (!response.ok) {
                throw new Error(
                    "Network response was not ok " + response.statusText,
                )
            }

            const data = await response.json()
            const jsonString = JSON.stringify(data, null, 2)
            const blob = new Blob([jsonString], { type: "application/json" })
            const url = URL.createObjectURL(blob)

            const link = document.createElement("a")
            link.href = url
            link.download = "data.json"
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            URL.revokeObjectURL(url) // Clean up the URL object
        } catch (error) {
            console.error(
                "There was a problem with the fetch operation:",
                error,
            )
        }
    }

    return (
        <>
            <div className="mx-auto mt-[90px] w-[95%]">
                <div className=" relative w-[100%] rounded-xl  border bg-white p-4">
                    {/* <p>تاریخچه ی گفت و گو ها</p>
                    <div className=" absolute left-0 top-0 h-[500px] w-full bg-slate-300 blur-sm"></div>
                    <div className="absolute  left-[33%] top-1/2 flex flex-col">
                        <span>
                            تاریخچه گفت و گو ها در حال حاظر در حال توسعه می
                            باشد.
                        </span>
                        <span>به زودی در دسترس قرار خواهد گرفت ....</span>
                    </div> */}

                    <button
                        onClick={handleDownload}
                        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                    >
                        Download JSON
                    </button>

                    <div className="flex overflow-hidden">
                        <div
                            className="w-1/4 border-l border-gray-300 bg-white"
                            style={{
                                maxHeight: "80vh",
                                overflow: "scroll",
                            }}
                        >
                            <div className="mb-9 overflow-y-auto p-3">
                                <div className="mb-4 flex cursor-pointer items-center rounded-md p-2 hover:bg-gray-100">
                                    <div className="ml-3 h-12 w-12 rounded-full bg-gray-300">
                                        <img
                                            src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                            alt="User Avatar"
                                            className="h-12 w-12 rounded-full"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-lg font-semibold">
                                            Alice
                                        </h2>
                                        <p className="text-gray-600">
                                            Hoorayy!!
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-4 flex cursor-pointer items-center rounded-md p-2 hover:bg-gray-100">
                                    <div className="ml-3 h-12 w-12 rounded-full bg-gray-300">
                                        <img
                                            src="https://placehold.co/200x/ad922e/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                            alt="User Avatar"
                                            className="h-12 w-12 rounded-full"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-lg font-semibold">
                                            Martin
                                        </h2>
                                        <p className="text-gray-600">
                                            That pizza place was amazing! We
                                            should go again sometime. 🍕
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-4 flex cursor-pointer items-center rounded-md p-2 hover:bg-gray-100">
                                    <div className="ml-3 h-12 w-12 rounded-full bg-gray-300">
                                        <img
                                            src="https://placehold.co/200x/2e83ad/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                            alt="User Avatar"
                                            className="h-12 w-12 rounded-full"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-lg font-semibold">
                                            Charlie
                                        </h2>
                                        <p className="text-gray-600">
                                            Hey, do you have any recommendations
                                            for a good movie to watch?
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-4 flex cursor-pointer items-center rounded-md p-2 hover:bg-gray-100">
                                    <div className="ml-3 h-12 w-12 rounded-full bg-gray-300">
                                        <img
                                            src="https://placehold.co/200x/c2ebff/0f0b14.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                            alt="User Avatar"
                                            className="h-12 w-12 rounded-full"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-lg font-semibold">
                                            David
                                        </h2>
                                        <p className="text-gray-600">
                                            I just finished reading a great
                                            book! It was so captivating.
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-4 flex cursor-pointer items-center rounded-md p-2 hover:bg-gray-100">
                                    <div className="ml-3 h-12 w-12 rounded-full bg-gray-300">
                                        <img
                                            src="https://placehold.co/200x/e7c2ff/7315d1.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                            alt="User Avatar"
                                            className="h-12 w-12 rounded-full"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-lg font-semibold">
                                            Ella
                                        </h2>
                                        <p className="text-gray-600">
                                            Whats the plan for this weekend?
                                            Anything fun?
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-4 flex cursor-pointer items-center rounded-md p-2 hover:bg-gray-100">
                                    <div className="ml-3 h-12 w-12 rounded-full bg-gray-300">
                                        <img
                                            src="https://placehold.co/200x/e7c2ff/7315d1.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                            alt="User Avatar"
                                            className="h-12 w-12 rounded-full"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-lg font-semibold">
                                            Ella
                                        </h2>
                                        <p className="text-gray-600">
                                            Whats the plan for this weekend?
                                            Anything fun?
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-4 flex cursor-pointer items-center rounded-md p-2 hover:bg-gray-100">
                                    <div className="ml-3 h-12 w-12 rounded-full bg-gray-300">
                                        <img
                                            src="https://placehold.co/200x/e7c2ff/7315d1.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                            alt="User Avatar"
                                            className="h-12 w-12 rounded-full"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-lg font-semibold">
                                            Ella
                                        </h2>
                                        <p className="text-gray-600">
                                            Whats the plan for this weekend?
                                            Anything fun?
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-4 flex cursor-pointer items-center rounded-md p-2 hover:bg-gray-100">
                                    <div className="ml-3 h-12 w-12 rounded-full bg-gray-300">
                                        <img
                                            src="https://placehold.co/200x/e7c2ff/7315d1.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                            alt="User Avatar"
                                            className="h-12 w-12 rounded-full"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-lg font-semibold">
                                            Ella
                                        </h2>
                                        <p className="text-gray-600">
                                            Whats the plan for this weekend?
                                            Anything fun?
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-4 flex cursor-pointer items-center rounded-md p-2 hover:bg-gray-100">
                                    <div className="ml-3 h-12 w-12 rounded-full bg-gray-300">
                                        <img
                                            src="https://placehold.co/200x/e7c2ff/7315d1.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                            alt="User Avatar"
                                            className="h-12 w-12 rounded-full"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-lg font-semibold">
                                            Ella
                                        </h2>
                                        <p className="text-gray-600">
                                            Whats the plan for this weekend?
                                            Anything fun?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1">
                            <header className="bg-white p-4 text-gray-700">
                                <h1 className="text-2xl font-semibold">
                                    Alice
                                </h1>
                            </header>

                            <div
                                className="overflow-y-auto p-4 pb-36"
                                style={{
                                    background: "aliceblue",
                                }}
                            >
                                <div className="mb-4 flex cursor-pointer">
                                    <div className="mr-2 flex h-9 w-9 items-center justify-center rounded-full">
                                        <img
                                            src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                            alt="User Avatar"
                                            className="h-8 w-8 rounded-full"
                                        />
                                    </div>
                                    <div className="flex max-w-96 gap-3 rounded-lg bg-white p-3">
                                        <p className="text-gray-700">
                                            Hey Bob, hows it going?
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-4 flex cursor-pointer justify-end">
                                    <div className="flex max-w-96 gap-3 rounded-lg bg-indigo-500 p-3 text-white">
                                        <p>
                                            Hi Alice! Im good, just finished a
                                            great book. How about you?
                                        </p>
                                    </div>
                                    <div className="ml-2 flex h-9 w-9 items-center justify-center rounded-full">
                                        <img
                                            src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                            alt="My Avatar"
                                            className="h-8 w-8 rounded-full"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4 flex cursor-pointer">
                                    <div className="mr-2 flex h-9 w-9 items-center justify-center rounded-full">
                                        <img
                                            src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                            alt="User Avatar"
                                            className="h-8 w-8 rounded-full"
                                        />
                                    </div>
                                    <div className="flex max-w-96 gap-3 rounded-lg bg-white p-3">
                                        <p className="text-gray-700">
                                            That book sounds interesting! Whats
                                            it about?
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-4 flex cursor-pointer justify-end">
                                    <div className="flex max-w-96 gap-3 rounded-lg bg-indigo-500 p-3 text-white">
                                        <p>
                                            Its about an astronaut stranded on
                                            Mars, trying to survive. Gripping
                                            stuff!
                                        </p>
                                    </div>
                                    <div className="ml-2 flex h-9 w-9 items-center justify-center rounded-full">
                                        <img
                                            src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                            alt="My Avatar"
                                            className="h-8 w-8 rounded-full"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4 flex cursor-pointer">
                                    <div className="mr-2 flex h-9 w-9 items-center justify-center rounded-full">
                                        <img
                                            src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                            alt="User Avatar"
                                            className="h-8 w-8 rounded-full"
                                        />
                                    </div>
                                    <div className="flex max-w-96 gap-3 rounded-lg bg-white p-3">
                                        <p className="text-gray-700">
                                            Im intrigued! Maybe Ill borrow it
                                            from you when you done?
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-4 flex cursor-pointer justify-end">
                                    <div className="flex max-w-96 gap-3 rounded-lg bg-indigo-500 p-3 text-white">
                                        <p>
                                            Of course! Ill drop it off at your
                                            place tomorrow.
                                        </p>
                                    </div>
                                    <div className="ml-2 flex h-9 w-9 items-center justify-center rounded-full">
                                        <img
                                            src="https://placehold.co/200x/b7a8ff/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                            alt="My Avatar"
                                            className="h-8 w-8 rounded-full"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4 flex cursor-pointer">
                                    <div className="mr-2 flex h-9 w-9 items-center justify-center rounded-full">
                                        <img
                                            src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                            alt="User Avatar"
                                            className="h-8 w-8 rounded-full"
                                        />
                                    </div>
                                    <div className="flex max-w-96 gap-3 rounded-lg bg-white p-3">
                                        <p className="text-gray-700">
                                            Hoorayy!!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <footer className="absolute bottom-0 w-3/4 border-t border-gray-300 bg-white p-4">
                                <div className="flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Type a message..."
                                        className="w-full rounded-md border border-gray-400 p-2 focus:border-blue-500 focus:outline-none"
                                    />
                                    <button className="ml-2 rounded-md bg-indigo-500 px-4 py-2 text-white">
                                        Send
                                    </button>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MyMessage
