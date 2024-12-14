import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import service from "@/src/shared/services/service"
import { toast } from "sonner"
import FormTemplate from "./components/formTemplate"

const Apperence = () => {
    const { register, handleSubmit, setValue } = useForm();
    // const { data, setData } = useStoreConfig()
    const [isLoading, setIsLoading] = useState(false)

    // const onSubmit = async (formData: any) => {
    //     setIsLoading(true)
    //     try {
    //         const response = await service.updateGeneralConfig(
    //             data.bot_id,
    //             formData,
    //         )
    //         toast.success("تغیرات شما موفق آمیز ذخیره شد")
    //         setData(response.data)
    //     } catch (error) {
    //         toast.error("در بروز رسانی مشکلی پیش امده است !")
    //         console.error("Update failed:", error)
    //     } finally {
    //         setIsLoading(false)
    //     }
    // }

    // useEffect(() => {
    //     if (data) {
    //         setValue("name", data.name)
    //     }
    // }, [data, setValue]);


    // const handleCopyId = () => {
    //     navigator.clipboard
    //         .writeText(data?.bot_id)
    //         .then(() => {
    //             toast.success("کد مورد نظر شما کپی شد.")
    //         })
    //         .catch((err) => {
    //             toast.error("کد مورد نظر شما کپی نشد.")
    //         })
    // }

    return (
       <div>
        <div className="p-5">
          <h4 className="mb-8 text-sm text-zinc-600">
                        توجه: زمانی که در یک وب سایت تعبیه شده است اعمال می شود
          </h4>
          <div className="flex flex-col justify-between lg:flex-row">
               <div className="w-2/2 flex-1 pb-5 lg:w-1/2">
                            <div className="pb-8">
                                <label className="block text-sm font-medium text-zinc-700">
                                    عنوان  :{" "}
                                </label>
                                <div className="mt-1">
                                    <input
                                        name="footer"
                                        // value={chatConfig.footer}
                                        // onChange={handleInputChange}
                                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="example.com"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="pb-8">
                                <label className="block text-sm font-medium text-zinc-700">
                                توضیحات  :
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        name="suggestedMessages"
                                        rows={2}
                                        // value={chatConfig.suggestedMessages.join(
                                        //     "\n",
                                        // )}
                                        // onChange={(e) =>
                                        //     updateChatConfig({
                                        //         suggestedMessages:
                                        //             e.target.value.split("\n"),
                                        //     })
                                        // }
                                        placeholder="چطوری از قیمت ها مطلع بشم؟
                                    چطور ثبتنام کنم؟"
                                        className="panel_custom_scrollbar w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3 text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                                    />
            
                                </div>
                            </div>
               </div>
               <div className="w-2/2 md:mr-10 flex-1 lg:w-1/2 sticky top-4">
                <FormTemplate />
               </div>
          </div>
        </div>
       </div>
    )
}

export default Apperence
