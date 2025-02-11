import Blog1 from "@/src/modules/Blog/1"
import { Metadata, NextPage } from "next"

const BlogsPage: NextPage = () => {
    return <Blog1 />
}

export const metadata: Metadata = {
    title: "Amazing Benefits of AI-Based Customer Support Assistants | Chatsys",
    description: `Do you think customer support assistants are just for helping your customers? Think again.

In addition to assisting customers, these AI-powered assistants, which have become increasingly popular, can help your business in many ways, from reducing costs to increasing sales.`,
    openGraph: {
        title: "Amazing Benefits of AI-Based Customer Support Assistants | Chatsys",
        description: `Do you think customer support assistants are just for helping your customers? Think again.

In addition to assisting customers, these AI-powered assistants, which have become increasingly popular, can help your business in many ways, from reducing costs to increasing sales.`,
        url: "https://chatsys.co/blogs/1", // Replace with the actual URL
        images: [
            {
                url: "https://chatsys.co/blog/image1.png", // Replace with the image URL
                alt: "AI-Based Customer Support Assistants",
            },
        ],
        type: "article", // You can adjust this based on your content type
    },
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default BlogsPage
