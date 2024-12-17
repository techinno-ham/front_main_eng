"use client"

import LoaderLottie from "@/src/shared/components/common/loader";
import { useState } from "react";
import { mockData } from "./data";
import { formatDistanceToNow } from "date-fns-jalali"
import { faIR } from "date-fns/locale"
import { Edit, Trash } from "iconsax-react";



const Mycontact=()=>{
      const [isLoading, setLoading] = useState(false);



     const formatRelativeTime = (dateString: any) => {
              const date = new Date(dateString)
              return formatDistanceToNow(date, { locale: faIR })
          }
    

    if (isLoading)
        return (
            <>
                <div className="mx-auto flex h-[90vh] w-[95%] items-center justify-center md:mt-[90px] ">
                    <div className="flex items-center gap-3">
                        <span>در حال بارگزاری اطلاعات ...</span>
                        <LoaderLottie />
                    </div>
                </div>
            </>
        )

    return (
        <>
         <div className="mx-auto mb-28 mt-[120px] w-[95%] md:mb-4 md:mt-[100px]">
           <div className=" relative w-[100%] rounded-2xl bg-white  shadow-[0_23px_40px_-20px_rgba(0,0,0,0.08)] ">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h3 className="text-2xl font-semibold leading-none tracking-tight">
                        مخاطبین
                        </h3>
                    </div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                         ایمیل
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        شماره تلفن
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        نام یا نام خانوادگی
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        تاریخ ایجاد
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        عملیات ها
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {mockData.map((contact:any)=>{ 
                                    return(
                    
                                     <tr  key={contact?.contact_id} className="bg-white border-b ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                             {contact?.email}
                                        </th>
                                        <td className="px-6 py-4">
                                            {contact?.phone}
                                        </td>
                                        <td className="px-6 py-4"> 
                                            {contact?.name}
                                        </td>
                                        <td className="px-6 py-4">
                                             {formatRelativeTime(contact.created_at)}
                                        </td>
                                        <td className="px-6 py-4">
                                                <div className="flex">
                                                  <div className="relative group mx-2">
                                                    <button  className="border border-gray-500 rounded p-1 flex items-center">
                                                        <Edit size={20} />
                                                    </button>
                                                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded px-2 py-1">
                                                     ویرایش
                                                    </span>
                                                  </div>
                                                  <div className="relative group">
                                                      <button   className="border border-red-500 rounded p-1 flex items-center">
                                                      <Trash size={20} color="red" />
                                                      </button>
                                                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded px-2 py-1">
                                                            حذف
                                                       </span>
                                                 </div>
                                                </div>
                                        </td>
                                     </tr>
                                    )
                                   
                                })}
                               
                              
                            </tbody>
                        </table>
                    </div>
           </div>
         </div>
        </>
    )    
};

export default Mycontact;