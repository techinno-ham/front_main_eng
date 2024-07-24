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
    title={"هوش مصنوعی در پشتیبانی مشتری: تهدید یا ناجی"}
    subTitle={
        "سفر تحولی هوش مصنوعی در پشتیبانی مشتری را کشف کنید - چالش‌ها، پتانسیل‌ها و آینده پیش رو را بررسی کنید."
    }
    linkTo={"/blog/123"}
    img={"/blog/image.png"}
/>
<BlogCard
    title={
        "۸ راهی که دستیاران پشتیبانی مشتری هوش مصنوعی می‌توانند به کسب‌وکار شما کمک کنند"
    }
    subTitle={
        "موفقیت کسب‌وکار را با پشتیبانی هوش مصنوعی ارتقا دهید: حفظ مشتریان را افزایش دهید، شهرت را تقویت کنید، عملیات را گسترش دهید و هزینه‌ها را برای رشد بهینه کاهش دهید."
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
