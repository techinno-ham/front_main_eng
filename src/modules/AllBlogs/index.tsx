//https://tailgrids.com/components/pricing-tables

import BlogCard from "./BlogCard"

const AllBlogs = () => {
    return (
        <>
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-10">
        <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
          <h1 className="text-2xl text-gray-900 font-bold md:text-4xl md:leading-tight ">
            آخرین اخبار ما
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            آخرین را در اینجا مطالعه کنید
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <BlogCard
            title={"AI in Customer Support: Threat or Savior"}
            subTitle={
              "Explore the transformative journey of AI in customer support - unveiling challenges, potentials, and the future ahead."
            }
            linkTo={"/blog/123"}
            img={"/blog/image.png"}
          />
          <BlogCard
            title={"8 Ways AI Customer Support Assistants Can Help Your Business"}
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
