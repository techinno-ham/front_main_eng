"use client"
import ReactApexChart from "react-apexcharts"
import { ApexOptions } from "apexcharts"
import { ArrowCircleUp2 } from "iconsax-react"

const TotalRevenue = () => {
    const TotalRevenueSeries = [
        {
            name: "Last Month",
            data: [183, 124, 115, 85, 143, 143, 96],
        },
        {
            name: "Running Month",
            data: [95, 84, 72, 44, 108, 108, 47],
        },
    ]
    const TotalRevenueOptions: ApexOptions = {
        chart: {
            type: "bar",
            toolbar: {
                show: false,
            },
        },
        colors: ["#475BE8", "#CFC8FF"],
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: false,
                columnWidth: "55%",
            },
        },
        dataLabels: {
            enabled: false,
        },
        grid: {
            show: false,
        },
        stroke: {
            colors: ["transparent"],
            width: 4,
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        },
        yaxis: {
            title: {
                text: "$ (thousands)",
            },
        },
        fill: {
            opacity: 1,
        },
        legend: {
            position: "top",
            horizontalAlign: "right",
        },
        tooltip: {
            y: {
                formatter(val: number) {
                    return `$ ${val} thousands`
                },
            },
        },
    }
    return (
        <div className="flex flex-1 flex-col  rounded-2xl bg-white p-4 shadow-[0_23px_40px_-20px_rgba(0,0,0,0.08)]">
            <span className="text-lg font-semibold text-gray-900">
                مجموع استفاده در ماه جاری
            </span>

            <div className="my-5 flex flex-row flex-wrap gap-4">
                <span className="text-2xl font-bold text-gray-900">
                    2356 بار
                </span>
                <div className="flex flex-row items-center gap-1">
                    <ArrowCircleUp2
                        style={{ fontSize: 25, color: "#475be8" }}
                    />
                    <div className="flex flex-col">
                        <span className="text-sm text-blue-600">0.8%</span>
                        <span className="text-xs text-gray-500">
                            بیشتر از ماه پیش
                        </span>
                    </div>
                </div>
            </div>

            <ReactApexChart
                series={TotalRevenueSeries}
                type="bar"
                height={310}
                options={TotalRevenueOptions}
            />
        </div>
    )
}

export default TotalRevenue
