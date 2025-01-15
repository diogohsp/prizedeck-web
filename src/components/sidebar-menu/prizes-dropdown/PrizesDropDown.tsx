import { LuGift } from "react-icons/lu";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { LuPackageCheck } from "react-icons/lu";
import { useRef, useState } from "react";

interface PrizesDropDownProps {
  isCollapsed: boolean;
  navigate(path: string): void;
}

interface PrizesDropDownHeaderProps extends PrizesDropDownProps {
  isDropDownCollapsed: boolean;
  setDropDownCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

interface PrizesDropDownContentProps extends PrizesDropDownProps {
  isDropDownCollapsed: boolean;
  setDropDownCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PrizesDropDown = (props: PrizesDropDownProps) => {
  const { isCollapsed, navigate } = props;

  const [isDropDownCollapsed, setDropDownCollapsed] = useState(false);

  return (
    <div className="flex flex-col items-start">
      <PrizesDropDownHeader
        isCollapsed={isCollapsed}
        isDropDownCollapsed={isDropDownCollapsed}
        navigate={navigate}
        setDropDownCollapsed={setDropDownCollapsed}
      />
      <PrizesDropDownContent
        isCollapsed={isCollapsed}
        isDropDownCollapsed={isDropDownCollapsed}
        navigate={navigate}
        setDropDownCollapsed={setDropDownCollapsed}
      />
    </div>
  );
};

export const PrizesDropDownHeader = (props: PrizesDropDownHeaderProps) => {
  const { isCollapsed, isDropDownCollapsed, setDropDownCollapsed } = props;

  return (
    <div
      className="flex items-center justify-between gap-x-3 hover:text-thertiary group"
      onClick={() => setDropDownCollapsed(!isDropDownCollapsed)}
    >
      <LuGift className={isCollapsed ? "size-7" : "size-6"} />
      {!isCollapsed && (
        <div className="flex justify-between items-center">
          <p className="text-lg">Prizes</p>
          <MdOutlineArrowDropDown
            className={`transition-all duration-300 ${
              isDropDownCollapsed ? "rotate-0" : "rotate-90"
            }`}
            size={30}
          />
        </div>
      )}
    </div>
  );
};

export const PrizesDropDownContent = (props: PrizesDropDownContentProps) => {
  const { isCollapsed, isDropDownCollapsed, navigate } = props;

  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="overflow-hidden transition-[max-height] duration-500 ease-in-out self-center"
      style={{
        maxHeight: isDropDownCollapsed
          ? `${contentRef.current?.scrollHeight}px`
          : "0px",
      }}
    >
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
    </div>
  );
};
