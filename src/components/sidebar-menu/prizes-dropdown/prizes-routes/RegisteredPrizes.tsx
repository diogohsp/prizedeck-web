import { LuPackageCheck } from "react-icons/lu";
import { PrizesDropDownContentProps } from "../PrizesDropDown";

interface RegisterPrizes extends PrizesDropDownContentProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

export const RegisteredPrizes = (props: RegisterPrizes) => {
  const { isCollapsed, navigate, contentRef } = props;

  return (
    <div
      className={`flex justify-between items-center gap-x-2 text-lg pt-2 hover:text-thertiary ${
        isCollapsed ? "" : "pl-2"
      }`}
      ref={contentRef}
      onClick={() => navigate("/prizes/registered-prizes")}
    >
      <LuPackageCheck size={24} />
      {!isCollapsed && <p>Registered Prizes</p>}
    </div>
  );
};
