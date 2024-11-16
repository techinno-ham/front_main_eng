"use server";

import { redis } from "@/src/infrastructures/lib/ragchat/redis";
import { openai, RAGChat } from "@upstash/rag-chat";
import { createServerActionStream } from "@upstash/rag-chat/nextjs";

export const userLimitBotDemo=async ( userSession:string ) => {

  const isAlreadyIndexed = await redis.sismember("indexed-user", userSession);
  if(isAlreadyIndexed){
    return true
  }else{
    return false
  }
}

export const addUserLimitBotDemo=async ( userSession:string ) => {
   await redis.sadd("indexed-user", userSession);
}


export const serverChat = async ( userMessage:string ,nameSpace:string) => {

const ragChat = new RAGChat({
    model: openai("gpt-4o"),
    redis: redis,
    sessionId: nameSpace,
    namespace: nameSpace,
});
  const { output } = await ragChat.chat(userMessage, { streaming: true,sessionId:nameSpace });
  const stream = createServerActionStream(output);
  return stream;
};


export const serverAddData = async (linkArray: string[],nameSpace:string) => {

    const ragChat = new RAGChat({
        model: openai("gpt-4o"),
        redis: redis,
    });
    const promises = linkArray.map(async (link) => {
        await ragChat.context.add({
          type: "html",
          source: link,
          config: { chunkOverlap: 50, chunkSize: 200 },
          options: { namespace: nameSpace },
        });
        await redis.sadd("indexed-urls", link);
      
    });
  
    await Promise.all(promises);
    await sleep(3000); 
  
    return { success: true };
  };
  
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }