"use client"
import InviteFriends from "@/src/shared/components/common/inviteFriends"
import { ElementPlus, SmsStar } from "iconsax-react"
import { toast } from "sonner"

const Invite = () => {
    const sendEmail = async (data: any) => {
        toast.error("در حال حاظر سرویس مورد نظر در دسترس نمی باشد.")
    }
    return (
        <>
            <div className="container mx-auto mb-40  mt-24 h-full px-4">
                <div className="mt-6 rounded-2xl bg-white px-8 pb-12 pt-1 shadow-[0_23px_40px_-20px_rgba(0,0,0,0.08)] md:min-h-[450px]">
                    <InviteFriends />
                    <div className="text-center">
                        <p className="mb-3 text-3xl md:text-5xl">
                            دوستانت را دعوت کن !
                        </p>
                        <span className="text-sm text-gray-500">
                            می توانید افراد را به همیارچت دعوت کنید تا دوستانتان
                            بتوانند از وب سایت ما استفاده کنند. نمودارهای خود را
                            ایجاد کرده و داده های آنها را به نمودار تبدیل کنید.
                        </span>
                    </div>
                    <div className="mt-8  flex flex-col items-center justify-center gap-4">
                        <div className="w-full md:w-1/2">
                            <input
                                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="example@gmail.com"
                                type="text"
                            />
                        </div>
                        <div className="flex w-full justify-center md:w-1/2">
                            <button
                                onClick={sendEmail}
                                className="rounded-2xl bg-[#1D4ED8] p-3 px-[40px]  text-[12px] text-slate-50 md:py-[10px] md:text-base "
                            >
                                <div className=" flex items-center justify-center gap-2">
                                    <SmsStar size="25" color="#FFf" />
                                    <span> ارسال ایمیل</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Invite
