import { useForm } from "react-hook-form"
import useStoreConfig from "../../hooks/loadConfig"
import { useEffect, useState } from "react"
import service from "@/src/shared/services/service"
import { toast } from "sonner"
import { roles } from "./store"

const Model = () => {
    const { register, handleSubmit, setValue } = useForm()
    const { data, setData } = useStoreConfig()
    const [isLoading, setIsLoading] = useState(false)
    const [creativity, setCreativity] = useState(0)
    const [Instructions, setInstructions] = useState("")
    const [selectedOption, setSelectedOption] = useState("دستورالعمل سفارشی")

    const onSubmit = async (dataForm: any) => {
        setIsLoading(true)
        try {
            const formData = {
                ...dataForm,
                Temperature: creativity,
                type_instructions: selectedOption,
                Instructions: Instructions,
            }
            const response = await service.updateModelConfig(
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

    const handleChangeInstructions = (e: any) => {
        const newText = e.target.value
        setSelectedOption("دستورالعمل سفارشی")
        setInstructions(newText)
    }

    const handleChangeselectedOption = (event: any) => {
        setSelectedOption(event.target.value)
        const text = roles[event.target.value]
        setInstructions(text)
    }
    useEffect(() => {
        if (data) {
            setValue("model_name", data?.model_configs?.model_name)
            setCreativity(data?.model_configs?.Temperature)
            setSelectedOption(data?.model_configs?.type_instructions)
            setInstructions(data?.model_configs?.Instructions)
        }
    }, [data, setValue])

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="p-5">
                    <div className="pb-8">
                        <label className="mb-2 block text-sm font-medium text-zinc-700">
                            مدل :{" "}
                            <div className="mb-1 ml-1 inline-flex items-center rounded-md border border-transparent bg-violet-100 px-2.5 py-0.5 text-xs font-semibold text-blue-500 transition-colors hover:bg-violet-100/80 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 ">
                                {" "}
                                gpt-4o فعال می باشد.
                            </div>
                        </label>
                        <select
                            {...register("model_name")}
                            id="countries"
                            className="block w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 md:w-1/4"
                        >
                            <option>GPT-4o</option>
                            <option>GPT-4-turbo</option>
                            <option>GPT-4</option>
                            <option>GPT-3.5Turbo</option>
                        </select>
                        <p className="mt-2 text-sm font-semibold text-zinc-700">
                            gpt-4o پیشرفته‌ترین مدل OpenAI فعال است.
                        </p>
                        <p className="mt-2 text-sm text-zinc-500">
                            gpt-4o: 1 credit per response
                        </p>
                        <p className="mt-2 text-sm text-zinc-500">
                            gpt-4-turbo: 10 credits per response
                        </p>
                        <p className="mt-2 text-sm text-zinc-500">
                            gpt-4: 20 credits per response
                        </p>
                        <p className="mt-2 text-sm text-zinc-500">
                            gpt-3.5-turbo: 1 credit per response
                        </p>
                    </div>
                    <div className="pb-8">
                        <label className="mb-2 block text-sm font-medium text-zinc-700">
                            دستورالعمل ها چت بات :
                        </label>
                        <select
                            value={selectedOption} // Set the selected value from state
                            onChange={handleChangeselectedOption}
                            className="mb-2 block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                        >
                            <option value="دستورالعمل سفارشی">
                                📜 دستورالعمل سفارشی
                            </option>
                            <option value="چت‌ بات هوش مصنوعی">
                                🤖 چت‌ بات هوش مصنوعی
                            </option>
                            <option value="نماینده پشتیبانی مشتری">
                                👩‍💻 نماینده پشتیبانی مشتری
                            </option>
                            <option value="نماینده فروش">
                                💼 نماینده فروش
                            </option>
                            <option value="مدرس زبان">📚 مدرس زبان</option>
                            <option value="مربی زندگی">🌟 مربی زندگی</option>
                            <option value="مشاور مالی">💰 مشاور مالی</option>
                            <option value="راهنمای سفر">✈️ راهنمای سفر</option>
                            <option value="توسعه‌دهنده نرم‌افزار">
                                💻 توسعه‌دهنده نرم‌افزار
                            </option>
                            <option value="آشپز حرفه‌ای">
                                🍳 آشپز حرفه‌ای
                            </option>
                            <option value="روانشناس">🧠 روانشناس</option>
                            <option value="مربی تناسب اندام">
                                🏋️ مربی تناسب اندام
                            </option>
                        </select>

                        <div className="h-full w-full">
                            <textarea
                                className="panel_custom_scrollbar h-full w-full resize-none rounded-md border border-gray-300 p-4"
                                placeholder="میتوانید اینجا بنویسید تا من یاد بگیرم ..."
                                rows={12}
                                onChange={handleChangeInstructions}
                                value={Instructions}
                                dir="ltr"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-zinc-700">
                            میزان خلاقیت :
                        </label>
                        <p className="text-sm">{creativity}</p>
                        <input
                            id="minmax-range"
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={creativity}
                            onChange={(e: any) => setCreativity(e.target.value)}
                            // {...register('creativity')}
                            className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 "
                        />
                        <div className="flex justify-between">
                            <p className="text-xs text-zinc-700">ثابت بودن</p>
                            <p className="text-xs text-zinc-700">خلاقیت</p>
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
        </>
    )
}
export default Model
