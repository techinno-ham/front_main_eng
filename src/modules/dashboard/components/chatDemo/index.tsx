const ChartDemo = ()=>{
    return (
        <>
    
            <div className="mx-auto mt-10 flex max-w-5xl flex-col px-3 pb-12 md:mt-10">
            <div className="rounded border bg-white">
                <div className="p-4 border-b">
                    <span className="text-xl font-semibold leading-6 text-zinc-900">دیجی بات</span>
                </div>
                <div className="p-5">
                    <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:space-x-2 md:space-y-0">
                        <div className="w-full flex flex-col gap-4">
                            <div>
                                <span className="block text-sm font-medium text-zinc-5">چت بات آیدی :</span>
                                <span className="text-sm font-semibold text-zinc-700">sG-EAaBK-R4AbfET4AhmP</span>
                            </div>
                            <div className="flex gap-32">
                            <div>
                                <span className="block text-sm font-medium text-zinc-5">وضعیت :</span>
                                <span className="text-sm font-semibold text-zinc-700">
                                <span className="mr-1 inline-block h-[10px] w-[10px] rounded-full bg-green-500"></span> فعال</span>
                            </div>
                            <div>
                                <span className="block text-sm font-medium text-zinc-5">مدل :</span>
                                <span className="text-sm font-semibold text-zinc-700">gpt-3.5-turbo</span>
                            </div>
                              

                            </div>
                            <div>
                                <span className="block text-sm font-medium text-zinc-5">دسترسی :</span>
                                <span className="text-sm font-semibold text-zinc-700">عمومی </span>
                            </div>
                            <div>
                                <span className="block text-sm font-medium text-zinc-5">آخرین آموزش :</span>
                                <span className="text-sm font-semibold text-zinc-700">3 روز پیش  </span>
                            </div>
                        </div>
                        <div className="w-full p-2">
                            <div className="h-[75vh] max-h-[824px] overflow-hidden rounded-lg border-[1px] border-zinc-200">
                                <div className="flex justify-center">
                                    <div className="text-3xl">
                                     Chat Bot Template 
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>
               

            </div>

            </div>
            
 
        </>
    )

};
export default ChartDemo;