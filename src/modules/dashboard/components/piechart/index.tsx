"use client"
import ReactApexChart from "react-apexcharts";

const PieChart = ({ title, value, series, colors }: any) => {
    return (
        <div
            className="flex flex-row justify-between  border  items-center p-3 gap-2 rounded-xl min-h-[110px]  bg-white"
        >
            <div className="flex flex-col">
                <span className="text-sm text-gray-500">{title}</span>
                <span className="text-2xl text-gray-900 font-bold mt-1">{value}</span>
            </div>

            <ReactApexChart
                options={{
                    chart: { type: "donut" },
                    colors,
                    legend: { show: false },
                    dataLabels: { enabled: false },
                }}
                series={series}
                type="donut"
                width="120px"
            />
        </div>
    );
};

export default PieChart;