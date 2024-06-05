//https://tailgrids.com/components/pricing-tables

import BlogCard from "./BlogCard"

const AllBlogs = () => {
    return (
        <>
            <div className="mx-auto mt-10 max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
                <div className="mx-auto mb-10 max-w-2xl text-center lg:mb-14">
                    <h1 className="text-2xl font-bold text-gray-900 md:text-4xl md:leading-tight ">
                        آخرین اخبار ما
                    </h1>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">
                        آخرین را در اینجا مطالعه کنید
                    </p>
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                    <BlogCard
                        title={"AI in Customer Support: Threat or Savior"}
                        subTitle={
                            "Explore the transformative journey of AI in customer support - unveiling challenges, potentials, and the future ahead."
                        }
                        linkTo={"/blog/123"}
                        img={"/blog/image.png"}
                    />
                    <BlogCard
                        title={
                            "8 Ways AI Customer Support Assistants Can Help Your Business"
                        }
                        subTitle={
                            "Explore the transformative journey of AI in customer support - unveiling challenges, potentials, and the future ahead."
                        }
                        linkTo={"/blog/321"}
                        img={"/blog/image1.png"}
                    />
                </div>
            </div>
        </>
    )
}

export default AllBlogs
