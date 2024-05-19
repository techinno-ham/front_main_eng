import SideBar from "@/src/shared/components/layouts/panel-layout/sidebar";


const Layout=({
    children,
  }: {
    children: React.ReactNode
  })=>{
  return(
    <>
    <div className="flex bg-[#F6F8FB] h-[100vh]">
        <SideBar/>

          {children}

    </div>
    </>
  )
};
export default Layout