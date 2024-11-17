import useAIChatStore from "@/src/shared/store/AIChatStore"


const useAIChat = (conversationId: string, botId: string,Instructions:string,Temperature:number,modelName:string) => {
    const {
        messages,
        setMessages,
        isLoading,
        setIsLoading,
        resetChat,
        updateMessage,
    } = useAIChatStore()

    const addMessages = (newMessage: any) => {
        setMessages(newMessage)
    }

    const sendMessageToServer = async (message: string) => {
        setIsLoading(true)

        try {
            const response = await fetch(
                "https://hamyar.chat/chat/hamyarchat/invoke",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "text/plain",
                    },
                    body: JSON.stringify({
                        input: {
                             conversation_id: conversationId, 
                             init_question: message, 
                             collection_name: botId, 
                             bot_description: Instructions,
                             model_temprature: Temperature,
                             model_type:"gpt-4o-mini"
                        },
                        config: {}, 
                        kwargs: {}, 
                    }),
                },
            )

            if (response.ok) {
                const data = await response.json() // Parse the JSON response
                const aiResponse = data.output // Extract the output message
                const chunks = aiResponse.match(/.{1,15}/g) || [] // Adjust the chunk size as needed
                const newMessageId = `message-id-AI-${messages.length}`

                setMessages({
                    sender: "AI",
                    type: "text",
                    error: false,
                    content: "",
                    id: newMessageId,
                    time: Date.now(),
                    
                })

                chunks.forEach((chunk: any, index: any) => {
                    setTimeout(() => {
                        updateMessage(newMessageId, chunk)
                    }, index * 100)
                })
            } else {
                // Handle any errors returned by the server
                addMessages({
                    sender: "AI",
                    type: "text",
                    error: true,
                    content:
                        "در حال حاضر با مشکلات فنی روبرو هستم. 😕 لطفا بعدا دوباره امتحان کنید یا یک چت زنده با تیم ما شروع کنید. 🛠️",
                    id: `message-id-${messages.length}`,
                    time: Date.now(),
                })
            }
        } catch (error) {
            console.error("Error fetching AI response:", error)
            addMessages({
                sender: "AI",
                type: "text",
                error: true,
                content:
                    "در حال حاضر با مشکلات فنی روبرو هستم. 😕 لطفا بعدا دوباره امتحان کنید یا یک چت زنده با تیم ما شروع کنید. 🛠️",
                id: `message-id-${messages.length}`,
                time: Date.now(),
            })
        } finally {
            setIsLoading(false)
        }
    }

    return {
        messages,
        addMessages,
        isLoading,
        setIsLoading,
        sendMessageToServer,
        resetChat,
    }
}

export default useAIChat
