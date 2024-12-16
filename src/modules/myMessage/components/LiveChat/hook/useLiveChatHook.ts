import { useState, useEffect, useRef } from "react"

import { useLiveChat } from "@/src/shared/store/liveChatStore"
import { fetchBotLiveConversations, fetchLiveConversationHistory } from "../../../utils"

function useLiveChatHook({ botId, activeConversationId , isLiveChat }: any) {
    const liveChatMessages = useLiveChat((state: any) => state.liveChatMessages)
    const addHistoryMessagesToState = useLiveChat(
        (state: any) => state.addHistoryMessagesToState,
    )
    const clearLiveChatMessages = useLiveChat((state) => state.clearLiveChatMessages);
    const storeLiveConversationIdsBySessionId = useLiveChat(
      (state) => state.storeLiveConversationIdsBySessionId
    );

    const [isLiveActive, setIsLiveActive] = useState(false)
    const [shouldFetchMessages, setShouldFetchMessages] = useState(false)
    const [isLiveChatLoading, setIsLiveChatLoading] = useState(false);
    const intervalRef = useRef<any>(null) // Ref to store interval ID
    const longIntervalRes = useRef<any>(null)

    useEffect(() => {
      const fetchLiveConversationsWithInterval = () => {
          setIsLiveChatLoading(true); // Set loading to true
          console.log(`[useLiveChatHook] Starting long-polling for botId: ${botId}`);
          
          longIntervalRes.current = setInterval(async () => {
              try {
                  console.log(`[useLiveChatHook] Fetching live conv ids for botId: ${botId}`);
                  const {liveConversations : conversations} = await fetchBotLiveConversations(botId);
                  console.log({conversations});
                  
                  // Assuming conversations is an array of objects with `conversationId`
                  if (conversations && Array.isArray(conversations)) {
                      storeLiveConversationIdsBySessionId(conversations);
                      console.log("[useLiveChatHook] Live conv ids fetched:", conversations);
                  } else {
                      console.error("[useLiveChatHook] Invalid format for live conv ids");
                  }
              } catch (error) {
                  console.error("[useLiveChatHook] Error fetching live conv ids:", error);
              }
          }, 5000); // Fetch every 5 seconds
      };

      
          fetchLiveConversationsWithInterval();
      

      // Cleanup function to stop long-polling if shouldFetchMessages becomes false
      return () => {
          if (longIntervalRes.current) {
              console.log("[useLiveChatHook] Stopping long-polling...");
              clearInterval(longIntervalRes.current); // Clear the interval to stop polling
              longIntervalRes.current = null;
          }
      };
  }, [shouldFetchMessages, botId, storeLiveConversationIdsBySessionId]); // Re-run the effect if these dependencies change

    useEffect(() => {
      const loadInitialHistory = async () => {
        setIsLiveChatLoading(true); // Set loading to true before starting the fetch
          try {
              console.log(
                  `[useLiveChatHook] Loading initial history for conversationId: ${activeConversationId}`,
              );
              clearLiveChatMessages();
              const result = await fetchLiveConversationHistory(
                  botId,
                  activeConversationId,
              );
              addHistoryMessagesToState(result?.messages);
              console.log("[useLiveChatHook] Initial history loaded:", result);
          } catch (error) {
              console.error(
                  "[useLiveChatHook] Error loading initial history:",
                  error,
              );
          } finally {
            setIsLiveChatLoading(false); // Set loading to false after fetching completes
          }
      };

      if (activeConversationId) {
          loadInitialHistory();
      }
  }, [activeConversationId]);

    useEffect(() => {

      setIsLiveActive(isLiveChat);

      console.log("[useLiveChatHook] isLiveActive updated:", isLiveChat);
    }, [isLiveChat]);

    useEffect(() => {
        if (isLiveActive && liveChatMessages.length !== 0) {
            setShouldFetchMessages(true)
            console.log(
                "[useLiveChatHook] shouldFetchMessages set to true: Live chat is active and there are messages",
            )
        } else {
            setShouldFetchMessages(false)
            console.log(
                "[useLiveChatHook] shouldFetchMessages set to false: Live chat is inactive or there are no messages",
            )
        }
    }, [isLiveActive, liveChatMessages])

    useEffect(() => {
        if (shouldFetchMessages) {
            console.log(
                "[useLiveChatHook] Starting to fetch messages every 5 seconds...",
            )

            intervalRef.current = setInterval(async () => {
                try {
                    console.log(
                        `[useLiveChatHook] Fetching messages for conversationId: ${activeConversationId}`,
                    )
                    const result = await fetchLiveConversationHistory(
                        botId,
                        activeConversationId,
                    )
                    addHistoryMessagesToState(result?.messages)
                    console.log("[useLiveChatHook] Fetched messages:", result)
                } catch (error) {
                    console.error(
                        "[useLiveChatHook] Error fetching messages:",
                        error,
                    )
                }
            }, 5000) // 5-second interval
        }

        // Cleanup function for the interval
        return () => {
            if (intervalRef.current) {
                console.log(
                    "[useLiveChatHook] Stopping message fetch interval...",
                )
                clearInterval(intervalRef.current)
                intervalRef.current = null // Clear the reference
            }
        }
    }, [shouldFetchMessages]) // Only restart the interval when these dependencies change

    return{
      isLiveChatLoading
    }
  }

export default useLiveChatHook
