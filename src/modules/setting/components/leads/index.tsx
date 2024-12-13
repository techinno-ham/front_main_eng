import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import useStoreConfig from "../../hooks/loadConfig"
import service from "@/src/shared/services/service"
import { toast } from "sonner"
import { mockData } from "./data"
import { DocumentCopy, Edit, ToggleOffCircle, ToggleOnCircle, Trash } from "iconsax-react"

const Leads = () => {
    // const [list, setData] = useState<any>(mockData);
    const [isLoading, setIsLoading] = useState(false)




    const list:any=[
        {
          "forms_id": "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
          "bot_id": "bot_001",
          "created_at": "2024-01-01T12:00:00Z",
          "updated_at": "2024-01-01T12:00:00Z",
          "status": "active",
          "submit_number": 10,
          "forms_name": "Customer Feedback Form",
          "configs": {
            "questions": [
              {
                "question_id": "q1",
                "question_text": "How satisfied are you with our service?",
                "type": "rating"
              },
              {
                "question_id": "q2",
                "question_text": "What can we improve?",
                "type": "text"
              }
            ]
          }
        },
        {
          "forms_id": "b2c3d4e5-f6g7-8h9i-0j1k-l2m3n4o5p6q7",
          "bot_id": "bot_002",
          "created_at": "2024-02-15T09:30:00Z",
          "updated_at": "2024-02-15T09:30:00Z",
          "status": "inactive",
          "submit_number": 5,
          "forms_name": "Event Registration Form",
          "configs": {
            "fields": [
              {
                "field_id": "f1",
                "field_label": "Name",
                "field_type": "text"
              },
              {
                "field_id": "f2",
                "field_label": "Email",
                "field_type": "email"
              },
              {
                "field_id": "f3",
                "field_label": "Event Date",
                "field_type": "date"
              }
            ]
          }
        },
        {
          "forms_id": "c3d4e5f6-g7h8-9i0j-k1l2-m3n4o5p6q7r8",
          "bot_id": "bot_003",
          "created_at": "2024-03-10T15:45:00Z",
          "updated_at": "2024-03-10T15:45:00Z",
          "status": "inactive",
          "submit_number": 0,
          "forms_name": "Survey Form",
          "configs": {
            "questions": [
              {
                "question_id": "q1",
                "question_text": "Would you recommend us to a friend?",
                "type": "boolean"
              },
              {
                "question_id": "q2",
                "question_text": "Any additional comments?",
                "type": "text"
              }
            ]
          }
        },
        {
          "forms_id": "d4e5f6g7-h8i9-0j1k-l2m3-n4o5p6q7r8s9",
          "bot_id": "bot_001",
          "created_at": "2024-04-20T11:00:00Z",
          "updated_at": "2024-04-20T11:00:00Z",
          "status": "inactive",
          "submit_number": 20,
          "forms_name": "Newsletter Signup",
          "configs": {
            "fields": [
              {
                "field_id": "f1",
                "field_label": "Email",
                "field_type": "email"
              },
              {
                "field_id": "f2",
                "field_label": "First Name",
                "field_type": "text"
              }
            ]
          }
        }
      ]


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
                     Silver
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
            <button className="border border-gray-500 rounded p-1 flex items-center">
                <Edit size={20} />
            </button>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded px-2 py-1">
                ویرایش
            </span>
        </div>
        <div className="relative group">
            <button className="border border-red-500 rounded p-1 flex items-center">
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
