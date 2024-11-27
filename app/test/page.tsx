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
  title: "همیارچت - دستیار هوش مصنوعی مکالمه‌ای",
  description:
      "به حساب کاربری خود در همیارچت وارد شوید و از امکانات دستیار هوش مصنوعی مکالمه‌ای ما بهره‌مند شوید. اگر هنوز حساب کاربری ندارید، می‌توانید به راحتی ثبت‌نام کنید و از خدمات ما استفاده کنید.",
 
  icons: {
      icon: "/logo.svg", 
  },
}

export default ChatBotPage;
