import Blog1 from "@/src/modules/Blog/1"
import { Metadata, NextPage } from "next"

const BlogsPage: NextPage = () => {
    return <Blog1 />
}

export const metadata: Metadata = {
    title: "مزایای شگفت‌انگیز دستیاران پشتیبانی مشتری مبتنی بر هوش مصنوعی | همیارچت",
    description: `فکر می‌کنید دستیاران پشتیبانی مشتری تنها برای کمک به مشتریان شما هستند؟ دوباره فکر کنید.

علاوه بر کمک به مشتریان، این دستیاران مبتنی بر هوش مصنوعی که به طور فزاینده‌ای محبوب شده‌اند، می‌توانند به شیوه‌های مختلفی به کسب و کار شما کمک کنند، از کاهش هزینه‌ها گرفته تا افزایش فروش.`,
    openGraph: {
        title: "مزایای شگفت‌انگیز دستیاران پشتیبانی مشتری مبتنی بر هوش مصنوعی | همیارچت",
        description: `فکر می‌کنید دستیاران پشتیبانی مشتری تنها برای کمک به مشتریان شما هستند؟ دوباره فکر کنید.

علاوه بر کمک به مشتریان، این دستیاران مبتنی بر هوش مصنوعی که به طور فزاینده‌ای محبوب شده‌اند، می‌توانند به شیوه‌های مختلفی به کسب و کار شما کمک کنند، از کاهش هزینه‌ها گرفته تا افزایش فروش.`,
        url: "https://hamyar.chat/blogs/1", // Replace with the actual URL
        images: [
            {
                url: "https://hamyar.chat/blog/image1.png", // Replace with the image URL
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
