import useStoreViewControllerSetting from "@/src/modules/setting/hooks/view-controller-setting"

const TabLink = ({ item, event }: any) => {
    const StoreViewController = useStoreViewControllerSetting()

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
          
            {item.store === "Leads" && (
            <>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full ">Trial</span>
            </>
        )} 

        </div>
    )
}

export default TabLink
