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
            <div className="mt-4 flex justify-center">
                <button className="rounded-2xl bg-[#2563eb] p-3 text-white">
                    آموزش مجدد چت بات
                </button>
            </div>
        </div>
    )
}

export default SourceCard
