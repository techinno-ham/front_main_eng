//https://tailgrids.com/components/pricing-tables

import BlogCard from "./BlogCard"

const AllBlogs = () => {
    return (
        <>
            <div className="mx-auto max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8">
                <div className="w-full px-4">
                    <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                        <span className="text-primary mb-2 block text-lg font-semibold">
                            وبلاگ
                        </span>
                        <h2 className="text-dark mb-3 text-3xl font-bold leading-[1.208] sm:text-4xl md:text-[40px] ">
                            آخرین
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
                                &nbsp;اخبار&nbsp;
                            </span>
                            همیارچت
                        </h2>
                        <p className="text-body-color dark:text-dark-6 text-base">
                            آخرین را در اینجا مطالعه کنید
                        </p>
                    </div>
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
