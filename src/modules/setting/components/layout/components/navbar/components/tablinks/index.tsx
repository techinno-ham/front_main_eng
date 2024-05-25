import useStoreViewControllerSetting from "@/src/modules/setting/hooks/view-controller-setting"

const TabLink = ({ item, event }: any) => {
    const StoreViewController = useStoreViewControllerSetting()

    const handleClick = () => {
        StoreViewController.changeTab(item.store)
    }
    return (
        <div
            onClick={handleClick}
            className={`cursor-pointer  p-3 ${StoreViewController.activeTab === item.store && "border-b-2 border-custom-blue"}`}
        >
            {item.title}
        </div>
    )
}

export default TabLink
