const BlogCard = ({ title, subTitle, linkTo, img }: any) => {
    return (
        <a
            className="group relative block rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href={linkTo}
        >
            <div className="relative h-[350px] w-full flex-shrink-0 overflow-hidden rounded-xl before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/[1]">
                <img
                    className="absolute start-0 top-0 size-full object-cover"
                    src={img}
                    alt="Image Description"
                />
            </div>

            <div className="absolute inset-x-0 top-0 z-10">
                <div className="flex h-full flex-col p-4 sm:p-6">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="size-[46px] rounded-full border-2 border-white"
                                src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                alt="Image Description"
                            />
                        </div>
                        <div className="ms-2.5 sm:ms-4">
                            <h4 className="font-semibold text-white">تیم </h4>
                            <p className="text-xs text-white/[.8]">
                                May 30, 2021
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-10">
                <div className="flex h-full flex-col p-4 sm:p-6">
                    <h3 className="text-lg font-semibold text-white group-hover:text-white/[.8] sm:text-3xl">
                        {title}
                    </h3>
                    <p className="mt-2 text-white/[.8]">{subTitle}</p>
                </div>
            </div>
        </a>
    )
}

export default BlogCard
