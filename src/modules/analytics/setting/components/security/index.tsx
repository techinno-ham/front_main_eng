const Security = () => {
    return (
        <>
            <div>
                <div className="p-5">
                    <div className="pb-8">
                        <label className="mb-1 block text-sm font-medium text-zinc-700">
                            Access Level:
                        </label>
                        <select
                            id="countries"
                            className="block w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 md:w-1/4"
                        >
                            <option>Public</option>
                            <option>Private</option>
                        </select>

                        <p className="mt-2 text-sm text-zinc-500">
                            'Private': No one can access your chatbot except you (your account).
                        </p>
                        <p className="mt-2 text-sm text-zinc-500">
                            'Public': Others can interact with your chatbot if you send them the link. You can also embed it on your website so that visitors to your website can use it.
                        </p>
                    </div>
                    <div className="pb-8">
                        <div>
                            <label className="block pb-2 text-sm font-medium text-zinc-700">
                                Disable Chatbot{" "}
                            </label>
                            <input
                                type="checkbox"
                                value=""
                                className="peer sr-only"
                            />
                            <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <label className="block text-sm font-medium text-zinc-700">
                                Request Rate Limiting:{" "}
                            </label>
                            <button className="focus-visible:ring-ring inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-zinc-100 px-4 py-1 text-sm font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-200/90 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                                Reset
                            </button>
                        </div>
                        <p className="mt-2 text-sm text-zinc-500">
                            Limit the number of messages sent from a device in the iframe and chat bubble (this limit does not apply to you in hamyar.chat, only on your website for your users to prevent abuse).
                        </p>
                        <div className="mt-1 text-sm text-zinc-700">
                            Limit to only{" "}
                            <input
                                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring inline h-8 w-20 rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                type="number"
                                value="20"
                                name="ip_limit"
                            />{" "}
                            messages every{" "}
                            <input
                                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring inline h-8 w-20 rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                type="number"
                                value="240"
                                name="ip_limit_timeframe"
                            />{" "}
                            seconds.
                        </div>
                        <div className="my-4 text-sm text-zinc-700">
                            Show message when the limit is reached:
                            <input
                                className=" mt-2 block w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-blue-600 focus:bg-white focus:outline-none"
                                id="inline-full-name"
                                type="text"
                                value="Your request count exceeds the bot's standard limit."
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end  px-5 py-3">
                    <button className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white">
                        Save
                    </button>
                </div>
            </div>
        </>
    )
}
export default Security
