const Security = () => {
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
                            &#39;خصوصی&#39;: هیچ کس نمی‌تواند به چت‌بات شما
                            دسترسی داشته باشد، به جز شما (حساب کاربری شما)
                        </p>
                        <p className="mt-2 text-sm text-zinc-500">
                            &#39;عمومی&#39;: دیگران می‌توانند با چت‌بات شما
                            گفتگو کنند اگر لینک را برایشان ارسال کنید. همچنین
                            می‌توانید آن را در وب‌سایت خود تعبیه کنید تا
                            بازدیدکنندگان وب‌سایت شما بتوانند از آن استفاده
                            کنند.
                        </p>
                    </div>
                    <div className="pb-8">
                        <div>
                            <label className="block pb-2 text-sm font-medium text-zinc-700">
                                غیر فعال کردن چت بات{" "}
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
                                محدودیت نرخ درخواست :{" "}
                            </label>
                            <button className="focus-visible:ring-ring inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-zinc-100 px-4 py-1 text-sm font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-200/90 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                                ریست کردن
                            </button>
                        </div>
                        <p className="mt-2 text-sm text-zinc-500">
                            محدود کردن تعداد پیام‌های ارسال شده از یک دستگاه در
                            آیفریم و حباب چت (این محدودیت برای شما در
                            hamyar.chat اعمال نمی‌شود، فقط در وب‌سایت شما برای
                            کاربران شما به منظور جلوگیری از سوءاستفاده).
                        </p>
                        <div className="mt-1 text-sm text-zinc-700">
                            محدود به تنها{" "}
                            <input
                                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring inline h-8 w-20 rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                type="number"
                                value="20"
                                name="ip_limit"
                            />{" "}
                            پیام هر{" "}
                            <input
                                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring inline h-8 w-20 rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                type="number"
                                value="240"
                                name="ip_limit_timeframe"
                            />{" "}
                            ثانیه.
                        </div>
                        <div className="my-4 text-sm text-zinc-700">
                            نشان دادن پیامی که محدودیت پر می شود:
                            <input
                                className=" mt-2 block w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-blue-600 focus:bg-white focus:outline-none"
                                id="inline-full-name"
                                type="text"
                                value="تعداد درخواست شما زیاد تر از استاندارد بات می باشد."
                            />
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
export default Security
