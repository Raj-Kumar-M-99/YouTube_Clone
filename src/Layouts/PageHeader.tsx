import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react"
import logo from "../assets/logo.png"
import { Button } from "../Components/Button"
import { useState } from "react";
import { useSidebarContext } from "../Context/SidebarContext";

export const PageHeader = () => {
  const [showFullWidthSearch, setshowFullWidthSearch] = useState(false);
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
        {/* <div className={`gap-4 items-center flex-shrink-0 ${showFullWidthSearch ? "hidden":"flex"}`}>
            <Button variant="ghost" size="icon" onClick={toggle}>
              <Menu/>
            </Button>
            <a href="/">
                <img src={logo} alt="Logo" className="h-6" />
            </a>
        </div> */}
        <PageHeaderFirstSection hidden={showFullWidthSearch}/>
        <form className={`gap-4 flex-grow justify-center ${showFullWidthSearch ? "flex":"md:flex hidden"}`}>
         {showFullWidthSearch && 
          <Button 
          onClick={() => setshowFullWidthSearch(false)}
          className="flex-shrink-0" 
          variant="ghost"
          size="icon" 
          type="button">
              <ArrowLeft/>
          </Button>}
             <div className="flex flex-grow max-w-[600px]">
                <input
                type="search"
                placeholder="Search"
                className="rounded-l-full border border-secondary-border shadow-inner 
                shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none
                "
                />
                <button className="py-2 px-4 rounded-r-full border-secondary-border 
                border border-l-0 flex-shrink-0">
                  <Search/>
                </button>
             </div>
             <Button type="button" size="icon" className="flex-shrink-0">
              <Mic/>
             </Button>
        </form>
        <div className={`flex-shrink-0 md:gap-2 ${showFullWidthSearch ? "hidden":"flex"}`}>
        <Button size="icon" variant="ghost" className="md:hidden">
            <Search/>
          </Button>
          <Button size="icon" variant="ghost" className="md:hidden">
            <Mic/>
          </Button>
          <Button size="icon" variant="ghost">
            <Upload/>
          </Button>
          <Button size="icon" variant="ghost">
            <Bell/>
          </Button>
          <Button size="icon" variant="ghost">
            <User/>
          </Button>
        </div>
    </div>
  )
}

type PageHeaderFirstSectionProps = {
  hidden?:boolean
}

export function PageHeaderFirstSection({hidden=false}:PageHeaderFirstSectionProps){
  const {toggle} = useSidebarContext()

 return (
  <div
  className={`
  gap-4 items-center flex-shrink-0 ${hidden ?"hidden":"flex"  }`}
  >
    <Button onClick={toggle} variant="ghost" size="icon">
      <Menu/>
    </Button>
    <a href="/">
      <img src={logo} alt="" className="h-6" />
    </a>
  </div>
 )
}
