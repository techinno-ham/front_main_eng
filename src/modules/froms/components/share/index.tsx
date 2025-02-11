import { Copy, ExportSquare } from "iconsax-react"
import { toast } from "sonner"
import { usePathname } from "next/navigation"
import useStoreFromsData from "../../hooks/loadFormData";

const Share = () => {
    const { data, setData } = useStoreFromsData();
    const urlCode = `https://www.chatsys.co/form?formRef=${data.forms_id}`

    const handleCopyUrl = () => {
        navigator.clipboard
            .writeText(urlCode)
            .then(() => {
                toast.success("Your code has been copied.")
            })
            .catch((err) => {
                toast.error("Your code could not be copied.")
            })
    }
    const handleVisit = () => {
        window.open(urlCode, "_blank")
    }
    

    return (
       
                    <>
                        <div className="flex flex-col gap-2 p-6 pt-0">
                            <div className="z-10 w-full">
                                <div>
                                    <div className="mt-3">
                                        <span className="w-full font-medium">
                                            www.chatsys.co
                                        </span>
                                        <div className="mt-2">
                                            <p className="text-sm text-zinc-500 ">
                                                To share your form, you can use this address.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="m-auto mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"
                                    style={{ direction: "ltr" }}
                                >
                                    <pre
                                        className="w-full overflow-auto rounded bg-zinc-100 p-2 text-xs"
                                        style={{
                                            whiteSpace: "pre-wrap",
                                            wordWrap: "break-word",
                                        }}
                                    >
                                        <code
                                            style={{
                                                height: "20px",
                                                display: "block",
                                                whiteSpace: "inherit",
                                            }}
                                        >
                                            https://www.chatsys.co/form?formRef={data.forms_id}
                                        </code>
                                    </pre>
                                </div>
                                <div className="mt-3 flex justify-center gap-3 space-x-4">
                                    <button
                                        onClick={handleVisit}
                                        className="focus-visible:ring-ring inline-flex h-9 items-center justify-center whitespace-nowrap rounded-xl border border-zinc-200 bg-transparent px-4 py-1 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100/70 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:bg-zinc-100/60 disabled:opacity-80 "
                                    >
                                        <ExportSquare size="16" color="#000" />
                                        <span className="mr-1">Visit</span>
                                    </button>
                                    <button
                                        onClick={handleCopyUrl}
                                        className="focus-visible:ring-ring inline-flex h-9 items-center justify-center whitespace-nowrap rounded-xl border border-zinc-200 bg-transparent px-4 py-1 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100/70 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:bg-zinc-100/60 disabled:opacity-80 "
                                    >
                                        <Copy size="18" color="#000" />
                                        <span className="mr-1">Copy</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
              
              
           
        
    )
}
export default Share
