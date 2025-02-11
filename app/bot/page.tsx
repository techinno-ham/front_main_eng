import fs from "fs";
import path from "path";
import { Metadata, NextPage } from "next";

const ChatBotPage: NextPage = () => {
  // Read the React app's `index.html` file from the public folder
  const filePath = path.join(process.cwd(), "public", "chatbot", "index.html");
  const html = fs.readFileSync(filePath, "utf8");

  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      style={{ height: "100%", width: "100%" }}
    />
  );
};

export const metadata: Metadata = {
  title: "Chatsys - Conversational AI Assistant",
  description:
      "Log in to your Chatsys account and take advantage of our conversational AI assistant. If you don't have an account yet, you can easily sign up and start using our services.",
 
  icons: {
      icon: "/logo.svg", 
  },
}

export default ChatBotPage;
