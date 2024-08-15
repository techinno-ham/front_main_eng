import { Copy } from "iconsax-react";
import { toast } from "sonner";
import useStoreActive from "../../hooks/activeStore";

const Web = () => {

    const {active,isLoding}=useStoreActive();


    const iframeCode = `<iframe
    src="https://www.chatbase.co/chatbot-iframe/1w8PDIhX6DoaODiIDOveW"
    width="100%"
    style="height: 100%; min-height: 700px"
    frameborder="0"
    ></iframe>`;

    const scriptCode = `<iframe
    src="https://www.chatbase.co/chatbot-iframe/1w8PDIhX6DoaODiIDOveW"
    width="100%"
    style="height: 100%; min-height: 700px"
    frameborder="0"
    ></iframe>`;
    
        const handleCopyIframe = () => {
            navigator.clipboard.writeText(iframeCode).then(() => {
                toast.success("کد مورد نظر شما کپی شد.")
            }).catch(err => {
                toast.error("کد مورد نظر شما کپی نشد.")
                
            });
        };

        const handleCopyScript = () => {
            navigator.clipboard.writeText(scriptCode).then(() => {
                toast.success("کد مورد نظر شما کپی شد.")
            }).catch(err => {
                toast.error("کد مورد نظر شما کپی نشد.")
                
            });
        };
    return (
        <>
            <div>
                {active? (
                    <>
                     <div className="p-6 pt-0 flex flex-col gap-2">
                    <div className="w-full z-10">
                        <div>
                               <div className="mt-3">
                                  <span className="w-full font-medium">www.hamyar.chat</span>
                                <div className="mt-2">
                                <p className="text-sm text-zinc-500 ">برای افزودن ربات چت در هر جایی از وب سایت خود، این iframe را به کد html خود اضافه کنید.</p>
                                </div>
                                </div>
                        </div>
                        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse m-auto" style={{ direction: 'ltr' }}>
  <pre
    className="w-full overflow-auto rounded bg-zinc-100 p-2 text-xs"
    style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
  >
    <code
      style={{
        height: '100px',
        display: 'block',
        whiteSpace: 'inherit',
      }}
    >
      &lt;iframe
      {'\n'}src="https://www.chatbase.co/chatbot-iframe/1w8PDIhX6DoaODiIDOveW"
      {'\n'}width="100%"
      {'\n'}style="height: 100%; min-height: 700px"
      {'\n'}&gt;&lt;/iframe&gt;
    </code>
  </pre>
                        </div>
                        <div className="mt-3 flex justify-center">
                            <button  
                            onClick={handleCopyIframe}
                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 border border-zinc-200 bg-transparent shadow-sm hover:bg-zinc-100/70 hover:text-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 rounded-xl disabled:bg-zinc-100/60 h-9 px-4 py-1">
                                  <Copy
                                 size="18"
                                 color="#000"
                                 />
                                <span className="mr-1">Copy Iframe </span>
                              
                             
                            
                                </button>
                                
                        </div>
                        <div className="mt-8">
                            <p className=" text-sm text-zinc-500">برای افزودن یک حباب چت در سمت راست پایین وب سایت خود، این تگ اسکریپت را به html خود اضافه کنید.</p>
                        </div>
                        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse m-auto" style={{ direction: 'ltr' }}>
  <pre
    className="w-full overflow-auto rounded bg-zinc-100 p-2 text-xs"
    style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
  >
    <code
      style={{
        height: '95px',
        display: 'block',
        whiteSpace: 'inherit',
      }}
    >
      &lt;script
      {'\n'}src="https://widget.galichat.com/gali-embeded.min.js"
      {'\n'}chat-hash="cbn3t7syn3tfmzx389skua"
      {'\n'}defer
      {'\n'}&gt;&lt;/script&gt;
    </code>
  </pre>
                        </div>
                        <div className="mt-3 flex justify-center">
                            <button  
                            onClick={handleCopyScript}
                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 border border-zinc-200 bg-transparent shadow-sm hover:bg-zinc-100/70 hover:text-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 rounded-xl disabled:bg-zinc-100/60 h-9 px-4 py-1">
                                  <Copy
                                 size="18"
                                 color="#000"
                                 />
                                <span className="mr-1">Copy Script</span>
                              
                             
                            
                                </button>
                                
                        </div>


 


                    </div>
                   
                </div>
                    </>
                ):(
                    <>
                          <div className="p-6 pt-3 flex flex-col gap-2">
                              <div className="w-full items-center justify-between gap-5">
                                <div>
                                  <span className="font-medium text-zinc-950"> میزان دسترسی چت بات شما  خصوصی است، برای استقرار و  اشتراک گذاری چت بات ، میزان دسترسی   را به عمومی تغییر دهید.</span>
                                </div>
                                <div className="flex flex-row mt-5 justify-end">
                                <button
                    type="submit"
                    className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm text-white"
                >
                    {isLoding ? (
                        <>
                            <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-blue-600"></div>
                            <span className="ml-3"> بروزرسانی ...</span>
                        </>
                    ) : (
                        <span>عمومی کردن</span>
                    )}
                </button>

                                </div>
                  
                              </div>
                        </div>
                    </>
                )}
      
               
             
            </div>
        </>
    )
}
export default Web
