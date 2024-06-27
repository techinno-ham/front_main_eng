"use client"

interface IActiveTab {
    activeTabId: string
    tabs: any
}

const ActiveTab: React.FC<IActiveTab> = (props) => {
    console.log("active")
    const activeTab = props.tabs.find(
        (tab: any) => tab.id === props.activeTabId,
    )

    if (activeTab) {
        const Component = activeTab.component
        return <Component />
    }

    return null // Or you can render a default component or message if no active tab is found
}

export default ActiveTab
