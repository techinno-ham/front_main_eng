"use client"
import InviteFriends from "@/src/shared/components/common/inviteFriends";

const Invite = () =>{
    return (
        <>
        <div className="container mx-auto mb-40  mt-24 h-full px-4">
          <div className="mt-6 rounded-2xl bg-white px-8 pt-1 pb-7 shadow-[0_23px_40px_-20px_rgba(0,0,0,0.08)] md:min-h-[450px]">
          <InviteFriends/>
           <div className="text-center">
             <p className="text-3xl md:text-5xl">
             دوستانت را دعوت کن !
             </p>
             <span className="text-sm text-gray-500 mt-3">
             می توانید افراد را به همیار چت دعوت کنید تا دوستانتان بتوانند از وب سایت ما استفاده کنند. نمودارهای خود را ایجاد کرده و داده های آنها را به نمودار تبدیل کنید.
             </span>

           </div>
           <div className="flex mt-4 justify-center">
                <div className="mt-2 w-full md:w-1/2">
                                    <input
                                        // {...register("mobileNumber")}
                                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="example@gmail.com"
                                        type="text"
                                    />
                </div>

           </div>
          </div>
        </div>
        </>
    )

};
export default Invite;