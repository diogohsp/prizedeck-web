import { SideBarMenuViewProps } from "./InterfaceSideBarMenuViewProps";
import { LuGift } from "react-icons/lu";
import { LuHouse } from "react-icons/lu";
import { MdOutlineArrowDropDown } from "react-icons/md";

export const SideBarMenuView = (props: SideBarMenuViewProps) => {
  const { navigate } = props;

  return (
    <>
      <nav className="flex justify-start px-3 py-3">
        <ul className="flex flex-col gap-y-3">
          <li
            className="cursor-pointer flex items-center justify-between gap-x-3 px-3 rounded-xl hover:text-black group"
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
            className="cursor-pointer text-lg flex items-center px-3 rounded-xl justify-between gap-x-3 hover:text-black group"
            onClick={() => navigate("/prize")}
          >
            <LuGift size={20} />
            <p className="text-lg">Prize</p>
            <MdOutlineArrowDropDown
              className="group-hover:rotate-90"
              size={30}
            />
          </li>
        </ul>
      </nav>
    </>
  );
};
