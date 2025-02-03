import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import useStoreConfig from "../../hooks/loadConfig"
import service from "@/src/shared/services/service"
import { toast } from "sonner"
import { formatDistanceToNow } from "date-fns-jalali"
import { enUS } from "date-fns/locale"
import { mockData } from "./data"
import { DocumentCopy, Edit, ToggleOffCircle, ToggleOnCircle, Trash } from "iconsax-react"
import { usePathname } from "next/navigation"
import { useRouter } from "nextjs-toploader/app"


const Leads = () => {
    const [list, setList] = useState<any>(mockData);
    const { data} = useStoreConfig();
    const pathname = usePathname();
    const router=useRouter();

    const formatRelativeTime = (dateString: any) => {
        const date = new Date(dateString)
        return formatDistanceToNow(date, { locale: enUS })
    };

  const handleDeleteForm=async (formId:string)=>{
    const loadingToastId = toast.loading("Deleting form ...");
    try {
        const result = await service.deleteForm(formId); 
        toast.success("Form deleted successfully");
        setList((prevList:any) => prevList.filter((form:any) => form.forms_id !== formId));
    } catch (error) {
        toast.error(`There was an issue deleting the form`)
    } finally {
        toast.dismiss(loadingToastId);
    }

  };
  const handleEditForm=(formId:string)=>{
    const newPath = `${pathname}/form/${formId}`;
    router.push(newPath);
  };
  const handleActiveForm=async (formId:string)=>{
    const loadingToastId = toast.loading("Activating form ...");
    try {
         await service.activeForm(formId); 
        toast.success("Form activated successfully");
        setList((prevList: any) => 
            prevList.map((form: any) => 
              form.forms_id === formId 
                ? { ...form, status: "active" } 
                : { ...form, status: "inactive" } 
            )
          );
    } catch (error) {
        toast.error(`There was an issue activating the form`)
    } finally {
        toast.dismiss(loadingToastId);
    }
  };

  const handleInactiveForm=async (formId:string)=>{
    const loadingToastId = toast.loading("Deactivating form ...");
    try {
         await service.inactiveForm(formId); 
        toast.success("Form deactivated successfully");
        setList((prevList: any) => 
            prevList.map((form: any) => 
              form.forms_id === formId 
                ? { ...form, status: "inactive" } 
                : form 
            )
          );
    } catch (error) {
        toast.error(`There was an issue deactivating the form`)
    } finally {
        toast.dismiss(loadingToastId);
    }
  };



    useEffect(() => {
        if (data) {
            setList(data.forms)
        }
    }, [data])

    return (
        <>
    
        

<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" className="px-6 py-3">
                     Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Creation Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Status on Bot
                </th>
                <th scope="col" className="px-6 py-3">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
            {list.map((form:any)=>{ 
                return(

                 <tr  key={form.forms_id} className="bg-white border-b ">
                 <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                 {form.forms_name}
                 </th>
                 <td className="px-6 py-4">
                    {formatRelativeTime(form.created_at)}
                 
                 </td>
                 <td className="px-6 py-4">
                 {form.status === "active" ? (
        <>
                  <span className="bg-green-100 flex justify-center items-center w-fit gap-1 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">
                                            <span className="bg-green-500 rounded-full h-3 w-3  inline-block"></span>
                                            Active
                                        </span>
        </>
    ) : (
        <>
             <span className="bg-red-100 text-red-800 flex justify-center items-center w-fit gap-1 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">
                                            <span className="bg-red-500 rounded-full h-3 w-3  inline-block"></span>
                                            Inactive
                                        </span>
        </>
    )}
                 </td>
                 <td className="px-6 py-4">
                    <div className="flex">
            {form.status === "active" ?(<><div className="relative group">
            <button onClick={()=>{handleInactiveForm(form.forms_id)}} className="border border-red-500 rounded p-1 flex items-center">
                <ToggleOffCircle size={20} color="red" />
            </button>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded px-2 py-1">
               Deactivate
            </span>
                   </div></>):(<><div className="relative group">
            <button onClick={()=>{handleActiveForm(form.forms_id)}} className="border border-green-500 rounded p-1 flex items-center">
                <ToggleOnCircle size={20} color="green" />
            </button>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded px-2 py-1">
                Activate
            </span>
                   </div></>)}
                    
                   <div className="relative group mx-2">
            <button onClick={()=>{handleEditForm(form.forms_id )}} className="border border-gray-500 rounded p-1 flex items-center">
                <Edit size={20} />
            </button>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded px-2 py-1">
                Edit
            </span>
        </div>
        <div className="relative group">
            <button  onClick={()=>{handleDeleteForm(form.forms_id)}} className="border border-red-500 rounded p-1 flex items-center">
                <Trash size={20} color="red" />
            </button>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded px-2 py-1">
                Delete
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
