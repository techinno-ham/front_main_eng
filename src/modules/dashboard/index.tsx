import ChartDemo from "./components/chatDemo"
import PieChart from "./components/piechart"
import PropertyReferrals from "./components/propertyRef"
import TotalRevenue from "./components/totalRevenue"

const Dashboard = () => {
    return (
        <>
            <div className="mx-auto mt-[90px] w-[95%]">
                <div className="mt-16 grid  grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                    <PieChart
                        title="تعداد کل پاسخ ها موفق"
                        value={684}
                        series={[75, 25]}
                        colors={["#2ED480", "#c4e8ef"]}
                    />
                    <PieChart
                        title="تعداد اشتباهات"
                        value={550}
                        series={[60, 40]}
                        colors={["#F45252", "#c4e8ef"]}
                    />
                    <PieChart
                        title="تعداد کال شدن api"
                        value={5684}
                        series={[75, 25]}
                        colors={["#275be8", "#c4e8ef"]}
                    />
                    <PieChart
                        title="تعداد درخواست پشتیبان"
                        value={555}
                        series={[75, 25]}
                        colors={["#FD8539", "#c4e8ef"]}
                    />
                </div>

                <div className="mt-8 grid  grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                    <div>
                        <PropertyReferrals />
                    </div>
                    <div>
                        <TotalRevenue />
                    </div>
                </div>

                <ChartDemo />
            </div>
        </>
    )
}
export default Dashboard
