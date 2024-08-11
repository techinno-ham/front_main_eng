import useAIChatStore from "@/src/shared/store/AIChatStore";




const useAIChat = ()=>{
    const {
        messages,
        setMessages,
        isLoading, 
        setIsLoading
    }=useAIChatStore();

    const addMessages = (newMessage: any) => {
        setMessages([...messages,newMessage])
    };
    
   return {
    messages,
    addMessages,
    isLoading,
    setIsLoading
    
   }

};

export default useAIChat;