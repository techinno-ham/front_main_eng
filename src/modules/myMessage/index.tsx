const MyMessage = () => {
    return (
        <>
            <div className="mx-auto mt-[90px] w-[95%]">
                <div className=" relative h-[500px] w-[100%] rounded-xl  border bg-white p-4">
                    <p>تاریخچه ی گفت و گو ها</p>
                    <div className=" absolute left-0 top-0 h-[500px] w-full bg-slate-300 blur-sm"></div>
                    <div className="absolute  left-[33%] top-1/2 flex flex-col">
                        <span>
                            تاریخچه گفت و گو ها در حال حاظر در حال توسعه می
                            باشد.
                        </span>
                        <span>به زودی در دسترس قرار خواهد گرفت ....</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MyMessage
