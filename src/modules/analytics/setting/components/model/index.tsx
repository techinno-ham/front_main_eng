const Model = () => {
    return (
        <>
            <div>
                <div className="p-5">
                    <div className="pb-8">
                        <label className="mb-2 block text-sm font-medium text-zinc-700">
                            مدل :{" "}
                            <div className="mb-1 ml-1 inline-flex items-center rounded-md border border-transparent bg-violet-100 px-2.5 py-0.5 text-xs font-semibold text-blue-500 transition-colors hover:bg-violet-100/80 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 ">
                                {" "}
                                gpt-4o فعال می باشد.
                            </div>
                        </label>
                        <select
                            id="countries"
                            className="block w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 md:w-1/4"
                        >
                            <option>gpt-4o</option>
                            <option>gpt-4-turbo</option>
                            <option>gpt-4</option>
                            <option>gpt-3.5-turbo</option>
                        </select>
                        <p className="mt-2 text-sm font-semibold text-zinc-700">
                            gpt-4o پیشرفته‌ترین مدل OpenAI فعال است.
                        </p>
                        <p className="mt-2 text-sm text-zinc-500">
                            gpt-4o: 1 credit per response
                        </p>
                        <p className="mt-2 text-sm text-zinc-500">
                            gpt-4-turbo: 10 credits per response
                        </p>
                        <p className="mt-2 text-sm text-zinc-500">
                            gpt-4: 20 credits per response
                        </p>
                        <p className="mt-2 text-sm text-zinc-500">
                            gpt-3.5-turbo: 1 credit per response
                        </p>
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-zinc-700">
                            میزان خلاقیت :
                        </label>
                        <p className="text-sm">0</p>
                        <input
                            id="minmax-range"
                            type="range"
                            min="0"
                            max="10"
                            value="0"
                            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 "
                        />
                        <div className="flex justify-between">
                            <p className="text-xs text-zinc-700">ثابت بودن</p>
                            <p className="text-xs text-zinc-700">خلاقیت</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end  px-5 py-3">
                    <button className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white">
                        ذخیره
                    </button>
                </div>
            </div>
        </>
    )
}
export default Model
