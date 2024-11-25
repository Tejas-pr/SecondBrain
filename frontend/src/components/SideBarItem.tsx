import { ReactElement } from "react";

interface SideBarItemInterface {
  icon: ReactElement;
  text: string;
}
export function SideBarItem({ icon, text }: SideBarItemInterface) {
  return (
    <>
      <div className="flex items-center justify-center hover:bg-purple-300 hover:cursor-pointer transition-all duration-400 p-4 rounded-md m-2">
        <div className="px-2">{icon}</div>
        <div className="px-2">{text}</div>
      </div>
    </>
  );
}
