import Blog2 from "@/src/modules/Blog/2"
import { Metadata, NextPage } from "next"

const BlogsPage: NextPage = () => {
    return <Blog2 />
}

export const metadata: Metadata = {
    title: "AI in Customer Support: Threat or Opportunity | Chatsys",
    description: `Explore the transformative journey of AI in customer support - examine the challenges, potentials, and the future ahead.`,
    openGraph: {
        title: "AI in Customer Support: Threat or Opportunity | Chatsys",
        description: `Explore the transformative journey of AI in customer support - examine the challenges, potentials, and the future ahead.`,
        url: "https://chatsys.co/blogs/2", // Replace with the actual URL
        images: [
            {
                url: "https://chatsys.co/blog/image2.png", // Replace with the image URL
                alt: "AI-Powered Customer Support Assistants",
            },
        ],
        type: "article", // You can adjust this based on your content type
    },
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default BlogsPage