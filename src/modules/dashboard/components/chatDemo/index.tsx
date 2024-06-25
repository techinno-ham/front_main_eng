import ChatBot from "@/src/shared/components/common/chatBot";
import service from "@/src/shared/services/service";
import { formatDistanceToNow } from 'date-fns-jalali';
import { faIR } from 'date-fns/locale';
import { useEffect, useState } from "react";

interface chartDemoProps {
    botData: any;
}


const ChartDemo : React.FC<chartDemoProps> = ({botData}) => {
    const formatRelativeTime = (dateString:any) => {
        const date = new Date(dateString);
        return formatDistanceToNow(date, { locale: faIR });
    };
    const state=botData?.security_configs?.status_bot=="enable" ? true: false
    const [botActive, setBotActive] = useState<boolean>(state);

    useEffect(() => {
        const fetchBotData = async () => {
            try {
                const response = await service.getBot(botData?.bot_id);
                const status =response.data.security_configs?.status_bot;
                    if (status === "enable") {
                        setBotActive(true)
                    }else{
                        setBotActive(false)
                    }
                
            } catch (error: any) {
                
            } 
        };
        const checkBotStatus = async () => {
            if (!botActive) {
                await fetchBotData();
                const interval = setInterval(async () => {
                    await fetchBotData();
                }, 5000);

                return () => clearInterval(interval);
            }
        };

        checkBotStatus();
    }, [botActive, botData]); 
    

    return (
        <>
            <div className="mx-auto mt-10 flex max-w-5xl flex-col px-3 pb-12 md:mt-10">
                <div className="rounded border bg-white">
                    <div className="border-b p-4">
                        <span className="text-xl font-semibold leading-6 text-zinc-900">
                        {botData?.name || "هوشینو بات"}
                        </span>
                    </div>
                    <div className="p-5">
                        <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:space-x-2 md:space-y-0">
                            <div className="flex w-full flex-col gap-4">
                                <div>
                                    <span className="text-zinc-5 block text-sm font-medium">
                                        چت بات آیدی :
                                    </span>
                                    <span className="text-sm font-semibold text-zinc-700">
                                      {botData?.bot_id || "sG-EAaBK-R4AbfET4AhmP"}
                                        
                                    </span>
                                </div>
                                <div className="flex gap-32">
                                    <div>
                                        <span className="text-zinc-5 block text-sm font-medium">
                                            وضعیت :
                                        </span>
                                        {botData?.security_configs?.status_bot=="enable"?(
                                              <span className="text-sm font-semibold text-zinc-700">
                                              <span className="mr-1 inline-block h-[10px] w-[10px] rounded-full bg-green-500"></span>{" "}
                                              فعال
                                          </span>

                                        ):(
                                            <span className="text-sm font-semibold text-zinc-700">
                                            <span className="mr-1 inline-block h-[10px] w-[10px] rounded-full bg-red-500"></span>{" "}
                                             غیر فعال
                                        </span>
                                        )}
                                      
                                    </div>
                                    <div>
                                        <span className="text-zinc-5 block text-sm font-medium">
                                            مدل :
                                        </span>
                                        <span className="text-sm font-semibold text-zinc-700">
                                            {botData?.model_configs?.model_name || "gpt-3.5-turbo"}
                                            
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-zinc-5 block text-sm font-medium">
                                        دسترسی :
                                    </span>
                                    <span className="text-sm font-semibold text-zinc-700">
                                    {botData?.security_configs?.access_bot =="private" ?"خصوصی":"عمومی"}
                                    </span>
                                </div>
                                <div>
                                    <span className="text-zinc-5 block text-sm font-medium">
                                        آخرین آموزش :
                                    </span>
                                    <span className="text-sm font-semibold text-zinc-700">
                                    {botData?.updated_at
                                 ? formatRelativeTime(botData.updated_at)
                            : " مدتی قبل"}
                                    </span>
                                </div>
                            </div>
                            <div className="w-full p-2">
                              
                                    <ChatBot chatBotActive={botActive}/>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ChartDemo
