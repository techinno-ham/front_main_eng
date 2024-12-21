"use client"

import { useEffect, useRef, useState } from "react";
import { formatDistanceToNow } from "date-fns-jalali"
import { faIR } from "date-fns/locale"
import { Edit, ExportCurve, Trash, UserSquare } from "iconsax-react";
import Pagination from "../myBots/components/pagination";
import service from "@/src/shared/services/service";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import Modal from "@/src/shared/components/common/modal";



const Mycontact=()=>{
      const [isLoading, setLoading] = useState(false);
      const [currentPage, setCurrentPage] = useState(1);
      const [totalPages, setTotalPages] = useState(1);
      const [constactList, setContactList] = useState([]);
      const [searchQuery, setSearchQuery] = useState("");
      const [openModal, setOpenModal] = useState(false);
      const [modalData, setModalData] = useState({
        email:"",
        phone:"",
        name:"",
        contactId:""
      });

      const pathname = usePathname();
      const botId = pathname.split("/")[2]

      useEffect(() => {
        const fetchContactList = async () => {
            setLoading(true);
            try {
                const response: any = await service.getContactsByBotId(
                    botId,
                    currentPage,
                    8,
                    searchQuery 
                );
                setContactList(response.data || []);
                setTotalPages(Math.ceil(response.total / 8));
            } catch (err) {
                console.error("Error fetching contact list:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchContactList();
    }, [currentPage, searchQuery]);

    const handleDeleteContact = async (contactId: string) => {
        const loadingToastId = toast.loading("در حال حذف مخاطب ...");
        try {
          await service.deleteContact(contactId);
          toast.success("مخاطب با موفقیت حذف شد");
          setContactList((prevList: any) =>
            prevList.filter((contact: any) => contact.contact_id !== contactId)
          );
        } catch (error) {
          toast.error("مشکلی در حذف مخاطب وجود دارد");
        } finally {
          toast.dismiss(loadingToastId);
        }
      };
      const handleOnCloseModal = (e: React.MouseEvent) => {
        e.stopPropagation()
        e.preventDefault()
        setOpenModal(false)
    }

    const handleUpdateConatctClick = (dataInput:any) => {
        setModalData(dataInput)
        setOpenModal(true)
    };


      const handleUpdateContact = async (e: any) => {
            e.stopPropagation()
            e.preventDefault();
            if (!modalData?.email || !modalData?.name || !modalData?.phone) {
                toast.error(" لطفاً حداقل یک فیلد رو پر کنید .")
                return
            };
            const loadingToastId = toast.loading("در حال ویرایش مخاطب ...");
            try {
              
                const { contactId, ...updatedData } = modalData;  
                await service.updateContact(contactId, updatedData)
                setContactList((prevList: any) =>
                    prevList.map((contact: any) =>
                        contact.contact_id === modalData.contactId
                            ? { ...contact, ...modalData } 
                            : contact
                    )
                );
                toast.success("مخاطب با موفقیت ویرایش  شد");
                setOpenModal(false)
            } catch (error) {
                console.error("Error deleting bot:", error)
                toast.error("مشکلی در ویرایش مخاطب وجود دارد");
            } finally {
                setOpenModal(false)
                toast.dismiss(loadingToastId);
                setModalData({
                    email:"",
                    phone:"",
                    name:"",
                    contactId:""
                  })
            }
        }




     const formatRelativeTime = (dateString: any) => {
              const date = new Date(dateString)
              return formatDistanceToNow(date, { locale: faIR })
      };
      const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page)
        }
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value); 
        setCurrentPage(1); 
    };
    const safeValue = (value: any, fallback: string = "---") => {
        return value == null || value === "" ? fallback : value;
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setModalData((prevData) => ({
            ...prevData,
            [name]: value, 
        }));
    };
    

    // if (isLoading)
    //     return (
    //         <>
    //             <div className="mx-auto flex h-[90vh] w-[95%] items-center justify-center md:mt-[90px] ">
    //                 <div className="flex items-center gap-3">
    //                     <span>در حال بارگزاری اطلاعات ...</span>
    //                     <LoaderLottie />
    //                 </div>
    //             </div>
    //         </>
    //     )

    return (
        <>
          <Modal
                                        open={openModal}
                                        onClose={handleOnCloseModal}
                                    >
                                        <div className="w-[450px] ">
                                            <div className="flex flex-col gap-2">
                                                <div className="text-center">
                                                    <UserSquare
                                                        size={50}
                                                        className="mx-auto"
                                                    />
                                                    <div className="mx-auto  w-96">
                                                        <h3 className="text-xl font-black text-gray-800">
                                                            ویرایش مخاطب
                                                        </h3>
                                                       
                                                    </div>
                                                </div>
                                                <div className="mt-4 rounded-lg bg-slate-200/20 p-4 shadow-md">
                                                    <div className="flex flex-col gap-3">
                                                        <span>نام یا نام خانوادگی :</span>
                                                        <input
        value={modalData?.name}
        onChange={handleInputChange}
        name="name" // This name corresponds to the field in modalData
        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="سلام ...."
        type="text"
    />
                                                    </div>
                                                    <div className="flex flex-col gap-3">
                                                        <span className="mt-2">
                                                            ایمیل :
                                                        </span>
                                                        <input
        name="email" // This name corresponds to the field in modalData
        value={modalData?.email}
        onChange={handleInputChange}
        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="سلام ...."
        type="text"
    />
                                                    </div>
                                                    <div className="flex flex-col gap-3">
                                                        <span className="mt-2">
                                                            شماره تلفن :
                                                        </span>
                                                        <input
        name="phone"
        value={modalData?.phone}
        onChange={handleInputChange}
        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="09121921921"
        type="text"
    />
                                                    </div>
                                                </div>
                                                <div className="mt-2 flex justify-between gap-4">
                                                    <button
                                                        className="focus-visible:ring-ring inline-flex h-9 w-full items-center justify-center whitespace-nowrap rounded-md border border-zinc-200 bg-transparent px-4 py-1 text-sm font-medium shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none  focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-80"
                                                        onClick={handleOnCloseModal}
                                                    >
                                                        لغو
                                                    </button>
                                                    <button
                                                        className="focus-visible:ring-ring inline-flex h-9  w-full items-center justify-center whitespace-nowrap rounded-md  bg-blue-600 px-4 py-1 text-sm font-medium text-zinc-50 shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-none    focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-80"
                                                        type="button"
                                                        onClick={handleUpdateContact}
                                                    >
                                                                <span>
                                                                    ویرایش
                                                                </span>
                                                         
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Modal>
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
                                value={searchQuery}
                                onChange={handleSearchChange}
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
                                               {safeValue(contact?.email)}
                                        </th>
                                        <td className="px-6 py-4">
                                               {safeValue(contact?.phone)}
                                        </td>
                                        <td className="px-6 py-4"> 
                                              {safeValue(contact?.name)}
                                        </td>
                                        <td className="px-6 py-4">
                                             {formatRelativeTime(contact.created_at)}
                                        </td>
                                        <td className="px-6 py-4">
                                                <div className="flex">
                                                  <div className="relative group mx-2">
                                                    <button onClick={() => handleUpdateConatctClick({
        email:contact?.email,
        phone:contact?.phone,
        name:contact?.name,
        contactId:contact?.contact_id
      })} className="border border-gray-500 rounded p-1 flex items-center">
                                                        <Edit size={20} />
                                                    </button>
                                                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded px-2 py-1">
                                                     ویرایش
                                                    </span>
                                                  </div>
                                                  <div className="relative group">
                                                      <button  onClick={() => handleDeleteContact(contact?.contact_id)}  className="border border-red-500 rounded p-1 flex items-center">
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