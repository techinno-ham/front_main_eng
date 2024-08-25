"use server";

import { ragChat } from "@/src/infrastructures/lib/ragchat/rag-chat";
import { redis } from "@/src/infrastructures/lib/ragchat/redis";
import type { UpstashMessage } from "@upstash/rag-chat";
import { createServerActionStream } from "@upstash/rag-chat/nextjs";


export const serverChat = async ( userMessage:string ) => {
  const { output } = await ragChat.chat(userMessage, { streaming: true });
  const stream = createServerActionStream(output);
  return stream;
};


export const serverAddData = async (linkArray: string[]) => {
    console.log("add data call")
    const promises = linkArray.map(async (link) => {
      const isAlreadyIndexed = await redis.sismember("indexed-urls", link);
      console.log(isAlreadyIndexed)
      if (!isAlreadyIndexed) {
        await ragChat.context.add({
          type: "html",
          source: link,
          config: { chunkOverlap: 50, chunkSize: 200 },
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