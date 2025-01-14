import { useState } from "react";
import { SideBarMenuViewProps } from "./InterfaceSideBarMenuViewProps";
import { LuHouse } from "react-icons/lu";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoIosArrowDropright } from "react-icons/io";
import { PrizesDropDown } from "./prizes-dropdown/PrizesDropDown";

export const SideBarMenuView = (props: SideBarMenuViewProps) => {
  const { navigate } = props;
  const [isCollapsed, setIsCollapsed] = useState(false); // Adicionando o estado

  // Função para alternar entre o estado de colapso
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`grid grid-rows-[40px_auto] bg-primary border-r-4 border-r-thertiary h-full transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-full"
      }`}
    >
      <div
        className="justify-self-end text-sm group cursor-pointer p-3"
        onClick={toggleSidebar}
      >
        <IoIosArrowDropright
          className={`group-hover:text-thertiary transition-transform ${
            isCollapsed ? "hover:rotate-0" : "hover:rotate-180"
          }`}
          size={30}
        />
      </div>
      <nav className="flex justify-start px-1 py-3">
        <ul className="flex  flex-col gap-y-4 pt-3">
          <li
            className="cursor-pointer px-3 rounded-xl hover:text-thertiary"
            onClick={() => navigate("/")}
          >
            <div className="flex items-center justify-start gap-x-3 group">
              <LuHouse className={isCollapsed ? "size-7" : "size-6"} />
              {!isCollapsed && (
                <div className="flex justify-between items-center">
                  <p className="text-lg">Home</p>
                  <MdOutlineArrowDropDown
                    className="rotate-90 group-hover:rotate-0 transition-all duration-300"
                    size={30}
                  />
                </div>
              )}
            </div>
          </li>
          <li className="cursor-pointer px-3 rounded-xl">
            <PrizesDropDown navigate={navigate} isCollapsed={isCollapsed} />
          </li>
        </ul>
      </nav>
    </div>
  );
};
