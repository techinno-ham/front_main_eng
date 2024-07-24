import AllBlogs from "@/src/modules/AllBlogs"
import Pricing from "@/src/modules/pricing"
import { Metadata, NextPage } from "next"

const BlogsPage: NextPage = () => {
    return <AllBlogs />
};

export const metadata: Metadata = {
    title: "همیارچت  | بلاگ ها    ",
    icons: {
        icon: "/logo.svg", // /public path
      },
}


export default BlogsPage
