import Link from "next/link";

const PremiumBot= ()=>{
    return (
        <>
        <div className="bg-white h-full w-full rounded-2xl border p-3">
            <div className="flex justify-between items-center h-full w-full ">
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center">
                    <img src="/icons/ranking.svg" alt="logout" />
                    </div>
                    <div className="flex flex-col">
                      <span>
                           <span className="text-[#ED8307] text-[24px]">
                                    4 / 0
                           </span>
                           <span className="text-[#ED8307] text-[24px] mr-2">
                            چت بات حرفه ای 
                             </span>
                      </span>
                      <span style={{ fontSize: "12px", color: "gray" }}>
                          اگر میخواهید این عدد را بیشتر کنید{" "}
                     <Link href={"/"}>
                       <span className="text-[#0771ED] cursor-pointer">کاربری پرو</span>
                     </Link>
              </span>
                        

                    </div>

                </div>
                <div
            style={{
              backgroundColor: "rgba(237, 131, 7, 0.16)",
              borderRadius: "16px",
              padding: "10px 13px",
            }}
          >
            <span style={{ fontSize: "20px", color: "#ED8307" }}>حرفه ای</span>
          </div>

            </div>

        </div>

        </>
    )
};
export default PremiumBot;