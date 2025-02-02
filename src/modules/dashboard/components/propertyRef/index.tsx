interface ProgressBarProps {
    title: string;
    percentage: number;
    color: string;
}

const ProgressBar = ({ title, percentage, color }: ProgressBarProps) => (
    <div className="w-full">
        <div className="flex items-center justify-between">
            <span className="text-lg font-medium text-gray-900">{title}</span>
            <span className="text-lg font-medium text-gray-900">
                {percentage}%
            </span>
        </div>
        <div className="relative mt-2 h-2 w-full rounded bg-gray-200">
            <div
                className="absolute h-full rounded"
                style={{ width: `${percentage}%`, backgroundColor: color }}
            />
        </div>
    </div>
);

const PropertyReferrals = () => {
    const propertyReferralsInfo = [
        {
            title: "Embedding",
            percentage: 40,
            color: "#7FBA7A",
        },
        {
            title: "Website",
            percentage: 50,
            color: "#FFCE73",
        },
        {
            title: "Other",
            percentage: 15,
            color: "#F45252",
        },
    ];

    return (
        <div className="flex h-full w-full flex-col rounded-2xl bg-white p-4 shadow-[0_23px_40px_-20px_rgba(0,0,0,0.08)] blur-[2px] pointer-events-none">
            <span className="text-xl font-semibold text-gray-900">
                Usage in Different Environments
            </span>

            <div className="my-5 flex flex-col gap-4">
                {propertyReferralsInfo.map((bar) => (
                    <ProgressBar key={bar.title} {...bar} />
                ))}
            </div>
        </div>
    );
};

export default PropertyReferrals;