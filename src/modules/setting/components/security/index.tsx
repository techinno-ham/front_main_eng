const Security = ()=>{
    return (
        <>
        <div>
            <div className="p-5">
            <div className="pb-8">
                <label className="mb-1 block text-sm font-medium text-zinc-700">میزان دسترسی :</label>
                <button type="button" role="combobox" aria-controls="radix-:r9i:" aria-expanded="false" aria-autocomplete="none" dir="ltr" data-state="closed" className="flex h-10 w-full items-center justify-between rounded-md border border-zinc-900/10 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus:ring-zinc-300"><span style={{pointerEvents:"none"}}>خصوصی</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg></button>
               
<p className="mt-2 text-sm text-zinc-500">'خصوصی': هیچ کس نمی‌تواند به چت‌بات شما دسترسی داشته باشد، به جز شما (حساب کاربری شما)</p>
<p className="mt-2 text-sm text-zinc-500">'عمومی': دیگران می‌توانند با چت‌بات شما گفتگو کنند اگر لینک را برایشان ارسال کنید. همچنین می‌توانید آن را در وب‌سایت خود تعبیه کنید تا بازدیدکنندگان وب‌سایت شما بتوانند از آن استفاده کنند.</p>
            </div>
            <div className="pb-8">
                <div>
                    <label className="block pb-2 text-sm font-medium text-zinc-700">غیر فعال کردن چت بات </label>
                    <button type="button" role="switch" aria-checked="false" data-state="unchecked" value="on" className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-violet-600 data-[state=unchecked]:bg-zinc-200 dark:focus-visible:ring-zinc-300 dark:focus-visible:ring-offset-zinc-950 dark:data-[state=checked]:bg-zinc-50 dark:data-[state=unchecked]:bg-zinc-800">
                    <span data-state="unchecked" className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-zinc-950"></span></button>
                    </div>
            </div>
            <div>
                <div className="flex justify-between">
                    <label className="block text-sm font-medium text-zinc-700">محدودیت نرخ درخواست : </label>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-200/90 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 h-9 px-4 py-1">ریست کردن</button>
                    </div>
                    <p className="mt-2 text-sm text-zinc-500">محدود کردن تعداد پیام‌های ارسال شده از یک دستگاه در آیفریم و حباب چت (این محدودیت برای شما در chatbase.co اعمال نمی‌شود، فقط در وب‌سایت شما برای کاربران شما به منظور جلوگیری از سوءاستفاده).</p>
                    <div className="mt-1 text-sm text-zinc-700">محدود به تنها <input className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50 inline h-8 w-20" type="number" value="20" name="ip_limit"/> messages every <input className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50 inline h-8 w-20" type="number" value="240" name="ip_limit_timeframe"/> seconds.</div>
                    <div className="my-4 text-sm text-zinc-700">Show this message to show when limit is hit<input className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50" value="Too many messages in a row" name="ip_limit_message"/></div></div>
            </div>
            <div className="flex justify-end  px-5 py-3">
                    <button className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white">
                        ذخیره
                    </button>
                </div>
        </div>
        </>
    )

};
export default Security;