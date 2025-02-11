import { useForm } from "react-hook-form"
import useStoreConfig from "../../hooks/loadConfig"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import service from "@/src/shared/services/service"

const Security = () => {
    const { register, handleSubmit, setValue } = useForm()
    const { data, setData } = useStoreConfig()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = async (formData: any) => {
        setIsLoading(true)
        formData = {
            ...formData,
            status_bot: formData.status_bot == true ? "disable" : "enable",
            access_bot: formData.access_bot == "private" ? "private" : "general",
        }
        try {
            const response = await service.updateSecurityConfig(
                data.bot_id,
                formData,
            )
            toast.success("Your changes were successfully saved")
            setData(response.data)
        } catch (error) {
            toast.error("An issue occurred during the update!")
            console.error("Update failed:", error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (data) {
            setValue(
                "access_bot",
                data?.security_configs?.access_bot == "private"
                    ? "private"
                    : "public",
            )
            setValue(
                "status_bot",
                data?.security_configs?.status_bot == "enable" ? false : true,
            )
            setValue("rate_limit_msg", data?.security_configs?.rate_limit_msg)
            setValue("rate_limit_time", data?.security_configs?.rate_limit_time)
            setValue(
                "rate_limit_msg_show",
                data?.security_configs?.rate_limit_msg_show,
            )
        }
    }, [data, setValue])
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="p-5">
                    <div className="pb-8">
                        <label className="mb-1 block text-sm font-medium text-zinc-700">
                            Access Level:
                        </label>
                        <select
                            {...register("access_bot")}
                            id="countries"
                            className="block w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 md:w-1/4"
                        >
                            <option>public</option>
                            <option>private</option>
                        </select>

                        <p className="mt-2 text-sm text-zinc-500">
                            'private': No one can access your chatbot except you (your user account)
                        </p>
                        <p className="mt-2 text-sm text-zinc-500">
                            'public': Others can interact with your chatbot if you send them the link. You can also embed it on your website so that your website visitors can use it.
                        </p>
                    </div>
                    <div className="pb-8">
                        <div>
                            <label className="block pb-2 text-sm font-medium text-zinc-700">
                                Disable Chatbot:
                            </label>
                            <label className="cursor-pointer/ inline-flex items-center">
                                <input
                                    {...register("status_bot")}
                                    type="checkbox"
                                    className="peer sr-only"
                                />
                                <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <label className="block text-sm font-medium text-zinc-700">
                                Rate Limiting:
                            </label>
                            <button className="focus-visible:ring-ring inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-zinc-100 px-4 py-1 text-sm font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-200/90 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80">
                                Reset
                            </button>
                        </div>
                        <p className="mt-2 text-sm text-zinc-500">
                            Limiting the number of messages sent from a device in the iFrame and chat bubble (this limit is not applied to you on chatsys.co, only on your website for your users to prevent abuse).
                        </p>
                        <div className="mt-1 text-sm text-zinc-700">
                            Limited to only{" "}
                            <input
                                {...register("rate_limit_msg")}
                                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring inline h-8 w-20 rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                type="number"
                                name="rate_limit_msg"
                            />{" "}
                            messages every{" "}
                            <input
                                {...register("rate_limit_time")}
                                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring inline h-8 w-20 rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                type="number"
                                name="rate_limit_time"
                            />{" "}
                            seconds.
                        </div>
                        <div className="my-4 text-sm text-zinc-700">
                            Show a message when the limit is reached:
                            <input
                                {...register("rate_limit_msg_show")}
                                className=" mt-2 block w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-blue-600 focus:bg-white focus:outline-none"
                                id="inline-full-name"
                                type="text"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end  px-5 py-3">
                    <button className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm text-white">
                        {isLoading ? (
                            <>
                                <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-blue-600"></div>
                                <span className="ml-3"> Updating ...</span>
                            </>
                        ) : (
                            <span>Save</span>
                        )}
                    </button>
                </div>
            </form>
        </>
    )
}
export default Security