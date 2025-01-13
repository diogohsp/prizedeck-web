import { SideBarMenuViewProps } from "./InterfaceSideBarMenuViewProps";
import { LuGift } from "react-icons/lu";
import { LuHouse } from "react-icons/lu";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoIosArrowDropright } from "react-icons/io";

export const SideBarMenuView = (props: SideBarMenuViewProps) => {
  const { navigate } = props;

  return (
    <>
      <div className="grid grid-rows-[20px_auto] p-3 bg-primary border-r-4 border-r-thertiary h-full">
        <div className="justify-self-end text-sm group cursor-pointer">
          <IoIosArrowDropright
            className="group-hover:rotate-180 group-hover:text-thertiary"
            size={30}
          />
        </div>
        <nav className="flex justify-start px-3 py-3">
          <ul className="flex flex-col gap-y-3">
            <li
              className="cursor-pointer flex items-center justify-between gap-x-3 px-3 rounded-xl hover:text-thertiary group"
              onClick={() => navigate("/")}
            >
              <LuHouse size={20} />
              <p className="text-lg">Home</p>
              <MdOutlineArrowDropDown
                className="group-hover:rotate-90"
                size={30}
              />
            </li>
            <li
              className="cursor-pointer text-lg flex items-center px-3 rounded-xl justify-between gap-x-3 hover:text-thertiary group"
              onClick={() => navigate("/prizes")}
            >
              <LuGift size={20} />
              <p className="text-lg">Prizes</p>
              <MdOutlineArrowDropDown
                className="group-hover:rotate-90"
                size={30}
              />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
