import { CodeBlock, dracula } from "react-code-blocks"

const CDN = () => {
    return (
        <>
            <div>
                <div className="p-5">
                    <div className="pb-8">
                        <label className="mb-1 block text-sm font-medium text-zinc-700">
                            میزان دسترسی :
                        </label>
                        <select
                            id="countries"
                            className="block w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 md:w-1/4"
                        >
                            <option>عمومی</option>
                            <option>خصوصی</option>
                        </select>

                        <p className="mt-2 text-sm text-zinc-500">
                            'خصوصی': هیچ کس نمی‌تواند به چت‌بات شما دسترسی داشته
                            باشد، به جز شما (حساب کاربری شما)
                        </p>
                        <p className="mt-2 text-sm text-zinc-500">
                            'عمومی': دیگران می‌توانند با چت‌بات شما گفتگو کنند
                            اگر لینک را برایشان ارسال کنید. همچنین می‌توانید آن
                            را در وب‌سایت خود تعبیه کنید تا بازدیدکنندگان
                            وب‌سایت شما بتوانند از آن استفاده کنند.
                        </p>
                    </div>
                    
                </div>
                <div className="mx-auto mt-24 max-w-sm overflow-hidden rounded-lg bg-gray-900">
                    <div className="p-4">
                        <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-gray-200">
                                Code Snippet
                            </span>
                            <button
                                id="copyButton"
                                className="rounded bg-teal-500 px-4 py-2 text-white hover:bg-teal-600 focus:outline-none focus:ring focus:ring-red-400"
                            >
                                Copy
                            </button>
                        </div>
                    </div>

                    <div className="px-3 py-2">
                        <CodeBlock
                            text={"const add = (x,y) => x+y;"}
                            language={"javascript"}
                            showLineNumbers={true}
                            theme={dracula}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default CDN
