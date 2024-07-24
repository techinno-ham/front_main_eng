import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import useStoreConfig from "../../hooks/loadConfig"
import service from "@/src/shared/services/service"
import { toast } from "sonner"

const General = () => {
    const { register, handleSubmit, setValue } = useForm()
    const { data, setData } = useStoreConfig()
    const [isLoading, setIsLoading] = useState(false);
    

    const onSubmit = async (formData: any) => {
        setIsLoading(true)
        try {
            const response = await service.updateGeneralConfig(
                data.bot_id,
                formData,
            )
            toast.success("تغیرات شما موفق آمیز ذخیره شد")
            setData(response.data)
        } catch (error) {
            toast.error("در بروز رسانی مشکلی پیش امده است !")
            console.error("Update failed:", error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (data) {
            setValue("name", data.name)
        }
    }, [data, setValue])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-5">
                <div className="pb-8">
                    <label className="block text-sm font-medium text-zinc-700">
                        چت بات آیدی :
                    </label>
                    <div className="mt-1 flex items-center gap-2 space-x-4">
                        <div className="font-semibold">{data?.bot_id}</div>
                        <button
                            type="button"
                            className="focus-visible:ring-ring inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md border border-zinc-200 bg-transparent px-2 py-1 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-80 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-5 w-5"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="pb-8">
                    <label className="block text-sm font-medium text-zinc-700">
                        تعداد کارکترها :
                    </label>
                    <div className="mt-1 font-semibold">15,380</div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-zinc-700">
                        نام چت بات :
                    </label>
                    <div className="mt-2 ">
                        <input
                            {...register("name")}
                            className=" w-full appearance-none rounded border-2 border-gray-200 bg-gray-200 px-4 py-2 leading-tight text-gray-700 focus:border-blue-600 focus:bg-white focus:outline-none"
                            id="inline-full-name"
                            type="text"
                            // defaultValue={name}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-end  px-5 py-3">
                <button
                    type="submit"
                    className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm text-white"
                >
                    {isLoading ? (
                        <>
                            <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-blue-600"></div>
                            <span className="ml-3"> بروزرسانی ...</span>
                        </>
                    ) : (
                        <span>ذخیره</span>
                    )}
                </button>
            </div>
        </form>
    )
}

export default General
