import Blog2 from "@/src/modules/Blog/2"
import { Metadata, NextPage } from "next"

const BlogsPage: NextPage = () => {
    return <Blog2 />
}

export const metadata: Metadata = {
    title: "هوش مصنوعی در پشتیبانی مشتری: تهدید یا فرصت | همیارچت",
    description: `سفر تحولی هوش مصنوعی در پشتیبانی مشتری را کشف کنید - چالش‌ها، پتانسیل‌ها و آینده پیش رو را بررسی کنید.`,
    openGraph: {
        title: "هوش مصنوعی در پشتیبانی مشتری: تهدید یا فرصت | همیارچت",
        description: `سفر تحولی هوش مصنوعی در پشتیبانی مشتری را کشف کنید - چالش‌ها، پتانسیل‌ها و آینده پیش رو را بررسی کنید.`,
        url: "https://hamyar.chat/blogs/2", // Replace with the actual URL
        images: [
            {
                url: "https://hamyar.chat/blog/image2.png", // Replace with the image URL
                alt: "دستیاران پشتیبانی مشتری مبتنی بر هوش مصنوعی",
            },
        ],
        type: "article", // You can adjust this based on your content type
    },
    icons: {
        icon: "/logo.svg", // /public path
    },
}

export default BlogsPage
