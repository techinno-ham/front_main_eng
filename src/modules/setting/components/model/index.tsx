const Model = () => {
    return (
        <>
            <div>
                <div className="p-5">
                    <div className="pb-8">
                        <label className="mb-2 block text-sm font-medium text-zinc-700">
                            مدل :{" "}
                            <div className="mb-1 ml-1 inline-flex items-center rounded-md border border-transparent bg-violet-100 px-2.5 py-0.5 text-xs font-semibold text-violet-600 transition-colors hover:bg-violet-100/80 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:bg-violet-800 dark:text-violet-50 dark:hover:bg-violet-800/80 dark:focus:ring-zinc-300">
                                {" "}
                                gpt-4o فعال می باشد.
                            </div>
                        </label>
                        <button
                            type="button"
                            role="combobox"
                            aria-controls="radix-:r70:"
                            aria-expanded="false"
                            aria-autocomplete="none"
                            dir="ltr"
                            data-state="closed"
                            className="flex h-10 w-full items-center justify-between rounded-md border border-zinc-900/10 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus:ring-zinc-300"
                        >
                            <span style={{ pointerEvents: "none" }}>
                                gpt-4o
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                                aria-hidden="true"
                            >
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </button>
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
                            id="steps-range"
                            min="0"
                            max="1"
                            step="0.1"
                            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-zinc-200  accent-violet-700 dark:bg-zinc-700"
                            type="range"
                            value="0"
                        />
                        <div className="flex justify-between">
                            <p className="text-xs text-zinc-700">Reserved</p>
                            <p className="text-xs text-zinc-700">Creative</p>
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
