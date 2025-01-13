import { useNavigate } from "react-router-dom";
import { SideBarMenuViewProps } from "./InterfaceSideBarMenuViewProps";

export const useSideBarMenuModel = (): SideBarMenuViewProps => {
  const navigate = useNavigate();

  return {
    navigate,
  };
};
