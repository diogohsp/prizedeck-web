
import { HeaderViewProps } from "./InterfaceHeaderViewProps";

export const HeaderView = (props: HeaderViewProps) => {
  const { navigate } = props;

  //TODO: VAR COLORS (primary, secondary, terthiary)

  return (
    <>
      <div className="border-b px-3">
        <div className="flex items-center h-16 gap-6">
          {window.location.pathname === "/" && "Home"}
          {window.location.pathname === "/prize" && "Prizes"}
        </div>
      </div>
    </>
  );
};
