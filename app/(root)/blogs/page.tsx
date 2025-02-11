import AllBlogs from "@/src/modules/AllBlogs"
import { Metadata, NextPage } from "next"

const BlogsPage: NextPage = () => {
    return <AllBlogs />
}

export const metadata: Metadata = {
    title: "Blogs | Chatsys - Conversational AI Assistant",
    description:
        "Stay updated with Chatsys blogs, featuring the latest news and articles related to conversational AI Agents. Educational content, tips and tricks, and case studies help you stay informed and leverage cutting-edge technology for your business.",
    // openGraph: {
    //   title: 'Blogs',
    // },
    icons: {
        icon: "/logo.svg", // /public path
    },
}


export default BlogsPage
