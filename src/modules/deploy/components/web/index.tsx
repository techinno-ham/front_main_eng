import { Copy } from "iconsax-react"
import { toast } from "sonner"
import useStoreActive from "../../hooks/activeStore"
import service from "@/src/shared/services/service"
import { usePathname } from "next/navigation"

const Web = () => {
    const pathname = usePathname()
    const botId = pathname.split("/")[2]

    const { active, isLoding, setLoading, setActive,botHash } = useStoreActive();
    const baseCdnUrl = process.env.NEXT_PUBLIC_BASE_CDN || "https://chatsys.co/cdn";

    const iframeCode = `<iframe
    src="https://www.chatsys.co/bot?botRef=${botId}"
    width="100%"
    style="height: 100%; min-height: 700px"
    frameborder="0"
    loading="lazy"
    ></iframe>`

    const scriptCode = `<script
    src="${baseCdnUrl}/widget/v1.0.0/hamyarchat-embedded.js"
    chatsys-bot-token="${botHash}"
    id="chatsysChatbotScript"
    defer></script>`

    const handleCopyIframe = () => {
        navigator.clipboard
            .writeText(iframeCode)
            .then(() => {
                toast.success("The code has been copied successfully.")
            })
            .catch((err) => {
                toast.error("Failed to copy the code.")
            })
    }

    const handleCopyScript = () => {
        navigator.clipboard
            .writeText(scriptCode)
            .then(() => {
                toast.success("The code has been copied successfully.")
            })
            .catch((err) => {
                toast.error("Failed to copy the code.")
            })
    }

    const handlePublic = async () => {
        setLoading(true)
        let formData = {
            access_bot: "general",
        }
        try {
            const response = await service.updateSecurityConfig(botId, formData)
            toast.success("Your changes have been saved successfully.")
            setActive(true)
        } catch (error) {
            toast.error("There was an issue updating!")
            console.error("Update failed:", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div>
                {active ? (
                    <>
                        <div className="flex flex-col gap-2 p-6 pt-0 ">
                            <div className="z-10 w-full">
                                <div>
                                    <div className="mt-3">
                                        <span className="w-full font-medium">
                                            www.chatsys.co
                                        </span>
                                        <div className="mt-2">
                                            <p className="text-sm text-zinc-500 ">
                                                To add the chatbot to any part of your website, add this iframe to your HTML code.
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
                                                height: "100px",
                                                display: "block",
                                                whiteSpace: "inherit",
                                            }}
                                        >
                                            &lt;iframe
                                            {"\n"}
                                            src=&quot;https://www.chatsys.co/chatbot?botRef={botId}&quot;
                                            {"\n"}width=&quot;100%&quot;
                                            {"\n"}style=&quot;height: 100%;
                                            min-height: &quot;700px&quot;
                                            {"\n"}&gt;&lt;/iframe&gt;
                                        </code>
                                    </pre>
                                </div>
                                <div className="mt-3 flex justify-center">
                                    <button
                                        onClick={handleCopyIframe}
                                        className="focus-visible:ring-ring inline-flex h-9 items-center justify-center whitespace-nowrap rounded-xl border border-zinc-200 bg-transparent px-4 py-1 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100/70 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:bg-zinc-100/60 disabled:opacity-80 "
                                    >
                                        <Copy size="18" color="#000" />
                                        <span className="mr-1">
                                            Copy Iframe{" "}
                                        </span>
                                    </button>
                                </div>
                                <div className="mt-8">
                                    <p className=" text-sm text-zinc-500">
                                        To add a chat bubble to the bottom right of your website, add this script tag to your HTML.
                                    </p>
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
                                                height: "95px",
                                                display: "block",
                                                whiteSpace: "inherit",
                                            }}
                                        >
                                               &lt;script
                                            {"\n"}
                                            src=&quot;{baseCdnUrl}/chatsys-widget/v1.0.0/chatsys-embedded.js&quot;
                                            {"\n"}chatsys-bot-token=&quot;{botHash}&quot;
                                            {"\n"}id=&quot;chatsysChatbotScript&quot;
                                            {"\n"}defer
                                            {"\n"}&gt;&lt;/script&gt;
                                        </code>
                                    </pre>
                                </div>
                                <div className="mt-3 flex justify-center">
                                    <button
                                        onClick={handleCopyScript}
                                        className="focus-visible:ring-ring inline-flex h-9 items-center justify-center whitespace-nowrap rounded-xl border border-zinc-200 bg-transparent px-4 py-1 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100/70 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:bg-zinc-100/60 disabled:opacity-80 "
                                    >
                                        <Copy size="18" color="#000" />
                                        <span className="mr-1">
                                            Copy Script
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex flex-col gap-2 p-6 pt-3">
                            <div className="w-full items-center justify-between gap-5">
                                <div>
                                    <span className="font-medium text-zinc-950">
                                        Your chatbot&apos;s access is private, to deploy and share the chatbot, change the access to public.
                                    </span>
                                </div>
                                <div className="mt-5 flex flex-row justify-end">
                                    <button
                                        onClick={handlePublic}
                                        className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm text-white"
                                    >
                                        {isLoding ? (
                                            <>
                                                <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-blue-600"></div>
                                                <span className="ml-3">
                                                    {" "}
                                                    Updating...
                                                </span>
                                            </>
                                        ) : (
                                            <span>Make Public</span>
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
