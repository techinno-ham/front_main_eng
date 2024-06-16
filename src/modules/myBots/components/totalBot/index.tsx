import Link from "next/link";

const TotalBots= ()=>{
    return (
        <>
        <div className="bg-white h-full w-full rounded-2xl border p-3">
            <div className="flex justify-between items-center h-full w-full ">
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center">
                        <img src="/icons/chart.svg" alt="logout" />
                    </div>
                    <div className="flex flex-col">
                      <span>
                           <span className="text-[#0771ED] text-[24px]">
                                    4
                           </span>
                           <span className="text-[#0771ED] text-[24px] mr-2">
                                  چت بات 
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
              backgroundColor: "rgba(7, 113, 237, 0.16)",
              borderRadius: "16px",
              padding: "10px 13px",
            }}
          >
            <span style={{ fontSize: "20px", color: "#0771ED" }}>کل</span>
          </div>

            </div>

        </div>

        </>
    )
};
export default TotalBots;