"use client"

import LoaderLottie from "@/src/shared/components/common/loader";
import { useEffect, useRef, useState } from "react";
import { mockData } from "./data";
import { formatDistanceToNow } from "date-fns-jalali"
import { faIR } from "date-fns/locale"
import { Edit, ExportCurve, Trash } from "iconsax-react";
import Pagination from "../myBots/components/pagination";



const Mycontact=()=>{
      const [isLoading, setLoading] = useState(false);
      const [currentPage, setCurrentPage] = useState(1);
      const [totalPages, setTotalPages] = useState(1);
      const [constactList, setContactList] = useState([]);
      const isInitialLoad = useRef(true)




        useEffect(() => {
              const fetchContactList = async () => {
                setLoading(true)
                  try {
                      const response: any = await getBotList({
                          type: "website",
                          itemsPerPage: 10,
                          page: currentPage,
                          search: debouncedSearchText,
                      })
                      setContactList(response.data.bots)
                      setTotalPages(response.data.totalPages)
                   
                  } catch (err) {
                      console.log(err)
                  } finally {
                    setLoading(false)
                      
                  }
              }
      
              fetchContactList()
          }, [ currentPage])




     const formatRelativeTime = (dateString: any) => {
              const date = new Date(dateString)
              return formatDistanceToNow(date, { locale: faIR })
      };
      const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page)
        }
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
                      <div className="pl-6 pr-6">
                      <label className="text-md mb-2 block  text-zinc-700">
                                    {" "}
                                    جستجوی مخاطب :
                                                       </label>
                                                       <div className="flex justify-between gap-3">
                                                       <form className="w-full">
                       
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                                <svg
                                    className="h-4 w-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                className="block w-full rounded-lg border
                                 border-gray-300 bg-white px-4 py-[10px] ps-10 text-sm 
                                 text-gray-900 focus:border-blue-50
                                  focus:ring-blue-500"
                                placeholder="ایمیل یا شماره تلفن مخاطب را جستجو کنید ..."
                                required
                            />
                        </div>
                    </form>
                                                      
                                                        <button
                                                            // onClick={() => handleDownload(botId)}
                                                            className="flex items-center justify-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700"
                                                        >
                                                            <span>خروجی </span>
                                                            <ExportCurve size="20" color="#FFff" />
                                                        </button>
                                                    </div>
                      </div>
                    <div className=" pl-6 pr-6 relative overflow-x-auto shadow-md sm:rounded-lg mt-6 pb-8">
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
                                {constactList.map((contact:any)=>{ 
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
                        <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                                title={"مخاطب"}
                            />
                    </div>
           </div>
         </div>
        </>
    )    
};

export default Mycontact;