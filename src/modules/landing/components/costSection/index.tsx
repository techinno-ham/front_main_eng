import { DocumentText1, DollarCircle, Messages3, Timer1 } from "iconsax-react";

const CostSection = () => {
     return (
        <>
           <div className="container relative mx-auto h-auto overflow-hidden mt-12  px-4  text-center 2xl:px-20">
           <div className="grid gap-y-10 gap-x-10 md:grid-cols-2 lg:grid-cols-4 mt-16">
           <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none items-center">
                          <DollarCircle
                            size="28"
                            color="#212121"
                           />
                           <h1 className="block antialiased tracking-normal mb-2 mt-4 text-5xl text-gray-900 font-bold">50%-</h1>
                           <h5 className="block antialiased tracking-normal text-xl leading-snug mb-2 font-semibold text-gray-600">هزینه های پشتیبانی مشتری</h5>
                           <h6 className="block antialiased tracking-normal text-base leading-relaxed mb-2 font font-normal text-gray-600"> تا 50 درصد از هزینه های پشتیبانی مشتری خود را به ازای هر نماینده کاهش دهید.</h6>
                    </div>
                    <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none items-center">
                          <Timer1
                            size="28"
                            color="#212121"
                           />
                           <h1 className="block antialiased tracking-normal mb-2 mt-4 text-5xl text-gray-900 font-bold">3x</h1>
                           <h5 className="block antialiased tracking-normal text-xl leading-snug mb-2 font-semibold text-gray-600">پاسخ سریعتر</h5>
                           <h6 className="block antialiased tracking-normal text-base leading-relaxed mb-2 font font-normal text-gray-600"> چت بات ما 3 برابر سریعتر از یک انسان پاسخ می دهد.</h6>
                    </div>
                    <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none items-center">
                          <DocumentText1
                            size="28"
                            color="#212121"
                           />
                           <h1 className="block antialiased tracking-normal mb-2 mt-4 text-5xl text-gray-900 font-bold">100%</h1>
                           <h5 className="block antialiased tracking-normal text-xl leading-snug mb-2 font-semibold text-gray-600">دقت</h5>
                           <h6 className="block antialiased tracking-normal text-base leading-relaxed mb-2 font font-normal text-gray-600">چت بات ما در پاسخ به سوالات دقت 100% دارد.</h6>
                    </div>
                    <div className="relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none items-center">
                         <Messages3
                            size="28"
                            color="#212121"
                           />
                           <h1 className="block antialiased tracking-normal mb-2 mt-4 text-5xl text-gray-900 font-bold">24/7</h1>
                           <h5 className="block antialiased tracking-normal text-xl leading-snug mb-2 font-semibold text-gray-600">دستیار پشتیبانی</h5>
                           <h6 className="block antialiased tracking-normal text-base leading-relaxed mb-2 font font-normal text-gray-600">در مقایسه با پشتیبانی استاندارد، چت بات 24/7 برای مشتریان شما در دسترس است.</h6>
                    </div>
                    
                    
                    
                    
                </div>
           </div>
        
        </>
     )

};
export default CostSection;