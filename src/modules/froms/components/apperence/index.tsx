import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import service from "@/src/shared/services/service"
import { toast } from "sonner"
import FormTemplate from "./components/formTemplate"
import useStoreFromsData from "../../hooks/loadFormData"
import useStoreFormConfig from "./hooks/useFormData"

const Apperence = () => {
    const { register, handleSubmit, setValue } = useForm();
    const { data, setData } = useStoreFromsData();
    const {fromConfig,updateFormConfig}=useStoreFormConfig();
    const [isLoading, setIsLoading] = useState(false);



    const handleInputChange = (e: any) => {
        const { name, value } = e.target
        updateFormConfig({ [name]: value })
    }

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

    useEffect(() => {
        if (data) {
            updateFormConfig(data?.configs)
        }
    }, [data]);


    return (
       <div>
        <div className="p-5">
          <h4 className="mb-8 text-sm text-zinc-600">
                        توجه: زمانی که در یک وب سایت تعبیه شده است اعمال می شود
          </h4>
          <div className="flex flex-col justify-between lg:flex-row">
               <div className="w-2/2 flex-1 pb-5 lg:w-1/2">
                   <div>
                   <span>جزییات فرم  :</span>
                            <div className="pb-8">
                                <label className="block text-sm font-medium text-zinc-700">
                                    عنوان  :{" "}
                                </label>
                                <div className="mt-1">
                                    <input
                                        name="title"
                                        value={fromConfig.title}
                                        onChange={handleInputChange}
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
                                        name="description"
                                        rows={2}
                                        value={fromConfig.description}
                                        onChange={handleInputChange}
                                        placeholder="چطوری از قیمت ها مطلع بشم؟"
                                        className="panel_custom_scrollbar w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3 text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                                    />
            
                                </div>
                            </div>
                   </div>

                   <div>
                   <span>فیلد های فرم :</span>
                   <div className="pb-8">
                        <div className="flex items-center gap-2">
                            <label className=" text-lg font-medium text-zinc-700">
                                ایمیل {" "}
                            </label>
                            <label className="cursor-pointer/ inline-flex items-center">
                                <input
                                    name="email_active"
                                    value={"true"}
                                    onChange={handleInputChange}
                                    type="checkbox"
                                    className="peer sr-only"
                                />
                                <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                            </label>
                        </div>
                    </div>
                    <div className="pb-8">
                                <label className="block text-sm font-medium text-zinc-700">
                                       پیام داخل ورودی ایمیل :{" "}
                                </label>
                                <div className="mt-1">
                                    <input
                                        name="inputPlaceholder"
                                        // value={chatConfig.inputPlaceholder}
                                        // onChange={handleInputChange}
                                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="سلام ...."
                                        type="text"
                                    />
                                </div>
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
