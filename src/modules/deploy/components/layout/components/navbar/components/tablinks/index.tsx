import useStoreViewControllerDeploy from "@/src/modules/deploy/hooks/view-controller-setting"

const TabLink = ({ item, event }: any) => {
    const StoreViewController = useStoreViewControllerDeploy()

    const handleClick = () => {
        StoreViewController.changeTab(item.store)
    }
    return (
        <div
            onClick={handleClick}
            className={`flex w-max cursor-pointer items-center gap-2 p-3 ${StoreViewController.activeTab === item.store && "border-b-2 border-custom-blue"}`}
        >
            <div>{item.icon}</div>

            <span>{item.title}</span>
            {/* {!item.isActive && (
                <>
                   <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 dark:border-zinc-800 dark:focus:ring-zinc-300 border-transparent bg-blue-100 text-blue-600 ">به زودی</div>

                </>
            )} */}
        </div>
    )
}

export default TabLink
