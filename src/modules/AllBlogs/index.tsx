//https://tailgrids.com/components/pricing-tables

import BlogCard from "./BlogCard"

const AllBlogs = () => {
    return (
        <>
            <div className="mx-auto max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8">
    <div className="w-full px-4">
        <div className="mx-auto mb-[60px] max-w-[700px] text-center">
            <span className="text-primary mb-2 block text-lg font-semibold">
                Blog
            </span>
            <h2 className="text-dark mb-3 text-3xl font-bold   sm:text-4xl md:text-[40px] ">
                Latest
                <span
                    style={{
                        textShadow:
                            "0 3px 8px rgba(77, 243, 255, 0.22)",
                        backgroundImage:
                            "linear-gradient(360deg, #5154ff, #559fff)",
                        backgroundClip: "text",
                        fontWeight: 700,
                        position: "relative",
                        color: "transparent",
                    }}
                >
                    &nbsp;News&nbsp;
                </span>
                Chatsys
            </h2>
            <p className="text-body-color dark:text-dark-6 text-base">
                Read the latest here
            </p>
        </div>
    </div>
    <div className="grid gap-6 lg:grid-cols-2">
        <BlogCard
            title={
                "8 Amazing Benefits of AI-Based Customer Support Agents"
            }
            subTitle={
                "Enhance business success with AI support: Boost customer retention, strengthen reputation, scale operations, and optimize costs for growth."
            }
            linkTo={"/blogs/1"}
            img={"/blog/image1.png"}
        />
        <BlogCard
            title={"AI in Customer Support: Threat or Savior?"}
            subTitle={
                "Explore the transformative journey of AI in customer support – examine the challenges, potentials, and the future ahead."
            }
            linkTo={"/blogs/2"}
            img={"/blog/image.png"}
        />
    </div>
</div>

        </>
    )
}

export default AllBlogs
