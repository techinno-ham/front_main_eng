import Link from "next/link"

const UserAccount = () => {
    return (
        <>
            <div className="flex items-end gap-3">
                <div className="flex flex-col items-center">
                    <span className="text-[13px]">Mahdiyar@gmail.com</span>
                    <span className="text-[11px] text-gray-400">
                        مشاهده پروفایل
                    </span>
                </div>
                <Link href={"/panel/profile"}>
                    <img
                        className="h-10 w-10 rounded-full p-1 ring-2 ring-gray-300 "
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        alt="Bordered avatar"
                    />
                </Link>
            </div>
        </>
    )
}
export default UserAccount
