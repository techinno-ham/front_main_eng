"use server";

import { ragChat } from "@/src/infrastructures/lib/ragchat/rag-chat";
import { redis } from "@/src/infrastructures/lib/ragchat/redis";
import { openai, RAGChat } from "@upstash/rag-chat";
import { createServerActionStream } from "@upstash/rag-chat/nextjs";


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
    console.log(linkArray)
    console.log("add data call")
    console.log(nameSpace)
    const ragChat = new RAGChat({
        model: openai("gpt-4o"),
        redis: redis,
    });
    const promises = linkArray.map(async (link) => {
      const isAlreadyIndexed = await redis.sismember("indexed-urls", link);
      console.log(isAlreadyIndexed)
      if (!isAlreadyIndexed) {
        await ragChat.context.add({
          type: "html",
          source: link,
          config: { chunkOverlap: 50, chunkSize: 200 },
          options: { namespace: nameSpace },
        });
        await redis.sadd("indexed-urls", link);
      }
    });
  
    await Promise.all(promises);
    await sleep(3000); 
  
    return { success: true };
  };
  
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }