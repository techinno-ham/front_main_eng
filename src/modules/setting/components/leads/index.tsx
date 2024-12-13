import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import useStoreConfig from "../../hooks/loadConfig"
import service from "@/src/shared/services/service"
import { toast } from "sonner"
import { formatDistanceToNow } from "date-fns-jalali"
import { faIR } from "date-fns/locale"
import { mockData } from "./data"
import { DocumentCopy, Edit, ToggleOffCircle, ToggleOnCircle, Trash } from "iconsax-react"
import { usePathname } from "next/navigation"
import { useRouter } from "nextjs-toploader/app"


const Leads = () => {
    const [list, setList] = useState<any>(mockData);
    const [isLoading, setIsLoading] = useState(false);
    const { data, setData } = useStoreConfig();
    const pathname = usePathname();
    const router=useRouter();

    const formatRelativeTime = (dateString: any) => {
        const date = new Date(dateString)
        return formatDistanceToNow(date, { locale: faIR })
    };

  const handleDeleteForm=async (formId:string)=>{
    const loadingToastId = toast.loading("در حال حذف  فرم ...");
    try {
        const result = await service.deleteForm(formId); 
        toast.success("فرم با موفقیت حذف شد");
        setList((prevList:any) => prevList.filter((form:any) => form.forms_id !== formId));
    } catch (error) {
        toast.error(`مشکلی در حدف فرم وجود دارد`)
    } finally {
        toast.dismiss(loadingToastId);
    }

  };
  const handleEditForm=(formId:string)=>{
    const newPath = `${pathname}/form/${formId}`;
    router.push(newPath);
  };
  const handleActiveForm=async ()=>{

  };
    useEffect(() => {
        if (data) {
            setList(data.forms)
        }
    }, [data])

    return (
        <>
    
        

<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                     عنوان
                </th>
                <th scope="col" className="px-6 py-3">
                    تاریخ ایجاد
                </th>
                <th scope="col" className="px-6 py-3">
                    وضعیت بر روی بات
                </th>
                <th scope="col" className="px-6 py-3">
                    عملیات ها
                </th>
            </tr>
        </thead>
        <tbody>
            {list.map((form:any)=>{ 
                return(

                 <tr  key={form.forms_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                 <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 {form.forms_name}
                 </th>
                 <td className="px-6 py-4">
                    {formatRelativeTime(form.created_at)}
                 
                 </td>
                 <td className="px-6 py-4">
                 {form.status === "active" ? (
        <>
                  <span className="bg-green-100 flex justify-center items-center w-fit gap-1 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                                            <span className="bg-green-500 rounded-full h-3 w-3  inline-block"></span>
                                            فعال
                                        </span>
        </>
    ) : (
        <>
             <span className="bg-red-100 text-red-800 flex justify-center items-center w-fit gap-1 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                                            <span className="bg-red-500 rounded-full h-3 w-3  inline-block"></span>
                                            غیر فعال
                                        </span>
        </>
    )}
                 </td>
                 <td className="px-6 py-4">
                    <div className="flex">
            {form.status === "active" ?(<><div className="relative group">
            <button className="border border-red-500 rounded p-1 flex items-center">
                <ToggleOffCircle size={20} color="red" />
            </button>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded px-2 py-1">
               غیر فعال کردن 
            </span>
                   </div></>):(<><div className="relative group">
            <button className="border border-green-500 rounded p-1 flex items-center">
                <ToggleOnCircle size={20} color="green" />
            </button>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded px-2 py-1">
                فعال کردن
            </span>
                   </div></>)}
                    
                   <div className="relative group mx-2">
            <button onClick={()=>{handleEditForm(form.forms_id )}} className="border border-gray-500 rounded p-1 flex items-center">
                <Edit size={20} />
            </button>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded px-2 py-1">
                ویرایش
            </span>
        </div>
        <div className="relative group">
            <button  onClick={()=>{handleDeleteForm(form.forms_id)}} className="border border-red-500 rounded p-1 flex items-center">
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

        </>
    )
}

export default Leads;
