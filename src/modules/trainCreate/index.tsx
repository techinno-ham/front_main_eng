import Train from "../train";
import TrainForCreate from "./components/train";

const TrainCreate =() =>{
    return (
        <>
        
        <div className="container mx-auto mt-20  overflow-hidden  px-4 h-full">
        <div className="border-t py-8">
            <h1 className="mb-2 text-center text-3xl font-bold">منابع آموزش</h1>
            <p className="text-center text-zinc-500">دیتاها و اطلاعات خود را برای آموزش چت بات خود اضافه کنید. </p>
        </div>

        <div>
            <TrainForCreate/>
        </div>
       

        </div>
  
        </>
    )
}
export default TrainCreate;
