import { CloseCircle, Refresh } from "iconsax-react"

const Apperence = () => {
    return (
        <>
            <div>
                <div className="p-5">
                    <h4 className="mb-8 text-sm text-zinc-600">
                        توجه: زمانی که در یک وب سایت تعبیه شده است اعمال می شود
                    </h4>
                    <div className=" flex flex-col justify-between lg:flex-row ">
                        <div className="w-2/2 flex-1 pb-5 lg:w-1/2">
                            <div className="pb-8">
                                <div className="flex justify-between">
                                    <label className="block text-sm font-medium text-zinc-700">
                                        پیام های شروع :
                                    </label>
                                    <button className="focus-visible:ring-ring inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-zinc-100 px-4 py-1 text-sm font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-200/90 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                                        بازنشانی
                                    </button>
                                </div>
                                <div className="mt-1">
                                    <textarea
                                        name="initial_messages"
                                        placeholder="Hi! What can I help you with?"
                                        className="w-full min-w-0  flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3   text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                                    >
                                        سلام! در چه زمینه ای می توانم به شما کمک
                                        کنم؟
                                    </textarea>
                                    <p className="mt-2 text-sm text-zinc-500">
                                        هر پیام را در یک خط جدید وارد کنید.
                                    </p>
                                </div>
                            </div>
                            <div className="pb-8">
                                <label className="block text-sm font-medium text-zinc-700">
                                    پیام های پیشنهادی :
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        name="initial_messages"
                                        placeholder="رایا چت چیست ؟"
                                        className="w-full min-w-0  flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3   text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                                    ></textarea>
                                    <p className="mt-2 text-sm text-zinc-500">
                                        هر پیام را در یک خط جدید وارد کنید.
                                    </p>
                                </div>
                            </div>
                            <div className="pb-8">
                                <label className="block text-sm font-medium text-zinc-700">
                                    پیام داخل ورودی :{" "}
                                </label>
                                <div className="mt-1">
                                    <input
                                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="سلام ...."
                                        type="text"
                                        value=""
                                        name="name"
                                    />
                                </div>
                            </div>
                            <div className="pb-8">
                                <label className="block text-sm font-medium text-zinc-700">
                                    فوتر :{" "}
                                </label>
                                <div className="mt-1">
                                    <input
                                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="رایا گپ ..."
                                        type="text"
                                        value=""
                                        name="name"
                                    />
                                </div>
                            </div>
                            <div className="flex w-full flex-row items-center gap-4 py-3">
                                <div className="flex flex-col gap-1">
                                    <span className="mb-1 block text-sm font-medium text-zinc-700">
                                        عکس بات :{" "}
                                    </span>
                                    <div className="flex flex-row items-center gap-2">
                                        <input
                                            id="bot_profile_picture"
                                            accept="image/*"
                                            className="hidden"
                                            type="file"
                                            name="bot_profile_picture"
                                        />
                                        {/* <button class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 border border-zinc-200 bg-transparent shadow-sm hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-7 rounded-md px-3 text-xs" type="button"/><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-upload mr-2 h-4 w-4"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>Upload image
                                            </button> */}
                                    </div>
                                    <span className="mt-1 text-xs text-zinc-500">
                                        Supports JPG, PNG, and SVG files up to
                                        1MB
                                    </span>
                                </div>
                                <div className="h-14 w-14 rounded-full border border-zinc-300 bg-zinc-200"></div>
                            </div>
                            <div className="pb-8">
                                <label className="block text-sm font-medium text-zinc-700">
                                    نام نمایش بات :{" "}
                                </label>
                                <div className="mt-1">
                                    <input
                                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="هوشینو"
                                        type="text"
                                        value=""
                                        name="name"
                                    />
                                </div>
                            </div>
                            <div className="pb-8">
                                <label className="block text-sm font-medium text-zinc-700">
                                    نام نمایش بات :{" "}
                                </label>
                                <div className="mt-1">
                                    <input
                                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="هوشینو"
                                        type="text"
                                        value=""
                                        name="name"
                                    />
                                </div>
                            </div>
                            <div className="pb-8">
                                <label className="mb-1 block text-sm font-medium text-zinc-700">
                                    {" "}
                                    محل قرارگیری دکمه چت بات :
                                </label>
                                <select
                                    id="countries"
                                    className="block w-1/4 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                                >
                                    <option>راست</option>
                                    <option>چپ</option>
                                </select>
                            </div>
                            <div className="mt-1 text-sm text-zinc-700">
                                نمایش خودکار پیام های اولیه پس از پاپ آپ باز می
                                شود :
                                <input
                                    className=" border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-1 flex h-9 w-48 rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="number"
                                    name="auto_open_chat_window_after"
                                />
                                ثانیه (منفی برای غیرفعال کردن)
                            </div>
                        </div>
                        <div className="w-2/2 mr-10 flex-1 lg:w-1/2">
                            <div className="flex h-[85vh] max-h-[824px] flex-auto shrink-0 flex-col overflow-hidden rounded-xl border border-zinc-200  bg-zinc-100">
                                <div className="cb-light group flex h-full flex-auto shrink-0 flex-col overflow-hidden bg-white">
                                    <div className="w-full px-3">
                                        <div className="z-10 flex justify-between border-b py-1">
                                            <div className="flex items-center justify-center gap-3">    
                                            <button><CloseCircle size={32} color="#9ca3af"/></button>
                                            <button><Refresh size={28} color="#9ca3af"/></button>
                                            </div>
                                            <div className="flex items-center"></div>
                                        </div>
                                    </div>
                                    <div className="">
                                    sddds
                                    </div>
                                    <div className="bg-inherit">
                                        <form action="">
                                        <div className="flex gap-2 overflow-x-auto p-3"></div>
                                        ssds
                                        </form>
                                    </div>
                                </div>
                       
                              
                            </div>
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
export default Apperence
