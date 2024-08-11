import useAIChatStore from "@/src/shared/store/AIChatStore";

const useAIChat = () => {
    const { messages, setMessages, isLoading, setIsLoading,resetChat } = useAIChatStore();

    const addMessages = (newMessage: any) => {
        setMessages(newMessage);
    };

 
    const sendMessageToServer = async (message: string) => {
        setIsLoading(true);

        try {
            const response = await fetch("http://161.97.98.162:8000/hamyarchat/stream", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    input: {
                        conversation_id: "666",  // Fixed conversation ID
                        init_question: message,  // The message from the user
                        collection_name: "plotset1"  // Fixed collection name
                    },
                    config: {},  // Empty config object
                    kwargs: {}  // Empty kwargs object
                }),
            });
                console.log(response)
            if (response.body) {
                const reader = response.body.getReader();
                const decoder = new TextDecoder("utf-8");
                let result = "";
                let done = false;

                while (!done) {
                    const { value, done: doneReading } = await reader.read();
                    done = doneReading;
                    const chunk = decoder.decode(value, { stream: true });
                    result += chunk;

                    // Update the AI response message with the streaming data
                    addMessages({
                        sender: "AI",
                        type: "text",
                        error: false,
                        content: result,
                        id: `message-id-${messages.length}`,
                    });
                }
            }
        } catch (error) {
            console.error("Error fetching AI response:", error);
            addMessages({
                sender: "AI",
                type: "text",
                error: true,
                content: "در حال حاضر با مشکلات فنی روبرو هستم. 😕 لطفا بعدا دوباره امتحان کنید یا یک چت زنده با تیم ما شروع کنید. 🛠️",
                id: `message-id-${messages.length}`,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return {
        messages,
        addMessages,
        isLoading,
        setIsLoading,
        sendMessageToServer,
        resetChat 
    };
};

export default useAIChat;
