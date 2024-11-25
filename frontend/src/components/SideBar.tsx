import { TwitterIcon } from "../icons/TwitterIcons";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SideBarItem } from "./SideBarItem";

export function SideBar () {
    return <div className="fixed h-screen w-72 bg-white top-0 left-0 border-r"> 
        <div>
            <h1 className="flex items-center justify-center font-bold text-3xl m-10">Second Brain</h1>
        </div>
        <div className="flex flex-col">
            <SideBarItem text="Twitter" icon={<TwitterIcon />}/>
            <SideBarItem text="Youtube" icon={<YoutubeIcon />}/>
        </div>
    </div>
}