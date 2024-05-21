import Link from "next/link";

const UserAccount = () => {

  
    return (
      <>
      <div className="flex gap-3 items-end">
        <div className="flex flex-col items-center">
        <span className="text-[13px]">Mahdiyar@gmail.com</span>
        <span className="text-[11px] text-gray-400">مشاهده پروفایل</span>
        </div>
        <Link href={"/panel/profile"} >
        <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 " src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Bordered avatar"/>
        </Link>

      </div>
    
      </>
    );
  };
  export default UserAccount;
  