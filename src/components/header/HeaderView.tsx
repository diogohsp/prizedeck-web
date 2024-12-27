import { Gift, House } from "lucide-react";
import { HeaderViewProps } from "./InterfaceHeaderViewProps";

export const HeaderView = (props: HeaderViewProps) => {
  const { navigate } = props;

  //TODO: VAR COLORS (primary, secondary, terthiary)

  return (
    <>
      <div className="border-b">
        <div className="flex items-center h-16 gap-6 px-6">
          <nav>
            <ul>
              <li
                className="flex items-end gap-2 cursor-pointer"
                onClick={() => navigate("/teste")}
              >
                <House />
                <p className="text-white self-end">Início</p>
              </li>
              <li>
                <Gift />
                <p className="text-white self-end">P</p>
              </li>
            </ul>
          </nav>

          <p className="text-black cursor-pointer">TESTE</p>
        </div>
      </div>
    </>
  );
};
