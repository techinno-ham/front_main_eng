"use client"

import { useEffect, useState } from "react"
import { getHistoryMessages } from "./utils"

const MyMessage = () => {
    const [conversations, setConversations] = useState()
    const [activeConversation , setActiveConversation] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchHistoryList = async () => {
            setIsLoading(true)
            try {
                const response: any = await getHistoryMessages()
                console.log({ response })
                setConversations(response.data)
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchHistoryList()
    }, [])

    useEffect(() => {
        console.log({activeConversation});
        
    }, [activeConversation])

    const handleDownload = async () => {
        console.log("here");
        
        try {
            const response: any = await getHistoryMessages();

            if (!response) {
                throw new Error(
                    "Network response was not ok " + response.statusText,
                )
            }

            const data = response.data;
            
            const jsonString = JSON.stringify(data, null, 2);
            
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
                            className="w-1/4 border-l overflow-y-auto border-gray-300 bg-white"
                            style={{
                                minHeight: "80vh",
                            }}
                        >
                            <div className="mb-9 overflow-y-auto p-3">
                                {conversations && conversations?.length &&
                                    conversations?.map((conversation: any,index: any)=>{
                                        console.log({conversation});
                                        
                                        return <div 
                                        key={index}
                                        onClick={()=>{
                                            setActiveConversation(index)
                                        }}
                                        >
                                        <div className="mb-4 flex cursor-pointer items-center rounded-md p-2 hover:bg-gray-100">
                                    <div className="ml-3 h-12 w-12 rounded-full bg-gray-300">
                                        <img
                                            src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                            alt="User Avatar"
                                            className="h-12 w-12 rounded-full"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-xs font-semibold">
                                            {conversation?.conversationId}
                                        </h2>
                                        <p className="text-gray-600">
                                            Hoorayy!!
                                        </p>
                                    </div>
                                </div>
                                        </div>
                                    })
                                }

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
                                    height: "100%"
                                }}
                            >
                                {
                                    conversations?.[activeConversation]?.records?.map((record:any,index:any)=>{
                                        return(<>
                                        <div 
                                        
                                        className="mb-4 flex cursor-pointer">
                                    <div className="mr-2 flex h-9 w-9 items-center justify-center rounded-full">
                                        <img
                                            src="https://placehold.co/200x/ffa8e4/ffffff.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                                            alt="User Avatar"
                                            className="h-8 w-8 rounded-full"
                                        />
                                    </div>
                                    <div className="flex max-w-96 gap-3 rounded-lg bg-white p-3">
                                        <p className="text-gray-700">
                                            {record?.userMessage}
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-4 flex cursor-pointer justify-end">
                                    <div className="flex max-w-96 gap-3 rounded-lg bg-indigo-500 p-3 text-white">
                                        <p>
                                            {record?.llmResponse}
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
                                        </>)
                                    })
                                }

                                
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
