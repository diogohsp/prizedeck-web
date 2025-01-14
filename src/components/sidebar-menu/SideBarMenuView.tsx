import { useState } from "react";
import { SideBarMenuViewProps } from "./InterfaceSideBarMenuViewProps";
import { LuGift } from "react-icons/lu";
import { LuHouse } from "react-icons/lu";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoIosArrowDropright } from "react-icons/io";

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
            className="cursor-pointer flex items-center justify-between gap-x-3 px-3 rounded-xl hover:text-thertiary group"
            onClick={() => navigate("/")}
          >
            <LuHouse className={isCollapsed ? "size-7" : "size-6"} />
            {!isCollapsed && (
              <>
                <p className="text-lg">Home</p>
                <MdOutlineArrowDropDown
                  className="group-hover:rotate-90"
                  size={30}
                />
              </>
            )}
          </li>
          <li
            className="cursor-pointer text-lg flex items-center px-3 rounded-xl justify-between gap-x-3 hover:text-thertiary group"
            onClick={() => navigate("/prizes")}
          >
            <LuGift className={isCollapsed ? "size-7" : "size-6"} />
            {!isCollapsed && (
              <>
                <p className="text-lg">Prizes</p>
                <MdOutlineArrowDropDown
                  className="group-hover:rotate-90"
                  size={30}
                />
              </>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};
