const SourceCard = () => {
    return (
        <div className="mt-18 h-44 w-80  rounded-xl  border bg-white p-2">
            <div className="flex justify-center">
                <span className="text-2xl font-semibold">منابع آموزش</span>
            </div>
            <div className="mt-3 flex justify-center">
                <span className="text-base font-medium">
                    مجموع کلمات استفاده شده:
                </span>
            </div>
            <div className="flex justify-center">
                <span>"30.597/400.000"</span>
            </div>
            <div className="mt-2 flex justify-center">
                <div className="flex justify-end bg-zinc-100 px-5 py-3">
                    xsxs
                </div>{" "}
                <div className="flex justify-end bg-zinc-100 px-5 py-3">
                    xsxs
                </div>
            </div>
        </div>
    )
}

export default SourceCard
