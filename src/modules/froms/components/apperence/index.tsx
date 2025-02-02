import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import service from "@/src/shared/services/service"
import { toast } from "sonner"
import FormTemplate from "./components/formTemplate"
import useStoreFromsData from "../../hooks/loadFormData"
import useStoreFormConfig from "./hooks/useFormData"
import { Warning2 } from "iconsax-react"

const Apperence = () => {
    const { register, handleSubmit, setValue } = useForm();
    const { data, setData } = useStoreFromsData();
    const {fromConfig, updateFormConfig} = useStoreFormConfig();
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        updateFormConfig({ [name]: value });
    };

    const handleChekBoxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
    
        // Temporarily update the config to check if all switches will be off
        const updatedConfig = { ...fromConfig, [name]: checked };
    
        // Check if at least one switch is still on
        const isAtLeastOneActive = Object.keys(updatedConfig).some((key) => {
            return key.includes("_active") && updatedConfig[key] === true;
        });
    
        if (!isAtLeastOneActive) {
            toast.error("At least one option must be active!");
            return;
        }
    
        // Update form config if valid
        updateFormConfig({ [name]: checked });
    };

    const onSubmit = async () => {

        const dataFormUpdated = {
            configs: fromConfig
        };
        
        setIsLoading(true);
        try {
            const response = await service.updateForm(
                data.forms_id,
                dataFormUpdated,
            );
            toast.success("Your changes have been successfully saved.");
            setData(response.data);
        } catch (error) {
            toast.error("There was an issue with the update!");
            console.error("Update failed:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (data) {
            updateFormConfig(data?.configs);
        }
    }, [data]);

    return (
        <div>
            <div className="p-5">
                <h4 className="bg-yellow-100 text-yellow-800 mb-8 text-xs font-medium  p-2 rounded-lg flex items-center gap-2">
                    <Warning2 size="20" color="#FF8A65"/>
                    Attention: This is applied when embedded in a website.
                </h4>
                <div className="flex flex-col justify-between lg:flex-row">
                    <div className="w-2/2 flex-1 pb-5 lg:w-1/2">
                        <div style={{borderBottom: "1px solid #8080801c"}}>
                            <p className="pb-4 font-bold">Form Details:</p>
                            <div className="pb-8">
                                <label className="block text-sm font-medium text-zinc-700">
                                    Title:{" "}
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
                                    Description:{" "}
                                </label>
                                <div className="mt-1">
                                    <textarea
                                        name="description"
                                        rows={2}
                                        value={fromConfig.description}
                                        onChange={handleInputChange}
                                        placeholder="How can I get information about prices?"
                                        className="panel_custom_scrollbar w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3 text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        <div style={{borderBottom: "1px solid #8080801c"}}>
                            <p className="pb-4 pt-4 font-bold">Form Fields:</p>
                            <div className={fromConfig.name_active ? "pb-4" : "pb-8"}>
                                <div className="flex items-center gap-2 justify-between">
                                    <label className=" text-[16px] font-medium text-zinc-700">
                                        Name{" "}
                                    </label>
                                    <label className="cursor-pointer/ inline-flex items-center">
                                        <input
                                            name="name_active"
                                            checked={fromConfig.name_active}
                                            onChange={handleChekBoxInputChange}
                                            type="checkbox"
                                            className="peer sr-only"
                                        />
                                        <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                                    </label>
                                </div>
                            </div>
                            {fromConfig.name_active && (
                                <>
                                  <div className="pb-8">
                                        <label className="block text-sm font-medium text-zinc-700">
                                               Name input message:{" "}
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                name="name_placeholder"
                                                value={fromConfig.name_placeholder}
                                                onChange={handleInputChange}
                                                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                                placeholder="Hello ...."
                                                type="text"
                                            />
                                        </div>
                                  </div>
                                </>
                            )}
                            <div className={fromConfig.email_active ? "pb-4" : "pb-8"}>
                                <div className="flex items-center gap-2 justify-between">
                                    <label className=" text-[16px] font-medium text-zinc-700">
                                        Email{" "}
                                    </label>
                                    <label className="cursor-pointer/ inline-flex items-center">
                                        <input
                                            name="email_active"
                                            checked={fromConfig.email_active}
                                            onChange={handleChekBoxInputChange}
                                            type="checkbox"
                                            className="peer sr-only"
                                        />
                                        <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                                    </label>
                                </div>
                            </div>
                            {fromConfig.email_active && (
                                <>
                                  <div className="pb-8">
                                        <label className="block text-sm font-medium text-zinc-700">
                                               Email input message:{" "}
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                name="email_placeholder"
                                                value={fromConfig.email_placeholder}
                                                onChange={handleInputChange}
                                                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                                placeholder="Hello ...."
                                                type="text"
                                            />
                                        </div>
                                  </div>
                                </>
                            )}

                            <div className={fromConfig.phone_active ? "pb-4" : "pb-8"}>
                                <div className="flex items-center gap-2 justify-between">
                                    <label className=" text-[16px] font-medium text-zinc-700">
                                        Phone number{" "}
                                    </label>
                                    <label className="cursor-pointer/ inline-flex items-center">
                                        <input
                                            name="phone_active"
                                            checked={fromConfig.phone_active}
                                            onChange={handleChekBoxInputChange}
                                            type="checkbox"
                                            className="peer sr-only"
                                        />
                                        <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
                                    </label>
                                </div>
                            </div>
                            {fromConfig.phone_active && (
                                <>
                                  <div className="pb-8">
                                        <label className="block text-sm font-medium text-zinc-700">
                                               Phone input message:{" "}
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                name="phone_placeholder"
                                                value={fromConfig.phone_placeholder}
                                                onChange={handleInputChange}
                                                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                                placeholder="Hello ...."
                                                type="text"
                                            />
                                        </div>
                                  </div>
                                </>
                            )}
                        </div>

                        <div>
                            <p className="pb-4 pt-4 font-bold">Form Final Page:</p>
                            <div className="pb-8">
                                <label className="block text-sm font-medium text-zinc-700">
                                    Final message:{" "}
                                </label>
                                <div className="mt-1">
                                    <input
                                        name="message_end"
                                        value={fromConfig.message_end}
                                        onChange={handleInputChange}
                                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="example.com"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="pb-8">
                                <label className="block text-sm font-medium text-zinc-700">
                                     Final message path:{" "}
                                </label>
                                <div className="mt-1">
                                    <input
                                        name="message_url"
                                        value={fromConfig.message_url}
                                        onChange={handleInputChange}
                                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="example.com"
                                        type="text"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-2/2 md:mr-10 flex-1 lg:w-1/2 top-4 flex justify-center items-start" style={{borderRight: "1px solid #8080801c"}}>
                        <FormTemplate  config={fromConfig}/>
                    </div>
                </div>
            </div>
            <div className="flex justify-end  px-5 py-3">
                <button
                   onClick={onSubmit}
                    className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm text-white"
                >
                    {isLoading ? (
                        <>
                            <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-blue-600"></div>
                            <span className="ml-3">Updating ...</span>
                        </>
                    ) : (
                        <span>Save</span>
                    )}
                </button>
            </div>
        </div>
    )
}

export default Apperence
