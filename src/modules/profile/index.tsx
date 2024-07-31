"use client"
import LoaderLottie from "@/src/shared/components/common/loader";
import service from "@/src/shared/services/service";
import useUserStore from "@/src/shared/store/userStore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const Profile = () =>{
    const { register, handleSubmit, setValue,watch } = useForm();
    const { user, setUser } = useUserStore();
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingSumbit, setIsLoadingSumbit] = useState(false);
    const [isFormDirty, setIsFormDirty] = useState(false);


    const onSubmit = async (formData: any) => {
        setIsLoadingSumbit(true)
        console.log(formData)
        try {
            const response = await service.updateUser(
                formData,
            )
            toast.success("تغیرات شما موفق آمیز ذخیره شد")
            setUser(response.data)
        } catch (error) {
            toast.error("در بروز رسانی مشکلی پیش امده است !")
            console.error("Update failed:", error)
        } finally {
            setIsLoadingSumbit(false)
        }
      
    };
    const resetPassword = async (data: any) => {
        toast.error("در حال حاظر سرویس مورد نظر در دسترس نمی باشد.")
      
    }


    useEffect(() => {
        if(user){
            setValue("name", user.name);
            setValue("lastName",user.lastName);
            setValue("email",user.email);
            if (user.mobile){
              setValue("mobile",user.mobile);
            }
            if (user.organisation){
                setValue("organisation",user.organisation);
              }
            setIsLoading(false)
        }
            
      
        
    }, [user])

    const watchedFields = watch();

    useEffect(() => {
        const isDirty = Object.keys(watchedFields).some(
            key => watchedFields[key] !== user[key]
        );
        setIsFormDirty(isDirty);
    }, [watchedFields, user]);

    if (isLoading)
        return (
            <>
                <div className="fixed left-1/2 top-1/2 z-[1000] -translate-x-1/2 -translate-y-1/2 md:left-[44%]">
                    <div className="flex items-center gap-3">
                        <span>در حال بارگزاری اطلاعات ...</span>
                        <LoaderLottie />
                    </div>
                </div>
            </>
        )
    return(
        <>
            <div className="container mx-auto mb-40  mt-24 h-full px-4">
               <div className="mt-6 rounded-2xl bg-white px-8 py-6 shadow-[0_23px_40px_-20px_rgba(0,0,0,0.08)] md:min-h-[450px]">
                  <div className="flex w-full justify-center items-center">
                  <img
                                className="h-16 w-16 cursor-pointer rounded-full "
                                src={user.photoUrl ? user.photoUrl :"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
                                alt="Bordered avatar"
                            />

                  </div>
                  <div className="mt-5 md:mt-2">
                    <div>
                      <span className="text-2xl">
                        مشخصات فردی 
                      </span>
                      <span className="text-[12px] block text-gray-400 mt-1">
                        مشخصات فردی خود را میتوانید تغییر دهید.
                      </span>
                    </div>
                    <hr className="mt-5 border-gray-400"/>
                  </div>
                  <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                     <div className="pb-8 w-full md:w-1/2">
                                <label className="block text-sm font-medium text-zinc-700">
                                     نام   :{" "}
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register("name")}
                                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="سلام ...."
                                        type="text"
                                    />
                                </div>
                    </div>
                    <div className="pb-8 w-full md:w-1/2">
                                <label className="block text-sm font-medium text-zinc-700">
                                     نام  خانوادگی :{" "}
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register("lastName")}
                                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="سلام ...."
                                        type="text"
                                    />
                                </div>
                    </div>
                    <div className="pb-8 w-full md:w-1/2">
                                <label className="block text-sm font-medium text-zinc-700">
                                     موبایل:{" "}
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register("mobileNumber")}
                                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="091211111111"
                                        type="text"
                                    />
                                </div>
                    </div>
                    <div className="pb-8 w-full md:w-1/2">
                                <label className="block text-sm font-medium text-zinc-700">
                                     ایمیل:{" "}
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register("email")}
                                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="سلام ...."
                                        type="text"
                                        disabled
                                    />
                                </div>
                    </div>
                    <div className="pb-8 w-full md:w-1/2">
                                <label className="block text-sm font-medium text-zinc-700">
                                     سازمان:{" "}
                                </label>
                                <div className="mt-2">
                                    <input
                                        {...register("organisation")}
                                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="همیارچت"
                                        type="text"
                                    />
                                </div>
                    </div>
                    <div className="flex justify-end">
                <button
                    type="submit"
                    disabled={!isFormDirty || isLoadingSumbit}
                    className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm text-white ${
                        !isFormDirty || isLoadingSumbit ? 'bg-blue-600 opacity-50 cursor-not-allowed' : 'bg-blue-600'
                    }`}
                >
                    {isLoadingSumbit ? (
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
                  <div>
                    <hr className="mt-6 text-gray-400"/>
                    <div className="flex justify-between mt-4 items-end">
                        <div>
                            <span className="text-2xl text-red-600">
                               رمز عبور
                              </span>
                              <span className="text-[12px] block text-gray-400 mt-1">
                              رمز عبور خود را میتوانید تغییر دهید.
                              </span>

                        </div>
                        <button
                    type="button"
                    onClick={resetPassword}
                    className="flex items-center gap-2 rounded-md bg-red-600 px-4 py-2 text-sm text-white"
                >
                 
                        <span>تغییر رمز عبور</span>
                    
                </button>

                    </div>
                  
                  </div>
                  
               </div>


            </div>
        </>

    ) 

};
export default Profile;