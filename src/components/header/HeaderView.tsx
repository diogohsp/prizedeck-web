import { HeaderViewProps } from "./InterfaceHeaderViewProps";

export const HeaderView = (props: HeaderViewProps) => {
  const { navigate } = props;

  //TODO: VAR COLORS (primary, secondary, terthiary)

  return (
    <>
      <div className="border-b-4 border-b-quaternary px-3 bg-primary  text-white">
        <div className="flex items-center h-16 gap-6">
          {window.location.pathname === "/" && "Home"}
          {window.location.pathname === "/prizes" && (
            <h1 className="text-2xl">Registered Prizes</h1>
          )}
        </div>
      </div>
    </>
  );
};
