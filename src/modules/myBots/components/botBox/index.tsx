import Image from "next/image";
import Link from "next/link";

interface IBotBoxProps {
    type: "instagram" | "website";
    botsData?:any;
    onDelete?: (projectId: number) => any;
    onDuplicate?: (projectId: number) => any;
  }

const listImage={
    website:"https://img.freepik.com/premium-vector/blue-square-with-globe-icon-it_876006-15.jpg",
    instagram:"https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707523200&semt=ais"
};
  

const BotBox=(props:IBotBoxProps)=>{
    return (
        <>
        <div className="cursor-pointer border border-solid border-gray-200 rounded-md hover:border-[#5470ff]">
            <Link href={'/dashbord'}>
                <div className="flex flex-col items-center">
                    <div>
                    <Image
              unoptimized={true}
              width={208}
              height={147}
              alt="axs"
              src={props.type=="instagram"?listImage["instagram"]:listImage["website"]}
            />
                    </div>
                    <div className="w-full">
                        <hr/>
                    </div>
                    <div className="flex items-center justify-center">

                    </div>

                </div>
            </Link>
        </div>
        </>
    )
    
};

export default BotBox;