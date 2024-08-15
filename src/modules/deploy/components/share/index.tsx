import { Copy, ExportSquare } from "iconsax-react"
import { toast } from "sonner";
import useStoreActive from "../../hooks/activeStore";

const Sahre= () => {
    const {active,isLoding}=useStoreActive();


    const urlCode = `https://www.chatbase.co/chatbot-iframe/1w8PDIhX6DoaODiIDOveW`;
    
        const handleCopyUrl = () => {
            navigator.clipboard.writeText(urlCode).then(() => {
                toast.success("کد مورد نظر شما کپی شد.")
            }).catch(err => {
                toast.error("کد مورد نظر شما کپی نشد.")
                
            });
        };
        const handleVisit = () => {
            window.open(urlCode, '_blank');
        };

    return (
        <>
           <div>
            {active ? (
                <>
                <div className="p-6 pt-0 flex flex-col gap-2">
                    <div className="w-full z-10">
                        <div>
                               <div className="mt-3">
                                  <span className="w-full font-medium">www.hamyar.chat</span>
                                <div className="mt-2">
                                <p className="text-sm text-zinc-500 ">برای اشتراک گذاری ربات چت خود میتوانید از این آدرس استفاده کنید.</p>
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
        height: '20px',
        display: 'block',
        whiteSpace: 'inherit',
      }}
    >
      https://www.chatbase.co/chatbot-iframe/1w8PDIhX6DoaODiIDOveW
    </code>
  </pre>
                        </div>
                        <div className="mt-3 flex justify-center space-x-4 gap-3">
                            <button  
                            onClick={handleVisit}
                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 border border-zinc-200 bg-transparent shadow-sm hover:bg-zinc-100/70 hover:text-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 rounded-xl disabled:bg-zinc-100/60 h-9 px-4 py-1">
                                  <ExportSquare
                                 size="16"
                                 color="#000"
                                 />
                                <span className="mr-1">Visit</span>
                              
                             
                            
                             </button>
                             <button  
                            onClick={handleCopyUrl}
                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 border border-zinc-200 bg-transparent shadow-sm hover:bg-zinc-100/70 hover:text-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 rounded-xl disabled:bg-zinc-100/60 h-9 px-4 py-1">
                                  <Copy
                                 size="18"
                                 color="#000"
                                 />
                                <span className="mr-1">Copy</span>
                              
                             
                            
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
export default Sahre
